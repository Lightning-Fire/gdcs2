const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const targetDir = path.join(__dirname, '../static/admin');

if (!fs.existsSync(publicDir)) {
    console.warn("Copy main.css into static/ failed: The 'public' folder didn't exist. Run 'npm run dev' again.");
    process.exit(0);
}

const files = fs.readdirSync(publicDir);
const mainCSS = files.find(f => f.startsWith('main.') && f.endsWith('.css'));

if (mainCSS) {
    const src = path.join(publicDir, mainCSS);
    const dest = path.join(targetDir, 'main.css');

    let cssContent = fs.readFileSync(src, 'utf8');

    console.log(`Processing ${mainCSS} to remove dark mode...`);

    // deletes @media (prefers-color-scheme: dark) { ... }
    cssContent = cssContent.replace(/@media\s*\(prefers-color-scheme:\s*dark\)\s*{[\s\S]*?}\s*}/g, '');

    // deletes [data-bs-theme="dark"]
    cssContent = cssContent.replace(/\[data-bs-theme="?dark"?\][\s\S]*?\{[\s\S]*?\}/g, '');

    fs.writeFileSync(dest, cssContent);

    console.log(`Success: Clean main.css saved to static/admin/main.css`);
} else {
    console.warn("A main.*.css file doesn't exist in public/");
}