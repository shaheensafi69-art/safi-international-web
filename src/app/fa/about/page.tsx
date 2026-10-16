"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const corporateDetails = {
    name: 'Safi International Capital LTD',
    role: 'هلدینگ مادر و لنگر حقوقی نهادی (Institutional Anchor)',
    crn: '17063286',
    duns: '234621356',
    taxId: '85677 13611',
    address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom',
    email: 'info@safiinternationalcapitalltd.site',
    url: 'https://safiinternationalcapitalltd.site',
    wikidata: 'https://www.wikidata.org/wiki/Q139502306',
    companiesHouse: 'https://find-and-update.company-information.service.gov.uk/company/17063286'
  };

  const companies = [
    {
      name: 'Safi International Capital LTD',
      category: 'هلدینگ سرمایه‌گذاری نهادی و لنگر حقوقی بین‌المللی',
      badge: 'ثبت انگلستان: ۱۷۰۶۳۲۸۶',
      description: 'شرکت مادر ثبت شده در انگلستان و ولز با استاندارد بریتانیا. مستقر در کاونت گاردن لندن، راهبری اکوسیستم فین‌تک، مدیریت دارایی‌های بین‌المللی و جذب سرمایه‌گذاری برای پروژه‌های مقیاس‌پذیر در بازارهای نوظهور.',
      link: 'safiinternationalcapitalltd.site',
      href: 'https://safiinternationalcapitalltd.site',
      isAnchor: true
    },
    {
      name: 'SafiPay',
      category: 'فین‌تک و بانکداری دیجیتال نوین',
      badge: 'پرچمدار نئوبانکینگ',
      description: 'یک زیرساخت پیشرفته مالی دیجیتال که حساب‌های بانکی چندارزی اروپایی (EUR, USD, GBP) همراه با IBAN اختصاصی و صدور آنی کارت‌های ویزای فیزیکی و مجازی را برای اتصال بازارهای محروم به اقتصاد بین‌المللی فراهم می‌سازد.',
      link: 'safipay.net',
      href: 'https://safipay.net'
    },
    {
      name: 'Safi TopUp',
      category: 'مخابرات جهانی و اعتبارات دیجیتال',
      badge: 'بیش از ۷۰۰ اپراتور متصل',
      description: 'شاهراه مخابراتی متصل به بیش از ۷۰۰ اپراتور در ۱۵۰+ کشور جهان. ارائه خدمات فوری ارسال شارژ، بسته‌های رومینگ بین‌المللی eSIM، و فروش انواع گیفت‌کارت‌های دیجیتال و سرگرمی.',
      link: 'safitopup.site',
      href: 'https://safitopup.site'
    },
    {
      name: 'ZEV App',
      category: 'شبکه اجتماعی غیرمتمرکز نسل نوین',
      badge: 'حاکمیت دیجیتال و امنیت',
      description: 'پلتفرم اجتماعی غیرمتمرکز نسل آینده با تمرکز بر حفظ حریم خصوصی، ارتباطات سرتاسر رمزنگاری‌شده، آزادی بیان بدون سانسور، و سیستم درآمدزایی همتا‌به‌همتا برای تولیدکنندگان محتوا.',
      link: 'zevapp.com',
      href: 'https://www.zevapp.com'
    },
    {
      name: 'Safi Academy',
      category: 'آموزش فناوری و توانمندسازی جوانان',
      badge: 'بنیاد آموزش مهارت‌های آینده',
      description: 'بنیاد آموزشی غیرانتفاعی برای آموزش تخصصی برنامه‌نویسی مدرن، مهارت‌های هوش مصنوعی و هدایت کارآفرینان جوان در بازارهای در حال توسعه به سمت استانداردهای بین‌المللی.',
      link: 'safiacademy.org',
      href: 'https://safiacademy.org'
    },
    {
      name: 'SafiPro',
      category: 'برند مد معاصر و تجارت الکترونیک D2C',
      badge: 'مینیمالیسم صنعتی',
      description: 'برند مدرن مد و پوشاک لوکس با تلفیق طراحی مینیمال معماری و پارچه‌های صنعتی مرغوب، همراه با سیستم ارسال و توزیع مستقیم جهانی به مشتریان بین‌المللی.',
      link: 'safipro.site',
      href: 'https://safipro.site'
    }
  ];

  const faqs = [
    {
      q: 'شاهین صافی (Shaheen Safi) کیست؟',
      a: 'شاهین صافی، کارآفرین بین‌المللی فین‌تک، تکنسین مالی تاییدشده (CFTe) و بنیان‌گذار، مدیرعامل و طراح ارشد چشم‌انداز هلدینگ Safi International Capital LTD، صافی‌پی (SafiPay)، صافی تاپ‌آپ (Safi TopUp)، بنیاد آموزشی Safi Academy و اپلیکیشن ZEV است. وی در دانشگاه فنی استانبول (ITU) تحصیل کرده و به عنوان مدیر رسمی در اداره شرکت‌های بریتانیا ثبت شده است.'
    },
    {
      q: 'شرکت Safi International Capital LTD چیست؟',
      a: 'این شرکت، لنگر حقوقی رسمی و هلدینگ مادر اکوسیستم صافی است که در انگلستان و ولز با شماره ثبت ۱۷۰۶۳۲۸۶ (Company Number: 17063286)، شناسه بین‌المللی دانس ۲۳۴۶۲۱۳۵۶ و کد مالیاتی ۸۵۶۷۷ ۱۳۶۱۱ ثبت رسمی شده و دفتر مرکزی آن در آدرس 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ واقع است.'
    },
    {
      q: 'اکوسیستم گروه صافی شامل چه شرکت‌ها و پروژه‌هایی است؟',
      a: 'این اکوسیستم شامل صافی‌پی (بانکداری دیجیتال و کارت‌های ویزا بین‌المللی)، صافی تاپ‌آپ (خدمات مخابراتی و شارژ بین‌المللی در بیش از ۱۵۰ کشور)، صافی آکادمی (آموزش کدنویسی و هوش مصنوعی)، اپلیکیشن غیرمتمرکز ZEV (ارتباطات رمزنگاری‌شده و حریم خصوصی) و برند لوکس صافی‌پرو (مد و پوشاک مدرن) است.'
    },
    {
      q: 'مدارک و صلاحیت‌های حرفه‌ای شاهین صافی چیست؟',
      a: 'شاهین صافی دارای گواهینامه معتبر تحلیل‌گر مالی (Certified Financial Technician - CFTe) از فدراسیون بین‌المللی تحلیل‌گران تکنیکال (IFTA) است و تحصیلات دانشگاهی خود را در دانشگاه فنی استانبول (ITU) گذرانده است.'
    },
    {
      q: 'سرمایه‌گذاران و شرکای تجاری چگونه می‌توانند ارتباط مستقیم برقرار کنند؟',
      a: 'متقاضیان نهادی و شرکای تجاری می‌توانند از طریق ایمیل رسمی شرکتی info@safiinternationalcapitalltd.site یا پروفایل‌های رسمی و تاییدشده وی در لینکدین، تداکس (TED) و مدیوم تماس حاصل نمایند.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-[#D4AF37] selection:text-black pt-28 pb-24 px-3 sm:px-6 font-sans" dir="rtl">
      <div className="w-[98%] max-w-[1500px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24 border-b border-zinc-800/50 pb-20">
          <div className="relative w-56 h-56 md:w-72 md:h-72 shrink-0 group">
            <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-pulse opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="absolute -inset-4 rounded-full border border-zinc-800 opacity-50"></div>
            <Image 
              src="/shaheen4.jpeg" 
              alt="شاهین صافی - بنیان‌گذار و مدیر ارشد" 
              fill 
              priority
              className="object-cover rounded-full border-2 border-[#111] shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-6 text-center md:text-right flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-xs font-mono text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>هویت رسمی تاییدشده • متصل به گراف دانش گوگل (Knowledge Graph)</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              شاهین <span className="text-[#D4AF37]">صافی</span>
            </h1>

            <p className="text-[#D4AF37] text-lg md:text-xl font-light tracking-wide font-mono uppercase">
              بنیان‌گذار، مدیرعامل و طراح ارشد چشم‌انداز
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-light mx-auto md:mx-0">
              بنیان‌گذار و مدیر شرکت <strong className="text-white">Safi International Capital LTD</strong> (شماره ثبت انگلستان: ۱۷۰۶۳۲۸۶). تکنسین رسمی و معتبر بازارهای مالی (CFTe) و دانش‌آموخته دانشگاه فنی استانبول (ITU)، فعال در توسعه سیستم‌های بانکداری دیجیتال فرامرزی، فناوری‌های مالی و وب غیرمتمرکز.
            </p>
            
            {/* Badges & Credential Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs font-mono">
              <a 
                href="https://www.wikidata.org/wiki/Q138427366" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-[#D4AF37] transition-all"
              >
                شناسه ویکیداده: Q138427366
              </a>
              <a 
                href="https://find-and-update.company-information.service.gov.uk/company/17063286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-[#D4AF37] transition-all"
              >
                ثبت بریتانیا: 17063286
              </a>
              <a 
                href="https://www.ted.com/profiles/51476914" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-[#D4AF37] transition-all"
              >
                پروفایل TED
              </a>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <Link 
                href="/fa/cv" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-sm"
              >
                <span className="relative z-10">مشاهده رزومه (CV)</span>
                <svg className="w-4 h-4 relative z-10 group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>

              <a 
                href="mailto:info@safiinternationalcapitalltd.site" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-mono rounded-full text-sm transition-all"
              >
                <span>ارتباط نهادی و تجاری</span>
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Anchor Official Box */}
        <div className="mb-24 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-[#D4AF37]/30 p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 border-b border-zinc-800 pb-8">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full text-xs font-mono uppercase tracking-wider">
                لنگر حقوقی و شرکت مادر هلدینگ
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Safi International Capital LTD
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed">
                ثبت شده رسمی در اداره شرکت‌های انگلستان و ولز با شماره ثبتی <strong className="text-white font-mono">17063286</strong>. این شرکت لنگر حقوقی اصلی و نهادی برای هدایت پورتفولیو، جذب سرمایه و اتصال اکوسیستم صافی به بازارهای بین‌المللی است.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href={corporateDetails.companiesHouse} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-colors"
              >
                استعلام در اداره شرکت‌های بریتانیا
              </a>
              <a 
                href={corporateDetails.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                وب‌سایت رسمی هلدینگ
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">شماره ثبت انگلستان (CRN)</p>
              <p className="text-white font-bold text-base mt-1">17063286</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">کد مالیاتی شرکتی (Tax ID)</p>
              <p className="text-white font-bold text-base mt-1">85677 13611</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">شناسه جهانی دانس (DUNS)</p>
              <p className="text-white font-bold text-base mt-1">234621356</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">حوزه قضایی و ثبت</p>
              <p className="text-white font-bold text-base mt-1">لندن، بریتانیا (UK)</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-zinc-400">
            <p>
              <strong className="text-zinc-300">دفتر مرکزی ثبت‌شده:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
            </p>
            <p>
              <strong className="text-zinc-300">ایمیل ارتباطی رسمی:</strong> info@safiinternationalcapitalltd.site
            </p>
          </div>
        </div>

        {/* Ventures & Companies Section */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">شرکت‌ها و دارایی‌های اکوسیستم</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
              پورتفولیوی گروه صافی
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl border p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                  company.isAnchor 
                    ? 'border-[#D4AF37]/50 bg-gradient-to-b from-zinc-900 to-[#0c0c0c]' 
                    : 'border-zinc-800 bg-[#0f0f0f] hover:border-[#D4AF37]/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-md text-[10px] font-mono uppercase tracking-wider">
                    {company.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {company.category}
                  </span>
                </div>

                <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {company.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                  {company.description}
                </p>

                <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <a 
                    href={company.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{company.link}</span>
                    <svg className="w-3.5 h-3.5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-zinc-600">فعال</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section for AEO (AI / Knowledge Graph Engine) */}
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-14">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                بهینه‌سازی برای الگوریتم‌های هوش مصنوعی و گراف دانش (AEO / GEO / Knowledge Graph)
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              پرسش‌های متداول و اطلاعات ثبتی
            </h2>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              اطلاعات حقوقی، سوابق حرفه‌ای و ساختار شرکتی تایید شده برای موتورهای هوش مصنوعی و پنل دانش گوگل (Google Knowledge Panel).
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-right p-6 flex justify-between items-center gap-4 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="font-bold text-white text-base md:text-lg">
                    {faq.q}
                  </span>
                  <span className={`text-xl font-mono text-[#D4AF37] transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-zinc-900 pt-4 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}