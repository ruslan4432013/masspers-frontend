import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import eslintConfigPrettier from 'eslint-config-prettier'
import { fixupConfigRules } from '@eslint/compat'
import sonarjs from 'eslint-plugin-sonarjs'

export default tseslint.config(
  sonarjs.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  // pluginJs.configs.recommended,

  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    },
  },
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  eslintConfigPrettier,
  {
    ignores: ['.next/*'],
  }
)
