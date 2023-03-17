/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    STRIPE_PUBKEY: process.env.STRIPE_PUBKEY,
  }
}

module.exports = nextConfig
