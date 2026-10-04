"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header({ lang }: { lang: 'en' | 'fa' }) {
  const pathname = usePathname();
  const isRtl = lang === 'fa';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: isRtl ? 'خانه' : 'Home', path: `/${lang}` },
    { name: isRtl ? 'درباره' : 'About', path: `/${lang}/about` },
    { name: isRtl ? 'اکوسیستم و خدمات' : 'Ecosystem', path: `/${lang}/services` },
    { name: isRtl ? 'پروژه‌ها' : 'Ventures', path: `/${lang}/victories` },
    { name: isRtl ? 'رزومه' : 'CV', path: `/${lang}/cv` },
    { name: isRtl ? 'بلاگ' : 'Blog', path: `/${lang}/blog` },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[9999] px-2 py-3 md:px-4 md:py-4" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="w-[98%] max-w-[1600px] mx-auto flex items-center justify-between bg-black/75 backdrop-blur-2xl border border-white/10 px-3 py-2 md:px-6 md:py-2.5 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.8)] transition-all duration-300 hover:border-amber-400/30">
        
        {/* برند و لوگو */}
        <Link href={`/${lang}`} className="flex items-center gap-3 shrink-0 group">
          <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden border border-amber-400/40 p-0.5 group-hover:border-amber-400 group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all duration-300">
            <Image src="/logo.jpeg" alt="Shaheen Safi" fill className="object-cover rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-white font-black text-sm md:text-base tracking-wider uppercase">
              SHAHEEN <span className="text-luxury">SAFI</span>
            </span>
            <span className="text-[9px] font-mono text-zinc-400 tracking-[0.2em] uppercase hidden sm:inline">
              Executive
            </span>
          </div>
        </Link>

        {/* منوی دسکتاپ */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path || (item.path !== `/${lang}` && pathname.startsWith(item.path));
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative ${
                  isActive 
                  ? 'text-white bg-white/10 border border-amber-400/40 shadow-[0_0_15px_rgba(212,175,55,0.2)]' 
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* بخش سمت راست: دکمه تماس، سوئیچ زبان و دکمه موبایل */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* دکمه ارتباط سریع WhatsApp / Contact */}
          <Link
            href="https://wa.me/19342032497"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/30 text-amber-300 hover:text-white hover:border-amber-400 text-xs font-semibold tracking-wider uppercase transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            {isRtl ? 'ارتباط مستقیم' : 'Connect VIP'}
          </Link>

          {/* دکمه تغییر زبان */}
          <Link 
            href={pathname.replace(`/${lang}`, lang === 'en' ? '/fa' : '/en')}
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center bg-zinc-900/80 border border-white/15 hover:border-amber-400/60 rounded-full text-sm md:text-base shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 active:scale-95 transition-all duration-300 group"
            title={lang === 'en' ? 'تغییر به فارسی' : 'Switch to English'}
          >
            <span className="drop-shadow-md group-hover:scale-110 transition-transform">
              {lang === 'en' ? '🇦🇫' : '🇬🇧'}
            </span>
          </Link>

          {/* دکمه منوی موبایل */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-full bg-zinc-900 border border-white/15 text-zinc-300 hover:text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* منوی کشویی موبایل */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 max-w-6xl mx-auto bg-black/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.path || (item.path !== `/${lang}` && pathname.startsWith(item.path));
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-2xl text-sm font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'text-amber-300 bg-amber-400/10 border border-amber-400/30'
                      : 'text-zinc-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-white/10 mt-2">
              <Link
                href="https://wa.me/19342032497"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-bold uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                {isRtl ? 'گفتگوی مستقیم با شاهین صافی' : 'Direct VIP WhatsApp'}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}