"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGem, FaEye, FaCrown, FaFingerprint, FaLayerGroup, FaChessKnight } from 'react-icons/fa6';

export default function DigitalLuxuryBrandingBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Aesthetic Elegance */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            هنرِ کمیابی در دنیای دیجیتال
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          تجمل در <br />
          <span className="text-amber-500 text-luxury">عصر دیجیتال</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center text-justify md:text-center">
          چگونه در عصرِ همهمه‌های بی‌پایان، اعتبار کسب کنیم. دگردیسی اصالت و میراث به یک هویت دیجیتال با کارایی بالا.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The New Paradigm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/digital-luxury-branding/hero.png" 
                alt="برندینگ لوکس دیجیتال - شاهین صافی" 
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
                <FaCrown className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">۰۱. پارادوکسِ انحصار</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                تجمل سنتی با درهای بسته و فاصله‌های فیزیکی تعریف می‌شد. در عصر دیجیتال، تجمل با **دیده شدنِ انتخابی** تعریف می‌شود. موضوع این نیست که توسط همه پیدا شوید؛ بلکه موضوع این است که توسط افرادِ خاص درک شوید. برندینگ لوکس دیجیتال، دانشِ خلق یک تجربه آنلاین است که به همان اندازه کمیاب و شخصی‌سازی شده به نظر برسد که یک کت‌وشلوار سفارشی در خیابان سویل رو (Savile Row) به نظر می‌رسد.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify text-right">
                امروزه اعتبار از طریق **تسلط بر الگوریتم‌ها** و روایتگری با کیفیت بالا ساخته می‌شود. یک برند لوکس فقط محتوا پست نمی‌کند؛ بلکه یک جهان دیجیتال را کیوریت (Curate) می‌کند که از طریق سکوت و وقار، توجه‌ها را به خود جلب می‌نماید.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden text-right">
              <div className="absolute top-0 right-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "در دنیای دیجیتال، تجملِ واقعی تنها چیزی است که اینترنت نمی‌تواند به راحتی آن را کپی کند: یک روح."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Pillars of Digital Prestige */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaFingerprint className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">شخصی‌سازی افراطی</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              نگاه به کاربر دیجیتال به عنوان یک فرد، نه یک آمار. ارائه خدماتِ ویژه (White-glove) مبتنی بر هوش مصنوعی در مقیاس وسیع.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaEye className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">وقارِ خاموش</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              طراحی مینیمالیستی که نفس می‌کشد. تجمل یعنی نبودِ آشفتگی و حضورِ هدفمندی در هر جزئیات.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaGem className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase text-right">کمیابیِ دیجیتال</h3>
            <p className="text-zinc-500 leading-relaxed italic text-right">
              بهره‌گیری از وب۳ و نسخه‌های محدودِ دیجیتال برای خلقِ مالکیتِ واقعی در دنیایی که همه چیز در آن کپی می‌شود.
            </p>
          </section>
        </div>

        {/* Section 3: Strategic Impact */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">پیروزی در <span className="text-amber-500">بازیِ توجه</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="flex gap-6 items-start justify-start">
                <FaChessKnight className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed text-right"><strong>رازآلودی استراتژیک:</strong> یک برند لوکس به اندازه‌ای می‌گوید که وسوسه‌انگیز باشد، اما بخش‌هایی را ناگفته باقی می‌گذارد تا هاله‌ای از رمز و راز و اشتیاق را حفظ کند.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaLayerGroup className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed text-right"><strong>اکوسیستم‌های یکپارچه:</strong> از وب‌سایت تا NFT و محصول فیزیکی؛ سفرِ تجمل باید یک ریسمانِ واحد و بی‌نقص از کیفیت باشد.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-r-2 border-amber-500/30 pr-10 order-1 lg:order-2 text-right">
              "عصر دیجیتال تجمل را نکشته است؛ بلکه مجموعه‌ای جدید از ابزارها را به آن داده تا قدرت ماندگار خود را در گذر زمان به اثبات برساند."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             سبک و استایل ابدی است. <br />
             <span className="text-amber-500 text-luxury">دیجیتال، تنها یک رسانه است.</span>
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
          نشر لوکس صافی • ۲۰۲۶
        </p>
      </footer>
    </div>
  );
}