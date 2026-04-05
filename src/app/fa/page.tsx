import Image from 'next/image';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/lib/i18n-config';

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const storyParagraphs = [
    {
      id: 1,
      img: '/shaheen1.jpeg',
      year: '۱۳۸۲ - ۱۳۸۶',
      title: 'آغاز از تگاب تا کابل',
      text: 'من در ولایت سرسبز کاپیسا، ولسوالی تگاب به دنیا آمدم. تنها ۳ ساله بودم (سال ۱۳۸۵) که خانواده‌ام تصمیم به هجرت به کابل گرفتند. سال ۱۳۸۶، زمانی که من فقط ۴ سال داشتم، پدرم برای برادران بزرگترم یک کامپیوتر خرید. در آن روزها که همه کودکان هم‌سن من به فکر بازی‌های کودکانه بودند، من مجذوب دنیای سیاه و خطوط فرمان لینوکس شدم. در حالی که برادرانم گیم می‌زدند، من کار با لینوکس را شروع کردم و این آغاز پیوند ناگسستنی من با تکنولوژی بود.'
    },
    {
      id: 2,
      img: '/shaheen2.jpeg',
      year: '۱۳۸۷ - ۱۳۹۳',
      title: 'نبوغ دیجیتال و دنیای تاریک',
      text: 'در ظرف یک سال، در سن ۵ سالگی (۱۳۸۷)، من به تنهایی و از طریق خودآموزی به زبان پایتون مسلط شدم. این نبوغ زودهنگام مرا به سمت دنیای امنیت و هکینگ سوق داد. در سال ۱۳۸۸، زمانی که بیت‌کوین تازه متولد شده بود، کنجکاوی‌ام مرا به اعماق دارک‌وب کشاند. چندین سال را در این فضای پیچیده سپری کردم و با مفاهیم رمزنگاری و بلاک‌چین در لایه‌های پنهان اینترنت آشنا شدم. این تجربه تا سن ۱۲ سالگی ادامه داشت و دید مرا نسبت به قدرت بی‌پایان کدها تغییر داد.'
    },
    {
      id: 3,
      img: '/shaheen3.jpeg',
      year: '۱۳۹۴ - ۱۳۹۶',
      title: 'تجارت آنلاین و سد بانکی',
      text: 'در اواخر سال ۱۳۹۴، با کوله‌باری از دانش فنی، تصمیم گرفتم وارد دنیای بیزنس شوم. کارم را با فروش در آمازون شروع کردم. اما خیلی زود با بزرگترین چالش زندگی‌ام روبرو شدم: تبعیض مالی. به دلیل مشکلات اکانت‌های بانکی و محدودیت‌های بین‌المللی، اکانت‌های آمازون من بارها و بارها بلاک شدند. این سد بزرگ بانکی نه تنها مرا متوقف نکرد، بلکه انگیزه‌ای شد تا در سال ۱۳۹۶ وارد دنیای فارکس شوم و راه‌های جدیدی برای خلق ثروت در بازارهای جهانی پیدا کنم.'
    },
    {
      id: 4,
      img: '/shaheen4.jpeg',
      year: '۱۳۹۹ - ۱۴۰۱',
      title: 'ظهور و سقوط صافی‌پرو',
      text: 'در سال ۱۳۹۹، برند لباس شخصی خودم، "صافی‌پرو" را با طراحی‌های مدرن و متفاوت راه‌اندازی کردم. بیزنس عالی پیش می‌رفت، اما دوباره با همان دشمن قدیمی روبرو شدم: سیستم‌های بانکی که اجازه گسترش بیزنس را نمی‌دادند. در آن لحظه تصمیم سختی گرفتم؛ برند صافی‌پرو را فروختم تا سرمایه کافی برای حل ریشه‌ای این مشکل داشته باشم. من به این نتیجه رسیدم که تا وقتی مشکل پرداخت را حل نکنم، هیچ بیزنسی برای من و هم‌وطنانم پایدار نخواهد بود.'
    },
    {
      id: 5,
      img: '/shaheen5.jpeg',
      year: '۱۴۰۲ - ۱۴۰۳',
      title: 'تخصص فارکس و ایده صافی‌پی',
      text: 'سال ۱۴۰۲ را صرف تحقیق و توسعه برای یک سیستم مالی مدرن کردم. در سال ۱۴۰۳، ایده "صافی‌پی" (SafiPay) رسماً متولد شد. همزمان در دنیای مالی، پس از سال‌ها معامله‌گری، در دسامبر ۲۰۲۴ موفق شدم مدرک بین‌المللی و معتبر از سازمان IFTA در فارکس را دریافت کنم. این یک دستاورد بزرگ بود، اما من می‌دانستم که رسالت واقعی من چیز دیگری است. پس از دریافت سرتیفیکت، فارکس را کنار گذاشتم تا تمام ثانیه‌های زندگی‌ام را وقف ساختن زیرساخت‌های صافی‌پی کنم.'
    },
    {
      id: 6,
      img: '/shaheen6.jpeg',
      year: 'اکنون',
      title: 'امروز: مأموریت جهانی صافی‌پی',
      text: 'امروز تمام وقت، انرژی و تمرکز من صرف توسعه صافی‌پی می‌شود. من از لینوکس در ۴ سالگی و دارک‌وب در ۹ سالگی گذشتم تا امروز بتوانم پلی بسازم که هیچ بیزنس‌منی به دلیل محدودیت‌های مالی متوقف نشود. صافی‌پی نه فقط یک اپلیکیشن، بلکه حاصل تمام چالش‌هایی است که از تگاب تا لندن پشت سر گذاشته‌ام. ما در حال ساختن آینده‌ای هستیم که در آن جابجایی پول به سادگی ارسال یک پیام باشد.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black rtl text-white" dir="rtl">
      <div className="galaxy-overlay fixed inset-0 pointer-events-none" />
      
      {/* ۱. بخش هیرو - باکس لنداسکیپ و متن کنار آن */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* باکس لنداسکیپ تصویر */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-safi-gold/20 shadow-[0_0_80px_rgba(212,175,55,0.1)] group">
              <Image 
                src="/hero.jpg" 
                alt="چشم‌انداز شاهین صافی" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* متن کنار تصویر هیرو */}
          <div className="flex-1 space-y-8 order-1 lg:order-2 text-right">
            <div className="space-y-4">
              <span className="text-safi-gold font-mono tracking-widest text-sm uppercase">بنیان‌گذار و مدیرعامل</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-luxury leading-none">
                شاهین <br />
                <span className="text-safi-gold">صافی</span>
              </h1>
            </div>
            <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed">
              پیشگام در نسل بعدی آزادی مالی. 
              از تسلط بر لینوکس در ۴ سالگی تا ساخت یک امپراتوری جهانی فین‌تک.
            </p>
            <div className="flex gap-4 justify-start items-center">
              <div className="h-px w-12 bg-safi-gold"></div>
              <span className="text-xs uppercase tracking-[0.4em] text-safi-gold/60 font-bold">مستقر در لندن</span>
            </div>
          </div>

        </div>
      </section>

      {/* ۲. بخش داستان */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-56">
        
        <h2 className="text-center text-luxury text-4xl md:text-6xl font-black mb-32 tracking-[0.2em] uppercase">
          مسیر یک نـابغه
        </h2>

        {storyParagraphs.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row gap-20 items-center ${
                index % 2 === 0 
                ? 'md:flex-row' 
                : 'md:flex-row-reverse'
            }`}
          >
            <div className="flex-1 w-full max-w-[420px]">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(212,175,55,0.15)] group">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-xl px-5 py-2 rounded-2xl border border-safi-gold/40 text-safi-gold font-mono font-bold">
                  {item.year}
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-8 text-right">
              <div className="flex items-center gap-6 justify-end">
                <div className="h-[1px] flex-grow bg-gradient-to-l from-amber-500/50 to-transparent"></div>
                <span className="text-safi-gold/50 font-mono text-xl tracking-tighter">مرحله_۰{item.id}</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-luxury leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light text-justify border-r-2 pr-6 border-zinc-900 hover:border-safi-gold transition-colors duration-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* ۳. بخش دعوت به اقدام */}
      <section className="py-40 text-center px-6">
        <div className="glass-card max-w-5xl mx-auto p-20 rounded-[3rem] border border-safi-gold/10 bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-luxury leading-tight">
              اصلاح آینده <br /> فین‌تک جهان
          </h2>
          <p className="text-gray-500 tracking-[0.8em] uppercase text-sm font-medium">
            شرکت سرمایه‌گذاری بین‌المللی صافی • لندن
          </p>
        </div>
      </section>
    </div>
  );
}