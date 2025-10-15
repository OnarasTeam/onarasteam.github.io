import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    // 🟢 LIMPIEZA FINAL: Todos los plugins se cargan a través de sus objetos en 'extends'
    // Por lo tanto, esta sección 'plugins' puede quedar vacía o eliminarse si no tienes plugins extra.
    plugins: {
      // ❌ ELIMINADO: 'react-hooks': reactHooks,
      // ❌ ELIMINADO: 'react-refresh': reactRefresh,
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      // 👈 Estas configuraciones ya se encargan de cargar sus respectivos plugins:
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      // Asegúrate de que Prettier SIEMPRE sea el último para anular las reglas de estilo:
      eslintPluginPrettierRecommended,
    ],
    rules: {
      // Regla de React Hooks (importante para evitar bugs de dependencia):
      'react-hooks/exhaustive-deps': 'warn',

      // Regla de Prettier (formato) con tus opciones:
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          jsxSingleQuote: true,
          semi: false,
          endOfLine: 'auto',
        },
      ],
      'no-unused-vars': 'warn',
    },
  },
])
