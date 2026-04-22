import Image from 'next/image';
import Link from 'next/link';

export default function BlogPageEn() {
  // ۱. مقاله اصلی (Featured)
  const mainBlog = {
    title: "The Safi Legacy: From Tagab to Global Markets",
    description: "An extraordinary journey of a visionary who started with Linux at age 4 and is now redefining the Fintech landscape.",
    image: "/blog/the-safi-legacy/hero.png", 
    fullPath: "/en/blog/the-safi-legacy",
    date: "2026.04.15",
    category: "Featured Story"
  };

  // ۲. لیست تمام مقالات (تکمیل شده و در دست تکمیل)
  const allBlogs = [
    { title: "Building an Empire on Shopify", slug: "how-to-start-shopify-business", cat: "E-commerce", date: "2026.04.16", isPortrait: true },
    { title: "The Journey of Safi", slug: "the-journey-of-safi", cat: "Fintech & Grit", date: "2026.04.05", isPortrait: false },
    { title: "The Future of Fintech in Afghanistan", slug: "fintech-afghanistan-future", cat: "Market", date: "Coming Soon" },
    { title: "AI-Driven Wealth Management", slug: "ai-wealth-management", cat: "AI & Finance", date: "Coming Soon" },
    { title: "The Psychology of High-Stakes Trading", slug: "trading-psychology", cat: "Psychology", date: "Coming Soon" },
    { title: "Blockchain Beyond Cryptocurrency", slug: "blockchain-utility", cat: "Tech", date: "Coming Soon" },
    { title: "Luxury Branding in the Digital Age", slug: "digital-luxury-branding", cat: "Branding", date: "Coming Soon" },
    { title: "The Art of Venture Capital Outreach", slug: "vc-outreach-strategy", cat: "Capital", date: "Coming Soon" },
    { title: "Cybersecurity for Financial Platforms", slug: "fintech-cybersecurity", cat: "Security", date: "Coming Soon" },
    { title: "Building a Global Remote Team", slug: "global-remote-team", cat: "Leadership", date: "Coming Soon" },
    { title: "Why Neobanks are the Future", slug: "neobanks-revolution", cat: "Fintech", date: "Coming Soon" },
    { title: "Mastering High-Performance Habits", slug: "entrepreneur-performance", cat: "Lifestyle", date: "Coming Soon" },
    { title: "Data Analytics for Business Growth", slug: "business-data-analytics", cat: "Strategy", date: "Coming Soon" },
    { title: "Global Credit Transfer Revolution", slug: "global-credit-transfer", cat: "SafiTopUp", date: "Coming Soon" },
    { title: "Sustainable Investing Strategies", slug: "sustainable-investing", cat: "ESG", date: "Coming Soon" },
    { title: "Coding the Financial Future with AI", slug: "coding-fintech-ai", cat: "Development", date: "Coming Soon" },
    { title: "The Rise of Super-Apps in Asia", slug: "super-apps-asia", cat: "Trends", date: "Coming Soon" },
    { title: "Personal Branding for Tech CEOs", slug: "tech-ceo-branding", cat: "Influence", date: "Coming Soon" },
    { title: "Risk Management in Volatile Markets", slug: "market-risk-management", cat: "Risk", date: "Coming Soon" },
    { title: "Networking in European Tech Hubs", slug: "europe-tech-networking", cat: "Network", date: "Coming Soon" },
    { title: "Customer Experience in Fintech", slug: "fintech-cx-design", cat: "UX Design", date: "Coming Soon" },
    { title: "The Evolution of Mobile Payments", slug: "mobile-payments-evolution", cat: "Payments", date: "Coming Soon" },
    { title: "Emotional Intelligence in Leadership", slug: "leadership-eq", cat: "Management", date: "Coming Soon" },
    { title: "Cross-Border Payment Regulations", slug: "payment-regulations-guide", cat: "Legal", date: "Coming Soon" },
    { title: "Growth Hacking for Startups", slug: "startup-growth-hacking", cat: "Growth", date: "Coming Soon" },
    { title: "Digital Nomads & Financial Freedom", slug: "digital-nomad-freedom", cat: "Lifestyle", date: "Coming Soon" },
    { title: "Modern Architecture of Fintech Apps", slug: "fintech-app-architecture", cat: "Tech Stack", date: "Coming Soon" },
    { title: "The Impact of 5G on E-commerce", slug: "5g-ecommerce-impact", cat: "Connectivity", date: "Coming Soon" },
    { title: "Philosophy of Success and Failure", slug: "philosophy-of-success", cat: "Mindset", date: "Coming Soon" },
    { title: "Future of Digital Assets", slug: "future-of-digital-assets", cat: "Digital Economy", date: "Coming Soon" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="ltr">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-luxury mb-6 tracking-tighter italic uppercase">SAFI HUB</h1>
          <p className="text-gray-500 font-mono tracking-widest uppercase">Strategic Analysis & Fintech Innovation</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[250px]">
          
          {/* 1. Main Featured Post */}
          <Link href={mainBlog.fullPath} className="group lg:col-span-2 lg:row-span-2 border border-white/5 rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl relative">
              <Image src={mainBlog.image} alt={mainBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-amber-500 font-mono text-xs tracking-widest mb-2 uppercase">{mainBlog.category}</span>
                <h2 className="text-3xl md:text-5xl font-black group-hover:text-amber-500 transition-colors uppercase leading-[0.9]">{mainBlog.title}</h2>
              </div>
          </Link>

          {/* 2. All Other Posts */}
          {allBlogs.map((blog, i) => (
            <Link 
              href={`/en/blog/${blog.slug}`} 
              key={i} 
              className={`group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900 hover:border-amber-500/30 transition-all 
                ${blog.isPortrait ? 'lg:col-span-1 lg:row-span-2' : 'lg:col-span-1 lg:row-span-1'} 
                ${blog.date === "Coming Soon" ? 'opacity-60 grayscale hover:grayscale-0 hover:opacity-100' : ''}`}
            >
              <div className={`relative w-full ${blog.isPortrait ? 'h-[70%]' : 'h-[60%]'}`}>
                {/* به صورت خودکار عکس را از پوشه مربوطه برمی‌دارد */}
                <Image 
                  src={`/blog/${blog.slug}/hero.png`} 
                  alt={blog.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="p-5 flex flex-col justify-center flex-grow">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-amber-500/60 font-mono text-[9px] uppercase tracking-tighter">{blog.cat}</span>
                  <span className="text-zinc-700 text-[9px]">•</span>
                  <span className="text-zinc-500 font-mono text-[9px]">{blog.date}</span>
                </div>
                <h3 className={`font-bold group-hover:text-amber-500 transition-colors leading-tight uppercase ${blog.isPortrait ? 'text-xl' : 'text-md'}`}>
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