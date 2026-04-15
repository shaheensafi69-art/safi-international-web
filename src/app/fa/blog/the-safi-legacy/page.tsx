import Image from 'next/image';
import Link from 'next/link';

export default function SafiLegacyFa() {
  const storyPhases = [
    {
      id: "۰۱",
      year: "۲۰۰۳ - ۲۰۰۷",
      title: "تولد و اولین تماس با تکنولوژی",
      text: "شاهین در ۲ اپریل ۲۰۰۳ در تگابِ کاپیسا متولد شد. در سال ۲۰۰۶، خانواده او به کابل نقل مکان کردند. نقطه عطف زندگی او در سال ۲۰۰۷ رقم خورد؛ زمانی که تنها ۴ سال داشت و پدرش برای برادران بزرگتر او رایانه‌ای تهیه کرد. در حالی که هم‌سالان او مشغول بازی بودند، شاهین مسحور صفحات سیاه و کدهای لینوکس شد. این آغاز پیوندی ناگسستنی بود که مسیر آینده او را تعیین کرد.",
      img: "/shaheen1.jpeg"
    },
    {
      id: "۰۲",
      year: "۲۰۰۹ - ۲۰۱۴",
      title: "نبوغ زودهنگام و ورود به اعماق تاریک",
      text: "در سال ۲۰۰۹، شاهین در حالی که تنها ۶ سال داشت، فراتر از سن خود عمل کرد و با کنجکاوی بی‌حد وارد قلمروهای پیچیده دارک‌وب شد. او ۵ سالِ سرنوشت‌ساز را در لایه‌های پنهان اینترنت سپری کرد و پیش از آنکه مفاهیم رمزنگاری و بلاک‌چین به ترند جهانی تبدیل شوند، در سنین کودکی بر آن‌ها مسلط شد. او تا ۱۲ سالگی (۲۰۱۴) در این فضای پیچیده به یادگیری و تجربه اندوختن ادامه داد.",
      img: "/shaheen2.jpeg"
    },
    {
      id: "۰۳",
      year: "۲۰۱۵ - ۲۰۱۹",
      title: "خروج از سایه‌ها و شروع تجارت",
      text: "در سال ۲۰۱۵، شاهین با کوله‌باری از دانش فنی، در سن ۱۲ سالگی تصمیم گرفت وارد دنیای بیزنس شود. او فعالیت خود را با پلتفرم آمازون آغاز کرد، اما خیلی زود با دیوار سخت تبعیض‌های مالی روبرو شد. مسدود شدن مکرر حساب‌های بانکی به دلیل موقعیت جغرافیایی، اولین جرقه‌های خشم علیه سیستم‌های مالی سنتی را در او ایجاد کرد. او در سال ۲۰۱۷ برای دور زدن این محدودیت‌ها، وارد دنیای فارکس شد.",
      img: "/shaheen3.jpeg"
    },
    {
      id: "۰۴",
      year: "۲۰۲۰ - ۲۰۲۲",
      title: "تولد SafiPro و یک فداکاری بزرگ",
      text: "در سال ۲۰۲۰، برند لباس SafiPro توسط او متولد شد و به سرعت رشد کرد. اما باز هم سدِ محکم سیستم‌های بانکی مانع پیشرفت آن شد. اینجا بود که شاهین در سن ۱۸ سالگی تصمیمی قهرمانانه گرفت: او SafiPro را نه برای ثروت‌اندوزی، بلکه برای تامین سرمایه جهت حل ریشه‌ایِ معضل پرداخت‌های بین‌المللی فروخت. او دریافت که تا مشکل جابجایی پول حل نشود، هیچ تجارتی پایدار نخواهد بود.",
      img: "/shaheen4.jpeg"
    },
    {
      id: "۰۵",
      year: "۲۰۲۳ - ۲۰۲۴",
      title: "استراتژی نهایی و گواهینامه IFTA",
      text: "سال ۲۰۲۳ به تحقیق و توسعه برای یک سیستم مالی نوین گذشت. در سال ۲۰۲۴، ایده SafiPay نهایی شد. شاهین در دسامبر ۲۰۲۴ موفق به دریافت گواهینامه معتبر IFTA در فارکس شد، اما علی‌رغم این موفقیت بزرگ در تریدینگ، او تمام تمرکز خود را به سمت زیرساخت سوق داد. او فارکس را کنار گذاشت تا هر ثانیه از زندگی‌اش را صرف ساختن SafiPay کند.",
      img: "/shaheen5.jpeg"
    },
    {
      id: "۰۶",
      year: "۲۰۲۶",
      title: "امروز: ماموریت جهانی در لندن",
      text: "امروز، شاهین صافی از دفتر مرکزی خود در لندن، رهبری تحول مالی برای کارآفرینان را بر عهده دارد. از لینوکس در ۴ سالگی و دارک‌وب در ۶ سالگی تا مدیریت یک هلدینگ بین‌المللی؛ هدف او تغییری نکرده است: ساختن دنیایی که در آن هیچ رویایی پشت دیوارهای بانکی متوقف نشود. SafiPay نتیجه تمام زخم‌ها و تجربیات او از تگاب تا قلب لندن است.",
      img: "/shaheen6.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="rtl">
      {/* Background Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <article className="max-w-5xl mx-auto relative z-10">
        <header className="text-right mb-32 border-r-4 border-amber-500 pr-8">
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-500">
            <Link href="/fa/blog" className="hover:text-amber-500 transition-colors">SAFI HUB</Link>
            <span>/</span>
            <span className="text-amber-500/60">تاریخچه زندگی</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            میراث <br />
            <span className="text-luxury">صافی</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-xl md:text-2xl font-light leading-relaxed italic">
            "کودکی که در ۲ اپریل ۲۰۰۳ متولد شد و با عبور از اعماق دارک‌وب، آینده فین‌تک را دوباره نوشت."
          </p>
        </header>

        <div className="space-y-48">
          {storyPhases.map((phase, index) => (
            <div key={phase.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-24 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                  <Image src={phase.img} alt={phase.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute top-8 right-8">
                    <span className="text-amber-500 font-mono text-xs font-black tracking-widest bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/20">
                      {phase.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8 text-right">
                <div className="flex items-center gap-4 flex-row-reverse">
                  <span className="text-6xl font-black text-white/5 font-mono">{phase.id}</span>
                  <div className="h-px flex-grow bg-gradient-to-l from-amber-500/30 to-transparent" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-luxury leading-tight uppercase italic">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed text-justify font-light">
                  {phase.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-48 p-16 md:p-24 rounded-[4rem] bg-gradient-to-b from-zinc-900/50 to-black border border-amber-500/10 backdrop-blur-3xl text-center relative overflow-hidden">
          <h2 className="text-5xl md:text-8xl font-black mb-12 text-white uppercase italic leading-[0.8]">
             پایانِ انزوای <br />
            <span className="text-amber-500 text-6xl md:text-9xl">مالی</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm tracking-[0.6em] uppercase">
            Shaheen Safi • CEO • Safi International Capital LTD
          </p>
        </div>
      </article>
    </div>
  );
}