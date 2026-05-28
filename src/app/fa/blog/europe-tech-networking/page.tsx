"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaHandshakeSimple, FaEuroSign, FaCity, FaBridge, FaUsersViewfinder, FaRankingStar } from 'react-icons/fa6';

export default function EuropeTechNetworkingBlogFa() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="rtl">
      
      {/* 1. Header Section - Professional & Global */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            توسعه اکوسیستم جهانی
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          شبکه‌سازی در <br />
          <span className="text-amber-500 text-luxury">هاب‌های تکنولوژی اروپا</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          ایجاد پل‌های ارتباطی میان لندن، برلین و پاریس. چرا نزدیکی به سرمایه و استعدادهای اروپایی، یک مزیت رقابتی مطلق است.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Power of Proximity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group order-2 lg:order-1">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/europe-tech-networking/hero.png" 
                alt="شبکه‌سازی در اروپا - شاهین صافی" 
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
                <FaCity className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">۰۱. جاده ابریشم اروپایی</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                اروپا فقط یک بازار نیست؛ بلکه شبکه متراکمی از هاب‌های تخصصی است. در حالی که <strong>لندن</strong> همچنان پادشاه فین‌تک و سرمایه جهانی است، <strong>برلین</strong> مخزنی عمیق از استعدادهای مهندسی را ارائه می‌دهد و <strong>پاریس</strong> به عنوان مرز جدید هوش مصنوعی و تکنولوژی‌های لوکس ظهور کرده است. شبکه‌سازی موفق در این مناطق به چیزی فراتر از یک پروفایل لینکدین نیاز دارد؛ این کار مستلزم حضور فیزیکی و درک آداب معاشرت تجاری محلی است.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                اتحادهای استراتژیک در اروپا اغلب در "فضاهای سوم" شکل می‌گیرند؛ نشست‌های اختصاصی تکنولوژی، کنفرانس‌های سطح بالا مانند Web Summit یا Vivatech، و کلوب‌های خصوصی در مناطق میفر لندن یا میته برلین.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden text-right">
              <div className="absolute top-0 right-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "در اروپا، شبکه ارتباطی شما فقط دارایی شما نیست؛ بلکه مجوز فعالیت شما در فراتر از مرزهاست."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Hub Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-right">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaEuroSign className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">دسترسی به سرمایه</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              پیمودن مسیر سرمایه‌گذاری خطرپذیر از قلب لندن تا ایستگاه F در پاریس. دانستن اینکه با چه کسی و در چه زمانی صحبت کنید.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaRankingStar className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">تسلط فرهنگی</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              تطبیق دادن شیوه ارائه (Pitch) خود با بازار عمل‌گرای آلمان یا اکوسیستم فرانسوی که بر پایه روابط انسانی استوار است.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaUsersViewfinder className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">جذب استعداد</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              ایجاد پل‌های ارتباطی با دانشگاه‌های برتر و مراکز تحقیق و توسعه (R&D) در سراسر قاره.
            </p>
          </section>
        </div>

        {/* Section 3: The Connection Framework */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">اتحادهای <span className="text-amber-500">استراتژیک</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="flex gap-6 items-start justify-start">
                <FaHandshakeSimple className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed text-right"><strong>رویکرد ارزش‌محور:</strong> در دنیای تکنولوژی اروپا، روابط بر پایه ارزش‌های مشترک و اعتماد طولانی‌مدت بنا می‌شوند، نه فقط سودهای مقطعی.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaBridge className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed text-right"><strong>هم‌افزایی قانونی:</strong> شبکه‌سازی با کارشناسان حقوقی برای پیمودن مسیر پیچیده بازار واحد اتحادیه اروپا به شکلی بی‌نقص.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-r-2 border-amber-500/30 pr-10 order-1 lg:order-2 text-right">
              "اروپا به کسانی پاداش می‌دهد که بازی طولانی‌مدت را بلد باشند. موفقیت در اینجا با استحکام پل‌هایی که بین فرهنگ‌های مختلف می‌سازید اندازه‌گیری می‌شود."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             جهانی متصل شوید. <br />
             <span className="text-amber-500 text-luxury">محلی اجرا کنید.</span>
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
          نشر بین‌المللی صافی • ۲۰۲۶
        </p>
      </footer>
    </div>
  );
}