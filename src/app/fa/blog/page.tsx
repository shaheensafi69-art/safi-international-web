import Image from 'next/image';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-black text-white rtl pt-32 pb-24 px-6 flex flex-col items-center justify-center" dir="rtl">
      
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-safi-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Animated Icon/Badge */}
        <div className="inline-block mb-8 px-6 py-2 rounded-full border border-safi-gold/20 bg-safi-gold/5 text-safi-gold font-mono text-sm tracking-widest uppercase animate-pulse">
          تحلیل و اخبار • به‌زودی
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-black text-luxury mb-12 leading-tight">
          بلاگ <br /> 
          <span className="text-zinc-800">COMING SOON</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed mb-16">
          ما در حال آماده‌سازی مجموعه‌ای از مقالات تخصصی در حوزه‌های فین‌تک، امنیت دیجیتال و استراتژی‌های سرمایه‌گذاری هستیم. 
          به‌زودی اولین بلاگ‌های آموزشی و تحلیلی در این صفحه منتشر خواهند شد.
        </p>

        {/* Placeholder Cards - Looking Professional while empty */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-20 grayscale">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 rounded-3xl border border-zinc-800 bg-zinc-900/50 p-6 flex flex-col justify-end text-right">
              <div className="w-20 h-2 bg-zinc-800 rounded-full mb-4"></div>
              <div className="w-full h-4 bg-zinc-800 rounded-full mb-2"></div>
              <div className="w-2/3 h-4 bg-zinc-800 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-24">
          <p className="text-zinc-600 font-mono text-sm tracking-[0.4em] uppercase">
            Stay Tuned for Safi Intelligence Hub
          </p>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-12 left-0 right-0 text-center">
        <p className="text-zinc-800 text-xs font-mono uppercase tracking-widest">
          Safi International Capital LTD • London
        </p>
      </div>
    </div>
  );
}