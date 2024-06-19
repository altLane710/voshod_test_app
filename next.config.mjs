/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/catalog',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'test.taxivoshod.ru',
        port: '',
        pathname: '/images/cars/**',
      },
    ],
  },
};

export default nextConfig;
