"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaLink, FaShieldHeart, FaHandshake, FaDatabase, FaLayerGroup, FaCube } from 'react-icons/fa6';

export default function BlockchainUtilityBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Cinematic Title */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            پروتکل اعتماد خالص
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          بلاکچین: فراتر از <br />
          <span className="text-amber-500 text-luxury">ارز دیجیتال</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          از ۰ تا ۱۰۰: درک اینکه چرا بلاکچین مهم‌ترین اختراع بشر پس از اینترنت است و چگونه بی‌صدا در حال بازنویسی قوانین دنیای فیزیکی است.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: What is it really? (The 0-100 Intro) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/blockchain-utility/hero.png" 
                alt="کاربردهای بلاکچین - شاهین صافی" 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 pt-4 text-right order-1 lg:order-2">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white flex items-center gap-4 group justify-start">
                <FaCube className="text-amber-500 group-hover:rotate-90 transition-transform duration-500" />
                <span className="border-b-2 border-amber-500/20">۰۱. دفتر کل تغییرناپذیر</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                برای درک بلاکچین، لحظه‌ای بیت‌کوین را فراموش کنید. یک دفترچه یادداشت دیجیتال غول‌پیکر را تصور کنید که همه می‌توانند آن را ببینند، اما هیچ‌کس نمی‌تواند چیزی را از آن پاک کند. هر بار که اتفاقی می‌افتد — قراردادی امضا می‌شود، خانه‌ای فروخته می‌شود یا الماسی استخراج می‌گردد — در این دفترچه با "جوهر دائمی" نوشته می‌شود.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                از آنجایی که این دفترچه به‌طور همزمان روی هزاران کامپیوتر نگهداری می‌شود، شما برای تأیید صحتِ یک ورودی به بانک، وکیل یا دولت نیاز ندارید. **ریاضیات** آن را تأیید می‌کند. این همان نقطه چرخش از "اعتماد به انسان" به "اعتماد به محاسبات" است.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "بلاکچین فقط درباره پول نیست؛ بلکه درباره این است که در دنیای دیجیتال، مالکیتِ حقیقت در دست کیست."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Real World Utilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaHandshake className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">قراردادهای هوشمند</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              توافق‌نامه‌های خوداجرا که در آن‌ها کد، هم قاضی است و هم مجری. بدون واسطه، بدون تأخیر و بدون اختلاف‌نظر.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaLink className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">زنجیره تأمین</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              غذای خود یا داروهایتان را از مرحله بذر تا سفره ردیابی کنید. شفافیت مطلق در یک دنیای جهانی شده.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaShieldHeart className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">هویت دیجیتال</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              مالک داده‌های خود باشید. بدون نیاز به تحویل پاسپورت یا اطلاعات خصوصی به شرکت‌های بزرگ، ثابت کنید چه کسی هستید.
            </p>
          </section>
        </div>

        {/* Section 3: The Architecture of Future */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">چرا این موضوع <span className="text-amber-500">اهمیت دارد؟</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="flex gap-6 items-start">
                <FaDatabase className="text-amber-500 mt-2" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>تمرکززدایی:</strong> قدرت دیگر در یک سرور واحد متمرکز نیست؛ بلکه توزیع شده است و این امر هک یا دست‌کاری آن را تقریباً غیرممکن می‌کند.</p>
              </div>
              <div className="flex gap-6 items-start">
                <FaLayerGroup className="text-amber-500 mt-2" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>توکن‌سازی:</strong> تصور کنید مالک ۱٪ از یک هتل لوکس در لندن یا یک تابلوی نقاشی کمیاب از پیکاسو از طریق یک توکن دیجیتال باشید. دارایی‌های دنیای واقعی در حال نقدشونده شدن هستند.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-r-2 border-amber-500/30 pr-10 order-1 lg:order-2 text-right">
              "ما در حال حرکت از اینترنتِ اطلاعات — که در آن داده‌ها را کپی و ارسال می‌کنیم — به سمت اینترنتِ ارزش هستیم — جایی که مالکیت را فوراً و به شکلی امن جابه‌جا می‌کنیم."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             انقلاب در تلویزیون پخش نخواهد شد؛ <br />
             <span className="text-amber-500">بلکه هش (Hash) خواهد شد.</span>
          </blockquote>
          
          <div className="pt-12 text-center">
            <Link 
              href="/fa" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500 flex-row-reverse"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">بیشتر کاوش کنید</span>
              <FaArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          نشر دیجیتال صافی • ۲۰۲۶
        </p>
      </footer>
    </div>
  );
}