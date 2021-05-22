module.exports = {
  webpack: (config, options) => {
    config.plugins.push(new options.webpack.IgnorePlugin(/\/__tests__\//))
    return config
  },
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
