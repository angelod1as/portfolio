/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  redirects() {
    return [
      {
        source: '/call',
        destination: 'https://calendar.app.google/fXMaK5im14WKQZVs8',
        permanent: true,
      },
    ]
  },
}
