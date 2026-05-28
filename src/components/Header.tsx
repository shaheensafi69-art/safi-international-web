"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ lang }: { lang: 'en' | 'fa' }) {
  const pathname = usePathname();
  const isRtl = lang === 'fa';

  const menuItems = [
    { name: isRtl ? 'خانه' : 'Home', path: `/${lang}` },
    { name: isRtl ? 'درباره' : 'About', path: `/${lang}/about` },
    { name: isRtl ? 'خدمات' : 'Services', path: `/${lang}/services` }, // بخش خدمات اضافه شد
    { name: isRtl ? 'پروژه‌ها' : 'Ventures', path: `/${lang}/victories` },
    { name: isRtl ? 'بلاگ' : 'Blog', path: `/${lang}/blog` },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] p-3 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/5 p-2 md:p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* لوگو طلایی */}
        <Link href={`/${lang}`} className="flex items-center gap-2 px-1 shrink-0 group">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-xl overflow-hidden border border-amber-500/20">
            <Image src="/logo.jpeg" alt="Safi" fill className="object-cover transition-transform group-hover:scale-110" />
          </div>
          <span className="text-white font-black text-[12px] md:text-lg uppercase tracking-tighter italic">
            S.<span className="text-amber-500">Safi</span>
          </span>
        </Link>

        {/* نویگیشن خطی هوشمند */}
        <nav className="flex items-center gap-4 md:gap-8 px-2 overflow-x-auto no-scrollbar scroll-smooth">
          {menuItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path} 
              className={`whitespace-nowrap text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300 ${
                pathname === item.path 
                ? 'text-amber-500 shadow-[0_8px_10px_-6px_rgba(245,158,11,0.5)]' 
                : 'text-gray-500 hover:text-white'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* دکمه زبان با پرچم */}
        <Link 
          href={pathname.replace(`/${lang}`, lang === 'en' ? '/fa' : '/en')}
          className="shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-zinc-900 border border-amber-500/40 hover:border-amber-500 rounded-full text-base md:text-xl shadow-[0_0_20px_rgba(245,158,11,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all duration-300"
          title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
        >
          {/* اگر زبان فعلی انگلیسی است، پرچم افغانستان (برای تغییر به فارسی) و اگر فارسی است، پرچم بریتانیا نشان داده می‌شود */}
          <span className="transform -translate-y-[1px] leading-none drop-shadow-md">
            {lang === 'en' ? '🇦🇫' : '🇬🇧'}
          </span>
        </Link>

      </div>
    </header>
  );
}