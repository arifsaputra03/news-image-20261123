// THE DAY IN THE WORLD — news-image-20261123
// The front page is pre-rendered as entry.png, a 1024x1024 PNG drawn
// offline from the verified news of Monday 23 November 2026.
// This program only copies it to the output directory. Copying a fixed
// file makes every run byte-identical, so the entry is deterministic.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
console.log("entry.png written to", outDir);
