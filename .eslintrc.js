module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['**/*.config.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'react-native'],
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    semi: ['error', 'always'],

    // TypeScript specific rules
    '@typescript-eslint/no-unused-vars': ['error'],

    // React specific rules
    'react/boolean-prop-naming': [
      'error',
      {
        message:
          'It is better if your boolean prop ({{ propName }}) matches this pattern: ({{ pattern }}). For example, the `enabled` boolean prop can be named as `isEnabled` or `selected` can be named as `hasSelected`.',
      },
    ],
    'react/destructuring-assignment': ['error', 'always'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-array-index-key': 'warn',
    'react/no-namespace': 'error',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/self-closing-comp': ['error', { component: true }],
    'react/hook-use-state': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-closing-bracket-location': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': [
      'error',
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],
    'react/jsx-no-constructed-context-values': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-leaked-render': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-props-no-multi-spaces': 'error',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        multiline: 'last',
        reservedFirst: true,
      },
    ],
    'react/jsx-uses-vars': 'error',
    'react/style-prop-object': 'off',
    'react/display-name': 'off',
    'react/prop-types': 'off',

    // React Native specific rules
    'react-native/no-unused-styles': 'error',
    'react-native/sort-styles': ['error', 'asc', {}],
    'react-native/split-platform-components': 'warn',
    'react-native/no-inline-styles': 'off',
    'react-native/no-color-literals': 'error',
    'react-native/no-single-element-style-arrays': 'error',

    // React Hooks specific rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',

    // Turn off base rules that are handled by TypeScript
    'no-unused-vars': 'off',
  },
  settings: {
    react: { version: 'detect' },
  },
};
