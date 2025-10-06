// scripts/build-manifest.ts
// Scans /styles/**/*.md → builds manifest.json with collections + style metadata.
// Run: pnpm run build:manifest

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { glob } from "glob";

type Manifest = {
  collections: { id: string; styles: string[] }[];
  styles: Record<
    string,
    {
      id: string;
      group: string;
      display_name: string;
      file: string;
      artist?: string;
      movement?: string;
      style_scope?: string;
      ratios: string[];
      modes: string[];
      safety_profile: string[];
      multi_subject?: {
        allowed: boolean;
        max_subjects?: number;
        layout_hint?: string;
        identity_priority?: string[];
      };
      sections_index: Record<string, string>;
      about?: string;
    }
  >;
};

const REQUIRED_H2 = [
  "## 1) Core Instruction & Likeness Mandate",
  "## 2) Canvas Strategy & Aspect Ratio Control",
  "## 3) Style Context & Material Authenticity",
  "## 4) Technical Method & Mark-Making",
  "## 5) Wardrobe, Props & Setting Conventions",
  "## 6) Safety & IP Constraints (Hard Rules)",
  "## 7) Composition & Lighting Patterns",
  "## 8) Typography & Text Integration (If Historically Present)",
];

function extractH2Titles(md: string): Record<string, string> {
  // builds a small map like {"1": "Core Instruction & Likeness Mandate", ...}
  const lines = md.split(/\r?\n/);
  const index: Record<string, string> = {};
  for (const h of REQUIRED_H2) {
    const m = h.match(/^##\s+(\d+)\)\s+(.*)$/);
    if (!m) continue;
    const key = m[1]; // "1"
    const title = m[2]; // "Core Instruction..."
    // Confirm this header exists in the document:
    const exists = lines.some((ln) => ln.trim() === h.trim());
    if (exists) index[key] = title;
  }
  return index;
}

async function main() {
  const root = process.cwd();
  const stylesDir = path.join(root, "styles");
  const outPath = path.join(root, "manifest.json");
  const publicDir = path.join(root, "public");
  const publicOutPath = path.join(publicDir, "manifest.json");
  const publicStylesDir = path.join(publicDir, "styles");

  if (!fs.existsSync(stylesDir)) {
    throw new Error(`styles/ not found at ${stylesDir}`);
  }

  const files = await glob("styles/**/*.md", { cwd: root, absolute: true, nodir: true });
  fs.rmSync(publicStylesDir, { recursive: true, force: true });
  const manifest: Manifest = { collections: [], styles: {} };
  const collections = new Map<string, string[]>(); // group -> [ids]
  let indexed = 0;
  let skipped = 0;

  for (const abs of files) {
    const rel = path.relative(root, abs);
    const base = path.basename(abs);
    if (base.startsWith("_")) {
      console.log("INFO: " + rel + " (skipped template)");
      skipped++;
      continue;
    }

    if (rel.includes(`${path.sep}archive${path.sep}`) || rel.startsWith(`archive${path.sep}`)) {
      console.log("INFO: " + rel + " (skipped archive)");
      skipped++;
      continue;
    }

    const raw = fs.readFileSync(abs, "utf8");
    const { data, content } = matter(raw);

    // Minimal guards (full validation happens in validate-style.ts)
    const id: string = data.id;
    const group: string = data.group;
    const display_name: string = data.display_name;
    const ratios: string[] = data.ratios ?? [];
    const modes: string[] = data.modes ?? [];
    const safety_profile: string[] = data.safety_profile ?? [];
    const multi_subject = data.multi_subject;
    const about: string | undefined = data.about;

    if (!id || !group || !display_name) {
      console.warn(`⚠️  Skipping ${base}: missing id/group/display_name`);
      skipped++;
      continue;
    }

    const sections_index = extractH2Titles(content);

    const entry: Manifest["styles"][string] = {
      id,
      group,
      display_name,
      file: rel.replace(/\\/g, "/"),
      ratios,
      modes,
      safety_profile,
      multi_subject,
      sections_index,
      about,
    };

    if (typeof data.artist === "string" && data.artist.trim()) {
      entry.artist = data.artist;
    }
    if (typeof data.movement === "string" && data.movement.trim()) {
      entry.movement = data.movement;
    }
    if (typeof data.style_scope === "string" && data.style_scope.trim()) {
      entry.style_scope = data.style_scope;
    }

    manifest.styles[id] = entry;

    if (!collections.has(group)) collections.set(group, []);
    collections.get(group)!.push(id);
    indexed++;

    const publicRel = path.relative(stylesDir, abs);
    const publicDest = path.join(publicStylesDir, publicRel);
    fs.mkdirSync(path.dirname(publicDest), { recursive: true });
    fs.copyFileSync(abs, publicDest);
  }

  // Sort collections & styles for stable output
  manifest.collections = [...collections.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([id, styles]) => ({ id, styles: styles.sort() }));

  // Pretty-print
  fs.writeFileSync(outPath, JSON.stringify(manifest, null, 2), "utf8");
  fs.mkdirSync(publicDir, { recursive: true });
  fs.writeFileSync(publicOutPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`✅ Copied styles markdown into ${path.relative(root, publicStylesDir)}/`);
  console.log(`✅ Wrote ${path.relative(root, outPath)}`);
  console.log(`✅ Wrote ${path.relative(root, publicOutPath)}`);
  console.log("Indexed: " + indexed + "  Skipped: " + skipped + "  Collections: " + manifest.collections.length);
}

main().catch((err) => {
  console.error("💥 build-manifest failed:", err);
  process.exit(1);
});
