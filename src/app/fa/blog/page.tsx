import Image from 'next/image';
import Link from 'next/link';

export default function BlogPageFa() {
  const mainBlog = {
    title: "میراث صافی: از تگاب تا بازارهای جهانی",
    description: "سفری خارق‌العاده از یک رویاپرداز که از ۴ سالگی با لینوکس شروع کرد و اکنون در حال بازتعریف چشم‌انداز فین‌تک است.",
    image: "/hero.jpg", 
    fullPath: "/fa/blog/the-safi-legacy",
    date: "۱۴۰۵/۰۱/۲۶",
    category: "داستان ویژه"
  };

  const completedBlogs = [
    {
      id: 1,
      title: "ساخت یک امپراتوری در شاپیفای: راهنمای استراتژیک",
      slug: "/fa/blog/how-to-start-shopify-business",
      image: "/shopify-start.jpeg",
      date: "۱۴۰۵/۰۱/۲۷",
      category: "تجارت الکترونیک",
      gridClasses: "lg:col-span-1 lg:row-span-2", 
      imageAspect: "aspect-[3/4]"
    },
    {
      id: 2,
      title: "سفر صافی: ساختن یک امپراتوری از دل چالش‌ها",
      slug: "/fa/blog/the-journey-of-safi",
      image: "/blog/the-journey-of-safi/blog.jpeg",
      date: "۱۴۰۵/۰۱/۱۶",
      category: "فین‌تک و اراده",
      gridClasses: "lg:col-span-1 lg:row-span-1",
      imageAspect: "aspect-video"
    }
  ];

  // لیست ۲۸ موضوع جدید برای آینده
  const upcomingTopics = [
    { title: "آینده فین‌تک در افغانستان", slug: "fintech-afghanistan-future", cat: "بازار" },
    { title: "مدیریت ثروت مبتنی بر هوش مصنوعی", slug: "ai-wealth-management", cat: "هوش مصنوعی و مالی" },
    { title: "روانشناسی معاملات بزرگ", slug: "trading-psychology", cat: "روانشناسی" },
    { title: "بلاک‌چین فراتر از ارزهای دیجیتال", slug: "blockchain-utility", cat: "تکنولوژی" },
    { title: "برندسازی لوکس در عصر دیجیتال", slug: "digital-luxury-branding", cat: "برندینگ" },
    { title: "هنر جذب سرمایه‌گذاران خطرپذیر", slug: "vc-outreach-strategy", cat: "سرمایه" },
    { title: "امنیت سایبری برای پلتفرم‌های مالی", slug: "fintech-cybersecurity", cat: "امنیت" },
    { title: "ساخت تیم جهانی دورکار", slug: "global-remote-team", cat: "رهبری" },
    { title: "چرا نئوبانک‌ها آینده هستند؟", slug: "neobanks-revolution", cat: "فین‌تک" },
    { title: "تسلط بر عادت‌های با عملکرد بالا", slug: "entrepreneur-performance", cat: "سبک زندگی" },
    { title: "تحلیل داده‌ها برای رشد کسب‌وکار", slug: "business-data-analytics", cat: "استراتژی" },
    { title: "انقلاب انتقال کریدت جهانی", slug: "global-credit-transfer", cat: "سفی‌تاپ‌آپ" },
    { title: "استراتژی‌های سرمایه‌گذاری پایدار", slug: "sustainable-investing", cat: "سرمایه‌گذاری" },
    { title: "برنامه‌نویسی آینده مالی با هوش مصنوعی", slug: "coding-fintech-ai", cat: "توسعه" },
    { title: "ظهور سوپر‌اپلیکیشن‌ها در آسیا", slug: "super-apps-asia", cat: "روندها" },
    { title: "برندسازی شخصی برای مدیران تکنولوژی", slug: "tech-ceo-branding", cat: "پرستیژ" },
    { title: "مدیریت ریسک در بازارهای پرنوسان", slug: "market-risk-management", cat: "ریسک" },
    { title: "شبکه‌سازی در قطب‌های تکنولوژی اروپا", slug: "europe-tech-networking", cat: "شبکه" },
    { title: "تجربه مشتری در صنعت فین‌تک", slug: "fintech-cx-design", cat: "طراحی UX" },
    { title: "تکامل پرداخت‌های موبایلی", slug: "mobile-payments-evolution", cat: "پرداخت" },
    { title: "هوش هیجانی در رهبری", slug: "leadership-eq", cat: "مدیریت" },
    { title: "قوانین پرداخت‌های فرامرزی", slug: "payment-regulations-guide", cat: "حقوقی" },
    { title: "هک رشد برای استارتاپ‌ها", slug: "startup-growth-hacking", cat: "رشد" },
    { title: "دیجیتال نومدها و آزادی مالی", slug: "digital-nomad-freedom", cat: "سبک زندگی" },
    { title: "معماری مدرن اپلیکیشن‌های فین‌تک", slug: "fintech-app-architecture", cat: "تکنولوژی" },
    { title: "تاثیر اینترنت 5G بر تجارت الکترونیک", slug: "5g-ecommerce-impact", cat: "اتصالات" },
    { title: "فلسفه پیروزی و شکست", slug: "philosophy-of-success", cat: "ذهنیت" },
    { title: "آینده دارایی‌های دیجیتال", slug: "future-of-digital-assets", cat: "اقتصاد دیجیتال" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-luxury mb-6 tracking-tighter italic uppercase">SAFI HUB</h1>
          <p className="text-gray-500 font-mono tracking-widest uppercase">تحلیل استراتژیک و نوآوری در فین‌تک</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[250px]">
          
          {/* مقاله اصلی */}
          <Link href={mainBlog.fullPath} className="group lg:col-span-2 lg:row-span-2 border border-white/5 rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl relative">
              <Image src={mainBlog.image} alt={mainBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end text-right">
                <span className="text-amber-500 font-mono text-xs tracking-widest mb-2 uppercase">{mainBlog.category}</span>
                <h2 className="text-2xl md:text-4xl font-black group-hover:text-amber-500 transition-colors">{mainBlog.title}</h2>
              </div>
          </Link>

          {/* مقالات تکمیل شده */}
          {completedBlogs.map((blog) => (
            <Link href={blog.slug} key={blog.id} className={`group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900 hover:border-amber-500/30 transition-all ${blog.gridClasses}`}>
              <div className={`relative w-full ${blog.imageAspect}`}>
                <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6 text-right">
                <span className="text-amber-500/60 font-mono text-[10px] uppercase">{blog.category}</span>
                <h3 className="text-lg font-bold group-hover:text-amber-500 transition-colors mt-2 leading-snug">{blog.title}</h3>
              </div>
            </Link>
          ))}

          {/* مقالات در دست انتشار */}
          {upcomingTopics.map((blog, i) => (
            <div key={i} className="group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900/50 opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 cursor-default lg:col-span-1 lg:row-span-1 flex flex-col">
              <div className="relative h-full w-full flex items-center justify-center p-6 flex-grow">
                <Image src="/logo.jpeg" alt="Logo" width={60} height={60} className="opacity-10" />
                <div className="absolute bottom-4 right-4">
                  <span className="text-[8px] font-mono tracking-widest uppercase text-zinc-600 border border-zinc-800 px-2 py-1 rounded-full">به زودی</span>
                </div>
              </div>
              <div className="p-5 border-t border-white/5 text-right">
                <span className="text-zinc-600 font-mono text-[10px] uppercase mb-1 block">{blog.cat}</span>
                <h3 className="text-md font-bold text-zinc-400 leading-tight">{blog.title}</h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}