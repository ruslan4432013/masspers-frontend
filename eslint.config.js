import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import eslintConfigPrettier from 'eslint-config-prettier'
import { fixupConfigRules } from '@eslint/compat'
import hooksPlugin from 'eslint-plugin-react-hooks'

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,

  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  eslintConfigPrettier,
]
