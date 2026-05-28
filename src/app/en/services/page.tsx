"use client";

import Link from 'next/link';
import { 
  FaPaypal, FaBuilding, FaGlobe, FaMobileScreen, 
  FaCube, FaTiktok, FaInstagram, FaYoutube, 
  FaChalkboardUser, FaUserTie, FaAmazon, FaStore,
  FaEtsy, FaEbay, FaCreditCard, FaRegistered, FaPalette
} from 'react-icons/fa6';

export default function ServicesPageEn() {
  const services = [
    {
      title: "PayPal Fund Withdrawal",
      description: "Secure, fast, and reliable conversion of your PayPal balance to local currencies with the best exchange rates.",
      price: "Contact Us",
      icon: <FaPaypal size={32} />,
      color: "text-blue-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
    },
    {
      title: "US LLC Registration",
      description: "Fully legal establishment of a Limited Liability Company (LLC) in the United States.",
      price: "$150 - $1,000 (Varies by State)",
      icon: <FaBuilding size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    },
    {
      title: "UK LTD Registration",
      description: "Official registration of a Private Limited Company in the UK for access to global markets.",
      price: "Starting from £450",
      icon: <FaBuilding size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    },
    {
      title: "TikTok Pro Account Setup",
      description: "Creation, optimization, and security configuration of a professional TikTok Business account.",
      price: "1,000 AFN",
      icon: <FaTiktok size={32} />,
      color: "text-white",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
    },
    {
      title: "Instagram Pro Account Setup",
      description: "Profile design, professional bio creation, and Business account configuration.",
      price: "1,000 AFN",
      icon: <FaInstagram size={32} />,
      color: "text-pink-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]"
    },
    {
      title: "YouTube Channel Creation & Monetization",
      description: "Channel setup, SEO configuration, channel art design, and fast-tracking to Monetization.",
      price: "4,000 AFN",
      icon: <FaYoutube size={32} />,
      color: "text-red-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.3)]"
    },
    {
      title: "UK & US TikTok Shop Setup",
      description: "Complete setup and configuration of TikTok Shop accounts for the UK and US markets.",
      price: "£50",
      icon: <FaTiktok size={32} />,
      color: "text-white",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
    },
    {
      title: "Amazon Account Creation",
      description: "Professional creation and configuration of Amazon Seller accounts.",
      price: "$30",
      icon: <FaAmazon size={32} />,
      color: "text-orange-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(251,146,60,0.3)]"
    },
    {
      title: "Walmart Account Creation",
      description: "Complete setup and approval assistance for Walmart marketplace accounts.",
      price: "$20",
      icon: <FaStore size={32} />,
      color: "text-blue-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]"
    },
    {
      title: "Etsy Account Creation",
      description: "Professional store creation and configuration for Etsy sellers.",
      price: "$40",
      icon: <FaEtsy size={32} />,
      color: "text-orange-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
      title: "eBay Account Creation",
      description: "Secure setup of eBay seller accounts with optimized backend settings.",
      price: "$40",
      icon: <FaEbay size={32} />,
      color: "text-green-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
    },
    {
      title: "PayPal Account Creation",
      description: "Secure creation and initial setup of verified PayPal accounts.",
      price: "$45",
      icon: <FaPaypal size={32} />,
      color: "text-blue-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
    },
    {
      title: "Payoneer Account Setup",
      description: "Creation and approval setup for Payoneer international payment accounts.",
      price: "$45",
      icon: <FaCreditCard size={32} />,
      color: "text-orange-500",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]"
    },
    {
      title: "Brand Registration",
      description: "Official brand registry services. (Note: Official registry fees are separate).",
      price: "$120 / £120 (Service Fee)",
      icon: <FaRegistered size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    },
    {
      title: "Brand Identity Creation",
      description: "Complete brand creation from scratch, including visual identity and structure.",
      price: "$200",
      icon: <FaPalette size={32} />,
      color: "text-purple-400",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(192,132,252,0.3)]"
    },
    {
      title: "Expert Business Consulting",
      description: "Strategic solutions for business growth, digital marketing, and international financial management.",
      price: "$50",
      icon: <FaUserTie size={32} />,
      color: "text-[#D4AF37]",
      borderGlow: "group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
    }
  ];

  const techServices = [
    {
      title: "Professional Web Development",
      description: "Programming and designing ultra-modern websites using the latest technologies.",
      price: "$50 - $5,000 (Based on features)",
      icon: <FaGlobe size={40} />,
      tags: [
        "Fintech & Accounting", "Crypto Exchange (Web3)", "E-commerce",
        "Corporate & Agency", "Online Booking Systems", "Educational Platforms",
        "Real Estate Management", "News & Magazine", "SaaS Platforms", "Personal Portfolios"
      ]
    },
    {
      title: "3D Website Design",
      description: "Creating stunning visual experiences using 3D models and interactive animations for luxury brands.",
      price: "Contact Us",
      icon: <FaCube size={40} />,
      tags: ["WebGL Design", "Interactive Animations", "Stunning Graphics"]
    },
    {
      title: "Mobile App Development (iOS/Android)",
      description: "Designing and building powerful, fast, and user-friendly applications for both operating systems.",
      price: "$150 - $5,000",
      icon: <FaMobileScreen size={40} />,
      tags: [
        "Digital Banking", "Crypto/Fiat Wallet", "Online Store",
        "Ride-sharing Apps", "Food Delivery", "Social Networks",
        "Health & Fitness", "E-Learning Platforms", "Task & Team Management", "Service Booking"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white font-sans selection:bg-[#D4AF37]/30 selection:text-white overflow-x-hidden relative pb-32" dir="ltr">
      
      {/* 🌌 Cinematic Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[50rem] h-[50rem] bg-[#D4AF37] opacity-[0.03] rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-zinc-600 opacity-[0.03] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        
        {/* Header Section */}
        <div className="text-center mb-24 space-y-6">
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/30 rounded-full bg-[#D4AF37]/5 backdrop-blur-md shadow-[0_0_30px_rgba(212,175,55,0.15)] animate-[float_4s_ease-in-out_infinite]">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping"></span>
            <span className="text-[#D4AF37] font-mono text-xs uppercase tracking-[0.2em] font-bold">Digital Ecosystem</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
            Exclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#a88721] to-[#5c490f]">Services</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
            From establishing international infrastructures to developing modern software platforms; we turn your ideas into digital reality.
          </p>
        </div>

        {/* Development & Tech Services (The Big Cards) */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            Software & Platform Development
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {techServices.map((tech, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-[2.5rem] bg-zinc-900/40 backdrop-blur-xl border border-white/5 p-8 hover:border-[#D4AF37]/40 transition-all duration-500 group hover:-translate-y-2 shadow-2xl ${idx === 2 ? 'lg:col-span-2 xl:col-span-1' : ''}`}
              >
                {/* Background Icon Positioned Right for LTR */}
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-20 transition-opacity duration-700 transform group-hover:scale-110 text-[#D4AF37]">
                  {tech.icon}
                </div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center backdrop-blur-md border border-white/10 mb-6 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-500">
                    {tech.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{tech.title}</h3>
                  <p className="text-zinc-400 mb-6 leading-relaxed min-h-[48px]">{tech.description}</p>
                  
                  {/* Price Tag */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-xl mb-8">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                    <span className="text-[#D4AF37] font-bold text-sm">{tech.price}</span>
                  </div>

                  {/* Hot Niches Tags */}
                  <div className="space-y-3 border-t border-white/5 pt-6">
                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mb-4">Recommended Niches (Hot):</p>
                    <div className="flex flex-wrap gap-2">
                      {tech.tags.map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-black/50 border border-zinc-800 rounded-lg text-xs text-zinc-300 hover:text-white hover:border-[#D4AF37]/50 transition-colors cursor-default">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Essential Services Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-4">
            Business & International Services
            <div className="flex-1 h-px bg-gradient-to-r from-[#D4AF37]/50 to-transparent"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className={`relative overflow-hidden rounded-[2rem] bg-zinc-900/40 backdrop-blur-md border border-white/5 p-8 transition-all duration-500 group hover:-translate-y-1 hover:bg-zinc-800/60 ${service.borderGlow}`}
              >
                <div className={`mb-6 ${service.color} transform group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">{service.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 h-12">{service.description}</p>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase">Starting From</span>
                  <span className="text-white font-bold text-sm bg-white/5 px-3 py-1.5 rounded-lg border border-white/10 group-hover:border-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-all">
                    {service.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special CTA: S4hel Business Training */}
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#D4AF37]/20 via-zinc-900 to-black border border-[#D4AF37]/30 p-10 md:p-16 shadow-[0_10px_50px_rgba(212,175,55,0.1)] group">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4AF37] opacity-20 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-1000"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-6 max-w-2xl text-center md:text-left">
              <div className="inline-flex items-center gap-3 text-[#D4AF37]">
                <FaChalkboardUser size={32} />
                <h2 className="text-3xl md:text-4xl font-black">Professional Online Business Training</h2>
              </div>
              <p className="text-zinc-300 text-lg leading-relaxed">
                Do you want to learn the path to financial independence? We teach you everything from starting, managing, and scaling an online business from scratch on our dedicated platform.
              </p>
            </div>
            
            <Link 
              href="https://www.s4hel.com" 
              target="_blank"
              className="shrink-0 relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[#D4AF37] text-black font-black uppercase tracking-widest rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.5)]"
            >
              <span>Enter Training Platform</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </Link>
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}} />
    </div>
  );
}