module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'] },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['**/*.js', 'node_modules/**/*', 'dist/**/*'],
  rules: {
    '@typescript-eslint/no-misused-promises': ['error', { checksVoidReturn: { arguments: false } }],
    '@typescript-eslint/no-extraneous-class': ['error', { allowStaticOnly: true }],
    '@typescript-eslint/consistent-indexed-object-style': ['off'],
  },
};
