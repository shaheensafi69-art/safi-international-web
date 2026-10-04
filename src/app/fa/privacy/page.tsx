"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaLock, 
  FaCookieBite, 
  FaUserCheck, 
  FaGlobeAmericas, 
  FaEnvelope, 
  FaArrowRight,
  FaFileContract,
  FaCheckCircle
} from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyFa() {
  const lastUpdated = "اپریل ۲۰۲۶ (فروردین ۱۴۰۵)";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden" dir="rtl">
      <Header lang="fa" />

      {/* هاله‌های پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

      <main className="pt-36 pb-28 px-4 sm:px-6 w-[98%] max-w-[1400px] mx-auto relative z-10">
        
        {/* ناوبری و موقعیت */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono text-zinc-500 uppercase tracking-widest justify-start">
          <Link href="/fa" className="hover:text-amber-400 transition-colors flex items-center gap-2">
            <span>صفحه اصلی</span>
            <FaArrowRight size={10} />
          </Link>
          <span>/</span>
          <span className="text-amber-400">سیاست حفظ حریم خصوصی</span>
        </div>

        {/* سربرگ معرفی */}
        <header className="mb-16 border-b border-white/10 pb-12 text-right">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6">
            <FaShieldAlt size={12} />
            <span>چارچوب حاکمیت داده و امنیت سایبری در سطح بین‌المللی</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tight text-white mb-6">
            سیاست <span className="text-luxury">حفظ حریم خصوصی</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            به پرتال دیجیتال رسمی <span className="text-white font-medium">شاهین صافی</span> (<code className="text-amber-300 font-mono text-sm">shaheensafi.blog</code>) خوش آمدید. 
            ما بالاترین استانداردهای رازداری، انطباق کامل با قوانین حفاظت از داده‌های عمومی اتحادیه اروپا (GDPR)، قانون حفاظت از داده‌های بریتانیا ۲۰۱۸، قانون حقوق حریم خصوصی کالیفرنیا (CCPA) و دستورالعمل‌های رسمی ناشران گوگل ادسنس (Google AdSense) را رعایت می‌کنیم.
          </p>
          <div className="flex flex-wrap items-center gap-6 mt-6 text-xs font-mono text-zinc-500 uppercase tracking-wider">
            <span>تاریخ لازم‌الاجرا: <strong>۱ ژانویه ۲۰۲۴</strong></span>
            <span>•</span>
            <span>آخرین به‌روزرسانی: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <FaCheckCircle size={11} /> منطبق با ضوابط رسمی گوگل ادسنس
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
                <span>فهرست بندهای قانونی</span>
              </div>
              <nav className="space-y-2 text-xs font-mono text-zinc-400">
                <a href="#introduction" className="block hover:text-amber-300 transition-colors py-1">۱. دامنه و حاکمیت داده‌ها</a>
                <a href="#information-collection" className="block hover:text-amber-300 transition-colors py-1">۲. اطلاعاتی که جمع‌آوری می‌کنیم</a>
                <a href="#google-adsense" className="block text-amber-400 font-bold hover:text-amber-300 transition-colors py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  ۳. اطلاعیه گوگل ادسنس و کوکی‌ها
                </a>
                <a href="#cookie-policy" className="block hover:text-amber-300 transition-colors py-1">۴. کوکی‌های دابل‌کلیک DART و وب بیکن</a>
                <a href="#third-parties" className="block hover:text-amber-300 transition-colors py-1">۵. تبلیغات شخص ثالث و شبکه‌ها</a>
                <a href="#gdpr-rights" className="block hover:text-amber-300 transition-colors py-1">۶. حقوق کاربران تحت GDPR و قانون بریتانیا</a>
                <a href="#ccpa-rights" className="block hover:text-amber-300 transition-colors py-1">۷. حقوق مصرف‌کنندگان کالیفرنیا (CCPA)</a>
                <a href="#children" className="block hover:text-amber-300 transition-colors py-1">۸. محافظت از حریم خصوصی کودکان (COPPA)</a>
                <a href="#security" className="block hover:text-amber-300 transition-colors py-1">۹. پروتکل‌های امنیتی سازمانی</a>
                <a href="#contact" className="block hover:text-amber-300 transition-colors py-1">۱۰. اطلاعات تماس حقوقی و بازرس داده</a>
              </nav>

              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/fa/terms" 
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center justify-between"
                >
                  <span>شرایط و ضوابط استفاده (Terms)</span>
                  <span className="text-amber-400">←</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* محتوای حقوقی تفصیلی */}
          <article className="lg:col-span-8 space-y-12 text-zinc-300 leading-relaxed font-light text-sm sm:text-base text-right">
            
            {/* بخش ۱ */}
            <section id="introduction" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaLock className="text-amber-400" size={18} />
                <span>۱. دامنه و حاکمیت داده‌ها</span>
              </h2>
              <p>
                این سند سیاست حفظ حریم خصوصی نحوه جمع‌آوری، استفاده، نگهداری و افشای اطلاعات جمع‌آوری شده از کاربران (هر یک به عنوان «کاربر» یا «بازدیدکننده») توسط <strong>شاهین صافی</strong> (که از این پس «ناشر»، «ما» یا «سایت» نامیده می‌شود) در پرتال وب به نشانی <code className="text-amber-300 font-mono">https://shaheensafi.blog</code> را مشخص می‌سازد.
              </p>
              <p>
                این خط‌مشی به کلیه مقالات پژوهشی، تحلیل‌های فین‌تک، یادداشت‌های مدیریتی و انتشارات رسانه‌ای ارائه شده در این سایت اعمال شده و مبتنی بر شفافیت کامل و صیانت از داده‌های مخاطبان است.
              </p>
            </section>

            {/* بخش ۲ */}
            <section id="information-collection" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaUserCheck className="text-amber-400" size={18} />
                <span>۲. اطلاعاتی که جمع‌آوری می‌کنیم</span>
              </h2>
              <h3 className="text-lg font-semibold text-white">الف. فایل‌های لاگ سرور (اطلاعات غیرشخصی)</h3>
              <p>
                همانند اکثر وب‌سایت‌های بین‌المللی با عملکرد بالا، <code className="text-amber-300 font-mono">shaheensafi.blog</code> از فایل‌های لاگ استاندارد سرور استفاده می‌کند. اطلاعات داخل این فایل‌ها شامل موارد زیر است:
              </p>
              <ul className="list-disc pr-6 space-y-2 text-zinc-400 font-mono text-xs">
                <li>آدرس‌های پروتکل اینترنت (IP) که جهت انطباق با مقررات GDPR ناشناس‌سازی می‌شوند</li>
                <li>نوع مرورگر و نگارش آن (گوگل کروم، سافاری، اج، فایرفاکس)</li>
                <li>شرکت ارائه‌دهنده خدمات اینترنت (ISP)</li>
                <li>تاریخ و برچسب زمانی دقیق مراجعات</li>
                <li>صفحات ارجاع‌دهنده و صفحات خروج از سایت</li>
                <li>تعداد کلیک‌ها و تله‌متری عملکردی جهت ارزیابی ترندها و بهینه‌سازی فنی</li>
              </ul>
              <p>
                هیچ‌یک از این اطلاعات آماری به هویت فردی کاربران مرتبط نبوده و صرفاً برای تحلیل فنی، امنیت زیرساخت و مقابله با حملات سایبری استفاده می‌شوند.
              </p>

              <h3 className="text-lg font-semibold text-white pt-2">ب. اطلاعات هویتی ارائه‌شده توسط کاربر</h3>
              <p>
                بازدیدکنندگان می‌توانند به صورت کاملاً ناشناس در وب‌سایت به مطالعه بپردازند. ما اطلاعات شخصی مانند نام، ایمیل یا اطلاعات ارتباطی را تنها زمانی دریافت می‌کنیم که کاربر شخصاً و به شکل داوطلبانه اقدام به ارسال مکاتبه رسمی یا درخواست شراکت کاری نماید.
              </p>
            </section>

            {/* بخش ۳: گوگل ادسنس - بند الزامی تایید حساب */}
            <section id="google-adsense" className="glass-card-gold p-8 rounded-3xl border border-amber-500/30 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaCookieBite className="text-amber-400" size={20} />
                  <span>۳. اطلاعیه رسمی گوگل ادسنس (Google AdSense) و کوکی‌ها</span>
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                  الزام شفاف‌سازی گوگل
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-amber-400/20 space-y-2 text-xs font-mono text-zinc-300">
                <p><strong>شناسه ناشر (Publisher ID):</strong> ca-pub-6551903544426492</p>
                <p><strong>شناسه اسلات تبلیغات همگام:</strong> 5523998767</p>
                <p><strong>تأییدیه فایل ads.txt:</strong> google.com, pub-6551903544426492, DIRECT, f08c47fec0942fa0</p>
              </div>

              <p>
                این وب‌سایت با شرکت <strong>گوگل (Google Inc.)</strong> و سیستم تبلیغاتی <strong>Google AdSense</strong> جهت نمایش تبلیغات استاندارد همکاری می‌کند. بر اساس خط‌مشی‌های گوگل و مقررات بین‌المللی، موارد زیر به صراحت به اطلاع کلیه کاربران می‌رسد:
              </p>

              <ul className="list-disc pr-6 space-y-3 text-zinc-300">
                <li>
                  <strong>جایگاه شرکت گوگل:</strong> گوگل به عنوان یک ارائه‌دهنده شخص ثالث (Third-Party Vendor)، از کوکی‌ها برای نمایش تبلیغات مرتبط در <code className="text-amber-300 font-mono">shaheensafi.blog</code> استفاده می‌نماید.
                </li>
                <li>
                  <strong>کوکی دابل‌کلیک (DoubleClick DART):</strong> استفاده گوگل از کوکی DART به آن و شرکایش اجازه می‌دهد تا بر اساس سابقه بازدید کاربران از این سایت یا سایر وب‌سایت‌های موجود در بستر اینترنت، آگهی‌های مرتبط و هدفمند را به نمایش بگذارد.
                </li>
                <li>
                  <strong>حق لغو اشتراک و شخصی‌سازی (Opt-Out):</strong> کاربران در هر زمان می‌توانند با مراجعه به صفحه رسمی 
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-medium mr-1 ml-1">
                    تنظیمات آگهی‌های گوگل (Google Ads Settings)
                  </a> 
                  استفاده از کوکی‌های تبلیغات شخصی‌سازی شده را غیرفعال نمایند.
                </li>
                <li>
                  <strong>لغو گسترده از طریق اتحادیه‌های تبلیغاتی:</strong> همچنین کاربران می‌توانند از طریق پرتال 
                  <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-medium mr-1 ml-1">
                    AboutAds.info
                  </a>
                  یا پرتال اروپایی 
                  <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-medium mr-1">
                    Your Online Choices
                  </a>
                  کوکی‌های شرکت‌های عضو را به طور یکپارچه خاموش کنند.
                </li>
              </ul>
            </section>

            {/* بخش ۴ */}
            <section id="cookie-policy" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaCookieBite className="text-amber-400" size={18} />
                <span>۴. کوکی‌های دابل‌کلیک DART و وب بیکن‌ها</span>
              </h2>
              <p>
                برخی از شرکای تجاری ما ممکن است در سایت ما از کوکی و وب‌بیکن استفاده کنند. شریک ارائه‌دهنده اصلی تبلیغات ما سرویس <strong>Google AdSense</strong> است.
              </p>
              <p>
                سرورها یا شبکه‌های تبلیغاتی شخص ثالث از فناوری‌هایی مانند کوکی‌ها، جاوا اسکریپت یا وب‌بیکن در آگهی‌ها و پیوندهایی که در این سایت ظاهر شده و مستقیماً به مرورگر شما ارسال می‌شوند استفاده می‌کنند. آن‌ها در این فرایند آدرس IP را به طور خودکار دریافت می‌دارند تا کارایی کمپین‌های تبلیغاتی خود را ارزیابی کرده یا محتوا را شخصی‌سازی نمایند.
              </p>
              <p className="text-amber-300/90 text-xs font-mono bg-amber-400/5 p-4 rounded-2xl border border-amber-400/10">
                توجه: شاهین صافی هیچ‌گونه دسترسی، مالکیت یا کنترلی بر روی کوکی‌های مورد استفاده توسط ارائه‌دهندگان تبلیغات شخص ثالث ندارد. برای کسب اطلاعات بیشتر، سیاست‌های حفظ حریم خصوصی سرویس‌دهندگان مذکور را مطالعه فرمایید.
              </p>
            </section>

            {/* بخش ۵ */}
            <section id="third-parties" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGlobeAmericas className="text-amber-400" size={18} />
                <span>۵. پیوندهای شخص ثالث و شرکت‌های تابعه اکوسیستم صافی</span>
              </h2>
              <p>
                این وب‌سایت حاوی پیوندهای مستقیم به نهادهای تجاری فعال تحت مدیریت شاهین صافی است، از جمله:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">صافی‌پی (SafiPay)</span>
                  <span className="text-zinc-400">بانکداری دیجیتال چندارزی و صدور کارت ویزا (safipay.net)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">صافی تاپ‌آپ (Safi TopUp)</span>
                  <span className="text-zinc-400">توزیع مخابراتی و کریدت بین‌المللی (safitopup.site)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">سرمایه‌گذاری بین‌المللی صافی</span>
                  <span className="text-zinc-400">هلدینگ سرمایه‌گذاری و مدیریت دارایی (لندن، انگلستان)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">سوپراپ ارتباطی ZEV</span>
                  <span className="text-zinc-400">شبکه اجتماعی غیرمتمرکز نسل نو (zevapp.com)</span>
                </div>
              </div>
              <p className="pt-2 text-zinc-400 text-xs">
                هر یک از این شرکت‌ها دارای پروانه‌های ثبتی مستقل و توافق‌نامه‌های حقوقی مجزا در حوزه‌های خدمات مالی مربوطه می‌باشند.
              </p>
            </section>

            {/* بخش ۶ */}
            <section id="gdpr-rights" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>۶. حقوق کاربران تحت مقررات عمومی حفاظت از داده‌های اتحادیه اروپا (GDPR)</span>
              </h2>
              <p>
                کاربران ساکن در حوزه اقتصادی اروپا و بریتانیا تحت قوانین مصوب از حقوق قانونی زیر برخوردارند:
              </p>
              <ul className="list-disc pr-6 space-y-2 text-zinc-400">
                <li><strong>حق دسترسی:</strong> حق دریافت رونوشت داده‌های شخصی ثبت‌شده در سیستم.</li>
                <li><strong>حق اصلاح:</strong> حق درخواست تصحیح هرگونه اطلاعات نادقیق یا ناقص.</li>
                <li><strong>حق حذف (فراموشی):</strong> حق درخواست پاک‌سازی داده‌های شخصی تحت شرایط معین قانونی.</li>
                <li><strong>حق محدودسازی پردازش:</strong> حق تقاضای توقف پردازش داده‌ها در شرایط خاص.</li>
                <li><strong>حق انتقال‌پذیری داده‌ها:</strong> حق تقاضای انتقال مستقیم داده‌ها به نهاد یا سازمانی دیگر.</li>
              </ul>
            </section>

            {/* بخش ۷ */}
            <section id="ccpa-rights" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaUserCheck className="text-amber-400" size={18} />
                <span>۷. حقوق حریم خصوصی کالیفرنیا (CCPA / CPRA)</span>
              </h2>
              <p>
                بر اساس قانون حفظ حریم خصوصی مصرف‌کنندگان کالیفرنیا، بازدیدکنندگان این ایالت از حقوق صریحی برخوردار هستند:
              </p>
              <ul className="list-disc pr-6 space-y-2 text-zinc-400">
                <li>حق آگاهی از دسته‌بندی داده‌های جمع‌آوری شده توسط کسب‌وکارها.</li>
                <li>حق درخواست حذف سوابق شخصی.</li>
                <li>حق انصراف از فروش یا اشتراک‌گذاری داده‌های شخصی.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
                بیانیه قطعی: وب‌سایت شخصی شاهین صافی اطلاعات شخصی شما را به هیچ‌یک از شرکت‌های ثالث به قصد فروش یا منافع مالی واگذار نمی‌نماید.
              </div>
            </section>

            {/* بخش ۸ */}
            <section id="children" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaLock className="text-amber-400" size={18} />
                <span>۸. محافظت از حریم خصوصی کودکان (قانون COPPA)</span>
              </h2>
              <p>
                حفاظت از کودکان در محیط وب اولویت بنیادی ماست. پایگاه <code className="text-amber-300 font-mono">shaheensafi.blog</code> هیچ‌گونه اطلاعات قابل شناسایی از کودکان زیر ۱۳ سال (یا زیر ۱۶ سال بر طبق قوانین اروپایی) را آگاهانه جمع‌آوری نمی‌کند. در صورت مشاهده هرگونه گزارش از سوی اولیا، داده‌های مذکور سریعاً حذف خواهد شد.
              </p>
            </section>

            {/* بخش ۹ */}
            <section id="security" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>۹. استانداردهای امنیت سایبری</span>
              </h2>
              <p>
                تمامی تبادلات اطلاعاتی میان رایانه یا تلفن همراه شما و سرورهای پردازشی وب‌سایت با استفاده از مدرن‌ترین الگوریتم‌های رمزنگاری لایه انتقال TLS 1.3 رمزگذاری گردیده و هدرهای امنیتی HSTS و فایروال‌های ضد نفوذ به طور ۲۴ ساعته فعال می‌باشند.
              </p>
            </section>

            {/* بخش ۱۰ */}
            <section id="contact" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaEnvelope className="text-amber-400" size={18} />
                <span>۱۰. مکاتبات حقوقی و دفتر بازرس حفاظت از داده‌ها (DPO)</span>
              </h2>
              <p>
                جهت هرگونه پرسش، اعمال حقوق قانونی یا ارسال استعلامات رسمی پیرامون این سند، از نشانی‌های ذیل استفاده فرمایید:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2 text-xs font-mono text-right">
                <p className="text-white font-bold text-sm">دفتر اجرایی شاهین صافی (Shaheen Safi Executive Office)</p>
                <p className="text-zinc-400">اداره امور حقوقی و صیانت از داده‌ها</p>
                <p className="text-zinc-400">شرکت سرمایه‌گذاری بین‌المللی صافی (Safi International Capital LTD)</p>
                <p className="text-zinc-400">حوزه قضایی: لندن، بریتانیا (London, United Kingdom)</p>
                <p className="text-amber-400 pt-2">پست الکترونیکی رسمی: <strong>legal@shaheensafi.blog</strong> / <strong>contact@shaheensafi.blog</strong></p>
                <p className="text-zinc-500">پرتال اینترنتی: https://shaheensafi.blog</p>
              </div>
            </section>

          </article>

        </div>
      </main>

      <Footer lang="fa" />
    </div>
  );
}
