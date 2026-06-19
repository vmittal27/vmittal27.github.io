import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const siteDataPath = path.join(repoRoot, "src", "siteData.js");
const today = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/Chicago",
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

const source = readFileSync(siteDataPath, "utf8");
const nextSource = source.replace(
  /lastUpdated:\s*"[^"]*"/,
  `lastUpdated: "${today}"`
);

if (source === nextSource) {
  process.exit(0);
}

writeFileSync(siteDataPath, nextSource);
