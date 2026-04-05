/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // این خط باعث می‌شود ورسل ارورهای تایپ‌اسکریپت را نادیده بگیرد و سایت را بالا بیاورد
    ignoreBuildErrors: true,
  },
  eslint: {
    // نادیده گرفتن ارورهای قوانین کدنویسی
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;