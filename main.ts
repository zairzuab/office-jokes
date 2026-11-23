// Make the AI Judge Laugh: Office Jokes — one joke about office life.
// It writes the joke to /output/entry.txt.
// The joke is a single line, under the 200-character limit.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "We have unlimited PTO — unlimited in the sense that nobody has ever actually managed to take it.";

// Guard: the gate requires a single line, under 200 characters.
if (joke.includes("\n")) {
  throw new Error("joke must be a single line");
}
if ([...joke].length >= 200 || [...joke].length < 1) {
  throw new Error("joke must be 1-199 characters");
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
console.log(`wrote ${[...joke].length + 1} characters to /output/entry.txt`);
