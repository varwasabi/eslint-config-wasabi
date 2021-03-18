const fs = require('fs');
const path = require('path');

const tsconfig = fs.existsSync('tsconfig.json')
  ? path.resolve('tsconfig.json')
  : fs.existsSync('types/tsconfig.json')
  ? path.resolve('types/tsconfig.json')
  : undefined;

module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:@typescript-eslint/recommended'],
      parserOptions: {
        project: tsconfig,
      },
      rules: {
        // @typescript-eslint/eslint-plugin
        '@typescript-eslint/no-unused-params': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],
};
