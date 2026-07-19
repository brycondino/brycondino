import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const testDir = dirname(fileURLToPath(import.meta.url));
const animations = readFileSync(resolve(testDir, '..', 'site-animations.js'), 'utf8');

test('technology strip becomes an accessible two-lane CV tools marquee', () => {
  assert.ok(animations.includes('setupTechnologyMarquee'));
  assert.ok(animations.includes('technology-marquee-lane--forward'));
  assert.ok(animations.includes('technology-marquee-lane--reverse'));
  assert.ok(animations.includes('technology-marquee-forward'));
  assert.ok(animations.includes('technology-marquee-reverse'));
  assert.ok(animations.includes('aria-hidden="true"'));

  for (const tool of [
    'Oracle', 'MySQL', 'PostgreSQL', 'PL/SQL', 'TOAD for Oracle',
    'Python', 'Unix Shell', 'Perl', 'AWS', 'Lambda', 'API Gateway',
    'CloudWatch', 'Secrets Manager', 'Git', 'JIRA', 'Postman',
    'Cypress', 'CircleCI', 'Oracle APEX', 'Confluence', 'Linux',
    'Windows', 'Agile', 'Scrum', 'SDLC'
  ]) {
    assert.ok(animations.includes(tool), `missing ${tool}`);
  }

  assert.ok(animations.includes(':hover .technology-marquee-track'));
  assert.ok(animations.includes(':focus-within .technology-marquee-track'));
  assert.ok(animations.includes('@media(prefers-reduced-motion:reduce)'));
  assert.ok(animations.indexOf('setupTechnologyMarquee()') < animations.indexOf('if (!window.gsap) return'));
});
