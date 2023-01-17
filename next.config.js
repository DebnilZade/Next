/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api' // development api
        : 'http://localhost:3000/api' // production api
  },
  env: {
    mongodburl: "mongodb+srv://debcc:<password>@cluster0.likgw0s.mongodb.net/?retryWrites=true&w=majority",
  }
}

module.exports = nextConfig
