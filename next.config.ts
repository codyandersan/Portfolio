import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['10.196.222.225', '127.0.0.1', '*.app.github.dev', '*.github.dev', '172.28.151.122'],
};

export default nextConfig;


