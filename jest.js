const readPkgUp = require('read-pkg-up');

let includesJestDom = false;
let includesTestingLibrary = false;

try {
  const packageUp = readPkgUp.sync({ normalize: true });

  const dependencies = Object.keys({
    ...packageUp?.packageJson.peerDependencies,
    ...packageUp?.packageJson.devDependencies,
    ...packageUp?.packageJson.dependencies,
  });

  includesJestDom = dependencies.includes('@testing-library/jest-dom');

  includesTestingLibrary = [
    '@testing-library/dom',
    '@testing-library/react',
    '@testing-library/react-native',
  ].some((dep) => dependencies.includes(dep));
} catch {
  // ignored
}

module.exports = {
  overrides: [
    {
      files: [
        '**/__{mocks,tests}__/*.{ts,tsx,js,jsx}',
        '*.{test,spec}.{js,jsx,ts,tsx}',
      ],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        includesJestDom ? 'plugin:jest-dom/recommended' : undefined,
        includesTestingLibrary
          ? 'plugin:testing-library/recommended'
          : undefined,
      ].filter(Boolean),
    },
  ],
};
