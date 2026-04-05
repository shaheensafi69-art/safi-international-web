"use client";

import Link from 'next/link';
import Image from 'next/image';

type Locale = 'en' | 'fa';

interface FooterProps {
  lang: Locale;
}

export default function Footer({ lang }: FooterProps) {
  const isRtl = lang === 'fa';
  const currentYear = new Date().getFullYear();

  // بخش خدمات و پروژه‌ها
  const footerData = {
    services: {
      title: isRtl ? "خدمات و پروژه‌ها" : "SERVICES & PROJECTS",
      items: [
        { name: "SafiPay", link: "https://safipay.net" },
        { name: "Safi TopUp", link: "https://safitopup.site" },
        { name: "Safi International Capital", link: "#" },
        { name: "SafiPro", link: "https://safipro.site" },
      ]
    },
    quickLinks: {
      title: isRtl ? "دسترسی سریع" : "QUICK LINKS",
      items: [
        { name: isRtl ? "صفحه اصلی" : "Home", link: `/${lang}` },
        { name: isRtl ? "وبلاگ" : "Blog", link: `/${lang}/blog` },
        { name: isRtl ? "ویکتوریس" : "Victories", link: `/${lang}/victories` },
        { name: isRtl ? "تماس" : "Contact", link: "#" },
      ]
    }
  };

  // لیست کامل سوشال مدیا با لینک‌های جدید شما
  const socialMedia = [
    { name: 'LinkedIn', icon: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-1.47 0-2.68 1-3.26 2.45V10h-2.8v9h2.8v-5c0-1.1.9-2 2-2s2 .9 2 2v5h2.8zM7.1 8a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6zm1.4 11V10H5.7v9h2.8z', path: 'https://www.linkedin.com/in/shaheen-safi-b73a30299' },
    { name: 'TikTok', icon: 'M12.5 0H9v17.2c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8c.5 0 .9.1 1.3.2V9.8c-.4-.1-.8-.2-1.3-.2C2.4 9.6 0 12 0 15c0 3 2.4 5.4 5.4 5.4S10.8 18 10.8 15V6c1.5 1.1 3.3 1.8 5.2 1.8v-3.6c-1.5 0-2.8-.8-3.5-2.2z', path: 'https://www.tiktok.com/@safi_sahib6' },
    { name: 'WhatsApp', icon: 'M12 .5C5.7.5.5 5.7.5 12c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.5-5.2 11.5-11.5S18.3.5 12 .5zm6.5 16.5c-.3.4-.9.7-1.3.8-.3.1-1 .2-1.8-.2-.8-.4-1.6-.9-2.3-1.5-2.4-1.9-4.1-4.7-4.1-4.7s-.6-.8-.6-1.3.1-.9.3-1.1c.2-.2.5-.3.6-.3s.3 0 .4.1c.1.1.2.3.2.4l.6 1.4c.1.2 0 .5-.1.6s-.3.3-.3.3-.1.1 0 .2l.2.3c.4.7.9 1.2 1.4 1.7.5.5 1.1.9 1.7 1.2l.3.2c.1.1.2 0 .3-.1.1-.1.3-.3.3-.3s.1-.2.2-.1.3 0 .4.1c.1 0 .9.4.9.4s.2.1.2.3-.1.4-.2.6z', path: 'https://wa.me/19342032497' },
    { name: 'Instagram', icon: 'M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zM17.3 6.7a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 2.2c3.2 0 3.6 0 4.8.1a6.6 6.6 0 012.2.4 3.9 3.9 0 012.3 2.3c.3.7.4 1.4.4 2.2.1 1.2.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8a6.6 6.6 0 01-.4 2.2 3.9 3.9 0 01-2.3 2.3c-.7.3-1.4.4-2.2.4-1.2.1-1.6.1-4.8.1-3.2 0-3.6 0-4.8-.1a6.6 6.6 0 01-2.2-.4 3.9 3.9 0 01-2.3-2.3 6.6 6.6 0 01-.4-2.2c-.1-1.2-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-1.2.1-1.6.1-4.8 0-3.2 0-3.6.1-4.8.1-1.2.1-1.6.1-4.8z', path: 'https://www.instagram.com/top_g_official1' },
    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', path: 'https://www.facebook.com/share/18h8Drdg6z/' },
    { name: 'WeChat', icon: 'M12.2 0a11 11 0 00-7.8 19l-3.2 3a.5.5 0 00.3.9l.3-.1 5.3-2c1.7.6 3.4.9 5.1.9 6 0 11-4.9 11-11S18.2 0 12.2 0zm-5.8 8c-.6 0-1-.5-1-1.2a1.1 1.1 0 112 0c0 .7-.4 1.2-1 1.2zm6.2 0c-.6 0-1-.5-1-1.2a1.1 1.1 0 112 0c0 .7-.4 1.2-1 1.2z', path: '#' },
    { name: 'X', icon: 'M18.9 1.1h3.7L14.5 10.3l9.5 12.6h-7.5l-5.8-7.7-6.7 7.7H.3l8.6-9.8L0 1.1h7.7l5.2 6.9 6-6.9zm-1.3 20.4h2.1L6.1 3.2H3.9L17.6 21.5z', path: 'https://x.com/shaheensafi011' },
  ];

  return (
    <footer className="w-full bg-black border-t border-zinc-900 pt-20 pb-10 px-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* ستون ۱: برند */}
          <div className="space-y-6">
            <Link href={`/${lang}`}>
              <h2 className="text-luxury text-3xl font-black italic uppercase tracking-tighter">Shaheen Safi</h2>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {isRtl ? "پیشرو در ارائه خدمات فین‌تک و توسعه سیستم‌های مالی مدرن برای آینده‌ای روشن‌تر." : "Leading in fintech services and developing modern financial systems for a brighter future."}
            </p>
          </div>

          {/* ستون ۲: پروژه‌ها */}
          <div className="space-y-6">
            <h3 className="text-safi-gold text-sm font-bold tracking-widest">{footerData.services.title}</h3>
            <ul className="space-y-3">
              {footerData.services.items.map(item => (
                <li key={item.name}><a href={item.link} target="_blank" className="text-gray-400 hover:text-safi-gold text-sm transition-colors">{item.name}</a></li>
              ))}
            </ul>
          </div>

          {/* ستون ۳: لینک‌های سریع */}
          <div className="space-y-6">
            <h3 className="text-safi-gold text-sm font-bold tracking-widest">{footerData.quickLinks.title}</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.items.map(item => (
                <li key={item.name}><Link href={item.link} className="text-gray-400 hover:text-safi-gold text-sm transition-colors">{item.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* ستون ۴: باکس شخصی */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-zinc-900/50 backdrop-blur-md border border-safi-gold/20 p-5 rounded-3xl w-full max-w-[300px] group hover:border-safi-gold/40 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-safi-gold/30">
                  <Image src="/shaheensafi.jpeg" alt="Shaheen Safi" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Shaheen Safi</h4>
                  <p className="text-safi-gold text-[10px] uppercase tracking-tighter">{isRtl ? "بنیانگذار صافی گروپ" : "Founder of Safi Group"}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-start">
                {socialMedia.map((social) => (
                  <Link key={social.name} href={social.path} target="_blank" className="p-2 bg-black/40 rounded-xl hover:bg-safi-gold/10 border border-zinc-800 transition-all group/icon" title={social.name}>
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-500 group-hover/icon:fill-safi-gold transition-colors">
                      <path d={social.icon} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-600 text-[10px] uppercase tracking-[0.2em]">
          <p>{isRtl ? `© ${currentYear} تمامی حقوق محفوظ است` : `© ${currentYear} ALL RIGHTS RESERVED`}</p>
          <div className="flex gap-6 font-bold">
            <span>LONDON</span>
            <span>ISTANBUL</span>
            <span>KABUL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}