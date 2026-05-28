"use client";

import Image from 'next/image';
import Link from 'next/link';
// اصلاح آیکون‌ها برای پایداری و جلوگیری از ارور
import { FaArrowRight, FaBrain, FaBolt, FaClock, FaBullseye, FaBatteryFull, FaMedal } from 'react-icons/fa6';

export default function HighPerformanceHabitsBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Power & Discipline */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            علمِ موفقیت
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          کارآفرینی با <br />
          <span className="text-amber-500 text-luxury">عملکردِ بالا</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          چرا برخی کارآفرینان پیروز می‌شوند در حالی که دیگران دچار فرسودگی می‌شوند؟ تسلط بر عادت‌های فیزیولوژیک و روانشناختی که سوختِ سلطه طولانی‌مدت بر بازار است.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Bio-Hacking Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/entrepreneur-performance/hero.png" 
                alt="عادت‌های عملکرد بالا - شاهین صافی" 
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
                <FaBrain className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">۰۱. بهینه‌سازی شناختی</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                عملکرد بالا به معنای کار کردن در ساعات بیشتر نیست؛ بلکه به معنای استخراج ارزشِ بیشتر از هر ثانیه است. یک کارآفرین نخبه با مغز خود مانند یک سخت‌افزار پیشرفته رفتار می‌کند. این امر مستلزم **تمرکز عمیق (Deep Work)** است. با حذف "پس‌مانده‌های توجه" و تمرکز بر یک هدف تاثیرگذار در هر لحظه، شما از رقبا پیشی می‌گیرید.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                خستگی از تصمیم‌گیری (Decision fatigue)، قاتل خاموشِ امپراتوری‌هاست. افرادِ برتر، کارهای پیش‌پا افتاده را خودکار می‌کنند تا انرژی شناختی اصلی خود را برای تصمیمات استراتژیک ذخیره نمایند.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "انضباط، پلی است بین اهداف و دستاوردها. در محیط‌های پرریسک، عادت‌های شما تنها بیمه‌ی شما هستند."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaBolt className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">حسابرسی انرژی</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              مدیریت انرژی، نه زمان. شناسایی ساعات اوج بیولوژیک برای حل سخت‌ترین مسائل زمانی که بیشترین هوشیاری را دارید.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaBullseye className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">وضوح رادیکال</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              دانستن اینکه موفقیت دقیقاً امروز، این ماه و این دهه چه شکلی است. بدون وضوح، سرعت بی‌فایده است.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaBatteryFull className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">استراحت استراتژیک</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              ریکاوریِ حرفه‌ای بخشی از کارِ حرفه‌ای است. افراد موفق دچار فروپاشی نمی‌شوند؛ آن‌ها هدفمند ریکاوری می‌کنند.
            </p>
          </section>
        </div>

        {/* Section 3: The Framework */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">چارچوبِ یک <span className="text-amber-500">برنده</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="flex gap-6 items-start justify-start">
                <FaClock className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>بلاک‌بندی زمانی:</strong> اختصاص بلوک‌های زمانی مشخص برای خلاقیت، مدیریت و بازتاب.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaMedal className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>وسواسِ نتیجه:</strong> اندازه‌گیری عملکرد بر اساس نتایجِ کسب شده، نه صرفاً لیست انجام کارها.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-r-2 border-amber-500/30 pr-10 order-1 lg:order-2">
              "شما تا سطح اهداف‌تان بالا نمی‌روید؛ بلکه تا سطح سیستم‌هایتان سقوط می‌کنید. سیستم‌هایی بسازید که شکست را غیرممکن کنند."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             روزت را تسخیر کن. <br />
             <span className="text-amber-500 text-luxury">میراث خودت را بساز.</span>
          </blockquote>
          
          <div className="pt-12">
            <Link 
              href="/fa" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500 flex-row-reverse"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">بازگشت به هاب</span>
              <FaArrowRight className="rotate-180 group-hover:-translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          نشر عملکرد استراتژیک صافی • ۲۰۲۶
        </p>
      </footer>
    </div>
  );
}