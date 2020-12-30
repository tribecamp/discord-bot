/* eslint-disable import/no-commonjs */
module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module'
  },
  extends: [
    '@tribecamp/base',
    '@tribecamp/typescript'
  ],
  ignorePatterns: ['.eslintrc.js'],
};
