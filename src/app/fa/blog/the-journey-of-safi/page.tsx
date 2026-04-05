import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostFa() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="rtl">
      {/* هاله نور پس‌زمینه */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <article className="max-w-4xl mx-auto relative z-10">
        {/* مسیر راهنما و تاریخ */}
        <div className="flex items-center gap-4 mb-8 font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          <Link href="/fa/blog" className="hover:text-amber-500 transition-colors">وبلاگ</Link>
          <span>/</span>
          <span className="text-amber-500/60">۱۶ حمل ۱۴۰۵</span>
        </div>

        {/* بخش عنوان */}
        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter italic">
          فراتر از کدنویسی: <br />
          <span className="text-luxury">امپراتوری که در دل طوفان بنا شد</span>
        </h1>

        {/* تصویر اصلی مقاله */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/5 shadow-2xl mb-16">
          <Image 
            src="/blog/the-journey-of-safi/blog.jpeg" 
            alt="شاهین صافی - مسیر کارآفرینی"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* بخش محتوا */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* اطلاعات جانبی */}
          <div className="md:col-span-3 border-t border-zinc-800 pt-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">نویسنده</p>
            <p className="font-bold text-sm text-white mb-6">شاهین صافی</p>
            
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">تمرکز</p>
            <p className="font-bold text-sm text-amber-500 italic">فین‌تک و پایداری</p>
          </div>

          {/* بدنه اصلی متن */}
          <div className="md:col-span-9">
            <div className="prose prose-invert prose-amber max-w-none space-y-8 text-gray-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-medium leading-snug italic border-r-4 border-amber-500 pr-6 py-2">
                "شروع یک کسب‌وکار هرگز صرفاً یک پروژه نرم‌افزاری نیست؛ بلکه یک جنگ تمام‌عیار علیه وضعیت موجود است."
              </p>

              <p>
                زمانی که در سال ۲۰۱۸ وارد **دانشگاه فنی استانبول (ITU)** شدم، می‌دانستم که دانش فنی تنها نیمی از نبرد است. نیمه دیگر، توانایی ایستادگی در برابر "نه"‌های مکرر بود. ساختن **SafiPay** و **Safi TopUp** به سطحی از استقامت نیاز داشت که هیچ کتاب درسی نمی‌توانست آموزش دهد.
              </p>

              <h2 className="text-3xl font-black text-white mt-12 mb-4 tracking-tight">چالش‌های نامرئی</h2>
              
              <p>
                پشت هر استقرار (Deployment) موفق در Netlify یا Vercel، شب‌هایی از بلاتکلیفی مطلق وجود داشت. من تصمیم سختی گرفتم تا **SafiPro** را بفروشم؛ برندی که با زحمت زیاد ساخته بودم، تنها برای اینکه سرمایه اولیه SafiPay را تأمین کنم. خطر کردن روی یک چشم‌انداز، به جسارتی نیاز داشت که فقط در تنهایی صیقل می‌خورد.
              </p>

              <p>
                تلاش برای پر کردن شکاف بین افغانستان و سیستم‌های مالی بین‌المللی مانند برخورد با یک دیوار سنگی بود. حساب‌ها مسدود می‌شدند و درها به روی ما بسته می‌شد، اما ما راه‌های جدیدی پیدا کردیم یا ساختیم. ثبت شرکت در لندن به عنوان یک کارآفرین افغان به این معنا بود که شکست‌های من فقط متعلق به خودم نخواهد بود؛ بلکه بر پتانسیل یک نسل کامل در وطنم تأثیر می‌گذاشت.
              </p>

              <h2 className="text-3xl font-black text-white mt-12 mb-4 tracking-tight">نتیجه مسیر</h2>
              
              <p>
                امروز، در حالی که **Safi AI** به عنوان سخنگوی رسمی ما ایستاده است، به شب‌های تاریک کابل و زمستان‌های سرد استانبول نگاه می‌کنم که تنها نور موجود، مانیتور من بود. ما به اینجا نیامدیم تا فقط یک اپلیکیشن باشیم؛ ما آمدیم تا ثابت کنیم مرزها نمی‌توانند یک چشم‌انداز را محدود کنند.
              </p>
            </div>

            {/* جعبه نکات کلیدی */}
            <div className="mt-16 p-8 rounded-3xl bg-zinc-900/50 border border-amber-500/10 backdrop-blur-xl">
              <h4 className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-6">نکات کلیدی برای بنیان‌گذاران</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-amber-500 font-bold">۰۱.</span>
                  نقدینگی به دنبال چشم‌انداز می‌آید: از فروش یک موفقیت برای تأمین هزینه یک انقلاب نترسید.
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-amber-500 font-bold">۰۲.</span>
                  موانع قانونی در دنیای واقعی فقط مانند باگ‌های کد هستند؛ آن‌ها قابل عیب‌یابی (Debug) و رفع شدن هستند.
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-amber-500 font-bold">۰۳.</span>
                  برندینگ، پلی است میان جسارت و اعتماد.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* بخش فوتر */}
      <div className="mt-24 text-center">
        <div className="h-px w-24 bg-zinc-800 mx-auto mb-8" />
        <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em]">
          شاهین صافی • پروژه‌های جهانی ۲۰۲۶
        </p>
      </div>
    </div>
  );
}