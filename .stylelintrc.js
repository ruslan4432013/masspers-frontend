export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-config-tailwindcss',
    'stylelint-config-tailwindcss/scss',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'selector-class-pattern': '[a-zA-Z]+(_[a-zA-Z]+)*',
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': null,
    'property-no-vendor-prefix': null,
  },
}
