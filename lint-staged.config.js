export default {
  '**/*.(ts|tsx)': () => ['tsc -p tsconfig.json --noEmit', 'eslint --fix'],
  '**/*': 'prettier --write --ignore-unknown',
  '*.scss': ['stylelint --fix'],
}
