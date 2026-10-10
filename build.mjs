import { createHash } from "node:crypto";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const output = path.join(root, "dist");
const inventory = JSON.parse(readFileSync(path.join(root, "captures", "inventory.json"), "utf8"));

const legacyCaptions = {
  "history-preview": {
    title: "Retained version",
    alt: "History view showing a retained synthetic file version and its restore action.",
    description: "A synthetic file version is available with a restore action.",
  },
  "recycle-preview": {
    title: "Recoverable file",
    alt: "Recycle Bin with a recoverable synthetic file and its available actions.",
    description: "A synthetic deleted file remains available for recovery.",
  },
  "descendant-preview": {
    title: "Explicit descendants",
    alt: "Restore dialog with independently deleted descendants left unchecked.",
    description: "Independently deleted descendants begin unchecked in the restore dialog.",
  },
  "dark-settings-preview": {
    title: "Appearance settings",
    alt: "Settings screen showing the selected dark appearance and language controls.",
    description: "The historical settings screen shows dark appearance selected.",
  },
};

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
})[char]);

const cards = inventory.captures.map((capture) => {
  const legacy = legacyCaptions[capture.id] ?? {};
  const title = capture.title ?? legacy.title ?? capture.state;
  const alt = capture.alt ?? legacy.alt ?? `${capture.screen} capture, ${capture.theme} theme.`;
  const description = capture.description ?? legacy.description ?? `${capture.screen} state: ${capture.state}.`;
  const language = capture.language ? ` · ${capture.language}` : "";
  const scale = `${Math.round(capture.scale * 100)}%`;
  const sourceRepository = capture.sourceRepository ?? inventory.sourceRepository;
  const sourceCommit = capture.sourceCommit ?? inventory.sourceCommit;
  const sourceUrl = `${sourceRepository}/commit/${sourceCommit}`;
  const time = capture.capturedAt ? `Captured ${capture.capturedAt} (${capture.timeZone ?? "timezone unavailable"})` : "Capture date unavailable";
  const search = [capture.screen, capture.state, capture.theme, capture.language, scale, title, description].filter(Boolean).join(" ").toLocaleLowerCase();
  return `        <article class="capture-card" data-search="${escapeHtml(search)}">
          <a class="image-link" href="captures/${escapeHtml(capture.file)}"><img src="captures/${escapeHtml(capture.file)}" alt="${escapeHtml(alt)}" width="${capture.image.width}" height="${capture.image.height}" loading="lazy"></a>
          <div class="card-copy"><p class="card-kicker">${escapeHtml(capture.screen)}${escapeHtml(language)} · ${escapeHtml(capture.theme)} · ${scale}</p><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p><p>${escapeHtml(time)}</p><p>Source <a href="${escapeHtml(sourceUrl)}">${escapeHtml(sourceCommit.slice(0, 8))}</a> · SHA-256 <code>${escapeHtml(capture.sha256)}</code></p><a href="captures/${escapeHtml(capture.file)}">Open original image</a></div>
        </article>`;
}).join("\n");

rmSync(output, { recursive: true, force: true });
mkdirSync(path.join(output, "captures"), { recursive: true });
cpSync(path.join(root, "site"), output, { recursive: true });
const indexPath = path.join(output, "index.html");
const indexHtml = readFileSync(indexPath, "utf8")
  .replace("{{CAPTURE_COUNT}}", String(inventory.captures.length))
  .replace("{{CAPTURE_CARDS}}", cards);
if (indexHtml.includes("{{CAPTURE_")) throw new Error("The capture card template was not fully rendered.");
writeFileSync(indexPath, indexHtml, "utf8");
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
