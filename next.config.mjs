/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // If deploying to username.github.io/repo-name, uncomment basePath:
  // basePath: '/nutrient',
};

export default nextConfig;
