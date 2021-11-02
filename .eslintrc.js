module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: [],
  root: true,
  rules: {
    'vue/block-tag-newline': [
      'error',
      {
        multiline: 'always',
        singleline: `never`,
      },
    ],
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
    'vue/custom-event-name-casing': ['error', 'camelCase'],
    'vue/html-button-has-type': 'error',
    'vue/html-comment-content-newline': 'error',
    'vue/html-comment-content-spacing': ['error', 'always'],
    'vue/html-comment-indent': 'error',
    'vue/match-component-file-name': [
      'error',
      {
        extensions: ['vue'],
        shouldMatchCase: true,
      },
    ],
    'vue/new-line-between-multi-line-property': 'error',
    'vue/next-tick-style': ['error', 'callback'],
    'vue/no-boolean-default': ['error', 'default-false'],
    'vue/no-duplicate-attr-inheritance': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/no-invalid-model-keys': 'error',
    'vue/no-multiple-objects-in-class': 'error',
    'vue/no-potential-component-option-typo': [
      'error',
      {
        presets: ['all'],
      },
    ],
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVue3BuiltInComponents: true,
      },
    ],
    'vue/no-template-target-blank': 'error',
    'vue/no-unregistered-components': 'error',
    'vue/no-unsupported-features': [
      'error',
      {
        ignores: [],
        version: '^3.0.0',
      },
    ],
    'vue/no-unused-properties': 'error',
    'vue/no-unused-refs': 'error',
    'vue/no-unused-vars': 'error',
    'vue/no-useless-mustaches': 'error',
    'vue/no-useless-v-bind': 'error',
    'vue/padding-line-between-blocks': 'error',
    'vue/require-direct-export': 'error',
    'vue/require-name-property': 'error',
    'vue/sort-keys': 'error',
    'vue/v-for-delimiter-style': 'error',
    'vue/v-on-event-hyphenation': 'error',
    'vue/v-on-function-call': 'error',
    'vue/valid-next-tick': 'error',
  },
}
