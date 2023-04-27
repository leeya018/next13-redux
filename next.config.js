/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/_next/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: `http://localhost:${process.env.NEXT_PUBLIC_PORT}/`,
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
