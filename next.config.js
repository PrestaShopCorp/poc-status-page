/** @type {import('next').NextConfig} */

const production = process.env.NODE_ENV === "production";

const nextConfig = {
//  assetPrefix: production ? '/' : '',
  assetPrefix: '',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '',
}

module.exports = nextConfig
