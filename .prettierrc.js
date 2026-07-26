export default {
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'es5',
  arrowParens: 'avoid',
  // Markdown is auto-fixed structurally: list markers, heading style, frontmatter,
  // table alignment. 'preserve' means line breaks inside prose are never touched,
  // so sentences and paragraphs come out exactly as written.
  proseWrap: 'preserve',
  plugins: ['prettier-plugin-astro'],
  overrides: [{ files: '*.astro', options: { parser: 'astro' } }],
}
