module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "semi": "off",
    // "comma-dangle": "off",
    // "quotes": "off",
    // "space-before-function-paren": "off",
    // "no-unused-vars": "off",
    // "no-useless-constructor": "off",
    // "no-empty-function": "off",
    // "no-undef": "off",
    // "no-extra-semi": "off",
    // "no-trailing-spaces":"off",
    // "no-multiple-empty-lines":"off",
    // "eol-last":"off",
  }
}
