"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTiktok, FaWhatsapp, FaFacebook, FaMedium } from 'react-icons/fa6';

export default function HomePageEn() {
  const mediumArticles = [
    {
      title: "The Infrastructure of Trust: How SafiPay is Redefining Banking",
      link: "https://medium.com/@omulbaninmoradi188/the-infrastructure-of-trust-how-safipay-is-redefining-digital-banking-security-in-emerging-markets-439b14641ad5",
      size: "md:col-span-2 md:row-span-2",
      bg: "bg-zinc-900",
      thumb: "/hero.jpg" // می‌توانید اسکرین‌شات مقاله را بگذارید
    },
    {
      title: "Introduction to Shaheen Safi",
      link: "https://medium.com/@omulbaninmoradi188/introduction-10633ed36932",
      size: "md:col-span-1 md:row-span-1",
      bg: "bg-amber-600/10",
      thumb: null
    },
    {
      title: "Regulatory Excellence in Digital Finance",
      link: "https://medium.com/@jsana9033/regulatory-excellence-in-digital-finance-a-case-study-of-safipays-european-operations-5f9a6a1845ad",
      size: "md:col-span-1 md:row-span-2",
      bg: "bg-zinc-800",
      thumb: null
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={32} />, link: "https://www.linkedin.com/in/shaheen-safi-b73a30299", color: "text-blue-500", label: "Professional" },
    { icon: <FaInstagram size={32} />, link: "https://www.instagram.com/top_g_official1", color: "text-pink-500", label: "Lifestyle" },
    { icon: <FaTiktok size={32} />, link: "https://www.tiktok.com/@safi_sahib6", color: "text-white", label: "Inside" },
    { icon: <FaWhatsapp size={32} />, link: "https://wa.me/19342032497", color: "text-green-500", label: "Direct" },
    { icon: <FaFacebook size={32} />, link: "https://www.facebook.com/share/18h8Drdg6z/", color: "text-blue-600", label: "Connect" }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden">
      
      {/* 1. Hero Section - The "Top G" Introduction */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-block px-4 py-1 border border-amber-500/30 rounded-full bg-amber-500/5 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
              <span className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.5em] font-bold">The Digital Architect</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-black italic tracking-tighter leading-[0.8]">
              SHAHEEN <br />
              <span className="text-luxury">SAFI</span>
            </h1>

            <div className="space-y-6 max-w-2xl">
              <p className="text-2xl text-zinc-300 font-light leading-relaxed">
                "I don't wait for the future; I compile it."
              </p>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                From exploring the hidden layers of the Dark Web at age 6 to establishing <span className="text-white font-medium">Safi International Capital</span> in London. Shaheen Safi is a force of nature in the Fintech world—a visionary who turned systemic exclusion into a blueprint for global inclusion. 
                <span className="block mt-4 text-zinc-500 italic">
                  Entrepreneur. Strategist. The mastermind behind SafiPay.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-4 bg-amber-500/10 blur-[80px] rounded-full" />
            <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border border-white/10 group shadow-2xl">
              <Image 
                src="/hero.jpg" 
                alt="Shaheen Safi CEO" 
                fill 
                className="object-cover transition-transform duration-[4s] group-hover:scale-110 grayscale hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bento Grid Section - The "Janjalak" Digital Footprint */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-black mb-16 uppercase italic tracking-tighter flex items-center gap-4">
           Digital <span className="text-zinc-700">Footprint</span>
           <div className="h-px flex-grow bg-zinc-900" />
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* Article Boxes */}
          {mediumArticles.map((article, index) => (
            <Link 
              key={index} 
              href={article.link} 
              target="_blank"
              className={`${article.size} ${article.bg} relative overflow-hidden border border-white/5 rounded-[2.5rem] p-10 flex flex-col justify-end hover:border-amber-500/40 transition-all duration-500 group shadow-lg`}
            >
              {article.thumb && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                   <Image src={article.thumb} alt="Preview" fill className="object-cover" />
                </div>
              )}
              <div className="relative z-10 space-y-4">
                <FaMedium className="text-amber-500/50 group-hover:text-amber-500 transition-colors" size={28} />
                <h3 className="text-2xl font-black leading-tight group-hover:text-luxury transition-colors">
                  {article.title}
                </h3>
              </div>
            </Link>
          ))}

          {/* Social Mix - Janjalak Style */}
          {socialLinks.map((social, index) => (
            <Link 
              key={index} 
              href={social.link} 
              target="_blank"
              className="col-span-1 row-span-1 bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:scale-95 transition-all hover:bg-zinc-800 hover:border-amber-500/20 group"
            >
              <span className={`${social.color} transition-transform group-hover:scale-110 duration-500`}>
                {social.icon}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-zinc-600 group-hover:text-zinc-400">
                {social.label}
              </span>
            </Link>
          ))}

          {/* Master Quote Box */}
          <div className="col-span-1 md:col-span-2 row-span-1 border border-amber-500/20 rounded-[2.5rem] p-10 flex flex-col justify-center bg-gradient-to-br from-amber-500/5 to-transparent relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaMedium size={100} />
            </div>
            <p className="italic text-zinc-300 text-left font-serif text-xl leading-relaxed">
              "Systemic barriers are just poorly written code waiting for a better architect."
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.6em]">
          London • Kabul • Istanbul • Dubai • Global Hub
        </p>
      </footer>
    </div>
  );
}