const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const withTM = require('next-transpile-modules')(['@emdgroup-liquid/liquid'])

module.exports = withTM({
  webpack(config, { dev }) {
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
})
