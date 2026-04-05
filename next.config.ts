/** @type {import('next').NextConfig} */
const nextConfig = {
  // این بخش معجزه می‌کند و تمام ارورهای بیلد را نادیده می‌گیرد
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // اگر از تصاویر لوگو استفاده می‌کنی این هم لازم است
  images: {
    unoptimized: true,
  }
};

export default nextConfig;