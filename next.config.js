/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["camiestas-futbol.effectstudios.co"],
  },
};

module.exports = nextConfig;
