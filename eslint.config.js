import neostandard from 'neostandard'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  // Global ignores (must be the lone key to apply globally)
  {
    ignores: [
      'build/',
      'coverage/',
      'node_modules/',
      'public/',
      'storybook-static/',
      // Storybook is not part of this project (no storybook dependency/config).
      // These story files are not built or executed, so they are not linted.
      '**/*.stories.{js,jsx}'
    ]
  },

  // Base style: neostandard (flat-config successor of `standard`) with JSX + React
  ...neostandard({
    env: ['browser', 'node'],
    jsx: true
  }),

  // Allow JSX parsing inside plain `.js` files (e.g. Storybook `*.stories.js`),
  // matching the previous `standard` behaviour.
  {
    files: ['**/*.js'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true }
      }
    }
  },

  // React Hooks + React Compiler rules (Rules of React).
  // `recommended-latest` enables the compiler-aware rules recommended by the
  // official React Compiler installation guide (these run at `error` level).
  reactHooks.configs.flat['recommended-latest'],

  // Vitest globals for test files
  {
    files: ['**/*.{test,spec}.{js,jsx}', 'src/tests/**/*.{js,jsx}'],
    languageOptions: {
      globals: { ...globals.vitest }
    }
  }
]
