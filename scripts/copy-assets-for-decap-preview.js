const fs = require('fs');

const ASSETS_DIRECTORY = "assets/images";
const DECAP_PREVIEW_DIRECTORY = "static/images";

if (fs.existsSync(DECAP_PREVIEW_DIRECTORY)) {
  fs.rmSync(DECAP_PREVIEW_DIRECTORY, {
    recursive: true,
    force: true,
  });
}

fs.cpSync(
  ASSETS_DIRECTORY,
  DECAP_PREVIEW_DIRECTORY,
  { recursive: true }
);