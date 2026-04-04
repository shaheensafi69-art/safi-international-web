import Image from 'next/image';
import Link from 'next/link';

export default function VenturesPage() {
  const ventures = [
    {
      id: 1,
      name: 'SafiPay',
      logo: '/safipay.jpeg',
      tagline: 'Revolutionizing International Digital Banking',
      description: 'SafiPay is our flagship project designed to break financial borders for Afghans and international users. We provide a cutting-edge application for opening multi-currency accounts and instantly issuing virtual and physical Visa cards within the European Union.',
      features: [
        'International account opening with a focus on Afghanistan',
        'Multi-Currency support (USD, EUR, GBP, PLN, SEK, and more)',
        'Instant Visa Card issuance with bank-grade security',
        'Direct integration with global gateways like Stripe and PayPal',
        'Provision of Local Bank Details for international business'
      ],
      website: 'https://www.safipay.net',
      color: 'from-amber-500/10 to-transparent'
    },
    {
      id: 2,
      name: 'Safi TopUp',
      logo: '/safitopup.jpeg',
      tagline: 'Global Bridge for Digital Credit Services',
      description: 'Safi TopUp is one of the most extensive digital product distribution platforms. Connected to over 700 global operators, it allows users to send mobile credit, data bundles, and purchase international gift cards instantly across 150+ countries.',
      features: [
        'Mobile top-up and credit for 700+ global operators',
        'Digital gaming cards (Steam, PlayStation, iTunes, etc.)',
        'International Data Bundles and eSIM services',
        'International Prepaid Utility bill payments',
        '24/7 support with instant digital delivery'
      ],
      website: 'https://www.safitopup.site',
      color: 'from-blue-500/5 to-transparent'
    },
    {
      id: 3,
      name: 'SafiPro',
      logo: '/safipro.jpeg',
      tagline: 'Excellence in Modern Fashion & Lifestyle',
      description: 'SafiPro is our specialized clothing and lifestyle brand. Rebuilt with a vision for premium quality, it focuses on unique designs and high-end materials to meet the needs of style-conscious customers in the global online market.',
      features: [
        'Exclusive modern designs following global trends',
        'High-quality materials and professional industrial tailoring',
        'Direct-to-consumer sales via safipro.site',
        'Strict quality control at every stage of production',
        'Diverse product range across multiple fashion categories'
      ],
      website: 'https://www.safipro.site',
      color: 'from-zinc-500/10 to-transparent'
    }
  ];

  return (
    // Added pt-32 to ensure content starts below the fixed header
    <div className="min-h-screen bg-black text-white ltr pt-32 pb-24 px-6" dir="ltr">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-black text-luxury mb-8 tracking-tight">
          SAFI VENTURES
        </h1>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Building an ecosystem where technology, finance, and commerce converge. 
          Each venture is a strategic step toward a borderless future.
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
              <div className="w-full lg:w-2/3 space-y-6">
                <div className="space-y-2">
                  <h2 className="text-4xl md:text-5xl font-black text-luxury">{venture.name}</h2>
                  <p className="text-safi-gold/80 text-lg font-mono tracking-widest uppercase">{venture.tagline}</p>
                </div>

                <p className="text-gray-400 text-lg leading-relaxed">
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
                    Visit Official Website
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
        <p className="text-zinc-700 text-sm font-mono">Registered in England • No. 17063286</p>
      </div>
    </div>
  );
}