import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // 将严格规则降级为警告或关闭
      '@typescript-eslint/no-empty-object-type': 'warn', // 允许空对象类型，但仍显示警告
      '@typescript-eslint/no-empty-interface': 'warn', // 允许空接口，但仍显示警告
      'react-hooks/exhaustive-deps': 'warn', // 依赖项检查降级为警告
      'react-refresh/only-export-components': 'warn', // 关于组件导出的规则降级为警告
      'no-empty': 'warn', // 空块语句降级为警告
    },
  },
]);
