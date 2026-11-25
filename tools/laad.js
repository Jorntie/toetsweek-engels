// Laadt de app-scripts in een vm (zoals check.js) en geeft TW terug. Gebruik: const TW = require("./laad")();
const fs = require("fs"), path = require("path"), vm = require("vm");
module.exports = function () {
  const dir = path.join(__dirname, "..");
  const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
  const ctx = { console, Math, Date, JSON, setTimeout, clearTimeout, setInterval, clearInterval,
    document: { getElementById: () => null, documentElement: { style: { setProperty() {} } }, addEventListener() {}, querySelector: () => null, querySelectorAll: () => [] },
    localStorage: { getItem: () => null, setItem() {} }, location: { hash: "" }, addEventListener() {}, requestAnimationFrame() {} };
  ctx.window = ctx; vm.createContext(ctx);
  for (const m of html.matchAll(/<script src="([^"]+)"/g)) vm.runInContext(fs.readFileSync(path.join(dir, m[1]), "utf8"), ctx, { filename: m[1] });
  return ctx.TW;
};
