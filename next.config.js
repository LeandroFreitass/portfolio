/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  unoptimized: true
}
const withImages = require('next-images');
module.exports = withImages();
module.exports = nextConfig
