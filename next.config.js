/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/festa/:slug*',
        destination: '/party/:slug*', // Matched parameters can be used in the destination
        permanent: true,
      },
    ]
  },
}
