// scripts/validate-style.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { glob } from "glob";
import {
  FrontmatterSchema,
  REQUIRED_SECTIONS,
  AllowedSafety,
  ratioPattern,
} from "./schema";

type Problem = { file: string; message: string };

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function hasAllSectionsInOrder(mdBody: string): { ok: boolean; problems: string[] } {
  const problems: string[] = [];
  let lastIndex = -1;

  for (const heading of REQUIRED_SECTIONS) {
    const idx = mdBody.indexOf(heading);
    if (idx === -1) {
      problems.push(`Missing required heading: "${heading}"`);
      continue;
    }
    if (idx < lastIndex) {
      problems.push(`Heading out of order: "${heading}"`);
    }
    lastIndex = idx;
  }

  return { ok: problems.length === 0, problems };
}

function checkEmptySections(mdBody: string): string[] {
  // naive check: each section should have at least one non-empty line after it
  const issues: string[] = [];
  const headings = [...REQUIRED_SECTIONS];
  const indices = headings.map(h => ({ h, i: mdBody.indexOf(h) }))
    .filter(x => x.i !== -1)
    .sort((a, b) => a.i - b.i);

  for (let k = 0; k < indices.length; k++) {
    const start = indices[k].i + indices[k].h.length;
    const end = k + 1 < indices.length ? indices[k + 1].i : mdBody.length;
    const sectionText = mdBody.slice(start, end).trim();
    if (!sectionText || sectionText.length < 10) {
      issues.push(`Section appears empty or too short after "${indices[k].h}"`);
    }
  }
  return issues;
}

async function main() {
  const root = process.cwd();
  const stylesDir = path.join(root, "styles");
  if (!fs.existsSync(stylesDir)) {
    console.error(`❌ styles/ directory not found at ${stylesDir}`);
    process.exit(2);
  }

  const files = await glob("styles/**/*.md", { cwd: root, absolute: true, nodir: true });
  const problems: Problem[] = [];
  const warnings: Problem[] = [];

  if (files.length === 0) {
    console.warn("⚠️  No style markdowns found in styles/**/*.md");
    process.exit(0);
  }

  for (const file of files) {
    const rel = path.relative(root, file);
    if (rel.includes(`${path.sep}archive${path.sep}`) || rel.startsWith(`archive${path.sep}`)) {
      console.log("INFO: " + rel + " (skipped archive)");
      continue;
    }

    const base = path.basename(file);
    if (base.startsWith("_")) { // ignore template
      console.log("INFO: " + rel + " (skipped template)");
      continue;
    }
    const raw = fs.readFileSync(file, "utf8");
    const { data, content } = matter(raw);

    // Frontmatter validation
    const parsed = FrontmatterSchema.safeParse(data);
    if (!parsed.success) {
      const formatted = parsed.error.format();
      const detail = formatted
        ? JSON.stringify(formatted, null, 2)
        : String(parsed.error);
      problems.push({
        file,
        message: `Frontmatter invalid:\n${detail}`,
      });
    } else {
      // extra guardrails (tiny lints)
      const fm = parsed.data;
      // unique id-ish check (best-effort; true uniqueness enforced in manifest step)
      if (!/^[a-z0-9_\-]+$/.test(fm.id)) {
        problems.push({ file, message: `Frontmatter.id must be slug-like (got "${fm.id}")` });
      }
      for (const r of fm.ratios) {
        if (!ratioPattern.test(r)) {
          problems.push({ file, message: `Invalid ratio "${r}". Use digits:digits (e.g., 3:4)` });
        }
      }
      for (const s of fm.safety_profile) {
        if (!AllowedSafety.includes(s as any)) {
          problems.push({ file, message: `Unknown safety rule "${s}"` });
        }
      }

      const expectedDir = path.join("styles", slugify(fm.group));
      const actualDir = path.dirname(rel).replace(/\\/g, "/");
      if (!actualDir.startsWith(expectedDir)) {
        problems.push({
          file,
          message: `Group "${fm.group}" should live under ${expectedDir}/ — found in ${actualDir}/`,
        });
      }

      if (typeof fm.artist === "string") {
        const artist = fm.artist.trim();
        if (artist && (artist.includes(",") || /\s(?:and|&|\+|x)\s/i.test(artist))) {
          warnings.push({
            file,
            message: `Frontmatter.artist looks multi-artist ("${artist}"). Split styles per artist to avoid mixing voices.`,
          });
        }
      }
    }

    // Sections presence & order
    const order = hasAllSectionsInOrder(content);
    if (!order.ok) {
      problems.push({ file, message: order.problems.join("\n") });
    }

    // Sections not empty (basic heuristic)
    for (const issue of checkEmptySections(content)) {
      problems.push({ file, message: issue });
    }
  }

  if (problems.length) {
    console.error(`\n❌ Validation failed for ${problems.length} issue(s):\n`);
    for (const p of problems) {
      console.error(`• ${path.relative(root, p.file)}\n  ${p.message}\n`);
    }
    process.exit(1);
  }

  if (warnings.length) {
    console.warn(`\n⚠️  Validation warnings (${warnings.length}):\n`);
    for (const w of warnings) {
      console.warn(`• ${path.relative(root, w.file)}\n  ${w.message}\n`);
    }
  }

  console.log("✅ All style markdowns passed validation.");
}

main().catch((e) => {
  console.error("💥 Validator crashed:", e);
  process.exit(3);
});
