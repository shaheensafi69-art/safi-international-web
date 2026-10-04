import Image from 'next/image';
import Link from 'next/link';
import { FaCrown, FaArrowRight } from 'react-icons/fa6';

export default function VenturesPage() {
  const ventures = [
    {
      id: 1,
      name: 'SafiPay',
      logo: '/safipay.jpeg',
      tagline: 'Revolutionizing International Digital Banking',
      description: 'SafiPay is our flagship fintech infrastructure designed to break financial borders for Afghans and international users. We provide a cutting-edge platform for opening multi-currency accounts and instantly issuing virtual and physical Visa cards within the European Union.',
      features: [
        'International multi-currency accounts (USD, EUR, GBP, PLN, SEK)',
        'Instant European Visa Card issuance with bank-grade security',
        'Direct integration with global gateways like Stripe and PayPal',
        'Local European IBANs and payment details for global commerce',
        'Seamless onboarding for emerging market entrepreneurs and diaspora'
      ],
      website: 'https://www.safipay.net',
      color: 'from-amber-500/15 via-amber-500/5 to-transparent'
    },
    {
      id: 2,
      name: 'Safi TopUp',
      logo: '/safitopup.jpeg',
      tagline: 'Global Bridge for Digital Credit & Telecom Services',
      description: 'Safi TopUp is one of the most extensive digital product distribution networks. Directly connected to over 700 global mobile operators, it allows users to send airtime credit, high-speed international eSIM data bundles, and digital gift cards instantly across 150+ countries.',
      features: [
        'Direct connectivity to 700+ global telecom operators',
        'Instant digital gaming vouchers (PlayStation, Steam, iTunes, Xbox)',
        'Global eSIM and roaming data packages for 150+ countries',
        'Prepaid international utility and recharge bills processing',
        'Sub-second automated API delivery with 24/7 uptime'
      ],
      website: 'https://www.safitopup.site',
      color: 'from-blue-500/15 via-blue-500/5 to-transparent'
    },
    {
      id: 3,
      name: 'Safi International Capital LTD',
      logo: '/saficapital.png',
      tagline: 'London-Incorporated Strategic Venture Capital & Global Scaling',
      description: 'Headquartered in London, United Kingdom, Safi International Capital Ltd is the institutional investment and venture management arm of the Safi Group. Deploying capital into disruptive fintech, liquidity solutions, cross-border payment rails, and frontier software technology.',
      features: [
        'UK Companies House registered institutional investment entity',
        'Cross-border corporate governance and European regulatory compliance',
        'Fintech liquidity syndication and early-stage venture backing',
        'Strategic expansion bridges connecting London, Dubai, and emerging markets',
        'High-conviction venture building and long-term asset management'
      ],
      website: 'https://safiinternationalcapitalltd.site',
      color: 'from-emerald-500/15 via-emerald-500/5 to-transparent'
    },
    {
      id: 4,
      name: 'ZEV App',
      logo: '/zev.png',
      tagline: 'Decentralized Next-Gen Social Media & Community Monetization',
      description: 'ZEV is our breakthrough social networking ecosystem built for authentic digital sovereignty. Eliminating centralized censorship, protecting user privacy with end-to-end encryption, and empowering content creators with direct peer-to-peer monetization tools.',
      features: [
        'Censorship-resistant architecture engineered for genuine free speech',
        'End-to-end encrypted messaging, voice, and media channels',
        'Direct creator monetization without predatory platform cuts',
        'High-performance global media feed with intuitive UI/UX',
        'Multi-platform mobile client for iOS and Android'
      ],
      website: 'https://www.zevapp.com',
      color: 'from-cyan-500/15 via-cyan-500/5 to-transparent'
    },
    {
      id: 5,
      name: 'Safi Academy',
      logo: '/safiacademy.png',
      tagline: 'Frontier Tech Education, Software Engineering & Youth Empowerment',
      description: 'Safi Academy is our premier educational foundation dedicated to empowering Afghan youth and emerging market talent. Delivering world-class training in software development, AI, English fluency, and digital entrepreneurship to unlock global careers.',
      features: [
        'Comprehensive full-stack programming and AI curricula',
        'Interactive student portals with hands-on project mentoring',
        'International industry-recognized certifications and career pathways',
        'Free and accessible education for marginalized and diaspora youth',
        'Overcoming local educational bans through digital remote classrooms'
      ],
      website: 'https://safiacademy.org',
      color: 'from-amber-500/15 via-emerald-500/5 to-transparent'
    },
    {
      id: 6,
      name: 'SafiPro',
      logo: '/safipro.jpeg',
      tagline: 'Excellence in Contemporary Luxury Fashion & Lifestyle',
      description: 'SafiPro is our specialized high-end fashion and lifestyle label. Rebuilt with a vision for modern architectural aesthetics, it combines unique designs with premium industrial tailoring to serve style-conscious international consumers via direct e-commerce.',
      features: [
        'Exclusive modern silhouette designs following global runway trends',
        'Premium textiles and precision industrial tailoring craftsmanship',
        'Direct-to-consumer global express shipping via safipro.site',
        'Strict multi-tier quality assurance at every manufacturing stage',
        'Expanding catalog across premium menswear, streetwear, and accessories'
      ],
      website: 'https://safipro.site',
      color: 'from-purple-500/15 via-purple-500/5 to-transparent'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050507] text-white pt-28 pb-20 px-3 sm:px-6 w-[98%] max-w-[1600px] mx-auto" dir="ltr">
      
      {/* Page Header */}
      <div className="text-center mb-16 space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 font-mono text-xs uppercase tracking-widest">
          <FaCrown size={12} />
          <span>The Safi Portfolio</span>
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-luxury tracking-tight uppercase italic">
          VENTURES & ECOSYSTEM
        </h1>
        <p className="text-zinc-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light">
          Engineering an interconnected ecosystem where fintech, telecommunications, social networking, education, and commerce converge to eliminate global barriers.
        </p>
      </div>

      {/* Ventures Grid */}
      <div className="space-y-12">
        {ventures.map((venture) => (
          <div 
            key={venture.id}
            className={`relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br ${venture.color} p-6 md:p-10 group hover:border-amber-400/40 transition-all duration-500 shadow-[0_20px_60px_rgba(0,0,0,0.8)]`}
          >
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              
              {/* Logo Section */}
              <div className="w-full lg:w-1/4 flex justify-center shrink-0">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950 p-2 group-hover:border-amber-400/40 group-hover:scale-105 transition-all duration-500">
                  <Image 
                    src={venture.logo} 
                    alt={venture.name} 
                    fill 
                    className="object-contain p-2" 
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-3/4 space-y-5">
                <div className="space-y-1">
                  <h2 className="text-3xl md:text-4xl font-black text-white group-hover:text-amber-300 transition-colors">
                    {venture.name}
                  </h2>
                  <p className="text-amber-400/90 text-xs md:text-sm font-mono tracking-wider uppercase font-semibold">
                    {venture.tagline}
                  </p>
                </div>

                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                  {venture.description}
                </p>

                {/* Features List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  {venture.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs md:text-sm text-zinc-400 font-light">
                      <span className="text-amber-400 font-bold shrink-0">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Launch Button */}
                <div className="pt-4">
                  <Link 
                    href={venture.website}
                    target="_blank"
                    className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white/10 hover:bg-amber-400 hover:text-black border border-white/15 text-white font-bold text-xs uppercase tracking-widest transition-all duration-300 group/btn"
                  >
                    <span>Launch {venture.name}</span>
                    <FaArrowRight size={12} className="-rotate-45 group-hover/btn:rotate-0 transition-transform" />
                  </Link>
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}