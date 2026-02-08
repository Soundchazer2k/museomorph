import matter from 'gray-matter';
import { ParsedStyleMarkdown } from './types';

/**
 * Checks if markdown uses the 6-component format (has [Subject]:, [Art Style]:, etc.)
 */
function is6ComponentFormat(content: string): boolean {
  return content.includes('[Subject]:') && content.includes('[Art Style]:');
}

/**
 * Parses a 6-component style markdown into structured sections.
 * Expected sections: Style Direction, Technical Notes, Constraints
 */
function parse6ComponentMarkdown(
  trimmed: string,
  data: Record<string, unknown>,
): ParsedStyleMarkdown {
  const sections: Record<string, string> = {};

  // Extract Style Direction section (contains [Subject], [Action], etc.)
  const styleDirectionMatch = trimmed.match(
    /## Style Direction\s*([\s\S]*?)(?=## Technical Notes|## Constraints|$)/,
  );
  if (styleDirectionMatch) {
    sections['style_direction'] = styleDirectionMatch[1].trim();
  }

  // Extract Technical Notes section
  const techNotesMatch = trimmed.match(/## Technical Notes\s*([\s\S]*?)(?=## Constraints|$)/);
  if (techNotesMatch) {
    sections['technical_notes'] = techNotesMatch[1].trim();
  }

  // Extract Constraints section
  const constraintsMatch = trimmed.match(/## Constraints\s*([\s\S]*?)$/);
  if (constraintsMatch) {
    sections['constraints'] = constraintsMatch[1].trim();
  }

  return {
    frontmatter: data as Record<string, unknown>,
    preface: undefined,
    rendererAdapter: undefined,
    sections,
    is6Component: true,
  };
}

/**
 * Parses a MuseoMorph style markdown file into frontmatter, renderer adapter, and numbered sections.
 * Supports both legacy numbered format (1-8) and new 6-component format.
 */
export function parseStyleMarkdown(markdown: string): ParsedStyleMarkdown {
  const { data, content } = matter(markdown);
  const trimmed = content.trim();

  // Check for 6-component format
  if (is6ComponentFormat(trimmed)) {
    return parse6ComponentMarkdown(trimmed, data);
  }

  // Legacy numbered section parsing
  const headingRegex = /^##\s+(.+)$/gm;
  const matches: Array<{ title: string; start: number; end: number }> = [];

  let match: RegExpExecArray | null;
  while ((match = headingRegex.exec(trimmed)) !== null) {
    matches.push({
      title: match[1].trim(),
      start: match.index,
      end: match.index + match[0].length,
    });
  }

  let preface: string | undefined;
  if (matches.length > 0 && matches[0].start > 0) {
    preface = trimmed.slice(0, matches[0].start).trim();
  }

  const sections: Record<string, string> = {};
  let rendererAdapter: string | undefined;

  for (let i = 0; i < matches.length; i++) {
    const current = matches[i];
    const nextStart = i + 1 < matches.length ? matches[i + 1].start : trimmed.length;
    const body = trimmed.slice(current.end, nextStart).trim();
    const sectionText = body ? `## ${current.title}\n\n${body}` : `## ${current.title}`;
    const normalizedTitle = current.title.toLowerCase();

    const sectionMatch = current.title.match(/^(\d)\)\s+/);
    if (sectionMatch) {
      const key = sectionMatch[1];
      sections[key] = sectionText;
      continue;
    }

    if (normalizedTitle.startsWith('renderer-agnostic adapter')) {
      rendererAdapter = sectionText;
    }
  }

  return {
    frontmatter: data as Record<string, unknown>,
    preface,
    rendererAdapter,
    sections,
    is6Component: false,
  };
}
