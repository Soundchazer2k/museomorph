import {
  ManifestStyleEntry,
  ParsedStyleMarkdown,
  PromptBuildOptions,
  PromptBuildResult,
} from './types';

const SECTION_ORDER = ['1', '2', '3', '4', '5', '6', '7', '8'];
const SECTION_ORDER_6C = ['style_direction', 'technical_notes', 'constraints'];

function assertRatio(style: ManifestStyleEntry, ratio: string): void {
  if (!style.ratios.includes(ratio)) {
    throw new Error(
      `Ratio "${ratio}" is not supported by style ${style.display_name}. Supported ratios: ${style.ratios.join(', ')}`,
    );
  }
}

function assertMode(style: ManifestStyleEntry, mode?: string): void {
  if (!mode) return;
  if (!style.modes?.includes(mode)) {
    throw new Error(
      `Mode "${mode}" is not defined for style ${style.display_name}. Available modes: ${style.modes?.join(', ') ?? 'none'}`,
    );
  }
}

function buildMultiSubjectDirective(
  style: ManifestStyleEntry,
  subjectCount: number,
): string | undefined {
  if (subjectCount <= 1) return undefined;

  if (!style.multi_subject?.allowed) {
    throw new Error(`Style ${style.display_name} is limited to a single subject.`);
  }

  const lines = [`Multi-Subject Directive: Render ${subjectCount} subjects within the selected ratio.`];

  if (style.multi_subject.max_subjects) {
    lines.push(`Maximum supported subjects: ${style.multi_subject.max_subjects}.`);
  }
  if (style.multi_subject.layout_hint) {
    lines.push(`Layout hint: ${style.multi_subject.layout_hint}`);
  }
  if (style.multi_subject.identity_priority?.length) {
    lines.push(`Identity priority: ${style.multi_subject.identity_priority.join(', ')}`);
  }

  return lines.join(' ');
}

export function buildPrompt(options: PromptBuildOptions): PromptBuildResult {
  const { style, markdown, ratio, mode, subjectCount = 1, userDirectives = [], additionalContext } = options;

  assertRatio(style, ratio);
  assertMode(style, mode);

  const headerParts = [
    `MuseoMorph Style: ${style.display_name}`,
    `Selected Ratio: ${ratio}`,
  ];

  if (mode) {
    headerParts.push(`Selected Mode: ${mode}`);
  }

  headerParts.push(`Subjects: ${subjectCount}`);

  if (style.artist) {
    headerParts.push(`Artist Context: ${style.artist}`);
  }
  if (style.movement) {
    headerParts.push(`Movement: ${style.movement}`);
  }

  const multiSubjectDirective = buildMultiSubjectDirective(style, subjectCount);
  if (multiSubjectDirective) {
    headerParts.push(multiSubjectDirective);
  }

  if (additionalContext) {
    headerParts.push(`Additional Context: ${additionalContext}`);
  }

  if (userDirectives.length > 0) {
    headerParts.push(`User Directives:\n- ${userDirectives.join('\n- ')}`);
  }

  const sections: string[] = [];

  if (style.about) {
    sections.push(`About the Style:\n${style.about.trim()}`);
  }

  // Handle 6-component format vs legacy numbered format
  if (markdown.is6Component) {
    // 6-component format: Style Direction, Technical Notes, Constraints
    for (const key of SECTION_ORDER_6C) {
      const section = markdown.sections[key];
      if (section) {
        // Add section headers for clarity
        if (key === 'style_direction') {
          sections.push(`## Style Direction\n\n${section.trim()}`);
        } else if (key === 'technical_notes') {
          sections.push(`## Technical Notes\n\n${section.trim()}`);
        } else if (key === 'constraints') {
          sections.push(`## Constraints\n\n${section.trim()}`);
        }
      }
    }
  } else {
    // Legacy numbered section format
    if (markdown.preface) {
      sections.push(markdown.preface.trim());
    }

    if (markdown.rendererAdapter) {
      sections.push(markdown.rendererAdapter.trim());
    }

    for (const key of SECTION_ORDER) {
      const section = markdown.sections[key];
      if (section) {
        sections.push(section.trim());
      }
    }
  }

  const prompt = `${headerParts.join('\n')}`.trim() + '\n\n' + sections.join('\n\n');

  return {
    prompt: prompt.trim(),
    metadata: {
      ratio,
      mode,
      subjectCount,
      styleId: style.id,
      styleDisplayName: style.display_name,
    },
  };
}
