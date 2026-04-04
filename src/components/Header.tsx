"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n-config';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  lang: Locale;
}

export default function Header({ lang }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isRtl = lang === 'fa';

  const menuItems = [
    { name: isRtl ? 'هوم' : 'Home', path: '/' },
    { name: isRtl ? 'بلوگ' : 'Blog', path: '/blog' },
    { name: isRtl ? 'ویکتوریس' : 'Victories', path: '/victories' },
  ];

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fa', name: 'فارسی', flag: '🇦🇫' },
  ];

  const currentLang = languages.find(l => l.code === lang);

  const redirectedPathName = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <header className="fixed top-8 left-0 w-full z-50 bg-transparent px-6 md:px-12" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-[1600px] mx-auto grid grid-cols-3 items-center">
        
        {/* ۱. بخش لوگو و نام (سمت چپ در انگلیسی / سمت راست در فارسی) */}
        <div className={`flex ${isRtl ? 'justify-start' : 'justify-start'}`}>
          <Link href={`/${lang}`} className="group flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-safi-gold/20 p-2 pe-6 rounded-2xl hover:border-safi-gold/50 transition-all shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-safi-gold/30">
              <Image src="/logo.jpeg" alt="Safi Logo" fill className="object-cover" />
            </div>
            <h1 className="text-luxury text-lg md:text-xl font-black italic tracking-tighter uppercase whitespace-nowrap">
              Shaheen Safi
            </h1>
          </Link>
        </div>

        {/* ۲. بخش منو (دقیقاً در وسط صفحه) */}
        <div className="flex justify-center">
          <nav className="flex items-center gap-1 bg-safi-gold/10 backdrop-blur-2xl border border-safi-gold/20 p-1.5 rounded-2xl shadow-[0_0_30px_rgba(212,175,55,0.15)]">
            {menuItems.map((item, index) => (
              <Link 
                key={index} 
                href={`/${lang}${item.path}`} 
                className="px-6 py-2 text-gray-300 hover:text-black hover:bg-safi-gold rounded-xl text-xs font-bold uppercase tracking-[0.2em] transition-all duration-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* ۳. بخش زبان (سمت راست در انگلیسی / سمت چپ در فارسی) */}
        <div className={`flex ${isRtl ? 'justify-end' : 'justify-end'}`}>
          <div className="relative">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-3 bg-black/40 backdrop-blur-xl border border-safi-gold/20 px-5 py-3 rounded-2xl hover:border-safi-gold transition-all shadow-xl group"
            >
              <span className="text-xl">{currentLang?.flag}</span>
              <svg 
                className={`w-4 h-4 text-safi-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* لیست کشویی لوکس */}
            {isOpen && (
              <div className={`absolute top-full mt-4 w-44 bg-black/90 backdrop-blur-3xl border border-safi-gold/30 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] animate-in fade-in zoom-in duration-200 ${isRtl ? 'left-0' : 'right-0'}`}>
                {languages.map((l) => (
                  <Link
                    key={l.code}
                    href={redirectedPathName(l.code)}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-5 py-4 hover:bg-safi-gold/20 transition-colors ${lang === l.code ? 'text-safi-gold bg-safi-gold/5' : 'text-gray-400'}`}
                  >
                    <span className="text-sm font-bold uppercase tracking-widest">{l.name}</span>
                    <span className="text-xl">{l.flag}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

      </div>
    </header>
  );
}