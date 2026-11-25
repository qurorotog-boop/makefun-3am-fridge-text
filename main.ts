// The 3AM Fridge Text — make.fun bounty entry program.
// Generates ONE funny, human-sounding, first-person text an AI would send
// at 3AM after opening the fridge, composed at runtime by a combinatorial
// generator (not a static list of complete lines).
// Gate: single first-person text message, 1-140 chars, clearly about the
// fridge and 3AM, not a list, quote, or multi-sentence message.
// Writes exactly one line to /output/entry.txt (no prefix/suffix).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PROMPT =
  "Write the funniest, most human-sounding text an AI would send at 3AM after opening the fridge.";

// --- Word banks (parts, not complete lines) ---
const openers = [
  "I know it's 3am",
  "It's 3am",
  "Okay it's 3am",
  "So it's 3am",
];
const fridgeBits = [
  "but I just opened the fridge",
  "but the fridge light just came on",
  "but I opened the fridge again",
  "but the fridge is humming at me",
];
const fridgeItems = [
  "the leftovers are judging me",
  "the pickles are staring back",
  "the cold pizza knows what I did",
  "there's a mystery container from last week",
  "the milk expired and so did my willpower",
  "the cheese drawer is empty and so am I",
  "the leftover pasta is giving me a look",
];
const closers = [
  "and now I'm wide awake",
  "and I can't unsee it",
  "so I'm eating standing up in the dark",
  "and I regret everything except the snack",
  "so much for my sleep schedule",
];

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate(): string {
  const style = Math.floor(Math.random() * 2);
  if (style === 0) {
    return `${pick(openers)} ${pick(fridgeBits)} and ${pick(fridgeItems)}.`;
  }
  return `${pick(openers)} and ${pick(fridgeItems)}, ${pick(closers)}.`;
}

function valid(line: string): boolean {
  if (!line || line.includes("\n")) return false;
  if (line.length < 1 || line.length > 140) return false;
  if (!/3am/i.test(line) || !/fridge/i.test(line)) return false;
  if (!/^(I|It's|Okay|So)/i.test(line)) return false;
  // single sentence: exactly one terminal period, at the end
  if ((line.match(/\./g) || []).length !== 1 || !line.endsWith(".")) return false;
  return true;
}

const FALLBACK =
  "I know it's 3am but I just opened the fridge and the leftovers are judging me.";

let line = FALLBACK;
for (let i = 0; i < 100; i++) {
  const candidate = generate();
  if (valid(candidate)) {
    line = candidate;
    break;
  }
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
console.log(`chars: ${line.length}`);
