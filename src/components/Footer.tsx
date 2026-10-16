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
      title: isRtl ? "اکوسیستم و هلدینگ" : "ECOSYSTEM & VENTURES",
      items: [
        { name: "Safi International Capital LTD", link: "https://safiinternationalcapitalltd.site" },
        { name: "SafiPay", link: "https://safipay.net" },
        { name: "Safi TopUp", link: "https://safitopup.site" },
        { name: "ZEV App", link: "https://www.zevapp.com" },
        { name: "Safi Academy", link: "https://safiacademy.org" },
        { name: "SafiPro", link: "https://safipro.site" },
      ]
    },
    quickLinks: {
      title: isRtl ? "دسترسی سریع" : "QUICK LINKS",
      items: [
        { name: isRtl ? "صفحه اصلی" : "Home", link: `/${lang}` },
        { name: isRtl ? "درباره من" : "About", link: `/${lang}/about` },
        { name: isRtl ? "اکوسیستم و خدمات" : "Ecosystem & Services", link: `/${lang}/services` },
        { name: isRtl ? "پروژه‌ها و سرمایه‌گذاری" : "Ventures", link: `/${lang}/victories` },
        { name: isRtl ? "رزومه کامل" : "Executive CV", link: `/${lang}/cv` },
        { name: isRtl ? "وبلاگ تخصصی" : "Blog", link: `/${lang}/blog` },
        { name: isRtl ? "سیاست حفظ حریم خصوصی" : "Privacy Policy", link: `/${lang}/privacy` },
        { name: isRtl ? "شرایط و ضوابط" : "Terms of Service", link: `/${lang}/terms` },
        { name: isRtl ? "تماس مستقیم" : "Direct Contact", link: "https://wa.me/19342032497" },
      ]
    }
  };

  // لیست کامل سوشال مدیا و مراجع هویتی
  const socialMedia = [
    { 
      name: 'LinkedIn', 
      icon: 'M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-1.47 0-2.68 1-3.26 2.45V10h-2.8v9h2.8v-5c0-1.1.9-2 2-2s2 .9 2 2v5h2.8zM7.1 8a1.3 1.3 0 100-2.6 1.3 1.3 0 000 2.6zm1.4 11V10H5.7v9h2.8z', 
      path: 'https://www.linkedin.com/in/shaheen-safi-b73a30299' 
    },
    { 
      name: 'X', 
      icon: 'M18.9 1.1h3.7L14.5 10.3l9.5 12.6h-7.5l-5.8-7.7-6.7 7.7H.3l8.6-9.8L0 1.1h7.7l5.2 6.9 6-6.9zm-1.3 20.4h2.1L6.1 3.2H3.9L17.6 21.5z', 
      path: 'https://x.com/shaheensafi011' 
    },
    { 
      name: 'Wikidata (Knowledge Graph)', 
      icon: 'M1.5 4.5h2.2v15H1.5zm4.8 0h2.2v15H6.3zm4.8 0h2.2v15h-2.2zm4.8 0h6.6v15h-6.6z', 
      path: 'https://www.wikidata.org/wiki/Q138427366' 
    },
    { 
      name: 'TED', 
      icon: 'M0 8.5h6.5v2.2H4.4v4.8H2.1v-4.8H0V8.5zm7.3 0h5.8v2H9.4v.6h3v1.8h-3v.7h3.7v2H7.3V8.5zm6.8 0h3.6c2.4 0 4 1.4 4 3.5s-1.6 3.5-4 3.5h-3.6V8.5zm2.3 5h1.2c1.1 0 1.8-.6 1.8-1.5s-.7-1.5-1.8-1.5h-1.2v3z', 
      path: 'https://www.ted.com/profiles/51476914' 
    },
    { 
      name: 'Medium', 
      icon: 'M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z', 
      path: 'https://medium.com/@shaheensafi09' 
    },
    { 
      name: 'Instagram', 
      icon: 'M12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zM17.3 6.7a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 2.2c3.2 0 3.6 0 4.8.1a6.6 6.6 0 012.2.4 3.9 3.9 0 012.3 2.3c.3.7.4 1.4.4 2.2.1 1.2.1 1.6.1 4.8 0 3.2 0 3.6-.1 4.8a6.6 6.6 0 01-.4 2.2 3.9 3.9 0 01-2.3 2.3c-.7.3-1.4.4-2.2.4-1.2.1-1.6.1-4.8.1-3.2 0-3.6 0-4.8-.1a6.6 6.6 0 01-2.2-.4 3.9 3.9 0 01-2.3-2.3 6.6 6.6 0 01-.4-2.2c-.1-1.2-.1-1.6-.1-4.8 0-3.2 0-3.6.1-4.8.1-1.2.1-1.6.1-4.8z', 
      path: 'https://www.instagram.com/top_g_official1' 
    },
    { 
      name: 'TikTok', 
      icon: 'M12.5 0H9v17.2c0 2.1-1.7 3.8-3.8 3.8s-3.8-1.7-3.8-3.8 1.7-3.8 3.8-3.8c.5 0 .9.1 1.3.2V9.8c-.4-.1-.8-.2-1.3-.2C2.4 9.6 0 12 0 15c0 3 2.4 5.4 5.4 5.4S10.8 18 10.8 15V6c1.5 1.1 3.3 1.8 5.2 1.8v-3.6c-1.5 0-2.8-.8-3.5-2.2z', 
      path: 'https://www.tiktok.com/@safi_sahib6' 
    },
    { 
      name: 'WhatsApp', 
      icon: 'M12 .5C5.7.5.5 5.7.5 12c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.5-5.2 11.5-11.5S18.3.5 12 .5zm6.5 16.5c-.3.4-.9.7-1.3.8-.3.1-1 .2-1.8-.2-.8-.4-1.6-.9-2.3-1.5-2.4-1.9-4.1-4.7-4.1-4.7s-.6-.8-.6-1.3.1-.9.3-1.1c.2-.2.5-.3.6-.3s.3 0 .4.1c.1.1.2.3.2.4l.6 1.4c.1.2 0 .5-.1.6s-.3.3-.3.3-.1.1 0 .2l.2.3c.4.7.9 1.2 1.4 1.7.5.5 1.1.9 1.7 1.2l.3.2c.1.1.2 0 .3-.1.1-.1.3-.3.3-.3s.1-.2.2-.1.3 0 .4.1c.1 0 .9.4.9.4s.2.1.2.3-.1.4-.2.6z', 
      path: 'https://wa.me/19342032497' 
    },
    { 
      name: 'Facebook', 
      icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', 
      path: 'https://www.facebook.com/share/18h8Drdg6z/' 
    },
  ];

  return (
    <footer className="w-full bg-black border-t border-zinc-900 pt-16 pb-10 px-3 md:px-6" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="w-[98%] max-w-[1600px] mx-auto">
        
        {/* ردیف اصلی فوتر */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* ستون ۱: برند و بیوگرافی کوتاه */}
          <div className="space-y-6">
            <Link href={`/${lang}`}>
              <h2 className="text-luxury text-3xl font-black italic uppercase tracking-tighter">Shaheen Safi</h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-light">
              {isRtl 
                ? "شاهین صافی — کارآفرین بین‌المللی فین‌تک، تحلیل‌گر بازارهای مالی (CFTe) و بنیان‌گذار هلدینگ Safi International Capital LTD، صافی‌پی و اکوسیستم صافی." 
                : "Shaheen Safi — Global Fintech Entrepreneur, Certified Financial Technician (CFTe), Founder & Director of Safi International Capital LTD, SafiPay & Safi Ecosystem."}
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] font-mono text-[#D4AF37]">
              <span className="px-2.5 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-md">
                {isRtl ? "تکنسین مالی تاییدشده (CFTe)" : "Certified Financial Technician"}
              </span>
              <span className="px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-zinc-400">
                Istanbul Technical University
              </span>
            </div>
          </div>

          {/* ستون ۲: پروژه‌ها و شرکت‌ها */}
          <div className="space-y-6">
            <h3 className="text-safi-gold text-sm font-bold tracking-widest">{footerData.services.title}</h3>
            <ul className="space-y-3">
              {footerData.services.items.map(item => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-400 hover:text-safi-gold text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span>{item.name}</span>
                    <svg className="w-3 h-3 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۳: لینک‌های سریع */}
          <div className="space-y-6">
            <h3 className="text-safi-gold text-sm font-bold tracking-widest">{footerData.quickLinks.title}</h3>
            <ul className="space-y-3">
              {footerData.quickLinks.items.map(item => (
                <li key={item.name}>
                  <Link href={item.link} className="text-gray-400 hover:text-safi-gold text-sm transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ستون ۴: باکس شخصی و گراف هویت */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-zinc-900/60 backdrop-blur-md border border-safi-gold/20 p-5 rounded-3xl w-full max-w-[320px] group hover:border-safi-gold/40 transition-all shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-safi-gold/30 shrink-0">
                  <Image src="/shaheensafi.jpeg" alt="Shaheen Safi" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold">Shaheen Safi</h4>
                  <p className="text-safi-gold text-[10px] uppercase tracking-tighter">
                    {isRtl ? "بنیان‌گذار و مدیر ارشد" : "Founder & Director"}
                  </p>
                  <p className="text-zinc-500 text-[9px] font-mono">
                    Safi International Capital LTD
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-start">
                {socialMedia.map((social) => (
                  <Link 
                    key={social.name} 
                    href={social.path} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 bg-black/40 rounded-xl hover:bg-safi-gold/10 border border-zinc-800 transition-all group/icon" 
                    title={social.name}
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-400 group-hover/icon:fill-safi-gold transition-colors">
                      <path d={social.icon} />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* لنگر حقوقی و مدارک ثبتی شرکتی (Corporate Anchor & Institutional Verification Block) */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-zinc-950 via-zinc-900/40 to-zinc-950 border border-zinc-800/80 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-widest font-bold">
                  {isRtl ? "لنگر حقوقی و شرکت مادر در گراف دانش گوگل" : "INSTITUTIONAL CORPORATE ANCHOR • GOOGLE KNOWLEDGE GRAPH"}
                </span>
              </div>
              <h4 className="text-white text-lg font-bold">
                Safi International Capital LTD
              </h4>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed max-w-3xl">
                {isRtl ? (
                  <>
                    ثبت شده در اداره شرکت‌های بریتانیا (انگلستان و ولز) با شناسه ثبتی <strong className="text-white font-mono">Company Number: 17063286</strong> • کد مالیاتی: <span className="text-zinc-300 font-mono">85677 13611</span> • شناسه بین‌المللی <span className="text-zinc-300 font-mono">DUNS: 234621356</span>
                    <br />
                    آدرس دفتر مرکزی لندن: <span className="text-zinc-300 font-mono">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span>
                  </>
                ) : (
                  <>
                    Incorporated in England and Wales under Company Registration Number: <strong className="text-white font-mono">17063286</strong> • Tax ID: <span className="text-zinc-300 font-mono">85677 13611</span> • DUNS: <span className="text-zinc-300 font-mono">234621356</span>
                    <br />
                    Registered Office: <span className="text-zinc-300 font-mono">71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom</span>
                  </>
                )}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://find-and-update.company-information.service.gov.uk/company/17063286"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300 hover:text-white text-xs font-mono transition-all flex items-center gap-2"
              >
                <span>UK Companies House</span>
                <span className="text-emerald-400 font-bold">✓ CRN 17063286</span>
              </a>

              <a
                href="https://www.wikidata.org/wiki/Q139502306"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 rounded-xl text-[#D4AF37] text-xs font-mono transition-all flex items-center gap-2"
              >
                <span>Wikidata Corp</span>
                <span className="font-bold">Q139502306</span>
              </a>

              <a
                href="mailto:info@safiinternationalcapitalltd.site"
                className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-xl text-zinc-300 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
              >
                <span>Email:</span>
                <span className="text-[#D4AF37]">info@safiinternationalcapitalltd.site</span>
              </a>
            </div>
          </div>
        </div>

        {/* نوار پایانی کپی‌رایت و شهرهای استراتژیک */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-[11px] font-mono tracking-wider">
          <p>{isRtl ? `© ${currentYear} تمامی حقوق محفوظ است — شاهین صافی` : `© ${currentYear} ALL RIGHTS RESERVED — SHAHEEN SAFI`}</p>
          
          <div className="flex items-center gap-6 text-[11px] font-mono">
            <Link href={`/${lang}/privacy`} className="hover:text-amber-400 transition-colors">
              {isRtl ? "سیاست حفظ حریم خصوصی" : "Privacy Policy"}
            </Link>
            <span className="text-zinc-800">•</span>
            <Link href={`/${lang}/terms`} className="hover:text-amber-400 transition-colors">
              {isRtl ? "شرایط و ضوابط استفاده" : "Terms of Service"}
            </Link>
          </div>

          <div className="flex gap-6 font-bold text-zinc-600 text-[10px] tracking-widest uppercase">
            <span>LONDON</span>
            <span>ISTANBUL</span>
            <span>KABUL</span>
          </div>
        </div>

      </div>
    </footer>
  );
}