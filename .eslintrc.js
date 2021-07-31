module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
  ],
  rules: {
    'array-callback-return': ['off'],
    'consistent-return': ['off'],

    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-else-return': ['off'],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],

    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],

    'react/prop-types': ['off'],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
    'react/react-in-jsx-scope': ['off'],
  },
}
