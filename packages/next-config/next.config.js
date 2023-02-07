/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://api.toppings.co.kr:28081/:path*`
      },
      {
        source: "/v1/:path*",
        destination: `https://api.toppings.co.kr:28081/api/v1/:path*`
      },
      {
        source: "/v2/:path*",
        destination: `https://api.toppings.co.kr:28081/api/v2/:path*`
      }
    ];
  },
  pageExtensions: ["page.tsx", "page.ts"],
  images: {
    domains: [
      "cdnjs.cloudflare.com",
      "toppings-storage.s3.ap-northeast-2.amazonaws.com"
    ],
    formats: ["image/webp"]
  },
  compiler: {
    emotion: true
  }
};

module.exports = nextConfig;
