"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const corporateDetails = {
    name: 'Safi International Capital LTD',
    role: 'Parent Holding & Institutional Anchor',
    crn: '17063286',
    duns: '234621356',
    taxId: '85677 13611',
    address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom',
    email: 'info@safiinternationalcapitalltd.site',
    url: 'https://safiinternationalcapitalltd.site',
    wikidata: 'https://www.wikidata.org/wiki/Q139502306',
    companiesHouse: 'https://find-and-update.company-information.service.gov.uk/company/17063286'
  };

  const companies = [
    {
      name: 'Safi International Capital LTD',
      category: 'Institutional Venture Capital & Holding Anchor',
      badge: 'UK CRN: 17063286',
      description: 'The parent corporate entity incorporated in England and Wales. Headquartered in Covent Garden, London, driving international venture management, fintech governance, and emerging market syndication under British regulatory standards.',
      link: 'safiinternationalcapitalltd.site',
      href: 'https://safiinternationalcapitalltd.site',
      isAnchor: true
    },
    {
      name: 'SafiPay',
      category: 'Fintech & Digital Banking',
      badge: 'Flagship Neo-Banking',
      description: 'A cutting-edge financial infrastructure delivering multi-currency EU IBANs (EUR, USD, GBP) and instant virtual & physical Visa cards, unlocking global financial corridors for underserved markets.',
      link: 'safipay.net',
      href: 'https://safipay.net'
    },
    {
      name: 'Safi TopUp',
      category: 'Global Telecom & Digital Vouchers',
      badge: '700+ Operators Live',
      description: 'High-speed telecommunication bridge integrated directly with over 700 carriers across 150+ countries. Delivering airtime, international roaming eSIMs, and digital entertainment gift cards.',
      link: 'safitopup.site',
      href: 'https://safitopup.site'
    },
    {
      name: 'ZEV App',
      category: 'Decentralized Social Network',
      badge: 'Digital Sovereignty',
      description: 'Next-generation social communication platform engineered for authentic freedom of speech, end-to-end encryption, user data privacy, and peer-to-peer creator monetization.',
      link: 'zevapp.com',
      href: 'https://www.zevapp.com'
    },
    {
      name: 'Safi Academy',
      category: 'EdTech & Youth Empowerment',
      badge: 'Future Tech Education',
      description: 'Non-profit and educational foundation delivering comprehensive curricula in modern software engineering, artificial intelligence, and leadership to empower ambitious students in developing regions.',
      link: 'safiacademy.org',
      href: 'https://safiacademy.org'
    },
    {
      name: 'SafiPro',
      category: 'Luxury Fashion & Contemporary D2C',
      badge: 'Industrial Minimalism',
      description: 'Contemporary luxury lifestyle and apparel brand synthesizing architectural minimalism with precision tailoring, fulfilled via direct global distribution.',
      link: 'safipro.site',
      href: 'https://safipro.site'
    }
  ];

  const faqs = [
    {
      q: 'Who is Shaheen Safi?',
      a: 'Shaheen Safi (شاهین صافی) is a global fintech entrepreneur, Certified Financial Technician (CFTe), and the Founder, Director & Chief Visionary Architect of Safi International Capital LTD, SafiPay, Safi TopUp, Safi Academy, and ZEV App. He studied at Istanbul Technical University (ITU) and is officially registered as a corporate director in the United Kingdom.'
    },
    {
      q: 'What is Safi International Capital LTD?',
      a: 'Safi International Capital LTD is the legal holding entity and corporate anchor of the Safi ecosystem, incorporated in England and Wales under Company Registration Number 17063286 (DUNS: 234621356, Tax ID: 85677 13611). Its registered office is at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK.'
    },
    {
      q: 'What companies and ventures operate under the Safi ecosystem?',
      a: 'The ecosystem encompasses SafiPay (digital banking & multi-currency Visa issuing), Safi TopUp (telecommunication & global airtime across 150+ countries), Safi Academy (EdTech & programming education), ZEV App (decentralized privacy social network), and SafiPro (contemporary lifestyle & fashion).'
    },
    {
      q: 'What professional credentials does Shaheen Safi hold?',
      a: 'Shaheen Safi holds the prestigious Certified Financial Technician (CFTe) designation from the International Federation of Technical Analysts (IFTA) and studied engineering and technology at Istanbul Technical University (ITU).'
    },
    {
      q: 'How can institutional investors and partners reach Shaheen Safi?',
      a: 'Institutional inquiries and venture partnerships can be directed via official corporate email to info@safiinternationalcapitalltd.site or through his verified LinkedIn, TED, and Medium profiles.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-[#D4AF37] selection:text-black pt-28 pb-24 px-3 sm:px-6 font-sans" dir="ltr">
      <div className="w-[98%] max-w-[1500px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24 border-b border-zinc-800/50 pb-20">
          <div className="relative w-56 h-56 md:w-72 md:h-72 shrink-0 group">
            <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-pulse opacity-30 group-hover:opacity-60 transition-opacity duration-700"></div>
            <div className="absolute -inset-4 rounded-full border border-zinc-800 opacity-50"></div>
            <Image 
              src="/shaheen4.jpeg" 
              alt="Shaheen Safi - Founder & Director" 
              fill 
              priority
              className="object-cover rounded-full border-2 border-[#111] shadow-[0_0_40px_rgba(212,175,55,0.1)] grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-6 text-center md:text-left flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-full text-xs font-mono text-[#D4AF37]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Entity • Google Knowledge Graph Connected</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight">
              Shaheen <span className="text-[#D4AF37]">Safi</span>
            </h1>

            <p className="text-[#D4AF37] text-lg md:text-xl font-light tracking-[0.15em] font-mono uppercase">
              Founder, Director & Chief Visionary Architect
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-3xl font-light mx-auto md:mx-0">
              Founder and Director of <strong className="text-white">Safi International Capital LTD</strong> (UK CRN: 17063286). A Certified Financial Technician (CFTe) and alumnus of Istanbul Technical University (ITU), pioneering digital banking architectures, cross-border financial rails, and decentralized technologies.
            </p>
            
            {/* Badges & Credential Links */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs font-mono">
              <a 
                href="https://www.wikidata.org/wiki/Q138427366" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-[#D4AF37] transition-all"
              >
                Wikidata: Q138427366
              </a>
              <a 
                href="https://find-and-update.company-information.service.gov.uk/company/17063286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-[#D4AF37] transition-all"
              >
                UK Companies House: 17063286
              </a>
              <a 
                href="https://www.ted.com/profiles/51476914" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 hover:text-white hover:border-[#D4AF37] transition-all"
              >
                TED Profile
              </a>
            </div>

            {/* Actions */}
            <div className="pt-4 flex flex-wrap justify-center md:justify-start gap-4">
              <Link 
                href="/en/cv" 
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-black font-bold uppercase tracking-widest rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] text-sm"
              >
                <span className="relative z-10">Executive CV</span>
                <svg className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
              </Link>

              <a 
                href="mailto:info@safiinternationalcapitalltd.site" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-white font-mono rounded-full text-sm transition-all"
              >
                <span>Institutional Contact</span>
              </a>
            </div>
          </div>
        </div>

        {/* Corporate Anchor Official Box */}
        <div className="mb-24 rounded-3xl bg-gradient-to-br from-zinc-900 via-black to-zinc-950 border border-[#D4AF37]/30 p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-8 border-b border-zinc-800 pb-8">
            <div className="space-y-3">
              <span className="px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full text-xs font-mono uppercase tracking-wider">
                Corporate Anchor & Parent Entity
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Safi International Capital LTD
              </h2>
              <p className="text-zinc-400 text-sm md:text-base max-w-3xl leading-relaxed">
                Registered in England and Wales under Company Registration Number (CRN) <strong className="text-white">17063286</strong>. Operating as the primary legal anchor and institutional holding company connecting the entire Safi venture portfolio to global financial networks.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a 
                href={corporateDetails.companiesHouse} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-[#D4AF37] text-black font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-amber-400 transition-colors"
              >
                Verify on Companies House
              </a>
              <a 
                href={corporateDetails.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-zinc-900 border border-zinc-700 text-white text-xs font-mono rounded-xl hover:border-[#D4AF37] transition-colors"
              >
                Holding Website
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs">
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">Registration No. (CRN)</p>
              <p className="text-white font-bold text-base mt-1">17063286</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">Tax ID / Corporation</p>
              <p className="text-white font-bold text-base mt-1">85677 13611</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">DUNS Number</p>
              <p className="text-white font-bold text-base mt-1">234621356</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-800">
              <p className="text-zinc-500 uppercase">Registered Jurisdiction</p>
              <p className="text-white font-bold text-base mt-1">London, United Kingdom</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-mono text-zinc-400">
            <p>
              <strong className="text-zinc-300">Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK
            </p>
            <p>
              <strong className="text-zinc-300">Official Contact:</strong> info@safiinternationalcapitalltd.site
            </p>
          </div>
        </div>

        {/* Ventures & Companies Section */}
        <div className="mb-28">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#D4AF37]"></div>
              <h2 className="text-3xl font-bold text-white uppercase tracking-wider">Ecosystem & Ventures</h2>
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest hidden sm:inline">
              Safi Group Portfolio
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-2xl border p-8 flex flex-col transition-all duration-500 hover:-translate-y-1 ${
                  company.isAnchor 
                    ? 'border-[#D4AF37]/50 bg-gradient-to-b from-zinc-900 to-[#0c0c0c]' 
                    : 'border-zinc-800 bg-[#0f0f0f] hover:border-[#D4AF37]/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-md text-[10px] font-mono uppercase tracking-wider">
                    {company.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    {company.category}
                  </span>
                </div>

                <h3 className="text-2xl text-white font-bold mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {company.name}
                </h3>

                <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                  {company.description}
                </p>

                <div className="border-t border-zinc-800/80 pt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <a 
                    href={company.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <span>{company.link}</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="text-zinc-600">Active</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section for AEO (AI / Knowledge Graph Engine) */}
        <div className="rounded-3xl border border-zinc-800/80 bg-zinc-950/60 p-8 md:p-14">
          <div className="max-w-3xl mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest font-bold">
                Answer Engine Optimization (AEO / GEO / Knowledge Graph)
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-zinc-400 text-sm mt-3 leading-relaxed">
              Institutional facts, executive credentials, and corporate structure verified for Google Knowledge Panels and conversational AI search agents.
            </p>
          </div>

          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="rounded-2xl border border-zinc-800 bg-[#0d0d0d] overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 hover:text-[#D4AF37] transition-colors"
                >
                  <span className="font-bold text-white text-base md:text-lg">
                    {faq.q}
                  </span>
                  <span className={`text-xl font-mono text-[#D4AF37] transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-zinc-400 text-sm md:text-base leading-relaxed border-t border-zinc-900 pt-4 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}