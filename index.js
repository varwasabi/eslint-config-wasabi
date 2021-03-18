module.exports = {
  env: {
    node: true,
  },
  extends: [
    'eslint:recommended',
    './import',
    './jest',
    './promises',
    './react',
    './typescript',
    './unicorn',
    'prettier',
  ],
  overrides: [
    {
      files: ['**/*.js?(x)'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
    },
  ],
  rules: {
    'prefer-const': 'error',

    // strict
    strict: 'error',
  },
};
