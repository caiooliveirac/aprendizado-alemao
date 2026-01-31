const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist");

function removeDir(target) {
  if (!fs.existsSync(target)) {
    return;
  }

  fs.rmSync(target, { recursive: true, force: true });
}

function copyRecursive(source, destination) {
  if (!fs.existsSync(source)) {
    return;
  }

  const stats = fs.statSync(source);

  if (stats.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const item of fs.readdirSync(source)) {
      copyRecursive(path.join(source, item), path.join(destination, item));
    }
    return;
  }

  fs.copyFileSync(source, destination);
}

function build() {
  removeDir(DIST);
  fs.mkdirSync(DIST, { recursive: true });

  copyRecursive(path.join(ROOT, "index.html"), path.join(DIST, "index.html"));
  copyRecursive(path.join(ROOT, "public"), path.join(DIST, "public"));
  copyRecursive(path.join(ROOT, "src"), path.join(DIST, "src"));
}

build();
