const path = require('path')

module.exports = {
  reactStrictMode: true,
  distDir: '../.next',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
}
