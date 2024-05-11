/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'skillicons.dev',
        pathname: '**',
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
