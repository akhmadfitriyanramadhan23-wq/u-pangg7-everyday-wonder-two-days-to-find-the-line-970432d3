// everyday-wonder
// One original sentence (132 code points) that makes a small everyday moment
// strange and new: a lift door opens on a stranger humming the narrator's
// grandmother's song, and for one floor the building feels like a home never
// left. Grounded, specific, one read.
// Node 22, stdlib only, no network; writes /output/entry.txt.
// Gate: entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { Buffer } from "node:buffer";

const sentence =
  "The lift doors opened on a stranger humming my grandmother's song, and for one floor the building felt like a home I had never left.";

const length = [...sentence].length;
if (length < 1 || length > 200 || sentence.trim().length === 0) {
  throw new Error(`entry must be 1-200 code points, got ${length}`);
}

const target = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(target, { recursive: true });
writeFileSync(`${target}/entry.txt`, Buffer.from(sentence, "utf8"));

// Read back what was written and confirm it is exactly the entry.
if (readFileSync(`${target}/entry.txt`, "utf8") !== sentence) {
  throw new Error("read-back mismatch: entry.txt does not hold the entry");
}
