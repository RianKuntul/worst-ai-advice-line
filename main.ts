// Worst AI Advice: The 48-Hour Tight Line Open
// Writes one line of the worst possible advice an AI could give
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// The gate requires UTF-8 text of 1-140 characters, not only whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 140;

// Deliberately terrible, confidently delivered AI advice: microwaving a
// phone is a real way to destroy it, which is exactly what makes the
// line funny — and exactly the kind of thing a careless assistant
// might say with total confidence. Tightened from v1: "in seconds" and
// "on high" make the bad advice more concrete and more tempting to
// follow, and the line still lands in one breath.
const LINE =
  "To charge your phone in seconds, microwave it for 30 seconds on high \u2014 microwaves use the same waves as fast charging.";

// Character count in code points, so multi-byte characters (like the
// em dash) count the way the gate counts them.
function charCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const chars = charCount(LINE);
  if (chars === 0 || LINE.trim().length === 0) {
    throw new Error("entry line must not be empty or only whitespace");
  }
  if (chars > MAX_CHARS) {
    throw new Error(
      `entry line is ${chars} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry line must be a single line with no newline");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, LINE, "utf8");

  // Read back what was written and confirm it matches the line exactly.
  const written = readFileSync(outPath, "utf8");
  if (written !== LINE) {
    throw new Error("written entry.txt does not match the entry line");
  }
  console.log(
    `Wrote ${chars}-character entry (${Buffer.byteLength(LINE, "utf8")} bytes) to ${outPath}`,
  );
}

main();
