export default {
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  plugins: ['prettier-plugin-astro'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
