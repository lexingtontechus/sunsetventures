/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/9ec37732-832c-4af1-a4fa-cc87c28c6dae-bucket/assets/img/**",
      },
    ],
    domains: ["storageapi.fleek.co"],
  },
};

module.exports = nextConfig;

