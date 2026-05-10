import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ['127.0.0.1', '*.app.github.dev', '*.github.dev', '172.28.151.122'],
};

export default nextConfig;


