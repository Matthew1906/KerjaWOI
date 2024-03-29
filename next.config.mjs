/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'randomuser.me',
            port: '',
            pathname: '/api/portraits/**',
          },
          {
            protocol: 'https',
            hostname: 'ik.imagekit.io',
            port: '',
            pathname: '/matthew1906/kerjawoi/**',
          },
        ],
      },
};

export default nextConfig;
