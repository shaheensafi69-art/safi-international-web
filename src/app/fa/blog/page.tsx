import Image from 'next/image';
import Link from 'next/link';

export default function BlogHubFa() {
  // ۱. مقاله اصلی (Featured)
  const mainBlog = {
    title: "میراث صافی: از تگاب تا بازارهای جهانی",
    description: "سفری خارق‌العاده از یک رویاپرداز که در ۴ سالگی با لینوکس شروع کرد و اکنون در حال بازتعریف چشم‌انداز فین‌تک است.",
    image: "/blog/the-safi-legacy/hero.png", 
    fullPath: "/fa/blog/the-safi-legacy",
    date: "۱۴۰۵/۰۱/۲۶",
    category: "داستان ویژه"
  };

  // ۲. لیست تمام مقالات (همه فعال و به فارسی)
  const allBlogs = [
    { title: "ساخت یک امپراتوری در شاپیفای", slug: "how-to-start-shopify-business", cat: "تجارت الکترونیک", date: "۱۴۰۵/۰۱/۲۷", isPortrait: true },
    { title: "سفر صافی", slug: "the-journey-of-safi", cat: "فین‌تک و اراده", date: "۱۴۰۵/۰۱/۱۶", isPortrait: false },
    { title: "آینده فین‌تک در افغانستان", slug: "fintech-afghanistan-future", cat: "بازار", date: "۱۴۰۵/۰۱/۳۱" },
    { title: "تأثیر 5G بر تجارت الکترونیک", slug: "5g-ecommerce-impact", cat: "ارتباطات", date: "۱۴۰۵/۰۲/۰۲" },
    { title: "مدیریت ثروت با هوش مصنوعی", slug: "ai-wealth-management", cat: "هوش مصنوعی و مالی", date: "۱۴۰۵/۰۲/۰۵" },
    { title: "روانشناسی معاملات سنگین", slug: "trading-psychology", cat: "روانشناسی", date: "۱۴۰۵/۰۲/۰۸" },
    { title: "بلاکچین فراتر از کریپتو", slug: "blockchain-utility", cat: "تکنولوژی", date: "۱۴۰۵/۰۲/۱۱" },
    { title: "برندینگ لوکس در عصر دیجیتال", slug: "digital-luxury-branding", cat: "برندینگ", date: "۱۴۰۵/۰۲/۱۳" },
    { title: "هنر جذب سرمایه‌گذاران خطرپذیر", slug: "vc-outreach-strategy", cat: "سرمایه", date: "۱۴۰۵/۰۲/۱۵" },
    { title: "امنیت سایبری برای پلتفرم‌های مالی", slug: "fintech-cybersecurity", cat: "امنیت", date: "۱۴۰۵/۰۲/۱۷" },
    { title: "ساخت یک تیم دورکار جهانی", slug: "global-remote-team", cat: "رهبری", date: "۱۴۰۵/۰۲/۲۰" },
    { title: "چرا نئوبانک‌ها آینده هستند", slug: "neobanks-revolution", cat: "فین‌تک", date: "۱۴۰۵/۰۲/۲۲" },
    { title: "تسلط بر عادت‌های عملکرد بالا", slug: "entrepreneur-performance", cat: "سبک زندگی", date: "۱۴۰۵/۰۲/۲۵" },
    { title: "تحلیل داده‌ها برای رشد کسب‌وکار", slug: "business-data-analytics", cat: "استراتژی", date: "۱۴۰۵/۰۲/۲۸" },
    { title: "انقلاب انتقال کریدت جهانی", slug: "global-credit-transfer", cat: "صافی‌تاپ‌آپ", date: "۱۴۰۵/۰۲/۳۰" },
    { title: "استراتژی‌های سرمایه‌گذاری پایدار", slug: "sustainable-investing", cat: "ESG", date: "۱۴۰۵/۰۳/۰۱" },
    { title: "کدنویسی آینده مالی با هوش مصنوعی", slug: "coding-fintech-ai", cat: "توسعه", date: "۱۴۰۵/۰۳/۰۴" },
    { title: "ظهور سوپراپ‌ها در آسیا", slug: "super-apps-asia", cat: "روندها", date: "۱۴۰۵/۰۳/۰۷" },
    { title: "برندینگ شخصی برای مدیران تِک", slug: "tech-ceo-branding", cat: "نفوذ", date: "۱۴۰۵/۰۳/۱۱" },
    { title: "مدیریت ریسک در بازارهای نوسانی", slug: "market-risk-management", cat: "ریسک", date: "۱۴۰۵/۰۳/۱۳" },
    { title: "شبکه‌سازی در هاب‌های تکنولوژی اروپا", slug: "europe-tech-networking", cat: "شبکه", date: "۱۴۰۵/۰۳/۱۵" },
    { title: "تجربه مشتری در فین‌تک", slug: "fintech-cx-design", cat: "طراحی UX", date: "۱۴۰۵/۰۳/۱۸" },
    { title: "تکامل پرداخت‌های موبایلی", slug: "mobile-payments-evolution", cat: "پرداخت", date: "۱۴۰۵/۰۳/۲۰" },
    { title: "هوش هیجانی در رهبری", slug: "leadership-eq", cat: "مدیریت", date: "۱۴۰۵/۰۳/۲۲" },
    { title: "مقررات پرداخت‌های فرامرزی", slug: "payment-regulations-guide", cat: "حقوقی", date: "۱۴۰۵/۰۳/۲۵" },
    { title: "هک رشد برای استارتاپ‌ها", slug: "startup-growth-hacking", cat: "رشد", date: "۱۴۰۵/۰۳/۲۸" },
    { title: "دیجیتال نومدها و آزادی مالی", slug: "digital-nomad-freedom", cat: "سبک زندگی", date: "۱۴۰۵/۰۳/۳۰" },
    { title: "معماری مدرن اپلیکیشن‌های مالی", slug: "fintech-app-architecture", cat: "تکنولوژی", date: "۱۴۰۵/۰۳/۳۱" },
    { title: "فلسفه موفقیت و شکست", slug: "philosophy-of-success", cat: "ذهنیت", date: "۱۴۰۵/۰۴/۰۴" },
    { title: "آینده دارایی‌های دیجیتال", slug: "future-of-digital-assets", cat: "اقتصاد دیجیتال", date: "۱۴۰۵/۰۴/۰۷" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="rtl">
      {/* هاله‌ی پس‌زمینه */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-amber-500 mb-6 tracking-tighter italic uppercase">هاب صافی</h1>
          <p className="text-gray-500 font-mono tracking-widest uppercase text-sm md:text-base">تحلیل استراتژیک و نوآوری در فین‌تک</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[250px]">
          
          {/* ۱. مقاله اصلی ویژه */}
          <Link href={mainBlog.fullPath} className="group lg:col-span-2 lg:row-span-2 border border-white/5 rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl relative">
              <Image 
                src={mainBlog.image} 
                alt={mainBlog.title} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-1000 opacity-80 group-hover:opacity-100" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end text-right">
                <span className="text-amber-500 font-mono text-xs tracking-widest mb-2 uppercase">{mainBlog.category}</span>
                <h2 className="text-3xl md:text-5xl font-black group-hover:text-amber-500 transition-colors uppercase leading-[0.9]">{mainBlog.title}</h2>
              </div>
          </Link>

          {/* ۲. سایر مقالات */}
          {allBlogs.map((blog, i) => (
            <Link 
              href={`/fa/blog/${blog.slug}`} 
              key={i} 
              className={`group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900 hover:border-amber-500/50 transition-all shadow-lg hover:shadow-amber-500/5
                ${blog.isPortrait ? 'lg:col-span-1 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1'}`}
            >
              <div className={`relative w-full ${blog.isPortrait ? 'h-[70%]' : 'h-[60%]'} overflow-hidden bg-zinc-800`}>
                <Image 
                  src={`/blog/${blog.slug}/hero.png`} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-70 group-hover:opacity-100" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-60" />
              </div>
              <div className="p-5 flex flex-col justify-center flex-grow text-right">
                <div className="flex items-center gap-2 mb-1 justify-start">
                  <span className="text-amber-500 font-mono text-[9px] uppercase tracking-tighter">{blog.cat}</span>
                  <span className="text-zinc-700 text-[9px]">•</span>
                  <span className="text-zinc-400 font-mono text-[9px]">{blog.date}</span>
                </div>
                <h3 className={`font-bold group-hover:text-amber-500 transition-colors leading-tight uppercase ${blog.isPortrait ? 'text-xl' : 'text-sm'}`}>
                  {blog.title}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </div>
  );
}