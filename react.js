module.exports = {
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended'],
      rules: {
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.ts', '.tsx'] },
        ],
        'react/prop-types': 'off',
      },
      settings: {
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
