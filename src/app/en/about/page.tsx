"use client";

import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const companies = [
    {
      name: 'SafiPay',
      category: 'Fintech & Digital Banking',
      description: 'A professional digital banking ecosystem offering multi-currency accounts (EUR, USD, GBP) and instant physical/virtual Visa cards, facilitating international transactions.',
      link: 'www.safipay.net'
    },
    {
      name: 'Safi International Capital LTD',
      category: 'Financial Services',
      description: 'UK-registered company (No. 17063286) based in London, focused on financial services and international capital management with British standards.',
      link: 'London, UK'
    },
    {
      name: 'Safi TopUp',
      category: 'Digital Services',
      description: 'Global platform for sending mobile credit to over 150 countries, international data bundles, and digital/gaming gift cards.',
      link: 'www.safitopup.site'
    },
    {
      name: 'SafiPro',
      category: 'E-commerce Brand',
      description: 'Modern e-commerce platform offering high-quality clothing with unique designs and a wide range of digital products.',
      link: 'www.safipro.site'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-[#D4AF37] selection:text-black pt-32 pb-24 px-6 font-sans" dir="ltr">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-28 border-b border-zinc-800/50 pb-20">
          <div className="relative w-56 h-56 md:w-72 md:h-72 shrink-0 group">
            <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-pulse opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="absolute -inset-4 rounded-full border border-zinc-800 opacity-50"></div>
            <Image 
              src="/shaheen4.jpeg" 
              alt="Shaheen Safi" 
              fill 
              className="object-cover rounded-full border-2 border-[#111] shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-6 text-center md:text-left flex-1">
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Shaheen <span className="text-[#D4AF37]">Safi</span>
            </h1>
            <p className="text-[#D4AF37] text-xl md:text-2xl font-light tracking-[0.2em] font-mono uppercase">
              Fintech Entrepreneur & Developer
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl font-light mx-auto md:mx-0">
              Founder and CEO of Safi Group. Passionate about financial technology, international digital banking, and modern e-commerce. Certified Financial Technician bridging the gap between tech and global finance.
            </p>
            
            {/* CV Button */}
            <div className="pt-6 flex justify-center md:justify-start">
              <Link 
                href="/en/cv" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                <span className="relative z-10">View CV</span>
                <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>
            </div>
          </div>
        </div>

        {/* Ventures & Companies Section */}
        <div>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-12">
            <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-wider">My Ventures</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-[#0f0f0f] p-8 hover:border-[#D4AF37]/50 hover:-translate-y-1 transition-all duration-500 flex flex-col">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg className="w-24 h-24 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                </div>
                <h3 className="text-2xl text-white font-bold mb-2 relative z-10 group-hover:text-[#D4AF37] transition-colors">{company.name}</h3>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full text-xs font-mono uppercase tracking-wider relative z-10">
                    {company.category}
                  </span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed relative z-10 mb-8 flex-grow">
                  {company.description}
                </p>
                <div className="text-zinc-500 font-mono text-sm border-t border-zinc-800/50 pt-4 flex items-center gap-2 group-hover:text-zinc-300 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                  {company.link}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}