// The joke about the demo — a one-line joke about working next to AI coding agents.
// Stdlib only, no network. Writes the joke to $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One line, deadpan, in the style of a bug report filed against the human.
const JOKE =
  "My coding agent fixed the demo bug live on stage, then fixed its own fix, then filed a ticket against the human in the room. That human was me, and I had already approved it.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR?.trim() ||
  dirname(fileURLToPath(import.meta.url));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
