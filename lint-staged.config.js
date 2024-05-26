export default {
  '**/*.(ts|tsx)': () => ['tsc -p tsconfig.json --noEmit', 'eslint --fix'],
  '**/*': 'prettier --write --ignore-unknown',
  '*.(css|scss)': ['stylelint --fix'],
}
