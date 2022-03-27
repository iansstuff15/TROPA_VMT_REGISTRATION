/** @type {import('next').NextConfig} */
const nextConfig = {
  
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
  // webpack: (config, { isServer }) => {
  //   // Fixes npm packages that depend on `fs` module
  //   if (!isServer) {
  //     config.node = {
  //       fs: 'empty'
  //     }
  //   }

  //   return config
  // }
  // webpack5: true,
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false,path:false, process:false, buffer:false, events:false, https: false, querystring: false };

  //   return config;
  // },
}

module.exports = nextConfig
