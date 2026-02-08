export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [
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
    ]],
    'subject-max-length': [2, 'always', 72],
  }
};
