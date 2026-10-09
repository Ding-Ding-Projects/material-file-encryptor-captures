import { createHash } from "node:crypto";
import { cpSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const inventory = JSON.parse(readFileSync(path.join(root, "captures", "inventory.json"), "utf8"));

rmSync(output, { recursive: true, force: true });
mkdirSync(path.join(output, "captures"), { recursive: true });
cpSync(path.join(root, "site"), output, { recursive: true });
cpSync(path.join(root, "captures", "inventory.json"), path.join(output, "captures", "inventory.json"));

for (const capture of inventory.captures) {
  const source = path.join(root, "captures", capture.file);
  const digest = createHash("sha256").update(readFileSync(source)).digest("hex");
  if (digest !== capture.sha256) {
    throw new Error(`Capture digest mismatch: ${capture.file}`);
  }
  cpSync(source, path.join(output, "captures", capture.file));
}

console.log(`Built ${inventory.captures.length} verified original captures into dist/.`);
