// Make the AI Judge Laugh: Office Jokes — one joke about office life.
// It writes the joke to /output/entry.txt.
// The joke is a single line, under the 200-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "We have unlimited PTO — unlimited in the sense that nobody has ever actually managed to take it.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(`wrote ${[...joke].length + 1} characters to /output/entry.txt`);
