// Builds api/_lib/verses.json from the English verse translations that already
// live in src/chapters/ChapterN.jsx ("Verse N: ..." strings).
// Run: node scripts/extract-verses.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = {};
let total = 0;
for (let ch = 1; ch <= 18; ch++) {
  const src = fs.readFileSync(path.join(root, "src/chapters", `Chapter${ch}.jsx`), "utf8");
  const re = /"Verse\s+(\d+)(?:\s*[-–]\s*(\d+))?\s*:\s*([\s\S]*?)"\s*,/g;
  let m;
  while ((m = re.exec(src))) {
    const start = Number(m[1]);
    const end = m[2] ? Number(m[2]) : start;
    const text = m[3].replace(/\s+/g, " ").replace(/\\"/g, '"').trim();
    for (let v = start; v <= end; v++) {
      out[`${ch}.${v}`] = { text, range: end > start ? `${ch}.${start}-${end}` : undefined };
    }
    total++;
  }
}
fs.writeFileSync(path.join(root, "api/_lib/verses.json"), JSON.stringify(out));
const perCh = {};
Object.keys(out).forEach((k) => { const c = k.split(".")[0]; perCh[c] = (perCh[c] || 0) + 1; });
console.log("entries:", total, "keys:", Object.keys(out).length);
console.log(JSON.stringify(perCh));
console.log(out["2.47"]);
