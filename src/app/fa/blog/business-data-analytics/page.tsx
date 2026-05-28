"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMagnifyingGlassChart, FaLightbulb, FaGear, FaChartLine, FaDatabase, FaBullseye } from 'react-icons/fa6';

export default function BusinessDataAnalyticsBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Intelligence Focus */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            علم مقیاس‌پذیری
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          داده: سوختِ محرکِ <br />
          <span className="text-amber-500 text-luxury">رشد کسب‌وکار</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          در عصر مدرن، شهود یک کالای لوکس است، اما داده یک ضرورت. کشف کنید که چگونه اطلاعات خام را به یک امپراتوری رقابتی تبدیل کنید.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Core Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/business-data-analytics/hero.png" 
                alt="تحلیل داده‌های کسب‌وکار - شاهین صافی" 
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
                <FaMagnifyingGlassChart className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">۰۱. فراتر از سطح</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                بسیاری از کسب‌وکارها در دریایی از داده‌ها غرق شده‌اند اما تشنه‌ی بینش (Insight) هستند. تحلیل داده‌ها فرآیند استخراج "چرا" از دلِ "چیست" است. چرا یک مشتری ریزش کرد؟ چرا یک کمپین موفق شد؟ وقتی قفل این پاسخ‌ها را باز می‌کنید، حدس و گمان را متوقف کرده و سلطه بر بازار را آغاز می‌کنید.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                رشد استراتژیک بر پایه **مدل‌سازی پیش‌بینانه** بنا شده است. با تحلیل رفتارهای گذشته، کسب‌وکارها می‌توانند روندهای آینده را با دقت جراحی پیش‌بینی کنند و منابع خود را در جایی تخصیص دهند که بیشترین نرخ بازگشت سرمایه (ROI) را داشته باشد.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "داده‌ها نفتِ جدید هستند، اما هوشمندی، پالایشگاهی است که آن‌ها را به ثروت تبدیل می‌کند."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars of Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaDatabase className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">تحلیل توصیفی</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              درک گذشته. در کسب‌وکار شما چه اتفاقی افتاده است؟ شناسایی معیارها و عملکرد تاریخی.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaLightbulb className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">تحلیل پیش‌بینانه</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              پیش‌بینی آینده. احتمالاً چه اتفاقی خواهد افتاد؟ استفاده از هوش مصنوعی برای شناسایی روندها قبل از همه‌گیر شدن.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaGear className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">تحلیل تجویزی</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              بهینه‌سازی نتیجه. قدم بعدی ما چه باید باشد؟ نقشه راه نهایی برای تصمیم‌گیری‌های خودکار.
            </p>
          </section>
        </div>

        {/* Section 3: Strategic Growth Impact */}
        <div className="mb-32 space-y-12 bg-gradient-to-br from-zinc-900/40 to-black p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">پیروزی با <span className="text-amber-500">دقتِ بالا</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="flex gap-6 items-start">
                <FaBullseye className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>جذب مشتری:</strong> تحلیل داده‌ها پروفایل دقیق سودآورترین مشتریان شما را فاش می‌کند و اجازه می‌دهد آن‌ها را با بازاریابی لیزری هدف قرار دهید.</p>
              </div>
              <div className="flex gap-6 items-start">
                <FaChartLine className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>بهره‌وری عملیاتی:</strong> زنجیره تأمین خود را بهینه کنید و با شناسایی گلوگاه‌ها از طریق پایش لحظه‌ای داده‌ها، هدررفت منابع را کاهش دهید.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-r-2 border-amber-500/30 pr-10 order-1 lg:order-2 text-right">
              "در دنیایی پر از سر و صدا، داده تنها سیگنالی است که هرگز دروغ نمی‌گوید. رشد دیگر یک بازی مبتنی بر شانس نیست؛ بلکه یک بازیِ ریاضیاتی است."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             آنچه مهم است را اندازه‌گیری کنید. <br />
             <span className="text-amber-500 text-luxury">آنچه کار می‌کند را مقیاس دهید.</span>
          </blockquote>
          
          <div className="pt-12 text-center">
            <Link 
              href="/fa" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500 flex-row-reverse"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">بازگشت به خانه</span>
              <FaArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          نشر استراتژیک صافی • ۲۰۲۶
        </p>
      </footer>
    </div>
  );
}