"use client";

import Link from 'next/link';
import { 
  FaPaypal, FaBuilding, FaGlobe, FaMobileScreen, 
  FaCube, FaTiktok, FaInstagram, FaYoutube, 
  FaChalkboardUser, FaUserTie, FaAmazon, FaStore,
  FaEtsy, FaEbay, FaCreditCard, FaRegistered, FaPalette
} from 'react-icons/fa6';

export default function ServicesPageFa() {
  const services = [
    {
      title: "نقد کردن درآمد پی‌پال",
      description: "تبدیل امن، سریع و مطمئن موجودی پی‌پال شما به ارزهای رایج با بهترین نرخ تبدیل.",
      price: "تماس بگیرید",
      icon: <FaPaypal size={32} />,
      color: "text-blue-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
    },
    {
      title: "ثبت شرکت LLC در آمریکا",
      description: "راه‌اندازی کاملاً قانونی شرکت با مسئولیت محدود (LLC) در ایالات متحده آمریکا.",
      price: "$150 - $1,000",
      icon: <FaBuilding size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    },
    {
      title: "ثبت شرکت LTD در بریتانیا",
      description: "ثبت رسمی شرکت Private Limited در انگلستان برای دسترسی به بازارهای جهانی.",
      price: "از £450",
      icon: <FaBuilding size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    },
    {
      title: "راه‌اندازی اکانت حرفه‌ای تیک‌تاک",
      description: "ساخت، بهینه‌سازی و تنظیمات امنیتی اکانت بیزینسی و حرفه‌ای تیک‌تاک.",
      price: "1,000 AFN",
      icon: <FaTiktok size={32} />,
      color: "text-white",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
    },
    {
      title: "راه‌اندازی اکانت حرفه‌ای اینستاگرام",
      description: "طراحی پروفایل، بیوگرافی حرفه‌ای و تنظیمات اکانت تجاری (Business) اینستاگرام.",
      price: "1,000 AFN",
      icon: <FaInstagram size={32} />,
      color: "text-pink-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
    },
    {
      title: "ساخت و مانیتایز کانال یوتیوب",
      description: "ایجاد کانال، تنظیمات سئو، طراحی چنل آرت و رساندن کانال به مرحله درآمدزایی.",
      price: "4,000 AFN",
      icon: <FaYoutube size={32} />,
      color: "text-red-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
    },
    {
      title: "راه‌اندازی تیک‌تاک شاپ انگلیس و آمریکا",
      description: "تنظیمات کامل و راه‌اندازی اکانت‌های تیک‌تاک شاپ برای بازارهای UK و US.",
      price: "£50",
      icon: <FaTiktok size={32} />,
      color: "text-white",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
    },
    {
      title: "ساخت اکانت آمازون (Amazon)",
      description: "ایجاد حرفه‌ای و پیکربندی اکانت‌های فروشندگی در آمازون.",
      price: "$30",
      icon: <FaAmazon size={32} />,
      color: "text-orange-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
    },
    {
      title: "ساخت اکانت والمارت (Walmart)",
      description: "پیکربندی کامل و کمک در تأیید اکانت فروشندگی والمارت.",
      price: "$20",
      icon: <FaStore size={32} />,
      color: "text-blue-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
    },
    {
      title: "ساخت اکانت اتسی (Etsy)",
      description: "ایجاد فروشگاه حرفه‌ای و پیکربندی برای فروشندگان در اتسی.",
      price: "$40",
      icon: <FaEtsy size={32} />,
      color: "text-orange-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
      title: "ساخت اکانت ای‌بی (eBay)",
      description: "تنظیمات امن و بهینه‌سازی پنل فروشندگی اکانت ای‌بی.",
      price: "$40",
      icon: <FaEbay size={32} />,
      color: "text-green-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
    },
    {
      title: "ساخت اکانت پی‌پال (PayPal)",
      description: "ایجاد ایمن و تنظیمات اولیه حساب‌های وریفای شده پی‌پال.",
      price: "$45",
      icon: <FaPaypal size={32} />,
      color: "text-blue-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      title: "ساخت اکانت پایونیر (Payoneer)",
      description: "ایجاد و دریافت تأییدیه اکانت‌های پرداختی بین‌المللی پایونیر.",
      price: "$45",
      icon: <FaCreditCard size={32} />,
      color: "text-orange-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
      title: "ثبت برند رسمی",
      description: "خدمات ثبت برند. (توجه: هزینه‌های دولتی ثبت برند جداگانه محاسبه می‌شود).",
      price: "$120 / £120",
      icon: <FaRegistered size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    },
    {
      title: "ساخت و هویت‌سازی برند",
      description: "ساخت کامل برند از پایه شامل هویت بصری و ساختار برندینگ.",
      price: "$200",
      icon: <FaPalette size={32} />,
      color: "text-purple-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]"
    },
    {
      title: "مشاوره تخصصی کسب‌وکار",
      description: "ارائه راهکارهای استراتژیک برای رشد بیزینس، بازاریابی دیجیتال و مدیریت مالی بین‌المللی.",
      price: "$50",
      icon: <FaUserTie size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    }
  ];

  const techServices = [
    {
      title: "طراحی وب‌سایت‌های حرفه‌ای",
      description: "برنامه‌نویسی و طراحی سایت‌های فوق‌مدرن با جدیدترین تکنولوژی‌ها.",
      price: "$50 - $5,000",
      icon: <FaGlobe size={40} />,
      tags: [
        "مالی و حسابداری (Fintech)", "صرافی و کریپتو (Web3)", "فروشگاهی (E-commerce)",
        "شرکتی و سازمانی", "سیستم‌های رزرو آنلاین", "پلتفرم‌های آموزشی",
        "مدیریت املاک (Real Estate)", "خبری و مجله‌ای", "SaaS (نرم‌افزار ابری)", "پورتفولیو شخصی"
      ]
    },
    {
      title: "طراحی وب‌سایت‌های ۳ بُعدی",
      description: "خلق تجربه‌های بصری خیره‌کننده با استفاده از مدل‌های 3D و انیمیشن‌های تعاملی برای برندهای لوکس.",
      price: "تماس بگیرید",
      icon: <FaCube size={40} />,
      tags: ["طراحی WebGL", "انیمیشن‌های تعاملی", "گرافیک خیره‌کننده"]
    },
    {
      title: "توسعه اپلیکیشن موبایل (iOS/Android)",
      description: "طراحی و ساخت اپلیکیشن‌های قدرتمند، سریع و کاربرپسند برای هر دو سیستم‌عامل.",
      price: "$150 - $5,000",
      icon: <FaMobileScreen size={40} />,
      tags: [
        "بانکداری دیجیتال", "کیف پول ارزی/کریپتو", "فروشگاه آنلاین",
        "تاکسی اینترنتی (Ride-sharing)", "سفارش و تحویل غذا", "شبکه‌های اجتماعی",
        "سلامت و تناسب اندام", "پلتفرم‌های آموزشی", "مدیریت تسک و تیم", "رزرو خدمات"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden relative pb-32" dir="rtl">
      
      {/* 🌌 Cinematic Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50rem] h-[50rem] bg-[#D4AF37] opacity-[0.03] rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-zinc-600 opacity-[0.03] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)] animate-[float_4s_ease-in-out_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.2em] font-bold">اکوسیستم دیجیتال</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            خدمات <span className="text-transparent bg-clip-text bg-gradient-to-l from-[#D4AF37] via-[#a88721] to-[#5c490f]">اختصاصی</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            از راه‌اندازی زیرساخت‌های بین‌المللی تا توسعه پلتفرم‌های نرم‌افزاری مدرن؛ ما ایده‌های شما را به واقعیت دیجیتال تبدیل می‌کنیم.
          </p>
        </div>

        {/* Development & Tech Services (The Big Cards) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            توسعه نرم‌افزار و پلتفرم
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techServices.map((tech, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 hover:border-[#D4AF37]/40 transition-all duration-500 group hover:-translate-y-2 shadow-2xl ${idx === 2 ? 'lg:col-span-2 xl:col-span-1' : ''}`}
              >
                {/* Background Icon Positioned Left for RTL */}
                <div className="absolute top-0 left-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110 text-[#D4AF37]">
                  {tech.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{tech.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed min-h-[48px]">{tech.description}</p>
                  
                  {/* Price Tag with LTR Direction to keep ranges like "$150 - $5,000" correct */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span className="text-[#D4AF37] font-bold text-sm" dir="ltr">{tech.price}</span>
                  </div>

                  {/* Hot Niches Tags */}
                  <div className="space-y-3 border-t border-white/5 pt-6">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-4">دسته‌بندی‌های پیشنهادی (Hot):</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-black/50 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:text-white hover:border-[#D4AF37]/50 transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            خدمات تجاری و بین‌المللی
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 transition-all duration-500 group hover:-translate-y-1 hover:bg-zinc-800/60 ${service.borderGlow}`}
              >
                <div className={`mb-6 ${service.color} transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-12">{service.description}</p>
                
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">شروع از</span>
                  {/* Price Tag with LTR Direction */}
                  <span className="text-white font-bold text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all" dir="ltr">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special CTA: S4hel Business Training */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-bl from-[#D4AF37]/20 via-zinc-900 to-black border border-[#D4AF37]/30 p-10 md:p-16 shadow-[0_10px_50px_rgba(212,175,55,0.1)] group">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37] opacity-20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl text-center md:text-right">
              <div className="inline-flex items-center gap-3 text-[#D4AF37]">
                <FaChalkboardUser size={32} />
                <h2 className="text-3xl md:text-4xl font-black">آموزش حرفه‌ای بیزینس آنلاین</h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                آیا می‌خواهید مسیر استقلال مالی را یاد بگیرید؟ ما در یک پلتفرم اختصاصی، صفر تا صد راه‌اندازی، مدیریت و مقیاس‌پذیری کسب‌وکارهای آنلاین را به شما آموزش می‌دهیم.
              </p>
            </div>
            
            <Link 
              href="https://www.s4hel.com" 
              target="_blank"
              className="shrink-0 relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <span>ورود به سایت آموزشی</span>
              {/* Arrow adjusted for RTL (pointing top-left) */}
              <svg className="w-5 h-5 rotate-[135deg]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </div>
  );
}