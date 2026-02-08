import { describe, it, expect } from 'vitest';
import lint from '@commitlint/lint';
import config from './commitlint.config.js';

const lintMessage = (message) => lint(message, config.rules);

describe('commitlint.config', () => {
  describe('type-enum', () => {
    const validTypes = [
      'build',
      'ci',
      'docs',
      'feat',
      'fix',
      'perf',
      'refactor',
      'style',
      'test',
      'chore',
    ];

    it.each(validTypes)('should pass for valid type: %s', async (type) => {
      const result = await lintMessage(`${type}: add new feature`);
      expect(result.valid).toBe(true);
    });

    it('should fail for invalid type', async () => {
      const result = await lintMessage('invalid: some message');
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.name === 'type-enum')).toBe(true);
    });
  });

  describe('subject-max-length', () => {
    it('should pass for subject within 72 characters', async () => {
      const subject = 'a'.repeat(72);
      const result = await lintMessage(`feat: ${subject}`);
      expect(result.valid).toBe(true);
    });

    it('should fail for subject exceeding 72 characters', async () => {
      const subject = 'a'.repeat(73);
      const result = await lintMessage(`feat: ${subject}`);
      expect(result.valid).toBe(false);
      expect(result.errors.some((e) => e.name === 'subject-max-length')).toBe(true);
    });
  });
});
