// Make the AI Judge Laugh — one line about office life.
// The turn: the performance review rewards the wrong thing — doing the
// manager's actual job earns "meets expectations", while learning his
// coffee order earns "exceeds". The punch lands on the last words.
// Revision note: first draft had the same structure but ended on "his
// schedule"; "coffee order" is tighter and more specific — the smallest
// possible office skill beating the biggest possible contribution.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My manager rated me 'meets expectations' for the year I did his job, and 'exceeds' for the year I learned his coffee order.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
