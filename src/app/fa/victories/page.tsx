import Image from 'next/image';
import Link from 'next/link';
import { FaCrown, FaArrowLeft } from 'react-icons/fa6';

export default function VenturesPageFa() {
  const ventures = [
    {
      id: 1,
      name: 'SafiPay',
      logo: '/safipay.jpeg',
      tagline: 'انقلاب در بانکداری بین‌المللی دیجیتال و صدور کارت‌های ویزا',
      description: 'سافی‌پی پروژه پرچمدار ما برای شکستن مرزهای مالی برای افغان‌ها و کاربران بین‌المللی است. ما بستری پیشرفته برای افتتاح حساب‌های چندارزی و صدور آنی کارت‌های ویزای فیزیکی و مجازی در حوزه اتحادیه اروپا فراهم کرده‌ایم.',
      features: [
        'افتتاح حساب بین‌المللی چندارزی (دلار، یورو، پوند، زلوتی، کرون)',
        'صدور آنی کارت ویزا با بالاترین استانداردهای امنیتی بانکی اروپا',
        'اتصال مستقیم به درگاه‌های جهانی مانند Stripe و PayPal',
        'ارائه مشخصات حساب بانکی محلی اروپایی جهت تجارت جهانی',
        'فرایند ثبت‌نام ساده و سریع برای کارآفرینان و مهاجران'
      ],
      website: 'https://www.safipay.net',
      color: 'from-amber-500/15 via-amber-500/5 to-transparent'
    },
    {
      id: 2,
      name: 'Safi TopUp',
      logo: '/safitopup.jpeg',
      tagline: 'پل ارتباطی جهانی برای خدمات کردیت و مخابرات دیجیتال',
      description: 'سافی تاپ‌آپ یکی از گسترده‌ترین شبکه‌های توزیع محصولات دیجیتال است. متصل به بیش از ۷۰۰ اپراتور جهانی تلفن همراه، این پلتفرم امکان ارسال کردیت، بسته‌های اینترنت بین‌المللی eSIM و خرید گیفت‌کارت را در بیش از ۱۵۰ کشور فراهم می‌سازد.',
      features: [
        'ارسال کردیت و شارژ به بیش از ۷۰۰ اپراتور بین‌المللی',
        'کارت‌های بازی دیجیتال (پلی‌استیشن، استیم، آیتونز، ایکس‌باکس)',
        'بسته‌های اینترنت و سرویس‌های eSIM در بیش از ۱۵۰ کشور',
        'پرداخت قبوض اشتراکی و مخابراتی بین‌المللی',
        'پشتیبانی ۲۴ ساعته با تحویل آنی و خودکار دیجیتال'
      ],
      website: 'https://www.safitopup.site',
      color: 'from-blue-500/15 via-blue-500/5 to-transparent'
    },
    {
      id: 3,
      name: 'Safi International Capital LTD',
      logo: '/saficapital.png',
      tagline: 'سرمایه‌گذاری خطرپذیر بین‌المللی، مدیریت دارایی و گسترش فرامرزی در لندن',
      description: 'با ثبت رسمی در لندن بریتانیا، شرکت کپیتال بین‌المللی صافی به عنوان بازوی نهادی سرمایه‌گذاری و مدیریت سرمایه گروه صافی فعالیت می‌کند. تمرکز این نهاد بر تخصیص هوشمندانه منابع مالی در فناوری‌های نوآورانه فین‌تک، کریدورهای نقدینگی و بازارهای نوظهور است.',
      features: [
        'ثبت رسمی در سازمان ثبت شرکت‌های بریتانیا (UK Companies House)',
        'رعایت بالاترین استانداردهای حاکمیت شرکتی و انطباق مالی اروپا',
        'مدیریت نقدینگی و سرمایه‌گذاری فرامرزی در پروژه‌های فین‌تک',
        'پل ارتباطی استراتژیک میان لندن، دبی و بازارهای نوظهور منطقه',
        'ایجاد زنجیره ارزش بلندمدت و توسعه فناوری‌های کلیدی'
      ],
      website: 'https://safiinternationalcapitalltd.site',
      color: 'from-emerald-500/15 via-emerald-500/5 to-transparent'
    },
    {
      id: 4,
      name: 'ZEV App',
      logo: '/zev.png',
      tagline: 'شبکه اجتماعی غیرمتمرکز، آزادی بیان و اقتصاد سازندگان محتوا',
      description: 'زِو (ZEV) شاهکار نرم‌افزاری ما در حوزه شبکه‌های اجتماعی برای بازگرداندن حاکمیت داده‌ها به کاربران است. پلتفرمی بدون سانسور متمرکز، همراه با ارتباطات رمزنگاری‌شده سرتاسری و سیستم‌های اختصاصی درآمدزایی برای سازندگان محتوا.',
      features: [
        'معماری مقاوم در برابر سانسور برای تضمین آزادی بیان اصیل',
        'پیام‌رسانی، تماس صوتی و تبادل رسانه با رمزنگاری پیشرفته سرتاسری',
        'درآمدزایی مستقیم سازندگان بدون کارمزدهای تحمیلی پلتفرم‌های سنتی',
        'فید رسانه‌ای فوق‌العاده سریع با رابط کاربری بسیار مدرن',
        'نسخه‌های اختصاصی تلفن همراه برای سیستم‌های عامل iOS و Android'
      ],
      website: 'https://www.zevapp.com',
      color: 'from-cyan-500/15 via-cyan-500/5 to-transparent'
    },
    {
      id: 5,
      name: 'Safi Academy',
      logo: '/safiacademy.png',
      tagline: 'مرکز تخصصی آموزش فناوری‌های نوین، کدنویسی و توانمندسازی جوانان',
      description: 'صافی اکادمی بنیاد آموزشی پیشتاز ما برای توانمندسازی جوانان و دانشجویان در بازارهای در حال ظهور و سراسر جهان است؛ با ارائه آموزش‌های استاندارد جهانی در برنامه‌نویسی، هوش مصنوعی، زبان انگلیسی و مهارت‌های تجارت دیجیتال.',
      features: [
        'سرفصل‌های جامع آموزش برنامه‌نویسی فول‌استک و هوش مصنوعی',
        'پورتال تعاملی دانشجویی با راهنمایی و منتورینگ پروژه‌محور',
        'ارائه گواهینامه‌های معتبر بین‌المللی و مسیرهای ورود به بازار کار',
        'دسترسی رایگان و آسان برای جوانان مناطق محروم و مهاجران',
        'شکستن بن‌بست‌های آموزشی سنتی با استفاده از کلاس‌های دیجیتال آنلاین'
      ],
      website: 'https://safiacademy.org',
      color: 'from-amber-500/15 via-emerald-500/5 to-transparent'
    },
    {
      id: 6,
      name: 'SafiPro',
      logo: '/safipro.jpeg',
      tagline: 'تعالی در مد مدرن، سبک زندگی و تولید صنعتی پوشاک لوکس',
      description: 'صافی‌پرو برند تخصصی پوشاک و سبک زندگی معاصر ماست. این برند با تکیه بر دیدگاهی زیبایی‌شناسانه، تلفیقی از برش‌های مدرن و پارچه‌های صنعتی باکیفیت را به مشتریان خوش‌پوش در سراسر جهان از طریق فروش مستقیم آنلاین عرضه می‌کند.',
      features: [
        'طراحی‌های انحصاری همگام با جدیدترین ترندهای جهانی مد',
        'استفاده از متریال مرغوب و دوخت حرفه‌ای صنعتی با دقت بالا',
        'ارسال مستقیم بین‌المللی به خریداران از طریق safipro.site',
        'کنترل کیفیت دقیق در تمامی مراحل الگو، تولید و بسته‌بندی',
        'محصولات متنوع در رده‌های لباس روزمره لوکس، استریت‌ویر و اکسسوری'
      ],
      website: 'https://safipro.site',
      color: 'from-purple-500/15 via-purple-500/5 to-transparent'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white pt-28 pb-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto" dir="rtl">
      
      {/* هدر صفحه */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-xs uppercase tracking-widest">
          <FaCrown size={12} />
          <span>پورتفولیوی پروژه‌های شاهین صافی</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-luxury tracking-tight uppercase italic">
          پروژه‌ها و اکوسیستم صافی
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          طراحی و مهندسی اکوسیستمی به‌هم‌پیوسته که در آن فین‌تک، مخابرات، شبکه‌های اجتماعی، آموزش نوین و تجارت فرامرزی برای حذف موانع سنتی به یکدیگر می‌پیوندند.
        </p>
      </div>

      {/* لیست پروژه‌ها */}
      <div className="space-y-12">
        {ventures.map((venture) => (
          <div 
            key={venture.id}
            className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-bl ${venture.color} p-6 md:p-10 group hover:border-amber-400/40 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.8)]`}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              
              {/* بخش لوگو */}
              <div className="w-full lg:w-1/4 flex justify-center shrink-0">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950 p-2 group-hover:border-amber-400/40 group-hover:scale-105 transition-all duration-500">
                  <Image 
                    src={venture.logo} 
                    alt={venture.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
              </div>

              {/* بخش محتوا */}
              <div className="w-full lg:w-3/4 space-y-5">
                <div className="space-y-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {venture.name}
                  </h2>
                  <p className="text-amber-400/90 text-xs md:text-sm font-mono tracking-wider uppercase font-semibold">
                    {venture.tagline}
                  </p>
                </div>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                  {venture.description}
                </p>

                {/* ویژگی‌ها */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {venture.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-zinc-400 font-light">
                      <span className="text-amber-400 font-bold shrink-0">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* دکمه ورود */}
                <div className="pt-4">
                  <Link 
                    href={venture.website} 
                    target="_blank"
                    className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black border border-white/15 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 group/btn"
                  >
                    <span>مشاهده و ورود به {venture.name}</span>
                    <FaArrowLeft size={12} className="rotate-45 group-hover/btn:rotate-0 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}