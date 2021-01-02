module.exports = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/',
        permanent: true,
      },
    ]
  },
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'en',
  },
}
