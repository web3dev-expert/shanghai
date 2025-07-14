/** @type {import('next').NextConfig} */
// const nextConfig = {

// }

// module.exports = {
//   output: 'export',
// }

// export default nextConfig

// @ts-check

export default (phase) => {
  const isDev = false;
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    reactStrictMode: false,
    // basePath: '/shanghai_master',
    output: 'export',
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    allowedDevOrigins: [
      "http://localhost:3000",
    ],
    // assetPrefix: isDev ? undefined : 'https://goingglobalguides.com/shanghai_master',
  }
  return nextConfig
}