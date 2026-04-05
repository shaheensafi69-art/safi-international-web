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
    { name: isRtl ? 'پروژه‌ها' : 'Ventures', path: `/${lang}/victories` },
    { name: isRtl ? 'بلاگ' : 'Blog', path: `/${lang}/blog` },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] p-3 md:p-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/5 p-2 md:p-3 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        {/* لوگو طلایی */}
        <Link href={`/${lang}`} className="flex items-center gap-2 px-1 shrink-0">
          <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-xl overflow-hidden border border-amber-500/20 group">
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

        {/* دکمه زبان دایره‌ای شیک */}
        <Link 
          href={pathname.replace(`/${lang}`, lang === 'en' ? '/fa' : '/en')}
          className="shrink-0 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-amber-500 rounded-full text-black text-[9px] md:text-[11px] font-black shadow-[0_0_20px_rgba(245,158,11,0.3)] active:scale-90 transition-all"
        >
          {lang === 'en' ? 'FA' : 'EN'}
        </Link>

      </div>
    </header>
  );
}