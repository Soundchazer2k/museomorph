// scripts/schema.ts
import { z } from "zod";

export const AllowedSafety = [
  "no_nudity",
  "no_gore",
  "no_logos",
  "no_watermarks",
  "minors_modest",
  "gender_respect",
] as const;

export const ratioPattern = /^[1-9]\d*:[1-9]\d*$/;

export const FrontmatterSchema = z.object({
  id: z.string().min(1).regex(/^[a-z0-9_\-]+$/, "id should be lowercase/slug-like"),
  group: z.string().min(1),
  display_name: z.string().min(1),
  artist: z.string().min(1).optional(),
  movement: z.string().min(1).optional(),
  style_scope: z.enum(["single-artist", "movement"]).default("single-artist"),

  ratios: z.array(z.string().regex(ratioPattern)).min(1),
  modes: z.array(z.string().min(1)).min(1),

  safety_profile: z.array(z.enum(AllowedSafety)).min(1),

  multi_subject: z
    .object({
      allowed: z.boolean(),
      max_subjects: z.number().int().positive().max(8).optional(),
      layout_hint: z.string().min(1).optional(),
      identity_priority: z.array(z.string().min(1)).optional(),
    })
    .optional(),

  about: z.string().min(1, "Please include a short educational blurb (2–6 sentences)."),

  notes: z.string().optional(),

  // NEW: Ratio review workflow
  ratios_status: z.enum(["provisional", "approved"]).default("provisional"),
  ratios_notes: z.string().min(10, "Explain your ratio choice (historical/format rationale).").optional(),
});

export type Frontmatter = z.infer<typeof FrontmatterSchema>;

export const REQUIRED_SECTIONS = [
  "## 1) Core Instruction & Likeness Mandate",
  "## 2) Canvas Strategy & Aspect Ratio Control",
  "## 3) Style Context & Material Authenticity",
  "## 4) Technical Method & Mark-Making",
  "## 5) Wardrobe, Props & Setting Conventions",
  "## 6) Safety & IP Constraints (Hard Rules)",
  "## 7) Composition & Lighting Patterns",
  "## 8) Typography & Text Integration (If Historically Present)",
] as const;

