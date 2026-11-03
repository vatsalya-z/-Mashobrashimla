import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
      },
    ],
  },
  allowedDevOrigins: [
    "192.168.1.6",
    "192.168.1.*",
    "localhost",
    "127.0.0.1",
  ],
};

export default nextConfig;
