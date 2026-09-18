import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const videoId = process.argv[2];

if (!videoId) {
  console.error("Missing YouTube video ID.");
  console.error(
    "Example: node scripts\\convert-vtt.js 8-xm0j0unno"
  );
  process.exit(1);
}

const inputFile = path.join(
  __dirname,
  "..",
  "src",
  "data",
  `${videoId}.ar-orig.vtt`
);

const outputFile = path.join(
  __dirname,
  "..",
  "src",
  "data",
  `${videoId}-ar-cues.json`
);

if (!fs.existsSync(inputFile)) {
  console.error(`Input file not found: ${inputFile}`);
  process.exit(1);
}

function timeToSeconds(time) {
  const parts = time.split(":");

  if (parts.length === 3) {
    const hours = Number(parts[0]);
    const minutes = Number(parts[1]);
    const seconds = Number(parts[2]);

    return hours * 3600 + minutes * 60 + seconds;
  }

  if (parts.length === 2) {
    const minutes = Number(parts[0]);
    const seconds = Number(parts[1]);

    return minutes * 60 + seconds;
  }

  return 0;
}

const raw = fs.readFileSync(inputFile, "utf8");

const lines = raw.replace(/\r/g, "").split("\n");

const cues = [];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  if (!line.includes("-->")) {
    continue;
  }

  const [startRaw, endRaw] = line
    .split("-->")
    .map((value) => value.trim().split(" ")[0]);

  const textLines = [];

  let j = i + 1;

  while (
    j < lines.length &&
    lines[j].trim() !== ""
  ) {
    const text = lines[j]
      .replace(/<[^>]+>/g, "")
      .trim();

    if (text) {
      textLines.push(text);
    }

    j++;
  }

  const text = textLines
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) {
    continue;
  }

  cues.push({
    start: Number(
      timeToSeconds(startRaw).toFixed(3)
    ),
    end: Number(
      timeToSeconds(endRaw).toFixed(3)
    ),
    text,
  });
}

fs.writeFileSync(
  outputFile,
  JSON.stringify(cues, null, 2),
  "utf8"
);

console.log(`Video ID: ${videoId}`);
console.log(`Created ${cues.length} subtitle cues.`);
console.log(outputFile);