"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaFacebook, 
  FaMedium, 
  FaXTwitter, 
  FaArrowLeft, 
  FaShieldHalved, 
  FaGlobe, 
  FaChartLine, 
  FaBolt, 
  FaBuildingColumns, 
  FaCreditCard, 
  FaNetworkWired, 
  FaBriefcase, 
  FaCrown,
  FaGraduationCap,
  FaComments
} from 'react-icons/fa6';

export default function HomePageFa() {
  const ventures = [
    {
      name: "SafiPay",
      badge: "پروژه پیشرو فین‌تک",
      tagline: "بانکداری دیجیتال اروپایی و زیرساخت صدور آنی کارت‌های ویزا",
      description: "سافی‌پی هسته اصلی زیرساخت مالی ما است که برای شکستن انزوای مالی طراحی شده است. ارائه شماره حساب‌های اختصاصی چندارزی اروپایی (یورو، دلار، پوند) و صدور آنی کارت‌های فیزیکی و مجازی ویزا در اتحادیه اروپا برای بازارهای در حال ظهور، مهاجران و کارآفرینان بین‌المللی.",
      image: "/safipay.jpeg",
      link: "https://safipay.net",
      metrics: ["شماره حساب چندارزی IBAN", "کارت ویزا اتحادیه اروپا", "اتصال به Stripe و PayPal"],
      accent: "from-amber-500/20 via-amber-500/5 to-transparent",
      border: "hover:border-amber-400/50",
      btnText: "ورود به SafiPay",
    },
    {
      name: "Safi TopUp",
      badge: "شبکه جهانی توزیع دیجیتال",
      tagline: "پل ارتباطی ارسال کردیت، بسته دیتا و خدمات بین‌المللی مخابراتی",
      description: "یک شبکه توزیع با سرعت بی‌نظیر که مستقیماً به بیش از ۷۰۰ اپراتور تلفن همراه در جهان متصل است. ارسال کردیت مکالمه، بسته‌های بین‌المللی eSIM و گیفت‌کارت‌های دیجیتال در بیش از ۱۵۰ کشور جهان در کسری از ثانیه.",
      image: "/safitopup.jpeg",
      link: "https://safitopup.site",
      metrics: ["۷۰۰+ اپراتور جهانی", "فعال در ۱۵۰+ کشور", "تحویل آنی و خودکار"],
      accent: "from-blue-500/20 via-blue-500/5 to-transparent",
      border: "hover:border-blue-400/50",
      btnText: "کاوش در Safi TopUp",
    },
    {
      name: "Safi International Capital",
      badge: "سرمایه‌گذاری خطرپذیر لندن",
      tagline: "مدیریت دارایی فرامرزی، نقدینگی استراتژیک و توسعه در بازارهای نوظهور",
      description: "ثبت شده در لندن بریتانیا، شرکت بین‌المللی کپیتال صافی به عنوان بازوی نهادی سرمایه‌گذاری و توسعه گروه فعالیت می‌کند؛ با تمرکز بر تخصیص هوشمندانه سرمایه در فناوری‌های مالی نوین و گسترش زیرساخت‌های بین‌المللی.",
      image: "/saficapital.png",
      link: "https://safiinternationalcapitalltd.site",
      metrics: ["ثبت رسمی در لندن", "حاکمیت شرکتی پیشرفته", "سرمایه‌گذاری خطرپذیر"],
      accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      border: "hover:border-emerald-400/50",
      btnText: "آشنایی با کپیتال",
    },
    {
      name: "ZEV App",
      badge: "شبکه اجتماعی نسل جدید",
      tagline: "پلتفرم اجتماعی غیرمتمرکز، آزادی بیان و اقتصاد سازندگان محتوا",
      description: "اپلیکیشن زِو (ZEV) پلتفرم نوین شبکه اجتماعی ماست که با هدف حاکمیت داده‌های شخصی، ارتباطات رمزنگاری‌شده، آزادی بیان واقعی و درآمدزایی مستقیم سازندگان محتوا بدون واسطه طراحی شده است.",
      image: "/zev.png",
      link: "https://www.zevapp.com",
      metrics: ["حفظ حریم خصوصی", "درآمدزایی سازندگان", "پیام‌رسان امن"],
      accent: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      border: "hover:border-cyan-400/50",
      btnText: "ورود به اپلیکیشن ZEV",
    },
    {
      name: "Safi Academy",
      badge: "آموزش و توانمندسازی جوانان",
      tagline: "مرکز تخصصی آموزش فناوری‌های نوین، برنامه‌نویسی و سواد دیجیتال",
      description: "صافی اکادمی ابتکار آموزشی پیشگام ما برای آموزش و توانمندسازی نسل جوان و دانشجویان در زمینه‌های برنامه‌نویسی پیشرفته، هوش مصنوعی، تجارت الکترونیک و مهارت‌های نوین بازار کار جهانی است.",
      image: "/safiacademy.png",
      link: "https://safiacademy.org",
      metrics: ["دوره‌های کدنویسی و AI", "توانمندسازی جوانان", "گواهینامه‌های معتبر"],
      accent: "from-amber-500/20 via-emerald-500/5 to-transparent",
      border: "hover:border-amber-400/50",
      btnText: "ورود به صافی اکادمی",
    },
    {
      name: "SafiPro",
      badge: "برند مد و لایف‌استایل لوکس",
      tagline: "طراحی مدرن صنعتی و تجارت بین‌المللی D2C",
      description: "صافی‌پرو بخش تخصصی سبک زندگی و مد معاصر ماست. تلفیقی از ظرافت طراحی مدرن و متریال صنعتی باکیفیت برای تولید پوشاک شیک که مستقیماً به مشتریان سراسر دنیا عرضه می‌شود.",
      image: "/safipro.jpeg",
      link: "https://safipro.site",
      metrics: ["طراحی اختصاصی", "ارسال سریع بین‌المللی", "کیفیت پارچه صنعتی"],
      accent: "from-purple-500/20 via-purple-500/5 to-transparent",
      border: "hover:border-purple-400/50",
      btnText: "مشاهده SafiPro",
    }
  ];

  const impactMetrics = [
    { value: "+۱۰ میلیون دلار", label: "زیرساخت مبادلات مالی", detail: "طراحی شده برای انتقال ایمن با حجم بالا" },
    { value: "+۱۵۰ کشور", label: "پوشش بازارهای بین‌المللی", detail: "کریدورهای ارتباطی فعال فرامرزی" },
    { value: "+۷۰۰ اپراتور", label: "اپراتورهای مخابراتی متصل", detail: "اتصال مستقیم از طریق رابط‌های اختصاصی API" },
    { value: "۴ قطب جهانی", label: "مراکز راهبردی عملیات", detail: "لندن • دبی • استانبول • کابل" },
    { value: "۹۹.۹۹٪", label: "پایداری زیرساخت", detail: "استاندارد آپ‌تایم سازمانی و سیستم Zero-Trust" },
  ];

  const pillars = [
    {
      icon: <FaBuildingColumns className="text-amber-400" size={28} />,
      title: "مهندسی فین‌تک و شمولیت مالی",
      desc: "توسعه ساختارهای نوین بانکداری دیجیتال که دسترسی آزاد به امور مالی را برای کسانی که از سیستم‌های سنتی محروم بوده‌اند ممکن می‌سازد."
    },
    {
      icon: <FaShieldHalved className="text-amber-400" size={28} />,
      title: "دقت نظارتی و رعایت استانداردها",
      desc: "پیاده‌سازی خودکار و دقیق استانداردهای اروپایی KYC/AML و الزامات امنیتی بین‌المللی بدون ایجاد اختلال در سرعت تبادلات."
    },
    {
      icon: <FaNetworkWired className="text-amber-400" size={28} />,
      title: "توزیع بدون تاخیر داده‌ها و اعتبار",
      desc: "درگاه‌های مقیاس‌پذیر مخابراتی با قابلیت پردازش صدها هزار تراکنش دیجیتال در صدم ثانیه با ضریب اطمینان حداکثری."
    },
    {
      icon: <FaChartLine className="text-amber-400" size={28} />,
      title: "تخصیص راهبردی سرمایه",
      desc: "هدایت سرمایه و نقدینگی نهادی به سمت فرصت‌های بکر فناوری در بازارهای مستعد و رو به رشد خاورمیانه و آسیای میانه."
    }
  ];

  const mediumArticles = [
    {
      title: "زیرساخت اعتماد: چگونه SafiPay در حال بازتعریف بانکداری است",
      excerpt: "بررسی عمیق معماری فنی پشت پلتفرم سافی‌پی، ایجاد حساب‌های چندارزی، امنیت انطباقی و شمولیت مالی پایدار.",
      link: "https://medium.com/@omulbaninmoradi188/the-infrastructure-of-trust-how-safipay-is-redefining-digital-banking-security-in-emerging-markets-439b14641ad5",
      tag: "معماری فین‌تک",
      readTime: "خواندن ۶ دقیقه",
      thumb: "/hero.jpg"
    },
    {
      title: "تعالی نظارتی در امور مالی دیجیتال: بررسی عملیات اروپایی",
      excerpt: "چگونه پایبندی به الزامات نظارتی اتحادیه اروپا، سافی‌پی را به یک پیشرو قابل اعتماد در حوزه فین‌تک تبدیل کرد.",
      link: "https://medium.com/@jsana9033/regulatory-excellence-in-digital-finance-a-case-study-of-safipays-european-operations-5f9a6a1845ad",
      tag: "انطباق مالی بین‌المللی",
      readTime: "خواندن ۵ دقیقه",
      thumb: "/safipay.jpeg"
    },
    {
      title: "دیدگاه یک کارآفرین: شاهین صافی کیست؟",
      excerpt: "مسیر تسلیم‌ناپذیر تا آزادی مالی—از کودکی برنامه‌نویس تا تأسیس شرکت‌های بزرگ بین‌المللی.",
      link: "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd",
      tag: "رهبری و بینش",
      readTime: "خواندن ۸ دقیقه",
      thumb: "/shaheen1.jpeg"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/shaheen-safi-b73a30299", color: "text-blue-400", label: "لینکدین" },
    { icon: <FaXTwitter size={22} />, link: "https://x.com/shaheensafi011", color: "text-zinc-200", label: "توییتر (X)" },
    { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/top_g_official1", color: "text-pink-400", label: "اینستاگرام" },
    { icon: <FaTiktok size={22} />, link: "https://www.tiktok.com/@safi_sahib6", color: "text-zinc-100", label: "تیک‌تاک" },
    { icon: <FaWhatsapp size={22} />, link: "https://wa.me/19342032497", color: "text-emerald-400", label: "واتساپ VIP" },
    { icon: <FaFacebook size={22} />, link: "https://www.facebook.com/share/18h8Drdg6z/", color: "text-blue-500", label: "فیسبوک" },
    { icon: <FaMedium size={22} />, link: "https://medium.com/@shaheensafi09", color: "text-amber-400", label: "مقالات مدیوم" },
  ];

  const hubs = [
    { city: "لندن", country: "بریتانیا", role: "دفتر مرکزی و سرمایه‌گذاری بین‌المللی", flag: "🇬🇧" },
    { city: "دبی", country: "امارات متحده عربی", role: "نوآوری مالی و هاب تجارت منطقه‌ای", flag: "🇦🇪" },
    { city: "استانبول", country: "ترکیه", role: "زنجیره تأمین و عملیات تجاری", flag: "🇹🇷" },
    { city: "کابل", country: "افغانستان", role: "کانون اصلی شمولیت مالی", flag: "🇦🇫" },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-amber-400/30 selection:text-white relative overflow-hidden" dir="rtl">
      
      {/* 🌌 Atmospheric Ambient Background Lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] right-[-10%] w-[55rem] h-[55rem] bg-amber-500/10 rounded-full blur-[140px] animate-pulse-subtle"></div>
        <div className="absolute top-[40%] left-[-15%] w-[45rem] h-[45rem] bg-zinc-600/10 rounded-full blur-[160px] animate-pulse-subtle"></div>
        <div className="absolute bottom-[-10%] right-[20%] w-[50rem] h-[50rem] bg-amber-600/5 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid-mesh opacity-25"></div>
      </div>

      <div className="relative z-10">

        {/* ═══════════════════════════════════════════════════
            👑 بخش ۱: هروسکشن فرماندهی و معرفی شاهین صافی
        ═══════════════════════════════════════════════════ */}
        <section className="min-h-screen flex items-center pt-24 pb-14 md:pt-32 md:pb-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            
            {/* ستون متن و معرفی */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* نشانگر وضعیت زنده */}
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-400/30 rounded-full bg-amber-400/5 backdrop-blur-xl shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-amber-300 font-mono text-xs uppercase tracking-widest font-bold">
                  معمار سیستم‌های دیجیتال • کارآفرین بین‌المللی
                </span>
              </div>
              
              {/* تیتر بزرگ با استایل لوکس */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tight leading-[0.95] uppercase">
                  <span className="text-silver block drop-shadow-2xl">
                    شاهین
                  </span>
                  <span className="text-luxury block drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                    صافی
                  </span>
                </h1>
                <p className="text-zinc-400 font-mono text-xs md:text-sm tracking-wider uppercase pt-2">
                  معماری آزادی مالی و پیوند بازارهای جهانی
                </p>
              </div>

              {/* بیانیه و چشم‌انداز */}
              <div className="space-y-4 max-w-2xl border-r-2 border-amber-400/40 pr-6 py-1">
                <blockquote className="text-2xl md:text-3xl text-zinc-100 font-light leading-snug">
                  «من منتظر آینده نمی‌مانم؛ <br />
                  <span className="font-extrabold text-luxury italic">من آینده را کدنویسی می‌کنم.</span>»
                </blockquote>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  از کاوش در لایه‌های بنیادین کدنویسی در سن ۶ سالگی تا ثبت و هدایت <span className="text-white font-medium">Safi International Capital</span> در پایتخت مالی بریتانیا (لندن). شاهین صافی با مهندسی پلتفرم‌های <span className="text-amber-300 font-medium">SafiPay</span>، <span className="text-amber-300 font-medium">Safi TopUp</span>، <span className="text-amber-300 font-medium">ZEV App</span>، <span className="text-amber-300 font-medium">Safi Academy</span> و <span className="text-amber-300 font-medium">SafiPro</span> توانسته موانع مالی سنتی را کنار زده و نسل نوینی از اقتصاد دیجیتال را در سطح فرامرزی پایه‌گذاری کند.
                </p>
              </div>

              {/* قابلیت‌های سریع و اعتماد سازی */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl pt-1">
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">بانکداری اروپا</p>
                  <p className="text-zinc-500 text-[11px] font-mono">کارت ویزا و IBAN</p>
                </div>
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">۷۰۰+ اپراتور</p>
                  <p className="text-zinc-500 text-[11px] font-mono">شبکه مخابرات جهانی</p>
                </div>
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">شبکه ZEV</p>
                  <p className="text-zinc-500 text-[11px] font-mono">اپلیکیشن اجتماعی</p>
                </div>
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">صافی اکادمی</p>
                  <p className="text-zinc-500 text-[11px] font-mono">آموزش فناوری</p>
                </div>
              </div>

              {/* دکمه‌های اصلی فراخوان */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link 
                  href="#ventures" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-black uppercase text-xs md:text-sm tracking-wider rounded-full overflow-hidden shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:shadow-[0_0_55px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    مشاهده اکوسیستم و پروژه‌ها
                    <FaArrowLeft className="group-hover:-translate-x-1.5 transition-transform duration-300" />
                  </span>
                </Link>

                <Link 
                  href="/fa/cv" 
                  className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-white/15 hover:border-amber-400/50 text-white font-bold uppercase text-xs md:text-sm tracking-wider rounded-full hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
                >
                  رزومه مدیریتی (CV)
                </Link>

                <Link 
                  href="https://wa.me/19342032497" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-4 text-emerald-400 hover:text-emerald-300 font-mono text-xs uppercase tracking-wider transition-colors"
                >
                  <FaWhatsapp size={16} />
                  <span>خط ارتباطی مستقیم</span>
                </Link>
              </div>

            </div>

            {/* ستون راست: فریم تصویر سه بعدی شیشه‌ای */}
            <div className="lg:col-span-5 relative">
              
              {/* هاله نور طلایی پشت تصویر */}
              <div className="absolute -inset-4 bg-gradient-to-tl from-amber-500/25 via-amber-400/10 to-transparent blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
              
              {/* قاب شیشه‌ای لوکس */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] p-3 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-amber-400/40">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <Image 
                    src="/shaheen4.jpeg" 
                    alt="شاهین صافی - بنیانگذار و مدیرعامل" 
                    fill 
                    className="object-cover transition-all duration-700 group-hover:scale-105 filter grayscale-[25%] group-hover:grayscale-0"
                    priority
                  />
                  
                  {/* گرادینت تیره روی تصویر برای نمایش متن */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* برچسب شناور: لندن */}
                  <div className="absolute top-5 left-5 backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-sm">🇬🇧</span>
                    <span className="text-zinc-300 font-mono text-[10px] tracking-wider uppercase font-semibold">دفتر مرکزی: لندن</span>
                  </div>

                  {/* برچسب شناور: وضعیت SafiPay */}
                  <div className="absolute top-5 right-5 backdrop-blur-md bg-black/60 border border-amber-400/30 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-amber-300 font-mono text-[10px] tracking-wider uppercase font-bold">زیرساخت SafiPay: فعال</span>
                  </div>

                  {/* پنل شیشه‌ای اطلاعات هویتی */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-black/70 border border-white/15 p-5 rounded-2xl space-y-2 shadow-2xl transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-luxury font-black text-sm uppercase tracking-wider">شاهین صافی</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        مدیر ارشد تأیید شده
                      </span>
                    </div>
                    <p className="text-zinc-300 text-xs font-light leading-relaxed">
                      هدایت پروژه‌های فرامرزی در حوزه فناوری‌های مالی، شبکه‌های اجتماعی، آموزش و تجارت مدرن.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            📊 بخش ۲: آمارهای کلیدی و دستاوردهای عددی
        ═══════════════════════════════════════════════════ */}
        <section className="py-8 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
            {impactMetrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="glass-card-gold p-5 md:p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-luxury tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </p>
                  <p className="text-white font-bold text-xs uppercase tracking-wider mt-2">
                    {metric.label}
                  </p>
                </div>
                <p className="text-zinc-500 text-[11px] font-mono mt-3 leading-normal">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            🏛️ بخش ۳: اکوسیستم شرکت‌ها و پروژه‌های صافی (۶ پروژه)
        ═══════════════════════════════════════════════════ */}
        <section id="ventures" className="py-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-[11px] uppercase tracking-widest mb-3">
                <FaCrown size={12} />
                پورتفولیوی شرکتی و اکوسیستم صافی
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase italic tracking-tight">
                اکوسیستم تجاری <span className="text-luxury">صافی</span>
              </h2>
            </div>
            <p className="text-zinc-400 font-light text-sm md:text-base max-w-md leading-relaxed md:text-left">
              شش بازوی قدرتمند و تخصصی که برای حل چالش‌های نقدینگی، پرداخت‌های بین‌المللی، آزادی شبکه‌های اجتماعی، آموزش فناوری و تجارت الکترونیک طراحی شده‌اند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden rounded-[2.5rem] glass-card border border-white/10 ${venture.border} p-7 md:p-8 flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:-translate-y-2`}
              >
                {/* هاله گرادینت هنگام هوور */}
                <div className={`absolute inset-0 bg-gradient-to-bl ${venture.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 space-y-5">
                  
                  {/* نوار بالا: لوگو و تگ پروژه */}
                  <div className="flex items-center justify-between">
                    <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 shadow-lg group-hover:border-amber-400/40 transition-colors p-1">
                      <Image 
                        src={venture.image} 
                        alt={venture.name} 
                        fill 
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 font-semibold">
                      {venture.badge}
                    </span>
                  </div>

                  {/* عنوان و شعار */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {venture.name}
                    </h3>
                    <p className="text-amber-400/90 font-mono text-xs uppercase tracking-wider font-semibold line-clamp-1">
                      {venture.tagline}
                    </p>
                  </div>

                  {/* توضیحات */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light line-clamp-4">
                    {venture.description}
                  </p>

                  {/* نکات کلیدی */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {venture.metrics.map((m, mIdx) => (
                      <span 
                        key={mIdx} 
                        className="text-[10px] font-mono text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>

                </div>

                {/* دکمه پایین کارت */}
                <div className="relative z-10 pt-6 mt-5 border-t border-white/5 flex items-center justify-between">
                  <Link 
                    href={venture.link} 
                    target="_blank"
                    className="inline-flex items-center gap-2.5 text-xs md:text-sm font-bold uppercase tracking-wider text-white hover:text-amber-300 transition-colors group/btn"
                  >
                    <span>{venture.btnText}</span>
                    <span className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover/btn:bg-amber-400 group-hover/btn:text-black group-hover/btn:border-amber-400 transition-all duration-300">
                      <FaArrowLeft size={10} className="rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                    </span>
                  </Link>

                  <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                    سامانه مستقل
                  </span>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            🛠️ بخش ۴: ارکان معماری و اصول فنی سیستم‌ها
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              اصول راهبردی مهندسی
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tight">
              ارکان معماری <span className="text-luxury">زیرساخت‌های ما</span>
            </h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              تمامی سیستم‌های توسعه‌یافته تحت رهبری شاهین صافی با بالاترین استانداردهای امنیتی، پایداری فوق‌العاده و بیشترین میزان دسترسی طراحی می‌شوند.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card p-7 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-300 space-y-4 hover:-translate-y-1.5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            🌍 بخش ۵: قطب‌های بین‌المللی و مراکز فعالیت
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="glass-card border border-white/10 rounded-[2.5rem] p-7 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                  حضور بین‌المللی
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight">
                  فعالیت در <br />
                  <span className="text-luxury">۴ هاب استراتژیک</span>
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  پیشبرد پروژه‌های فرامرزی نیازمند حضور همزمان در مراکز مالی، زنجیره‌های تأمین و بازارهای مبدأ است؛ از مدیریت سرمایه در لندن تا زنجیره تولید در استانبول و شمولیت مالی در کابل.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {hubs.map((hub, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-400/30 transition-all duration-300 space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{hub.flag}</span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">گره فعال</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {hub.city}، {hub.country}
                    </h4>
                    <p className="text-zinc-400 text-xs font-mono">
                      {hub.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            📰 بخش ۶: مقالات و بینش‌های تخصصی
        ═══════════════════════════════════════════════════ */}
        <section className="py-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                تولید دانش و تحلیل‌های راهبردی
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tight">
                اتاق مطالعه <span className="text-luxury">مدیریتی</span>
              </h2>
            </div>
            <Link 
              href="/fa/blog" 
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-300 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <span>مشاهده تمام مقالات تخصصی</span>
              <FaArrowLeft size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediumArticles.map((article, idx) => (
              <Link 
                key={idx} 
                href={article.link} 
                target="_blank"
                className="group relative overflow-hidden rounded-[2.5rem] glass-card border border-white/10 hover:border-amber-400/50 p-7 md:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300">
                      {article.tag}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                    <FaMedium size={16} />
                    <span>مطالعه در مدیوم</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <FaArrowLeft size={12} className="rotate-45 group-hover:rotate-0 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* نقل قول محوری */}
          <div className="mt-8 glass-card-gold rounded-[2.5rem] p-7 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                اصل بنیادین فکری
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl text-zinc-100 font-serif italic leading-snug">
                «موانع سیستماتیک قوانین فیزیک نیستند؛ آن‌ها صرفاً <span className="text-luxury font-sans font-bold">کدهای ناکارآمد سیستم‌های سنتی‌اند</span> که منتظر معماری مصمم‌تر هستند.»
              </p>
              <p className="text-zinc-400 font-mono text-xs tracking-widest uppercase">
                — شاهین صافی، بنیانگذار و مدیرعامل
              </p>
            </div>
            <Link 
              href="/fa/about" 
              className="shrink-0 px-8 py-3.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black border border-white/15 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              زندگی‌نامه کامل
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            📡 بخش ۷: کانال‌های ارتباطی و تماس مستقیم
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
              شبکه ارتباطی
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight">
              ارتباط با <span className="text-luxury">شاهین صافی</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light">
              جهت پیگیری اطلاعیه‌ها، بررسی فرصت‌های سرمایه‌گذاری مشترک یا آغاز مشاوره‌های راهبردی.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {socialLinks.map((social, idx) => (
              <Link 
                key={idx}
                href={social.link} 
                target="_blank"
                className="p-5 glass-card rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-amber-400/10 ${social.color} transition-colors`}>
                  {social.icon}
                </div>
                <span className="text-[11px] font-mono text-zinc-400 group-hover:text-white uppercase tracking-wider text-center">
                  {social.label}
                </span>
              </Link>
            ))}
          </div>

          {/* خط VIP واتساپ */}
          <div className="mt-10 text-center">
            <Link 
              href="https://wa.me/19342032497" 
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-400/40 hover:border-emerald-400 text-emerald-300 hover:text-white text-xs md:text-sm font-bold uppercase tracking-wider shadow-[0_0_35px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              <span>خط مستقیم واتساپ جهت مکاتبات اداری و سرمایه‌گذاری</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}