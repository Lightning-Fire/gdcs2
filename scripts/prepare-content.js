const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const rewriteContributors = require("./contributors.js");

/**
 * @typedef {object} Frontmatter
 * @property {string} title
 * @property {number} weight
 * @property {string} date
 * @property {Array<string>} contributors
 * @property {Array<string>} [authors]
 * @property {boolean} draft
 */

// -------------------------------------------- PARSE FRONTMATTER --------------------------------------------

/**
 * Extracts the frontmatter and body from a Markdown file.
 * @param {string} text Raw Markdown file content.
 * @returns {{frontmatter: Frontmatter, body: string} | null} Parsed page or null if no frontmatter exists.
 */
function extractFrontmatter(text) {
  const match = text.match(/^\s*---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return null;
  const frontmatter = yaml.load(match[1]);
  const body = text.slice(match[0].length);

  return {frontmatter, body};
}

/**
 * Serializes a frontmatter object into YAML format.
 * @param {Frontmatter} frontmatter Frontmatter object.
 * @returns {string} YAML frontmatter including delimiters.
 */
function serializeFrontmatter(frontmatter) {
  return (
    "---\n" +
    yaml.dump(frontmatter, {
      lineWidth: -1,
      quotingType: '"',
      forceQuotes: true,
    }) +
    "---"
  );
}

// -------------------------------------------- TRANSFORMATION PIPELINES --------------------------------------------

/**
 * List of transformations applied to frontmatter objects.
 * Each function receives a frontmatter object and must return a modified frontmatter.
 * @type {Array<(frontmatter: Frontmatter) => Frontmatter>}
 */
const frontmatterTransforms = [
  rewriteContributors,
];

/**
 * List of transformations applied to Markdown bodies.
 * Each function receives the body and optionally the frontmatter.
 * @type {Array<(body: string, frontmatter: Frontmatter) => string>}
 */
const bodyTransforms = [
  (body) => body // placeholder transform until future transforms are added
];

/**
 * Applies all frontmatter transformations sequentially.
 * @param {Frontmatter} frontmatter Frontmatter object.
 * @returns {string} Serialized YAML frontmatter including delimiters.
 */
function applyFrontmatterTransforms(frontmatter) {
  let current = frontmatter;

  for (const transform of frontmatterTransforms) {
    current = transform(current);
  };

  return serializeFrontmatter(current);
}

/**
 * Applies all body transformations sequentially.
 * @param {string} body Markdown body content.
 * @param {Frontmatter} frontmatter Parsed frontmatter associated with the body.
 * @returns {string} Transformed Markdown body.
 */
function applyBodyTransforms(body, frontmatter) {
  let current = body;

  for (const transform of bodyTransforms) {
    current = transform(current, frontmatter);
  };

  return current;
}

// -------------------------------------------- PROCESS SPECIFIED CONTENT FOLDER --------------------------------------------

/**
 * Recursively processes a directory containing Markdown files.
 * For each file:
 * - extracts frontmatter
 * - applies transformation pipelines
 * - writes the modified content back to disk
 * @param {string} dir Directory to process.
 */
function processDir(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    const filePath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      processDir(filePath);
      continue;
    }

    if (!filePath.endsWith(".md")) continue;

    const text = fs.readFileSync(filePath, "utf8");
    const page = extractFrontmatter(text);

    if (!page) continue;

    const newFrontmatter = applyFrontmatterTransforms(page.frontmatter);
    const newBody = applyBodyTransforms(page.body);

    fs.writeFileSync(filePath, newFrontmatter + newBody);
  };
}

/* ---------- prebuild pipeline ---------- */

/**
 * Runs the content prebuild pipeline. It will execute scripts on the frontmatter and body
 * of all markdown files specified in `src`.
 *
 * If a destination directory is provided, the source directory is copied there before processing,
 * and scripts will run there instead of directly in `src`.
 * @param {string} src Source content directory.
 * @param {string} [dst] Destination directory where content will be copied.
 * @param {object} [options]
 * @param {boolean} [options.clean=false] Whether to remove dst before copying.
 */
function processContent(src, dst, options = {}) {
  if (dst === src) {
    throw new Error("Source and destination directories must be different.");
  };

  const {clean = false} = options;

  let targetDir = src;

  if (dst) {
    if (clean && dst !== src) {
      fs.rmSync(dst, {recursive: true, force: true});
    };

    if (!fs.existsSync(dst)) {
      fs.cpSync(src, dst, {recursive: true});
    };

    targetDir = dst;
  };

  processDir(targetDir);

  console.log(`\n${targetDir} folder processed successfully.`);
}

const CONTENT_SRC = "content";
const CONTENT_DST = "content-test";
const TEST_OPTIONS = {
  clean: false,
};

// MARK THIS AS TRUE WHILE TESTING NEW SCRIPTS
// ONLY MARK AS FALSE WHEN YOU ARE 100% SURE THE SCRIPT IS WORKING AS INTENDED
const USE_TEST = false;

if (USE_TEST) {
  processContent(CONTENT_SRC, CONTENT_DST, TEST_OPTIONS);
} else {
  processContent(CONTENT_SRC);
};
