module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    },
    requireConfigFile: false,
    parser: '@babel/eslint-parser'
  },
  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],
  plugins: ['vue'],
  rules: {
    'no-case-declarations': 'off',
    'no-use-before-define': 'off',
    'no-undef': 'off',
    "vue/comment-directive": "off",
    "no-debugger": ["warn"]
  },
}