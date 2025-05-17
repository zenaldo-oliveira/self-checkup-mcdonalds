import js from '@eslint/js';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

const reactGlobals = {
  React: 'readonly',
  JSX: 'readonly',
};

export default [
  js.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: reactGlobals,
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'no-undef': 'off',

      // Ordenação de imports
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            ['^\\w', '^@\\w'], // Pacotes externos e @externos
            ['^@/'], // Alias internos
            ['^\\.'], // Relativos
          ],
        },
      ],
      'simple-import-sort/exports': 'error',

      // Estilo de código
      quotes: ['error', 'single'],
      semi: ['error', 'always'],

      // React
      'react/react-in-jsx-scope': 'off',

      // Prettier integrado no ESLint
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
