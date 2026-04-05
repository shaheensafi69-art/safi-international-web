import Image from 'next/image';
import Link from 'next/link';

export default function BlogPageFa() {
  const mainBlog = {
    title: "سفر سفی: ساختن یک امپراتوری از دل چالش‌ها",
    description: "داستان شکل‌گیری SafiPay و چالش‌های مسیر کارآفرینی در دنیای فین‌تک.",
    image: "/blog/the-journey-of-safi/blog.jpeg",
    date: "2026.04.05"
  };

  const upcomingBlogs = Array.from({ length: 29 }, (_, i) => ({
    id: i + 2,
    title: `استراتژی دیجیتال • قسمت ${i + 2}`,
    category: "فین‌تک و آینده"
  }));

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="rtl">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-luxury mb-6 tracking-tighter italic uppercase">
            مرکز هوش سفی
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base font-mono tracking-widest uppercase">
            تحلیل‌های استراتژیک و نوآوری‌های فین‌تک
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* لینک مستقیم به پوشه فارسی */}
          <Link href="/fa/blog/the-journey-of-safi" className="group lg:col-span-2 flex flex-col">
            <div className="relative h-80 md:h-[500px] w-full overflow-hidden rounded-3xl border border-white/5 bg-zinc-900 transition-all duration-500 group-hover:border-amber-500/30 shadow-2xl">
              <Image 
                src={mainBlog.image} 
                alt={mainBlog.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.4)]" />
            </div>

            <div className="pt-8 px-2 text-right">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-amber-500 font-mono text-xs tracking-widest uppercase">آخرین مطلب</span>
                <div className="h-px w-12 bg-amber-500/20" />
                <span className="text-zinc-500 font-mono text-xs">{mainBlog.date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight group-hover:text-amber-500 transition-colors">
                {mainBlog.title}
              </h2>
              <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                {mainBlog.description}
              </p>
            </div>
          </Link>

          {/* سایر بلاگ‌ها */}
          {upcomingBlogs.map((blog) => (
            <div key={blog.id} className="group flex flex-col grayscale opacity-40 hover:opacity-100 transition-all duration-500">
              <div className="relative h-56 w-full rounded-2xl overflow-hidden mb-6 border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
                <Image src="/logo.jpeg" alt="Logo" width={100} height={100} className="opacity-10 scale-125" />
                <div className="absolute bottom-4 right-4">
                  <span className="text-[9px] font-mono tracking-widest uppercase text-zinc-600 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-800">
                    به زودی
                  </span>
                </div>
              </div>
              <div className="px-1 text-right">
                <span className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] mb-2 block">{blog.category}</span>
                <h3 className="text-xl font-bold text-zinc-400 group-hover:text-zinc-200 transition-colors leading-snug">
                  {blog.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}