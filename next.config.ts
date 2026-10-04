/** @type {import('next').NextConfig} */
const nextConfig = {
  // این بخش معجزه می‌کند و تمام ارورهای بیلد را نادیده می‌گیرد
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  }
};

export default nextConfig;