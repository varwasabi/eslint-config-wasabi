const isCI = require('is-ci');

module.exports = {
  extends: ['plugin:import/warnings', 'plugin:import/errors'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:import/typescript'],
      rules: {
        // eslint-plugin-import
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
        'import/no-named-as-default-member': 'off',
        ...(!isCI && {
          'import/no-named-as-default': 'off',
          'import/no-cycle': 'off',
          'import/no-unused-modules': 'off',
          'import/no-deprecated': 'off',
        }),
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
    },
  ],
};
