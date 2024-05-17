/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/_not-found/page',
        destination: '/404',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
