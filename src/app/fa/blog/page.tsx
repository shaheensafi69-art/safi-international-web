import React from 'react';
import Link from 'next/link';

// لیست مقالات بر اساس عکس ارسالی شما - نسخه فارسی
const blogPosts = [
  {
    title: "آینده فین‌تک در افغانستان",
    slug: "fintech-afghanistan-future",
    description: "بررسی تحول دیجیتال و شمول مالی در ساختار اقتصادی افغانستان.",
    date: "فروردین ۱۴۰۵"
  },
  {
    title: "مدیریت ثروت مبتنی بر هوش مصنوعی",
    slug: "ai-wealth-management",
    description: "چگونه هوش مصنوعی روش مدیریت دارایی‌های جهانی را متحول می‌کند.",
    date: "فروردین ۱۴۰۵"
  },
  {
    title: "روانشناسی معاملات پرریسک",
    slug: "trading-psychology",
    description: "درک چارچوب ذهنی مورد نیاز برای موفقیت در بازارهای پرنوسان.",
    date: "فروردین ۱۴۰۵"
  },
  {
    title: "بلاک‌چین فراتر از ارزهای دیجیتال",
    slug: "blockchain-utility",
    description: "کاربردهای عملی فناوری بلاک‌چین در بخش‌های مدرن کسب‌وکار.",
    date: "فروردین ۱۴۰۵"
  },
  {
    title: "برندینگ لوکس در عصر دیجیتال",
    slug: "digital-luxury-branding",
    description: "خلق یک هویت منحصر‌به‌فرد در دنیایی که به سرعت در حال دیجیتالی شدن است.",
    date: "فروردین ۱۴۰۵"
  },
  // سایر موارد لیست را می‌توانید با همین الگو در اینجا اضافه کنید
];

const BlogListingPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16" dir="rtl">
      <header className="mb-12 border-b pb-8 text-right">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">وبلاگ شاهین صافی</h1>
        <p className="text-xl text-gray-600">دیدگاه‌هایی درباره فین‌تک، رهبری و بازارهای جهانی.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-right">
        {blogPosts.map((post) => (
          <div key={post.slug} className="group border rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="aspect-video bg-gray-100 overflow-hidden">
              <img 
                src={`/blog/${post.slug}/hero.png`} 
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.currentTarget.src = '/blog/default-hero.png'; }}
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-blue-600 font-medium">{post.date}</span>
              <h2 className="text-2xl font-bold mt-2 mb-3 group-hover:text-blue-700 transition-colors">
                <Link href={`/fa/blog/${post.slug}`}>
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                {post.description}
              </p>
              <Link 
                href={`/fa/blog/${post.slug}`}
                className="inline-flex items-center text-black font-semibold hover:underline transition-all"
              >
                <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
                مطالعه مقاله 
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListingPage;