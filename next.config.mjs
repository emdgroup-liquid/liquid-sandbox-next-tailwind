import { join } from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  webpack: (config, { dev }) => {
    config.plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'node_modules/@emdgroup-liquid/liquid/dist/liquid/assets',
            to: join(process.cwd(), 'public/liquid/assets'),
          },
        ],
      })
    )
    return config
  },
}

export default nextConfig
