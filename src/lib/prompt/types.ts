export interface ManifestStyleMultiSubject {
  allowed: boolean;
  max_subjects?: number;
  layout_hint?: string;
  identity_priority?: string[];
}

export interface ManifestStyleEntry {
  id: string;
  group: string;
  display_name: string;
  file: string;
  ratios: string[];
  modes?: string[];
  safety_profile?: string[];
  multi_subject?: ManifestStyleMultiSubject;
  about?: string;
  artist?: string;
  movement?: string;
  style_scope?: string;
  sections_index?: Record<string, string>;
}

export interface ParsedStyleMarkdown {
  frontmatter: Record<string, unknown>;
  preface?: string;
  rendererAdapter?: string;
  sections: Record<string, string>;
  /** True if this is a 6-component format style (vs legacy numbered sections) */
  is6Component?: boolean;
}

export interface PromptBuildOptions {
  style: ManifestStyleEntry;
  markdown: ParsedStyleMarkdown;
  ratio: string;
  mode?: string;
  subjectCount?: number;
  userDirectives?: string[];
  additionalContext?: string;
}

export interface PromptBuildResult {
  prompt: string;
  metadata: {
    ratio: string;
    mode?: string;
    subjectCount: number;
    styleId: string;
    styleDisplayName: string;
  };
}

export interface PaddingPlan {
  targetWidth: number;
  targetHeight: number;
  padTop: number;
  padRight: number;
  padBottom: number;
  padLeft: number;
}
