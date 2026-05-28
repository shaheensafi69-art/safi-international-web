"use client";

import Image from 'next/image';
import Link from 'next/link';
// تغییر FaGlobeAmericas به FaGlobe
import { FaArrowRight, FaPlaneDeparture, FaLaptopCode, FaGlobe, FaUnlockKeyhole, FaParachuteBox, FaCompass } from 'react-icons/fa6';

export default function DigitalNomadFreedomBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Adventure & Freedom */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold text-center">
            دنیا، دفتر کار شماست
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          دیجیتال نومدها: <br />
          <span className="text-amber-500 text-luxury">آزادیِ مطلق</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          جداسازی درآمد از مکان جغرافیایی. چگونه کارآفرینان مدرن از فین‌تک جهانی برای زندگی بدون مرز و کار هدفمند استفاده می‌کنند.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Nomad Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/digital-nomad-freedom/hero.png" 
                alt="آزادی دیجیتال نومدها - شاهین صافی" 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 pt-4 text-right order-1 lg:order-2">
            <div className="space-y-6 text-right">
              <h2 className="text-4xl font-black text-white flex items-center gap-4 group justify-start">
                <FaUnlockKeyhole className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">۰۱. شکستن زنجیره‌های کارمندی</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                دفتر کار سنتی، بازمانده‌ای از قرن بیستم است. امروزه "آزادی" فقط داشتن پول نیست؛ بلکه داشتن کنترل بر <strong>جغرافیا</strong> است. یک دیجیتال نومد کسی است که در هنر کار با عملکرد بالا تخصص یافته، در حالی که از نظر فیزیکی به هیچ جا وابسته نیست. چه کافه‌ای در استانبول باشد یا فضای کار اشتراکی در لندن، دنیا به یک فضای کاری واحد تبدیل شده است.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                این سبک زندگی توسط <strong>اقتصاد فریلنسری</strong> و زیرساخت‌های پرداخت جهانی تغذیه می‌شود. وقتی می‌توانید در حالی که در منطقه‌ای با هزینه‌های پایین زندگی می‌کنید، درآمدهای دلاری یا یورویی داشته باشید، سطحی از اهرم مالی را آزاد می‌کنید که کارمندان سنتی فقط می‌توانند رویای آن را داشته باشند.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed text-right">
                "نهایتِ تجمل، توانایی انتخاب چشم‌اندازِ پنجره‌تان در هر صبح دوشنبه است."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars of Nomadism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaLaptopCode className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">آربیتراژ مهارت</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              فروش مهارت‌های دیجیتال با ارزش بالا (برنامه‌نویسی، برندینگ، ترید) به بازارهای جهانی همزمان با بهینه‌سازی هزینه‌های شخصی.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaPlaneDeparture className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">جابجایی جهانی</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              مدیریت ویزاهای نومدی و مقررات بین‌المللی برای حفظ حضور قانونی و کارآمد از نظر مالیاتی در سطح جهان.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaGlobe className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">مالیِ بدون مرز</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              بهره‌گیری از نئوبانک‌ها و پلتفرم‌های چندارزی برای مدیریت ثروت در فراتر از مرزها بدون هیچ اصطکاکی.
            </p>
          </section>
        </div>

        {/* Section 3: Strategic Impact */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">ابزارهای تکنولوژی <span className="text-amber-500">یک نومد</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="flex gap-6 items-start justify-start">
                <FaParachuteBox className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed text-right"><strong>تورهای ایمنی مالی:</strong> ساخت سیستم‌های خودکار پس‌انداز و سرمایه‌گذاری که صرف‌نظر از مکان جغرافیایی شما، به کار خود ادامه می‌دهند.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaCompass className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed text-right"><strong>شبکه‌سازی دورکار:</strong> پرورش یک شبکه دیجیتال قدرتمند از همتایان و مربیان که فراتر از مکان فیزیکی عمل می‌کند.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-r-2 border-amber-500/30 pr-10 order-1 lg:order-2 text-right">
              "سبک زندگی دیجیتال نومدی، آزمون نهایی کارآفرینی است: این مسیر به انضباط مطلق در ازای آزادی مطلق نیاز دارد."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             ماجراجویی، سودِ شماست. <br />
             <span className="text-amber-500 text-luxury">آزادی، معیارِ سنجشِ شماست.</span>
          </blockquote>
          
          <div className="pt-12 text-center">
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
          نشر سبک زندگی صافی • ۲۰۲۶
        </p>
      </footer>
    </div>
  );
}