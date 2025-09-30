import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { describe, expect, it } from 'vitest';
import manifestJson from '../../../../manifest.json';
import { buildPrompt, parseStyleMarkdown, planPadding, ManifestStyleEntry } from '../index';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

describe('parseStyleMarkdown', () => {
  it('extracts sections and renderer adapter from markdown', () => {
    const stylePath = path.resolve(__dirname, '../../../../styles/american_illustration/norman_rockwell_american_storytelling.md');
    const markdown = readFileSync(stylePath, 'utf-8');
    const parsed = parseStyleMarkdown(markdown);

    expect(parsed.rendererAdapter).toBeDefined();
    expect(parsed.rendererAdapter).toContain('Renderer-Agnostic Adapter');
    expect(parsed.sections['1']).toBeDefined();
    expect(parsed.sections['1']).toContain('## 1) Core Instruction & Likeness Mandate');
    expect(parsed.sections['6']).toContain('## 6) Safety & IP Constraints');
  });
});

describe('buildPrompt', () => {
  it('builds a prompt with header, context, and ordered sections', () => {
    const style = (manifestJson as any).styles['norman_rockwell_american_storytelling'] as ManifestStyleEntry;
    const stylePath = path.resolve(__dirname, '../../../../styles/american_illustration/norman_rockwell_american_storytelling.md');
    const parsed = parseStyleMarkdown(readFileSync(stylePath, 'utf-8'));

    const result = buildPrompt({
      style,
      markdown: parsed,
      ratio: '3:4',
      mode: 'Cover Narrative',
      subjectCount: 2,
      userDirectives: ['Include a festive winter storefront backdrop'],
    });

    expect(result.prompt).toContain('MuseoMorph Style: Norman Rockwell — American Storytelling');
    expect(result.prompt).toContain('Selected Ratio: 3:4');
    expect(result.prompt).toContain('Selected Mode: Cover Narrative');
    expect(result.prompt).toContain('Multi-Subject Directive');
    expect(result.prompt).toContain('## 1) Core Instruction & Likeness Mandate');
    expect(result.prompt).toContain('## 8) Typography & Text Integration (If Historically Present)');
    expect(result.metadata.ratio).toBe('3:4');
    expect(result.metadata.subjectCount).toBe(2);
  });

  it('throws when unsupported ratio requested', () => {
    const style = (manifestJson as any).styles['norman_rockwell_american_storytelling'] as ManifestStyleEntry;
    const stylePath = path.resolve(__dirname, '../../../../styles/american_illustration/norman_rockwell_american_storytelling.md');
    const parsed = parseStyleMarkdown(readFileSync(stylePath, 'utf-8'));

    expect(() => buildPrompt({
      style,
      markdown: parsed,
      ratio: '5:7',
    })).toThrow();
  });
});

describe('planPadding', () => {
  it('plans padding for a square image to a 2:3 canvas', () => {
    const plan = planPadding(512, 512, '2:3');
    expect(plan.targetWidth).toBe(512);
    expect(plan.targetHeight).toBe(768);
    expect(plan.padTop + plan.padBottom).toBe(256);
  });

  it('returns zero padding when ratios already match', () => {
    const plan = planPadding(600, 900, '2:3');
    expect(plan.padTop).toBe(0);
    expect(plan.padBottom).toBe(0);
    expect(plan.padLeft).toBe(0);
    expect(plan.padRight).toBe(0);
  });

  it('throws on invalid ratios', () => {
    expect(() => planPadding(600, 900, 'foo')).toThrow();
  });
});
