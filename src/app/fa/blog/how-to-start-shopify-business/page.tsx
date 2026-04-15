"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaShopify, FaRocket, FaCreditCard, FaChartLine } from 'react-icons/fa6';

export default function ShopifyBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Title & Intro */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            راهنمای استراتژیک تجارت الکترونیک
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter">
          ساخت امپراتوری در <br />
          <span className="text-luxury">شاپیفای</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
          چگونه از یک ایده خام به یک برند بین‌المللی برسیم؟ نقشه راه کارآفرینان برای تسخیر بازارهای دیجیتال.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: Image & Intro - Designed for Portrait Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/shopify-start.jpeg" 
                alt="شروع تجارت در شاپیفای - شاهین صافی" 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 pt-4">
            <div className="space-y-6 text-right">
              <h2 className="text-4xl font-black text-white flex items-center gap-4 group">
                <FaShopify className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">۰۱. انتخاب محصول هوشمندانه</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                بسیاری از افراد با کپی کردن محصولات ترند شده شکست می‌خورند. به عنوان یک کارآفرین، باید به دنبال محصولی باشید که مشکلی را حل کند یا سبکی از زندگی را نمایندگی کند. در دنیای امروز، برندهایی برنده هستند که فراتر از کالا، یک "راه حل" یا "هویت" می‌فروشند.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "در تجارت مدرن، محصول شما فقط یک کالا نیست؛ بلکه داستانی است که مشتری دوست دارد بخشی از آن باشد. کدنویسیِ این داستان، هنر شماست."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Store Design & Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          <section className="p-12 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-500 group">
            <FaRocket className="text-amber-500 mb-8 group-hover:-translate-y-2 transition-transform" size={40} />
            <div>
              <h2 className="text-3xl font-black mb-6">۰۲. طراحی؛ ویترین اعتبار</h2>
              <p className="text-zinc-400 leading-8 text-lg text-justify">
                در دنیای شاپیفای، اعتماد (Trust) گران‌ترین ارز است. فروشگاه شما باید سریع، لوکس و بی‌نقص باشد. از تصاویر با کیفیت و استایل مینیمال استفاده کنید تا مشتری در نگاه اول قدرت برند شما را حس کند.
              </p>
            </div>
          </section>

          <section className="p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-all duration-500">
            <FaCreditCard className="text-amber-500 mb-8" size={40} />
            <div>
              <h2 className="text-3xl font-black mb-6">۰۳. سیستم پرداخت؛ قلب تپنده</h2>
              <p className="text-zinc-400 leading-8 text-lg text-justify">
                بزرگترین مانع در بازارهای نوظهور، سیستم پرداخت است. یک بیزنس عالی بدون سیستم پرداخت روان، مثل یک ماشین فراری بدون بنزین است. استفاده از راهکارهای هوشمند مثل <span className="text-white font-bold">SafiPay</span> نقدینگی شما را تضمین می‌کند.
              </p>
            </div>
          </section>
        </div>

        {/* Section 3: Final Strategy */}
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-zinc-300 border-x-2 border-amber-500/30 px-12 py-4">
             "موانع سیستماتیک را با استراتژی‌های دیجیتال دور بزنید."
          </blockquote>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black flex items-center justify-center gap-4">
              <FaChartLine className="text-amber-500" /> ۰۴. مقیاس‌پذیری جهانی
            </h2>
            <p className="text-zinc-400 leading-9 text-xl font-light max-w-3xl mx-auto">
              وقتی سیستم شروع به کار کرد، وقت آن است که ترافیک هدفمند ایجاد کنید. از قدرت TikTok و Instagram برای گفتن داستان برندتان استفاده کنید. تجارت در شاپیفای یک مسابقه دو سرعت نیست، بلکه ماراتنی است که فقط جسورترین‌ها در آن پیروز می‌شوند.
            </p>
          </div>

          {/* Call to Action - Back Link */}
          <div className="pt-24">
            <Link 
              href="/fa" 
              className="group inline-flex items-center gap-6 px-10 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest">بازگشت به خانه</span>
              <FaArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Simple Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          Safi Digital Publication • 2026
        </p>
      </footer>
    </div>
  );
}