export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
    'stylelint-config-tailwindcss',
    'stylelint-config-tailwindcss/scss',
  ],
  plugins: ['stylelint-order', 'stylelint-scss'],
}
