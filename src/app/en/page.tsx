"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  FaLinkedin, 
  FaInstagram, 
  FaTiktok, 
  FaWhatsapp, 
  FaFacebook, 
  FaMedium, 
  FaXTwitter, 
  FaArrowRight, 
  FaShieldHalved, 
  FaGlobe, 
  FaChartLine, 
  FaBolt, 
  FaBuildingColumns, 
  FaCreditCard, 
  FaNetworkWired, 
  FaBriefcase, 
  FaCrown,
  FaGraduationCap,
  FaComments
} from 'react-icons/fa6';
import AdSenseUnit from '@/components/AdSenseUnit';

export default function HomePageEn() {
  const ventures = [
    {
      name: "SafiPay",
      badge: "Flagship FinTech",
      tagline: "European Digital Banking & Instant Multi-Currency Visa Rails",
      description: "SafiPay is our core financial infrastructure designed to dismantle systemic financial isolation. Engineering compliant European multi-currency IBANs (EUR, USD, GBP) and instant digital & physical Visa cards for emerging markets, diaspora, and global entrepreneurs.",
      image: "/safipay.jpeg",
      link: "https://safipay.net",
      metrics: ["Multi-Currency IBANs", "Instant EU Visa Cards", "Stripe & PayPal Ready"],
      accent: "from-amber-500/20 via-amber-500/5 to-transparent",
      border: "hover:border-amber-400/50",
      btnText: "Launch SafiPay",
    },
    {
      name: "Safi TopUp",
      badge: "Global Telecom Hub",
      tagline: "Worldwide Digital Credit, eSIM & Telecommunication Bridge",
      description: "A high-velocity distribution network directly integrated with over 700 global mobile telecom operators. Delivering airtime credit, high-speed international eSIM bundles, and digital vouchers across 150+ countries with sub-second execution.",
      image: "/safitopup.jpeg",
      link: "https://safitopup.site",
      metrics: ["700+ Mobile Carriers", "150+ Countries Live", "Instant Digital Delivery"],
      accent: "from-blue-500/20 via-blue-500/5 to-transparent",
      border: "hover:border-blue-400/50",
      btnText: "Explore Safi TopUp",
    },
    {
      name: "Safi International Capital",
      badge: "London Venture Capital",
      tagline: "Cross-Border Wealth, Strategic Liquidity & Emerging Market Scaling",
      description: "Incorporated in London, UK, Safi International Capital Ltd serves as the institutional venture and investment arm of the group. Deploying capital into frontier technology, payment innovations, and high-growth cross-border enterprises.",
      image: "/saficapital.png",
      link: "https://safiinternationalcapitalltd.site",
      metrics: ["London Registered", "Institutional Governance", "Venture Syndication"],
      accent: "from-emerald-500/20 via-emerald-500/5 to-transparent",
      border: "hover:border-emerald-400/50",
      btnText: "Capital Overview",
    },
    {
      name: "ZEV App",
      badge: "Decentralized Social Network",
      tagline: "Next-Generation Sovereign Social Media & Community Monetization",
      description: "ZEV is our breakthrough social networking platform built for digital sovereignty, authentic freedom of speech, encrypted communication, and integrated creator economies. Re-imagining how billions connect without centralized censorship.",
      image: "/zev.png",
      link: "https://www.zevapp.com",
      metrics: ["Censorship-Resistant", "Creator Monetization", "Encrypted Messaging"],
      accent: "from-cyan-500/20 via-cyan-500/5 to-transparent",
      border: "hover:border-cyan-400/50",
      btnText: "Discover ZEV",
    },
    {
      name: "Safi Academy",
      badge: "EdTech & Empowerment",
      tagline: "Frontier Technology Education, Coding & Youth Empowerment",
      description: "Safi Academy is our flagship educational foundation dedicated to equipping youth and emerging market talent with cutting-edge skills in software engineering, artificial intelligence, leadership, and digital literacy.",
      image: "/safiacademy.png",
      link: "https://safiacademy.org",
      metrics: ["Coding & AI Curricula", "Youth Empowerment", "Global Certification"],
      accent: "from-amber-500/20 via-emerald-500/5 to-transparent",
      border: "hover:border-amber-400/50",
      btnText: "Visit Safi Academy",
    },
    {
      name: "SafiPro",
      badge: "Luxury Lifestyle Brand",
      tagline: "Contemporary Industrial Tailoring & Global D2C Commerce",
      description: "SafiPro represents our high-end fashion and lifestyle division. Combining architectural minimalism with industrial textile precision to produce modern wardrobe staples distributed directly to an international audience.",
      image: "/safipro.jpeg",
      link: "https://safipro.site",
      metrics: ["Proprietary Designs", "Global Express Shipping", "Premium Textiles"],
      accent: "from-purple-500/20 via-purple-500/5 to-transparent",
      border: "hover:border-purple-400/50",
      btnText: "Visit SafiPro",
    }
  ];

  const impactMetrics = [
    { value: "$10M+", label: "Target Transaction Rails", detail: "High-capacity architecture engineered for volume" },
    { value: "150+", label: "Global Markets Reached", detail: "Active cross-border telecommunication corridors" },
    { value: "700+", label: "Global Mobile Carriers", detail: "Direct API integrations with global telecom networks" },
    { value: "4 Hubs", label: "Strategic Metropolises", detail: "London • Dubai • Istanbul • Kabul" },
    { value: "99.99%", label: "System Availability", detail: "Enterprise-grade uptime & zero-trust compliance" },
  ];

  const pillars = [
    {
      icon: <FaBuildingColumns className="text-amber-400" size={28} />,
      title: "FinTech & Sovereign Banking",
      desc: "Architecting decentralized-friendly and regulated banking rails that empower people historically locked out of the global banking system."
    },
    {
      icon: <FaShieldHalved className="text-amber-400" size={28} />,
      title: "Regulatory & Compliance Rigor",
      desc: "Implementing automated KYC/AML verification protocols in harmony with European financial regulations and international banking standards."
    },
    {
      icon: <FaNetworkWired className="text-amber-400" size={28} />,
      title: "Zero-Latency Global Distribution",
      desc: "Scalable telecommunication gateways processing hundreds of thousands of digital credit transactions in sub-seconds."
    },
    {
      icon: <FaChartLine className="text-amber-400" size={28} />,
      title: "Strategic Capital Syndication",
      desc: "Directing venture capital and institutional liquidity into frontier technology opportunities across emerging economies."
    }
  ];

  const mediumArticles = [
    {
      title: "The Infrastructure of Trust: How SafiPay is Redefining Digital Banking",
      excerpt: "Deep-dive into the architectural engineering behind SafiPay's multi-currency account creation, compliance security, and financial inclusion for emerging markets.",
      link: "https://medium.com/@omulbaninmoradi188/the-infrastructure-of-trust-how-safipay-is-redefining-digital-banking-security-in-emerging-markets-439b14641ad5",
      tag: "FinTech Architecture",
      readTime: "6 min read",
      thumb: "/hero.jpg"
    },
    {
      title: "Regulatory Excellence in Digital Finance: A Case Study of European Operations",
      excerpt: "How adherence to stringent EU financial guidelines elevates SafiPay above conventional fintech platforms.",
      link: "https://medium.com/@jsana9033/regulatory-excellence-in-digital-finance-a-case-study-of-safipays-european-operations-5f9a6a1845ad",
      tag: "Global Compliance",
      readTime: "5 min read",
      thumb: "/safipay.jpeg"
    },
    {
      title: "The Vision of an Entrepreneur: Who is Shaheen Safi?",
      excerpt: "The relentless pursuit of financial liberty—from self-taught coding prodigy to founder of multinational enterprises.",
      link: "https://medium.com/@safipro011/the-vision-of-an-entrepreneur-who-is-shaheen-safi-7a2229cb4fbd",
      tag: "Leadership & Vision",
      readTime: "8 min read",
      thumb: "/shaheen1.jpeg"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/in/shaheen-safi-b73a30299", color: "text-blue-400", label: "LinkedIn" },
    { icon: <FaXTwitter size={22} />, link: "https://x.com/shaheensafi011", color: "text-zinc-200", label: "X (Twitter)" },
    { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/top_g_official1", color: "text-pink-400", label: "Instagram" },
    { icon: <FaTiktok size={22} />, link: "https://www.tiktok.com/@safi_sahib6", color: "text-zinc-100", label: "TikTok" },
    { icon: <FaWhatsapp size={22} />, link: "https://wa.me/19342032497", color: "text-emerald-400", label: "WhatsApp VIP" },
    { icon: <FaFacebook size={22} />, link: "https://www.facebook.com/share/18h8Drdg6z/", color: "text-blue-500", label: "Facebook" },
    { icon: <FaMedium size={22} />, link: "https://medium.com/@shaheensafi09", color: "text-amber-400", label: "Medium Articles" },
  ];

  const hubs = [
    { city: "London", country: "United Kingdom", role: "Venture Capital & Corporate HQ", flag: "🇬🇧" },
    { city: "Dubai", country: "United Arab Emirates", role: "Fintech Innovation & Trade Bridge", flag: "🇦🇪" },
    { city: "Istanbul", country: "Turkey", role: "Supply Chain & Commerce Operations", flag: "🇹🇷" },
    { city: "Kabul", country: "Afghanistan", role: "Financial Inclusion Epicenter", flag: "🇦🇫" },
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-amber-400/30 selection:text-white relative overflow-hidden" dir="ltr">
      
      {/* 🌌 Atmospheric Ambient Background Lighting */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-15%] left-[-10%] w-[55rem] h-[55rem] bg-amber-500/10 rounded-full blur-[140px] animate-pulse-subtle"></div>
        <div className="absolute top-[40%] right-[-15%] w-[45rem] h-[45rem] bg-zinc-600/10 rounded-full blur-[160px] animate-pulse-subtle"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50rem] h-[50rem] bg-amber-600/5 rounded-full blur-[150px]"></div>
        <div className="absolute inset-0 bg-grid-mesh opacity-25"></div>
      </div>

      <div className="relative z-10">

        {/* ═══════════════════════════════════════════════════
            👑 SECTION 1: EXECUTIVE HERO COMMAND
        ═══════════════════════════════════════════════════ */}
        <section className="min-h-screen flex items-center pt-24 pb-14 md:pt-32 md:pb-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center w-full">
            
            {/* Left Column: Hero Text & Philosophy */}
            <div className="lg:col-span-7 space-y-7">
              
              {/* Live Status Badge */}
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-amber-400/30 rounded-full bg-amber-400/5 backdrop-blur-xl shadow-[0_0_25px_rgba(212,175,55,0.15)]">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-amber-300 font-mono text-xs uppercase tracking-[0.25em] font-bold">
                  Fintech Architect • Venture Founder
                </span>
              </div>
              
              {/* Massive Dual-Tone Headline */}
              <div className="space-y-1">
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] uppercase">
                  <span className="text-silver block drop-shadow-2xl">
                    SHAHEEN
                  </span>
                  <span className="text-luxury block drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)]">
                    SAFI
                  </span>
                </h1>
                <p className="text-zinc-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase pt-2">
                  Building Borderless Financial Freedom
                </p>
              </div>

              {/* Vision Quote & Executive Statement */}
              <div className="space-y-4 max-w-2xl border-l-2 border-amber-400/40 pl-6 py-1">
                <blockquote className="text-2xl md:text-3xl text-zinc-100 font-light leading-snug tracking-wide">
                  "I don't wait for the future; <br />
                  <span className="font-extrabold text-luxury italic">I compile it.</span>"
                </blockquote>
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-light">
                  From writing low-level code at age 6 to establishing <span className="text-white font-medium">Safi International Capital</span> in London. Shaheen Safi is a pioneer in cross-border fintech and decentralized networks—engineering <span className="text-amber-300 font-medium">SafiPay</span>, <span className="text-amber-300 font-medium">Safi TopUp</span>, <span className="text-amber-300 font-medium">ZEV App</span>, <span className="text-amber-300 font-medium">Safi Academy</span>, and <span className="text-amber-300 font-medium">SafiPro</span> to dismantle systemic isolation and deliver sovereign economic tools worldwide.
                </p>
              </div>

              {/* Quick Trust Capabilities Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl pt-1">
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">EU Banking</p>
                  <p className="text-zinc-500 text-[11px] font-mono">Visa Card Rails</p>
                </div>
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">700+ Carriers</p>
                  <p className="text-zinc-500 text-[11px] font-mono">Global Telecom</p>
                </div>
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">ZEV Network</p>
                  <p className="text-zinc-500 text-[11px] font-mono">Social App</p>
                </div>
                <div className="p-3 rounded-2xl glass-card border border-white/5">
                  <p className="text-amber-400 font-bold text-sm">Safi Academy</p>
                  <p className="text-zinc-500 text-[11px] font-mono">Tech Education</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <Link 
                  href="#ventures" 
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-black font-black uppercase text-xs md:text-sm tracking-[0.2em] rounded-full overflow-hidden shadow-[0_0_35px_rgba(212,175,55,0.4)] hover:shadow-[0_0_55px_rgba(212,175,55,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Explore Ecosystem
                    <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </Link>

                <Link 
                  href="/en/cv" 
                  className="inline-flex items-center gap-2 px-8 py-4 glass-card border border-white/15 hover:border-amber-400/50 text-white font-bold uppercase text-xs md:text-sm tracking-[0.2em] rounded-full hover:bg-white/10 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-lg"
                >
                  Executive CV
                </Link>

                <Link 
                  href="https://wa.me/19342032497" 
                  target="_blank"
                  className="inline-flex items-center gap-2 px-6 py-4 text-emerald-400 hover:text-emerald-300 font-mono text-xs uppercase tracking-widest transition-colors"
                >
                  <FaWhatsapp size={16} />
                  <span>VIP Line</span>
                </Link>
              </div>

            </div>

            {/* Right Column: 3D Luxury Glass Hero Portrait */}
            <div className="lg:col-span-5 relative">
              
              {/* Backlight Glow Sphere */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-500/25 via-amber-400/10 to-transparent blur-[80px] rounded-full mix-blend-screen pointer-events-none" />
              
              {/* Luxury Glass Frame */}
              <div className="relative aspect-[4/5] rounded-[2.5rem] p-3 bg-gradient-to-b from-white/10 to-white/0 backdrop-blur-2xl border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group transition-all duration-500 hover:border-amber-400/40">
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <Image 
                    src="/shaheen4.jpeg" 
                    alt="Shaheen Safi - Founder & CEO" 
                    fill 
                    className="object-cover transition-all duration-700 group-hover:scale-105 filter grayscale-[25%] group-hover:grayscale-0"
                    priority
                  />
                  
                  {/* Subtle Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  
                  {/* Floating Chip: London HQ */}
                  <div className="absolute top-5 right-5 backdrop-blur-md bg-black/60 border border-white/15 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="text-sm">🇬🇧</span>
                    <span className="text-zinc-300 font-mono text-[10px] tracking-wider uppercase font-semibold">HQ: London, UK</span>
                  </div>

                  {/* Floating Chip: Live Financial Rails */}
                  <div className="absolute top-5 left-5 backdrop-blur-md bg-black/60 border border-amber-400/30 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                    <span className="text-amber-300 font-mono text-[10px] tracking-wider uppercase font-bold">SafiPay: Active</span>
                  </div>

                  {/* Bottom Information Glass Card */}
                  <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-black/70 border border-white/15 p-5 rounded-2xl space-y-2 shadow-2xl transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-luxury font-black text-sm uppercase tracking-wider">Shaheen Safi</span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                        Verified Executive
                      </span>
                    </div>
                    <p className="text-zinc-300 text-xs font-light leading-relaxed">
                      Leading multi-market expansion across fintech, capital investments, social tech, and education.
                    </p>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            📊 SECTION 2: GLOBAL IMPACT METRIC COUNTERS
        ═══════════════════════════════════════════════════ */}
        <section className="py-8 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-5">
            {impactMetrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="glass-card-gold p-5 md:p-6 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 group"
              >
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-luxury tracking-tight group-hover:scale-105 transition-transform duration-300">
                    {metric.value}
                  </p>
                  <p className="text-white font-bold text-xs uppercase tracking-wider mt-2">
                    {metric.label}
                  </p>
                </div>
                <p className="text-zinc-500 text-[11px] font-mono mt-3 leading-normal">
                  {metric.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            🏛️ SECTION 3: THE SAFI ECOSYSTEM & VENTURES (6 VENTURES)
        ═══════════════════════════════════════════════════ */}
        <section id="ventures" className="py-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-[11px] uppercase tracking-widest mb-3">
                <FaCrown size={12} />
                Corporate Portfolio & Ecosystem
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase italic tracking-tight">
                The Safi <span className="text-luxury">Ecosystem</span>
              </h2>
            </div>
            <p className="text-zinc-400 font-light text-sm md:text-base max-w-md leading-relaxed md:text-right">
              Six specialized powerhouses engineered to solve cross-border liquidity, payments, social media freedom, tech education, and international commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ventures.map((venture, idx) => (
              <div 
                key={idx}
                className={`relative overflow-hidden rounded-[2.5rem] glass-card border border-white/10 ${venture.border} p-7 md:p-8 flex flex-col justify-between group transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.8)] hover:-translate-y-2`}
              >
                {/* Accent glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${venture.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                <div className="relative z-10 space-y-5">
                  
                  {/* Top Bar: Logo & Badge */}
                  <div className="flex items-center justify-between">
                    <div className="relative w-16 h-16 md:w-18 md:h-18 rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/60 shadow-lg group-hover:border-amber-400/40 transition-colors p-1">
                      <Image 
                        src={venture.image} 
                        alt={venture.name} 
                        fill 
                        className="object-contain p-1 group-hover:scale-105 transition-transform duration-500" 
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 font-semibold">
                      {venture.badge}
                    </span>
                  </div>

                  {/* Header Title & Tagline */}
                  <div className="space-y-1.5">
                    <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-amber-300 transition-colors">
                      {venture.name}
                    </h3>
                    <p className="text-amber-400/90 font-mono text-xs uppercase tracking-wider font-semibold line-clamp-1">
                      {venture.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-light line-clamp-4">
                    {venture.description}
                  </p>

                  {/* Metric Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {venture.metrics.map((m, mIdx) => (
                      <span 
                        key={mIdx} 
                        className="text-[10px] font-mono text-zinc-300 bg-white/5 border border-white/5 px-2.5 py-1 rounded-lg"
                      >
                        ✓ {m}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Bottom Launch Button */}
                <div className="relative z-10 pt-6 mt-5 border-t border-white/5 flex items-center justify-between">
                  <Link 
                    href={venture.link} 
                    target="_blank"
                    className="inline-flex items-center gap-2.5 text-xs md:text-sm font-bold uppercase tracking-[0.15em] text-white hover:text-amber-300 transition-colors group/btn"
                  >
                    <span>{venture.btnText}</span>
                    <span className="w-7 h-7 rounded-full bg-white/10 border border-white/10 flex items-center justify-center group-hover/btn:bg-amber-400 group-hover/btn:text-black group-hover/btn:border-amber-400 transition-all duration-300">
                      <FaArrowRight size={10} className="-rotate-45 group-hover/btn:rotate-0 transition-transform duration-300" />
                    </span>
                  </Link>

                  <span className="text-zinc-600 text-[10px] font-mono uppercase tracking-widest">
                    External System
                  </span>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            🛠️ SECTION 4: STRATEGIC ARCHITECTURAL PILLARS
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
              Engineering Principles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase italic tracking-tight">
              Strategic <span className="text-luxury">Architectural Pillars</span>
            </h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed">
              Every system built under the Safi banner is guided by institutional-grade security, extreme performance, and financial accessibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="glass-card p-7 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-300 space-y-4 hover:-translate-y-1.5 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            🌍 SECTION 5: GLOBAL HUBS & FOOTPRINT
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="glass-card border border-white/10 rounded-[2.5rem] p-7 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="text-amber-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                  International Presence
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase italic tracking-tight">
                  Operating Across <br />
                  <span className="text-luxury">4 Strategic Hubs</span>
                </h3>
                <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed">
                  Cross-border execution requires a multi-jurisdiction presence. From European capital governance in London to commercial supply chains in Istanbul and financial inclusion on the ground in Kabul.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {hubs.map((hub, idx) => (
                  <div 
                    key={idx}
                    className="p-5 rounded-2xl bg-black/40 border border-white/10 hover:border-amber-400/30 transition-all duration-300 space-y-1.5 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl">{hub.flag}</span>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Active Node</span>
                    </div>
                    <h4 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {hub.city}, {hub.country}
                    </h4>
                    <p className="text-zinc-400 text-xs font-mono">
                      {hub.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            💎 STRATEGIC PARTNER & EXECUTIVE SPONSOR
        ═══════════════════════════════════════════════════ */}
        <section className="py-6 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <AdSenseUnit 
            lang="en" 
            variant="in-feed"
            labelEn="EXECUTIVE PARTNER • GLOBAL INDUSTRY INSIGHT"
          />
        </section>

        {/* ═══════════════════════════════════════════════════
            📰 SECTION 6: EXECUTIVE ESSAYS & BENTO ROOM
        ═══════════════════════════════════════════════════ */}
        <section className="py-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-amber-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
                Thought Leadership
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase italic tracking-tight">
                Executive <span className="text-luxury">Reading Room</span>
              </h2>
            </div>
            <Link 
              href="/en/blog" 
              className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-300 font-mono text-xs uppercase tracking-widest transition-colors"
            >
              <span>View All 15+ Publications</span>
              <FaArrowRight size={12} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mediumArticles.map((article, idx) => (
              <Link 
                key={idx} 
                href={article.link} 
                target="_blank"
                className="group relative overflow-hidden rounded-[2.5rem] glass-card border border-white/10 hover:border-amber-400/50 p-7 md:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300">
                      {article.tag}
                    </span>
                    <span className="text-zinc-500 text-xs font-mono">
                      {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-zinc-400 text-xs font-mono">
                    <FaMedium size={16} />
                    <span>Read on Medium</span>
                  </div>
                  <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 group-hover:bg-amber-400 group-hover:text-black transition-all">
                    <FaArrowRight size={12} className="-rotate-45 group-hover:rotate-0 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Master Vision Quote Card */}
          <div className="mt-8 glass-card-gold rounded-[2.5rem] p-7 md:p-10 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <span className="text-amber-400 font-mono text-xs uppercase tracking-widest font-bold">
                The Core Axiom
              </span>
              <p className="text-xl sm:text-2xl md:text-3xl text-zinc-100 font-serif italic leading-snug">
                "Systemic barriers are simply <span className="text-luxury font-sans font-bold">poorly written legacy systems</span> waiting for a more determined architect."
              </p>
              <p className="text-zinc-400 font-mono text-xs tracking-widest uppercase">
                — Shaheen Safi, Founder & Managing Director
              </p>
            </div>
            <Link 
              href="/en/about" 
              className="shrink-0 px-8 py-3.5 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black border border-white/15 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300"
            >
              Full Biography
            </Link>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════
            📡 SECTION 7: SOCIAL CHANNELS & VIP INVITATION
        ═══════════════════════════════════════════════════ */}
        <section className="py-16 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2.5">
            <span className="text-amber-400 font-mono text-xs uppercase tracking-[0.3em] font-bold">
              Direct Channels
            </span>
            <h2 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight">
              Connect with <span className="text-luxury">Shaheen Safi</span>
            </h2>
            <p className="text-zinc-400 text-xs md:text-sm font-light">
              Follow official announcements, connect for strategic partnerships, or initiate private executive advisory.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
            {socialLinks.map((social, idx) => (
              <Link 
                key={idx}
                href={social.link} 
                target="_blank"
                className="p-5 glass-card rounded-2xl flex flex-col items-center justify-center gap-3 hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-amber-400/10 ${social.color} transition-colors`}>
                  {social.icon}
                </div>
                <span className="text-[11px] font-mono text-zinc-400 group-hover:text-white uppercase tracking-wider text-center">
                  {social.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Private VIP Line CTA */}
          <div className="mt-10 text-center">
            <Link 
              href="https://wa.me/19342032497" 
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-emerald-600/10 border border-emerald-400/40 hover:border-emerald-400 text-emerald-300 hover:text-white text-xs md:text-sm font-bold uppercase tracking-[0.2em] shadow-[0_0_35px_rgba(16,185,129,0.2)] hover:shadow-[0_0_50px_rgba(16,185,129,0.4)] transition-all duration-300"
            >
              <FaWhatsapp size={18} />
              <span>Direct WhatsApp Line for Press & Institutional Inquiries</span>
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}