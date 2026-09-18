import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoId = process.argv[2];

if (!videoId) {
  console.error("Missing YouTube video ID.");
  console.error(
    "Example: node scripts\\clean-ar-cues.js 8-xm0j0unno"
  );
  process.exit(1);
}

const inputFile = path.join(
  __dirname,
  "..",
  "src",
  "data",
  `${videoId}-ar-cues.json`
);

const outputFile = path.join(
  __dirname,
  "..",
  "src",
  "data",
  `${videoId}-ar-clean.json`
);

if (!fs.existsSync(inputFile)) {
  console.error(`Input file not found: ${inputFile}`);
  process.exit(1);
}

function cleanText(text) {
  return text
    .replace(/\[موسيقى\]/g, "")
    .replace(/\[Music\]/gi, "")
    .replace(/\[أصوات.*?\]/g, "")
    .replace(/&gt;/g, "")
    .replace(/&lt;/g, "")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function longestWordOverlap(
  previousWords,
  currentWords
) {
  const max = Math.min(
    previousWords.length,
    currentWords.length
  );

  for (let size = max; size >= 1; size--) {
    const previousTail = previousWords
      .slice(-size)
      .join(" ");

    const currentStart = currentWords
      .slice(0, size)
      .join(" ");

    if (previousTail === currentStart) {
      return size;
    }
  }

  return 0;
}

const rawCues = JSON.parse(
  fs.readFileSync(inputFile, "utf8")
);

const fragments = [];

let previousWords = [];

for (const cue of rawCues) {
  const duration = cue.end - cue.start;

  if (duration < 0.1) {
    continue;
  }

  const cleaned = cleanText(cue.text);

  if (!cleaned) {
    continue;
  }

  const currentWords = cleaned.split(" ");

  const overlap = longestWordOverlap(
    previousWords,
    currentWords
  );

  const newWords = currentWords.slice(overlap);

  if (newWords.length > 0) {
    fragments.push({
      start: cue.start,
      end: cue.end,
      text: newWords.join(" "),
    });
  }

  previousWords = currentWords;
}

const chunks = [];

let currentChunk = null;

for (const fragment of fragments) {
  if (!currentChunk) {
    currentChunk = {
      start: fragment.start,
      end: fragment.end,
      text: fragment.text,
    };

    continue;
  }

  const currentDuration =
    currentChunk.end - currentChunk.start;

  const currentWordCount =
    currentChunk.text.split(" ").length;

  if (
    currentDuration < 6 &&
    currentWordCount < 18
  ) {
    currentChunk.end = fragment.end;
    currentChunk.text += ` ${fragment.text}`;
  } else {
    currentChunk.text = cleanText(
      currentChunk.text
    );

    chunks.push(currentChunk);

    currentChunk = {
      start: fragment.start,
      end: fragment.end,
      text: fragment.text,
    };
  }
}

if (currentChunk) {
  currentChunk.text = cleanText(
    currentChunk.text
  );

  chunks.push(currentChunk);
}

const finalChunks = [];

for (const chunk of chunks) {
  if (!chunk.text) {
    continue;
  }

  const previous =
    finalChunks[finalChunks.length - 1];

  if (
    previous &&
    previous.text === chunk.text
  ) {
    previous.end = chunk.end;
    continue;
  }

  finalChunks.push({
    start: Number(chunk.start.toFixed(3)),
    end: Number(chunk.end.toFixed(3)),
    text: chunk.text,
  });
}

fs.writeFileSync(
  outputFile,
  JSON.stringify(finalChunks, null, 2),
  "utf8"
);

console.log(`Video ID: ${videoId}`);
console.log(`Original cues: ${rawCues.length}`);
console.log(
  `Cleaned translation chunks: ${finalChunks.length}`
);
console.log(`Created: ${outputFile}`);