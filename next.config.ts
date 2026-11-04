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
  async redirects() {
    return [
      {
        source: '/cedar-crest-luxury-villa-mashobra',
        destination: '/properties/cedar-crest-luxury-villa-mashobra',
        permanent: true,
      },
      {
        source: '/cedar-crest-villa',
        destination: '/properties/cedar-crest-luxury-villa-mashobra',
        permanent: true,
      },
      {
        source: '/properties/cedar-crest',
        destination: '/properties/cedar-crest-luxury-villa-mashobra',
        permanent: true,
      },
      {
        source: '/properties/cedar-crest-villa',
        destination: '/properties/cedar-crest-luxury-villa-mashobra',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
