import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    rules: {
      // Import Sort
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // Estilo
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
