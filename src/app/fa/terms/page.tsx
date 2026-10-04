"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaBalanceScale, 
  FaFileContract, 
  FaShieldAlt, 
  FaExclamationTriangle, 
  FaGavel, 
  FaGlobeAmericas, 
  FaEnvelope, 
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServiceFa() {
  const lastUpdated = "اپریل ۲۰۲۶ (فروردین ۱۴۰۵)";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden" dir="rtl">
      <Header lang="fa" />

      {/* هاله‌های پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <main className="pt-36 pb-28 px-4 sm:px-6 w-[98%] max-w-[1400px] mx-auto relative z-10">
        
        {/* موقعیت و ناوبری */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono text-zinc-500 uppercase tracking-widest justify-start">
          <Link href="/fa" className="hover:text-amber-400 transition-colors flex items-center gap-2">
            <span>صفحه اصلی</span>
            <FaArrowRight size={10} />
          </Link>
          <span>/</span>
          <span className="text-amber-400">شرایط و ضوابط استفاده</span>
        </div>

        {/* سربرگ معرفی */}
        <header className="mb-16 border-b border-white/10 pb-12 text-right">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6">
            <FaBalanceScale size={12} />
            <span>توافق‌نامه رسمی و چارچوب حقوقی بین‌المللی</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tight text-white mb-6">
            شرایط و <span className="text-luxury">ضوابط استفاده</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            این سند شرایط و ضوابط رسمی، یک توافق‌نامه حقوقی لازم‌الاجرا میان شما و <span className="text-white font-medium">شاهین صافی</span> است که چارچوب قانونی دسترسی و بهره‌برداری از وب‌سایت <code className="text-amber-300 font-mono text-sm">shaheensafi.blog</code> و کلیه یادداشت‌های پژوهشی، مقالات و منابع تحلیلی آن را مشخص می‌سازد.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs font-mono text-zinc-500 uppercase tracking-wider">
            <span>حوزه قضایی حاکم: <strong>لندن، انگلستان (بریتانیا)</strong></span>
            <span>•</span>
            <span>آخرین بازنگری: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <FaCheckCircle size={11} /> منطبق بر استانداردهای حقوقی سازمانی
            </span>
          </div>
        </header>

        {/* بدنه دو ستونه */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* فهرست عناوین سایدبار */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 glass-card p-6 rounded-3xl border border-white/10 space-y-4 text-right">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
                <FaFileContract size={13} />
                <span>فهرست بندهای موافقت‌نامه</span>
              </div>
              <nav className="space-y-2 text-xs font-mono text-zinc-400">
                <a href="#acceptance" className="block hover:text-amber-300 transition-colors py-1">۱. پذیرش شرایط و صلاحیت</a>
                <a href="#intellectual-property" className="block hover:text-amber-300 transition-colors py-1">۲. حقوق مالکیت فکری و برندها</a>
                <a href="#non-financial-disclaimer" className="block hover:text-amber-300 transition-colors py-1 text-amber-400 font-semibold">۳. سلب مسئولیت مشاوره‌های مالی</a>
                <a href="#advertising-policy" className="block hover:text-amber-300 transition-colors py-1">۴. تبلیغات و گوگل ادسنس</a>
                <a href="#user-conduct" className="block hover:text-amber-300 transition-colors py-1">۵. استفاده مجاز و امنیت سایبری</a>
                <a href="#limitation-liability" className="block hover:text-amber-300 transition-colors py-1">۶. تحدید مسئولیت قانونی</a>
                <a href="#ecosystem-links" className="block hover:text-amber-300 transition-colors py-1">۷. شرکت‌های اکوسیستم و پیوندها</a>
                <a href="#governing-law" className="block hover:text-amber-300 transition-colors py-1">۸. قانون حاکم و مراجع قضایی</a>
                <a href="#modifications" className="block hover:text-amber-300 transition-colors py-1">۹. حق بازنگری و اصلاحات</a>
                <a href="#contact-legal" className="block hover:text-amber-300 transition-colors py-1">۱۰. اطلاعات ارتباطات حقوقی</a>
              </nav>

              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/fa/privacy" 
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center justify-between"
                >
                  <span>سیاست حفظ حریم خصوصی (Privacy)</span>
                  <span className="text-amber-400">←</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* محتوای حقوقی تفصیلی */}
          <article className="lg:col-span-8 space-y-12 text-zinc-300 leading-relaxed font-light text-sm sm:text-base text-right">
            
            {/* بخش ۱ */}
            <section id="acceptance" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaFileContract className="text-amber-400" size={18} />
                <span>۱. پذیرش شرایط و صلاحیت قانونی</span>
              </h2>
              <p>
                با ورود، پیمایش یا استفاده از این وب‌سایت (<code className="text-amber-300 font-mono">https://shaheensafi.blog</code>)، شما اذعان می‌دارید که تمامی بندهای این توافق‌نامه را مطالعه فرموده، دریافته و متعهد به رعایت آن‌ها و کلیه قوانین جاری کشوری و بین‌المللی می‌باشید.
              </p>
              <p>
                در صورتی که با هریک از این مفاد موافقت ندارید، مجاز به استفاده از این پرتال نبوده و می‌بایست فوراً نشست خود را پایان بخشید.
              </p>
            </section>

            {/* بخش ۲ */}
            <section id="intellectual-property" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>۲. حقوق مالکیت معنوی، فکری و علائم تجاری</span>
              </h2>
              <p>
                تمامی متون تخصصی، مقالات تاریخی، تحلیل‌های معماری نرم‌افزار، مقالات فین‌تک، فایل‌های چندرسانه‌ای، نگاره‌ها و سبک دیداری ارائه‌شده در این سایت، دارایی انحصاری <strong>شاهین صافی</strong> به شمار آمده و تحت حمایت قوانین مالکیت فکری و کپی‌رایت بین‌المللی قرار دارند.
              </p>
              <p>
                نام‌های تجاری، لوگوها و برندهای ثبتی متعلق به این مجموعه عبارتند از:
              </p>
              <ul className="list-disc pr-6 space-y-1 text-xs font-mono text-amber-300">
                <li>صافی‌پی (SafiPay™) و زیرساخت صدور کارت‌های ویزا</li>
                <li>صافی تاپ‌آپ (Safi TopUp™) گیت‌وی جهانی توزیع مخابراتی</li>
                <li>شرکت سرمایه‌گذاری بین‌المللی صافی (Safi International Capital LTD™ London)</li>
                <li>سوپراپ ارتباطی ZEV™</li>
                <li>آکادمی صافی (Safi Academy™)</li>
                <li>میراث تجاری SafiPro™</li>
              </ul>
              <p className="text-xs text-zinc-400">
                هرگونه استخراج داده، تکثیر بدون ذکر نام ناشر، فروش، مهندسی معکوس یا اسکرپینگ محتوا بدون مجوز کتبی پیگرد شدید حقوقی به همراه خواهد داشت.
              </p>
            </section>

            {/* بخش ۳ */}
            <section id="non-financial-disclaimer" className="glass-card-gold p-8 rounded-3xl border border-amber-500/30 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaExclamationTriangle className="text-amber-400" size={18} />
                <span>۳. بیانیه سلب مسئولیت مشاوره‌های مالی و سرمایه‌گذاری</span>
              </h2>
              <p>
                مطالب درج‌شده در این وب‌سایت بازتاب‌دهنده تجربیات کارآفرینی، مطالعات تکنولوژیک، فلسفه کسب‌وکار و دیدگاه‌های شخصی نویسنده است.
              </p>
              <div className="p-4 rounded-2xl bg-black/70 border border-amber-400/20 text-xs text-zinc-300 space-y-2">
                <p className="font-bold text-amber-400 uppercase tracking-wider">اطلاعیه مهم به خوانندگان و فعالان بازار:</p>
                <p>
                  هیچ بخشی از مندرجات <code className="text-white font-mono">shaheensafi.blog</code> نباید به عنوان توصیه رسمی مالی، سیگنال معاملاتی، مشاوره حقوقی، مالیاتی یا ترغیب به سرمایه‌گذاری تلقی گردد. دستاوردهای گذشته پروژه‌ها ضامن سودآوری در آینده نیست.
                </p>
                <p>
                  مخاطبان موظفند شخصاً تحقیقات مستقل انجام داده و پیش از هرگونه تصمیم‌گیری مالی یا تخصیص سرمایه با مشاوران رسمی و دارای مجوز مشورت نمایند.
                </p>
              </div>
            </section>

            {/* بخش ۴ */}
            <section id="advertising-policy" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaBalanceScale className="text-amber-400" size={18} />
                <span>۴. خط‌مشی تبلیغات تجاری و گوگل ادسنس (Google AdSense)</span>
              </h2>
              <p>
                این وب‌سایت با هدف ارائه محتوای باکیفیت و رایگان، از شبکه تبلیغاتی <strong>Google AdSense</strong> (شناسه ناشر: <code className="text-amber-300 font-mono">ca-pub-6551903544426492</code>) جهت نمایش واحدهای آگهی همگام و مجاز بهره می‌برد.
              </p>
              <p>
                آگهی‌های ارائه‌شده توسط سیستم‌های هوشمند شخص ثالث تامین می‌گردند و نمایش آن‌ها در سایت به معنای تایید، تضمین یا توصیه مستقیم خدمات یا محصولات اعلام‌شده از سوی شاهین صافی نمی‌باشد. مسئولیت هرگونه تعامل با آگهی‌دهندگان بر عهده شخص کاربر است.
              </p>
            </section>

            {/* بخش ۵ */}
            <section id="user-conduct" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>۵. شرایط استفاده مجاز و امنیت سایبری</span>
              </h2>
              <p>کاربران صراحتاً متعهد می‌گردند از رفتارهای ممنوعه زیر اجتناب ورزند:</p>
              <ul className="list-disc pr-6 space-y-2 text-zinc-400 text-xs font-mono">
                <li>استفاده از ربات‌های خودکار، اسپایدرها و اسکرپرها بدون هماهنگی و اخذ مجوز رسمی API.</li>
                <li>انجام هرگونه آزمون نفوذ، تست بار غیرمجاز یا حملات محروم‌سازی از سرویس (DoS / DDoS) علیه سرورها.</li>
                <li>تزریق کدهای مخرب، بدافزارها، کرم‌های اینترنتی یا اسکریپت‌های آلوده.</li>
                <li>جعل هویت شاهین صافی، مدیران ارشد یا نمایندگان حقوقی هلدینگ صافی.</li>
                <li>ایجاد فریم (iFrame) یا آینه‌سازی (Mirroring) محتوای سایت بدون موافقت کتبی.</li>
              </ul>
            </section>

            {/* بخش ۶ */}
            <section id="limitation-liability" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGavel className="text-amber-400" size={18} />
                <span>۶. تحدید مسئولیت قانونی</span>
              </h2>
              <p>
                تا بالاترین حد مجاز طبق قوانین بریتانیا و مراجع بین‌المللی، شاهین صافی و نهادهای تجاری وابسته هیچ‌گونه مسئولیتی در قبال خسارات مستقیم، غیرمستقیم، تصادفی یا پیامدی ناشی از استفاده یا عدم توانایی در استفاده از سایت یا اطلاعات مندرج در آن بر عهده نخواهند داشت.
              </p>
            </section>

            {/* بخش ۷ */}
            <section id="ecosystem-links" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGlobeAmericas className="text-amber-400" size={18} />
                <span>۷. پیوندها و درگاه‌های اکوسیستم</span>
              </h2>
              <p>
                لینک‌های ارائه‌شده به درگاه‌های شرکتی مجزا (همچون SafiPay.net، SafiTopUp.site، SafiAcademy.org، ZEVapp.com) تابع توافق‌نامه‌ها و قوانین خاص هر سامانه به صورت منفرد می‌باشند.
              </p>
            </section>

            {/* بخش ۸ */}
            <section id="governing-law" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGavel className="text-amber-400" size={18} />
                <span>۸. قانون حاکم و حل و فصل اختلافات</span>
              </h2>
              <p>
                این شرایط و ضوابط و هرگونه مناقشه ناشی از آن، منحصراً تابع قوانین <strong>انگلستان و ولز (England and Wales)</strong>، بریتانیا بوده و دادگاه‌های صالح شهر لندن مرجع انحصاری رسیدگی به کلیه دعاوی خواهند بود.
              </p>
            </section>

            {/* بخش ۹ */}
            <section id="modifications" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaFileContract className="text-amber-400" size={18} />
                <span>۹. بازنگری و اعمال تغییرات</span>
              </h2>
              <p>
                ما حق به‌روزرسانی و اعمال اصلاحات در این شرایط را در هر زمان برای انطباق با تحولات قانونی یا استانداردهای جدید وب محفوظ می‌داریم. نسخه به‌روزشده با درج تاریخ اصلاح در دسترس عموم قرار خواهد گرفت.
              </p>
            </section>

            {/* بخش ۱۰ */}
            <section id="contact-legal" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaEnvelope className="text-amber-400" size={18} />
                <span>۱۰. ارتباط با دفتر حقوقی</span>
              </h2>
              <p>
                برای طرح هرگونه استعلام، انعقاد قرارداد یا مکاتبات پیرامون این سند، می‌توانید با نشانی رسمی زیر ارتباط برقرار نمایید:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2 text-xs font-mono text-right">
                <p className="text-white font-bold text-sm">دفتر امور حقوقی و انطباق شاهین صافی</p>
                <p className="text-zinc-400">شرکت سرمایه‌گذاری بین‌المللی صافی (Safi International Capital LTD)</p>
                <p className="text-zinc-400">لندن، بریتانیا (London, United Kingdom)</p>
                <p className="text-amber-400 pt-2">پست الکترونیکی حقوقی: <strong>legal@shaheensafi.blog</strong></p>
                <p className="text-zinc-500">پرتال رسمی: https://shaheensafi.blog</p>
              </div>
            </section>

          </article>

        </div>
      </main>

      <Footer lang="fa" />
    </div>
  );
}
