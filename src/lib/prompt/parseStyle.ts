import matter from 'gray-matter';
import { ParsedStyleMarkdown } from './types';

/**
 * Parses a MuseoMorph style markdown file into frontmatter, renderer adapter, and numbered sections.
 */
export function parseStyleMarkdown(markdown: string): ParsedStyleMarkdown {
  const { data, content } = matter(markdown);
  const trimmed = content.trim();

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
  };
}
