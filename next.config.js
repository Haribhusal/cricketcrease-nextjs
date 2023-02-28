/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cricketcrease.com",
        port: "",
        pathname: "/wp-content/**",
      },
    ],
  },
};

module.exports = nextConfig;
