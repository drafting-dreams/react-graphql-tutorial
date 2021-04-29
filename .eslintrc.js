module.exports = {
  env: {
    browser: true,
    node: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  ecmaFeatures: {
    jsx: true,
  },
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
  },
}
