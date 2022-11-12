/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/47c43c10-6c0c-4b3b-a520-683839c214cf-bucket/assets/img/**",
      },
    ],
    domains: ["storageapi.fleek.co"],
  },
};

module.exports = nextConfig;

