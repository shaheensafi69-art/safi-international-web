// src/app/en/blog/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function BlogPageEn() {
  const mainBlog = {
    title: "The Safi Legacy: From Tagab to Global Markets",
    description: "An extraordinary journey of a visionary who started with Linux at age 4 and is now redefining the Fintech landscape.",
    image: "/hero.jpg", 
    fullPath: "/en/blog/the-safi-legacy",
    date: "2026.04.15",
    category: "Featured Story"
  };

  const completedBlogs = [
    {
      id: 1,
      title: "Building an Empire on Shopify: A Strategic Guide",
      slug: "/en/blog/how-to-start-shopify-business",
      image: "/shopify-start.jpeg",
      date: "2026.04.16",
      category: "E-commerce",
      gridClasses: "lg:col-span-1 lg:row-span-2", 
      imageAspect: "aspect-[3/4]"
    },
    {
      id: 2,
      title: "The Journey of Safi: Building an Empire from Challenges",
      slug: "/en/blog/the-journey-of-safi",
      image: "/blog/the-journey-of-safi/blog.jpeg",
      date: "2026.04.05",
      category: "Fintech & Grit",
      gridClasses: "lg:col-span-1 lg:row-span-1",
      imageAspect: "aspect-video"
    }
  ];

  // لیست ۲۸ موضوع جدید برای آینده
  const upcomingTopics = [
    { title: "The Future of Fintech in Afghanistan", slug: "fintech-afghanistan-future", cat: "Market" },
    { title: "AI-Driven Wealth Management", slug: "ai-wealth-management", cat: "AI & Finance" },
    { title: "The Psychology of High-Stakes Trading", slug: "trading-psychology", cat: "Psychology" },
    { title: "Blockchain Beyond Cryptocurrency", slug: "blockchain-utility", cat: "Tech" },
    { title: "Luxury Branding in the Digital Age", slug: "digital-luxury-branding", cat: "Branding" },
    { title: "The Art of Venture Capital Outreach", slug: "vc-outreach-strategy", cat: "Capital" },
    { title: "Cybersecurity for Financial Platforms", slug: "fintech-cybersecurity", cat: "Security" },
    { title: "Building a Global Remote Team", slug: "global-remote-team", cat: "Leadership" },
    { title: "Why Neobanks are the Future", slug: "neobanks-revolution", cat: "Fintech" },
    { title: "Mastering High-Performance Habits", slug: "entrepreneur-performance", cat: "Lifestyle" },
    { title: "Data Analytics for Business Growth", slug: "business-data-analytics", cat: "Strategy" },
    { title: "Global Credit Transfer Revolution", slug: "global-credit-transfer", cat: "SafiTopUp" },
    { title: "Sustainable Investing Strategies", slug: "sustainable-investing", cat: "ESG" },
    { title: "Coding the Financial Future with AI", slug: "coding-fintech-ai", cat: "Development" },
    { title: "The Rise of Super-Apps in Asia", slug: "super-apps-asia", cat: "Trends" },
    { title: "Personal Branding for Tech CEOs", slug: "tech-ceo-branding", cat: "Influence" },
    { title: "Risk Management in Volatile Markets", slug: "market-risk-management", cat: "Risk" },
    { title: "Networking in European Tech Hubs", slug: "europe-tech-networking", cat: "Network" },
    { title: "Customer Experience in Fintech", slug: "fintech-cx-design", cat: "UX Design" },
    { title: "The Evolution of Mobile Payments", slug: "mobile-payments-evolution", cat: "Payments" },
    { title: "Emotional Intelligence in Leadership", slug: "leadership-eq", cat: "Management" },
    { title: "Cross-Border Payment Regulations", slug: "payment-regulations-guide", cat: "Legal" },
    { title: "Growth Hacking for Startups", slug: "startup-growth-hacking", cat: "Growth" },
    { title: "Digital Nomads & Financial Freedom", slug: "digital-nomad-freedom", cat: "Lifestyle" },
    { title: "Modern Architecture of Fintech Apps", slug: "fintech-app-architecture", cat: "Tech Stack" },
    { title: "The Impact of 5G on E-commerce", slug: "5g-ecommerce-impact", cat: "Connectivity" },
    { title: "Philosophy of Success and Failure", slug: "philosophy-of-success", cat: "Mindset" },
    { title: "Future of Digital Assets", slug: "future-of-digital-assets", cat: "Digital Economy" },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="ltr">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-8xl font-black text-luxury mb-6 tracking-tighter italic uppercase">SAFI HUB</h1>
          <p className="text-gray-500 font-mono tracking-widest uppercase">Strategic Analysis & Fintech Innovation</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-[250px]">
          
          {/* Main Blog */}
          <Link href={mainBlog.fullPath} className="group lg:col-span-2 lg:row-span-2 border border-white/5 rounded-3xl overflow-hidden bg-zinc-900 shadow-2xl relative">
              <Image src={mainBlog.image} alt={mainBlog.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-amber-500 font-mono text-xs tracking-widest mb-2 uppercase">{mainBlog.category}</span>
                <h2 className="text-3xl md:text-5xl font-black group-hover:text-amber-500 transition-colors uppercase">{mainBlog.title}</h2>
              </div>
          </Link>

          {/* Completed Other Blogs */}
          {completedBlogs.map((blog) => (
            <Link href={blog.slug} key={blog.id} className={`group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900 hover:border-amber-500/30 transition-all ${blog.gridClasses}`}>
              <div className={`relative w-full ${blog.imageAspect}`}>
                <Image src={blog.image} alt={blog.title} fill className="object-cover group-hover:scale-110 transition-transform" />
              </div>
              <div className="p-6">
                <span className="text-amber-500/60 font-mono text-[10px] uppercase">{blog.category}</span>
                <h3 className="text-xl font-bold group-hover:text-amber-500 transition-colors mt-2">{blog.title}</h3>
              </div>
            </Link>
          ))}

          {/* Upcoming Blogs (Placeholders) */}
          {upcomingTopics.map((blog, i) => (
            <div key={i} className="group border border-zinc-800 rounded-3xl overflow-hidden bg-zinc-900/50 opacity-40 hover:opacity-100 transition-all grayscale hover:grayscale-0 cursor-default lg:col-span-1 lg:row-span-1 flex flex-col">
              <div className="relative h-full w-full flex items-center justify-center p-6 flex-grow">
                <Image src="/logo.jpeg" alt="Logo" width={60} height={60} className="opacity-10" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-[8px] font-mono tracking-widest uppercase text-zinc-600 border border-zinc-800 px-2 py-1 rounded-full">Coming Soon</span>
                </div>
              </div>
              <div className="p-5 border-t border-white/5">
                <span className="text-zinc-600 font-mono text-[10px] uppercase mb-1 block">{blog.cat}</span>
                <h3 className="text-lg font-bold text-zinc-400 leading-tight">{blog.title}</h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}