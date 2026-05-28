"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp, FaFacebook, FaMedium } from 'react-icons/fa6';

export default function HomePageFa() {
  const mediumArticles = [
    {
      title: "زیرساخت اعتماد: چگونه SafiPay در حال بازتعریف بانکداری است",
      link: "https://medium.com/@omulbaninmoradi188/the-infrastructure-of-trust-how-safipay-is-redefining-digital-banking-security-in-emerging-markets-439b14641ad5",
      size: "md:col-span-2 md:row-span-2",
      bg: "bg-gradient-to-br from-zinc-900/90 to-black",
      thumb: "/hero.jpg" // می‌توانید اسکرین‌شات مقاله را بگذارید
    },
    {
      title: "آشنایی با شاهین صافی",
      link: "https://medium.com/@omulbaninmoradi188/introduction-10633ed36932",
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-gradient-to-br from-[#D4AF37]/10 to-transparent",
      thumb: null
    },
    {
      title: "تعالی نظارتی در امور مالی دیجیتال",
      link: "https://medium.com/@jsana9033/regulatory-excellence-in-digital-finance-a-case-study-of-safipays-european-operations-5f9a6a1845ad",
      size: "md:col-span-1 md:row-span-2",
      bg: "bg-gradient-to-bl from-zinc-800/80 to-zinc-950",
      thumb: null
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={28} />, link: "https://www.linkedin.com/in/shaheen-safi-b73a30299", color: "text-blue-400", label: "حرفه‌ای" },
    { icon: <FaInstagram size={28} />, link: "https://www.instagram.com/top_g_official1", color: "text-pink-500", label: "لایف‌استایل" },
    { icon: <FaTiktok size={28} />, link: "https://www.tiktok.com/@safi_sahib6", color: "text-white", label: "پشت‌صحنه" },
    { icon: <FaWhatsapp size={28} />, link: "https://wa.me/19342032497", color: "text-emerald-400", label: "مستقیم" },
    { icon: <FaFacebook size={28} />, link: "https://www.facebook.com/share/18h8Drdg6z/", color: "text-blue-600", label: "ارتباط" }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden relative" dir="rtl">
      
      {/* 🌌 Cinematic Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50rem] h-[50rem] bg-[#D4AF37] opacity-[0.04] rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[40rem] h-[40rem] bg-zinc-500 opacity-[0.03] rounded-full blur-[150px] animate-[pulse_12s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10">
        {/* 👑 Hero Section - The "Top G" Introduction */}
        <section className="min-h-screen flex items-center pt-20 pb-20 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
            
            {/* Right Content (Text) */}
            <div className="lg:col-span-7 space-y-10 relative">
              
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)] animate-[float_4s_ease-in-out_infinite]">
                <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
                <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.4em] font-bold">معمار دیجیتال</span>
              </div>
              
              {/* Massive 3D Typography */}
              <div className="relative">
                <h1 className="text-[5rem] sm:text-[7rem] md:text-[9rem] font-black tracking-tighter leading-[0.85] uppercase" dir="ltr">
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-300 to-zinc-600 block drop-shadow-2xl hover:-translate-x-2 transition-transform duration-500 text-right">
                    SHAHEEN
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#D4AF37] via-[#a88721] to-[#5c490f] block drop-shadow-[0_10px_20px_rgba(212,175,55,0.2)] hover:-translate-x-4 transition-transform duration-500 text-right">
                    SAFI
                  </span>
                </h1>
              </div>

              <div className="space-y-8 max-w-2xl relative">
                <div className="absolute -right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] to-transparent opacity-50 rounded-full"></div>
                <p className="text-3xl text-white font-light leading-snug tracking-wide">
                  «من منتظر آینده نمی‌مانم؛ <br/> <span className="font-bold text-[#D4AF37] italic">آن را کدنویسی می‌کنم.</span>»
                </p>
                <p className="text-lg text-zinc-400 font-light leading-relaxed text-justify">
                  از کشف لایه‌های پنهان دارک‌وب در ۶ سالگی تا تأسیس <span className="text-white font-medium border-b border-[#D4AF37]/50 pb-0.5">Safi International Capital</span> در لندن. شاهین صافی نیرویی مهارنشدنی در دنیای فین‌تک است؛ ایده‌پردازی که محدودیت‌های سیستماتیک را به طرحی جامع برای شمول مالی در سطح جهانی تبدیل کرد.
                </p>
                <div className="text-zinc-500 font-mono text-sm tracking-widest border border-zinc-800/50 inline-block px-4 py-2 rounded-lg bg-zinc-900/30">
                  کارآفرین • استراتژیست • معمار SafiPay
                </div>
              </div>

              {/* 🌟 THE CV BUTTON 🌟 */}
              <div className="pt-4 flex flex-wrap gap-6 items-center">
                <Link 
                  href="/fa/cv" 
                  className="group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#aa8822] text-black font-black uppercase tracking-[0.2em] rounded-full overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.6)] hover:scale-[1.02] transition-all duration-500"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative z-10 flex items-center gap-3">
                    <svg className="w-5 h-5 group-hover:-translate-x-2 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    مشاهده رزومه من
                  </span>
                </Link>
                
                <Link href="#footprint" className="group flex items-center gap-3 text-zinc-400 hover:text-white font-mono text-sm tracking-widest uppercase transition-colors">
                  ردپای دیجیتال
                  <span className="w-12 h-px bg-zinc-700 group-hover:bg-[#D4AF37] transition-colors"></span>
                </Link>
              </div>

            </div>

            {/* Left Content - Hero Image */}
            <div className="lg:col-span-5 relative perspective-1000">
              <div className="absolute -inset-10 bg-gradient-to-tl from-[#D4AF37]/20 to-transparent blur-[100px] rounded-full mix-blend-screen" />
              
              {/* Glass Frame around Image */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] p-3 bg-zinc-900/40 backdrop-blur-2xl border border-white/10 shadow-2xl transform transition-transform duration-700 hover:rotate-y-[5deg] hover:rotate-x-[5deg]">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden group">
                  <Image 
                    src="/shaheen4.jpeg" 
                    alt="شاهین صافی مدیرعامل" 
                    fill 
                    className="object-cover transition-all duration-[2s] group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                    priority
                  />
                  {/* Overlay Gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                  
                  <div className="absolute bottom-8 right-8 left-8 text-right">
                    <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                      <p className="text-white font-mono text-xs tracking-widest uppercase mb-1">وضعیت</p>
                      <p className="text-[#D4AF37] font-bold">در حال ساخت آینده مالی</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 🧊 Bento Grid Section - The "Janjalak" Digital Footprint */}
        <section id="footprint" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter">
                ردپای <br/><span className="text-transparent bg-clip-text bg-gradient-to-l from-[#D4AF37] to-zinc-600">دیجیتال</span>
            </h2>
            <p className="text-zinc-500 font-mono text-sm tracking-widest max-w-xs md:text-left">
              افکار، مقالات و اکوسیستمی که توسط صافی ساخته شده است را مرور کنید.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[220px]">
            
            {/* Article Boxes */}
            {mediumArticles.map((article, index) => (
              <Link 
                key={index} 
                href={article.link} 
                target="_blank"
                className={`${article.size} ${article.bg} relative overflow-hidden backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-end hover:border-[#D4AF37]/50 transition-all duration-500 group shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:-translate-y-2`}
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                {article.thumb && (
                  <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-700 scale-105 group-hover:scale-100">
                     <Image src={article.thumb} alt="Preview" fill className="object-cover" />
                     <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                  </div>
                )}
                
                <div className="relative z-10 space-y-6 transform transition-transform duration-500 group-hover:-translate-x-2">
                  <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500">
                    <FaMedium className="text-zinc-400 group-hover:text-black transition-colors duration-500" size={24} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black leading-tight text-zinc-200 group-hover:text-white transition-colors">
                    {article.title}
                  </h3>
                </div>
                
                {/* Read more arrow */}
                <div className="absolute top-10 left-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 bg-white/5 backdrop-blur-md">
                  <svg className="w-4 h-4 text-[#D4AF37] rotate-[-135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </div>
              </Link>
            ))}

            {/* Social Mix - Janjalak Style */}
            {socialLinks.map((social, index) => (
              <Link 
                key={index} 
                href={social.link} 
                target="_blank"
                className="col-span-1 row-span-1 bg-zinc-900/40 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center gap-5 hover:scale-[0.98] transition-all duration-500 hover:bg-zinc-800 hover:border-[#D4AF37]/30 group shadow-lg"
              >
                <div className={`p-4 rounded-full bg-white/5 border border-white/5 group-hover:border-[currentColor] ${social.color} transition-all duration-500 group-hover:shadow-[0_0_20px_currentColor]`}>
                  <div className="transform group-hover:scale-110 transition-transform duration-500">
                    {social.icon}
                  </div>
                </div>
                <span className="text-[11px] font-mono tracking-widest text-zinc-500 group-hover:text-white transition-colors">
                  {social.label}
                </span>
              </Link>
            ))}

            {/* Master Quote Box */}
            <div className="col-span-1 md:col-span-2 row-span-1 border border-[#D4AF37]/20 rounded-[2.5rem] p-10 flex flex-col justify-center bg-gradient-to-bl from-[#D4AF37]/10 via-zinc-900/50 to-black relative overflow-hidden group shadow-[0_10px_30px_rgba(212,175,55,0.05)] backdrop-blur-xl">
              <div className="absolute top-0 left-0 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-700 transform group-hover:scale-110 group-hover:-rotate-12 text-[#D4AF37]">
                <FaMedium size={150} />
              </div>
              <svg className="w-8 h-8 text-[#D4AF37] mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              <p className="italic text-zinc-300 text-right font-serif text-2xl md:text-3xl leading-snug relative z-10 group-hover:text-white transition-colors duration-500">
                «موانع سیستماتیک صرفاً <span className="text-[#D4AF37]">کدهای ضعیفی</span> هستند که منتظر یک معمار بهترند.»
              </p>
            </div>

          </div>
        </section>

        {/* 🎬 Footer */}
        <footer className="py-12 mt-20 border-t border-white/5 relative">
          <div className="absolute top-0 right-1/2 translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent"></div>
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-black tracking-widest text-zinc-800 uppercase" dir="ltr">Safi Group</h3>
            <p className="text-zinc-500 font-mono text-[11px] uppercase tracking-[0.5em]" dir="ltr">
              London <span className="text-[#D4AF37] mx-2">•</span> Kabul <span className="text-[#D4AF37] mx-2">•</span> Istanbul <span className="text-[#D4AF37] mx-2">•</span> Dubai <span className="text-[#D4AF37] mx-2">•</span> Global Hub
            </p>
            <p className="text-zinc-700 text-xs mt-8 font-mono" dir="ltr">
              © {new Date().getFullYear()} Shaheen Safi. All Systems Operational.
            </p>
          </div>
        </footer>
      </div>

      {/* Embedded Styles for smooth floating animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </div>
  );
}