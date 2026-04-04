import Image from 'next/image';
import Link from 'next/link';

export default function VenturesPage() {
  const ventures = [
    {
      id: 1,
      name: 'SafiPay',
      logo: '/safipay.jpeg',
      tagline: 'تحولی در بانکداری دیجیتال بین‌المللی',
      description: 'SafiPay پروژه پرچم‌دار ما است که برای شکستن مرزهای مالی برای افغان‌ها و کاربران بین‌المللی طراحی شده است. ما یک اپلیکیشن پیشرفته برای افتتاح حساب‌های چند ارزی و صدور آنی کارت‌های ویزا فیزیکی و مجازی در اتحادیه اروپا ارائه می‌دهیم.',
      features: [
        'افتتاح حساب بین‌المللی با تمرکز ویژه بر افغانستان',
        'پشتیبانی از ارزهای مختلف (دلار، یورو، پوند، زلوتی، کرون و غیره)',
        'صدور آنی ویزا کارت با امنیت سطح بانکی',
        'اتصال مستقیم به درگاه‌های جهانی مانند Stripe و PayPal',
        'ارائه مشخصات حساب بانکی محلی برای تجارت بین‌الملل'
      ],
      website: 'https://www.safipay.net',
      color: 'from-amber-500/10 to-transparent'
    },
    {
      id: 2,
      name: 'Safi TopUp',
      logo: '/safitopup.jpeg',
      tagline: 'پل جهانی برای خدمات اعتباری دیجیتال',
      description: 'Safi TopUp یکی از گسترده‌ترین پلتفرم‌های توزیع محصولات دیجیتال است. این سیستم با اتصال به بیش از ۷۰۰ اپراتور جهانی، به کاربران اجازه می‌دهد تا شارژ موبایل، بسته‌های اینترنتی و گیفت‌کارت‌های بین‌المللی را به صورت آنی در بیش از ۱۵۰ کشور ارسال کنند.',
      features: [
        'شارژ موبایل و اعتبار برای بیش از ۷۰۰ اپراتور جهانی',
        'گیفت‌کارت‌های دیجیتال بازی (استیم، پلی‌استیشن، آیتونز و غیره)',
        'ارائه بسته‌های داده بین‌المللی و خدمات eSIM',
        'پرداخت قبوض خدماتی پیش‌پرداخت بین‌المللی',
        'پشتیبانی ۲۴/۷ با تحویل دیجیتال آنی'
      ],
      website: 'https://www.safitopup.site',
      color: 'from-blue-500/5 to-transparent'
    },
    {
      id: 3,
      name: 'SafiPro',
      logo: '/safipro.jpeg',
      tagline: 'تعالی در مد مدرن و سبک زندگی',
      description: 'SafiPro برند تخصصی ما در حوزه پوشاک و سبک زندگی است. این برند با چشم‌اندازی برای کیفیت برتر بازسازی شده و بر طراحی‌های منحصر‌به‌فرد و مواد اولیه باکیفیت تمرکز دارد تا نیازهای مشتریان شیک‌پسند در بازار آنلاین جهانی را برآورده کند.',
      features: [
        'طراحی‌های مدرن و انحصاری مطابق با ترندهای جهانی',
        'مواد اولیه باکیفیت و دوخت صنعتی حرفه‌ای',
        'فروش مستقیم به مصرف‌کننده از طریق وب‌سایت safipro.site',
        'کنترل کیفیت دقیق در تمام مراحل تولید',
        'طیف متنوع محصولات در دسته‌بندی‌های مختلف مد'
      ],
      website: 'https://www.safipro.site',
      color: 'from-zinc-500/10 to-transparent'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white rtl pt-32 pb-24 px-6" dir="rtl">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-luxury mb-8 tracking-tight">
          پروژه‌های صافی
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          ایجاد اکوسیستمی که در آن تکنولوژی، امور مالی و تجارت تلاقی می‌کنند.
          هر پروژه یک گام استراتژیک به سوی آینده‌ای بدون مرز است.
        </p>
      </div>

      {/* Ventures List */}
      <div className="max-w-7xl mx-auto space-y-20">
        {ventures.map((venture) => (
          <div 
            key={venture.id}
            className={`relative overflow-hidden rounded-[3rem] border border-zinc-900 bg-gradient-to-br ${venture.color} p-8 md:p-12 group hover:border-safi-gold/30 transition-all duration-700`}
          >
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              {/* Logo Section */}
              <div className="w-full lg:w-1/3 flex justify-center">
                <div className="relative w-60 h-60 md:w-72 md:h-72 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.05)] group-hover:shadow-[0_0_60px_rgba(212,175,55,0.15)] transition-all duration-700">
                  <Image 
                    src={venture.logo} 
                    alt={venture.name} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-1000" 
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-2/3 space-y-6 text-right">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-black text-luxury">{venture.name}</h2>
                  <p className="text-safi-gold/80 text-lg font-mono tracking-widest uppercase">{venture.tagline}</p>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed text-justify">
                  {venture.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {venture.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-gray-500">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-safi-gold shrink-0"></div>
                      <span className="text-sm md:text-base group-hover:text-gray-300 transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <div className="pt-6">
                  <Link 
                    href={venture.website} 
                    target="_blank"
                    className="inline-block border border-safi-gold/50 text-safi-gold px-8 py-3 rounded-xl font-bold hover:bg-safi-gold hover:text-black transition-all duration-500"
                  >
                    مشاهده وب‌سایت رسمی
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Branding */}
      <div className="mt-32 text-center border-t border-zinc-900 pt-16">
        <p className="text-gray-600 uppercase tracking-[0.6em] text-xs mb-3">Safi International Capital LTD</p>
        <p className="text-zinc-700 text-sm font-mono" dir="ltr">Registered in England • No. 17063286</p>
      </div>
    </div>
  );
}