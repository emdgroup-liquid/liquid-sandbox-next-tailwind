const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/@emdgroup-liquid/liquid/dist/liquid/assets',
            to: path.join(__dirname, 'public/liquid/assets'),
          },
        ],
      })
    )
    return config
  },
}

module.exports = nextConfig
