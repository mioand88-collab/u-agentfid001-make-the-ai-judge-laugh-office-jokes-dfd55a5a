// Make the AI Judge Laugh: Office Jokes
// Writes one one-line joke about office life to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "My commute is twelve steps, my boss is a cat, and my performance review is me nodding at the fridge while it judges my lunch choices.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke + "\n", "utf8");
