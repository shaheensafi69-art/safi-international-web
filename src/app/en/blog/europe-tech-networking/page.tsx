"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaHandshakeSimple, FaEuroSign, FaCity, FaBridge, FaUsersViewfinder, FaRankingStar } from 'react-icons/fa6';

export default function EuropeTechNetworkingBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Professional & Global */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            Expanding the Ecosystem
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Networking in <br />
          <span className="text-amber-500 text-luxury">European Tech Hubs</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          Building bridges across London, Berlin, and Paris. Why proximity to European capital and talent is the ultimate unfair advantage.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Power of Proximity */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/europe-tech-networking/hero.png" 
                alt="Networking in European Tech Hubs - Shaheen Safi" 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 pt-4 text-left">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white flex items-center gap-4 group justify-start">
                <FaCity className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. The European Silk Road</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Europe isn't just a market; it's a dense network of specialized hubs. While <strong>London</strong> remains the king of Fintech and global capital, <strong>Berlin</strong> offers a deep pool of engineering talent, and <strong>Paris</strong> has emerged as the new frontier for AI and luxury-tech. Successful networking in these regions requires more than just a LinkedIn profile—it requires a physical presence and an understanding of local business etiquette.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Strategic alliances in Europe often begin in "Third Spaces"—exclusive tech mixers, high-stakes conferences like Web Summit or Vivatech, and private member clubs in Mayfair or Mitte.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed text-left">
                "In Europe, your network is not just your net worth—it is your license to operate across borders."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Hub Strategy */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-left">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaEuroSign className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Capital Access</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Navigating the VC landscape from London’s City to Paris’s Station F. Knowing who to talk to and when.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaRankingStar className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Cultural Fluency</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Adapting your pitch to fit the pragmatic German market or the relationship-driven French ecosystem.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaUsersViewfinder className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Talent Sourcing</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Building bridges with top-tier universities and R&D centers across the continent.
            </p>
          </section>
        </div>

        {/* Section 3: The Connection Framework */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">Strategic <span className="text-amber-500">Alliances</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left order-2 lg:order-1">
              <div className="flex gap-6 items-start justify-start">
                <FaHandshakeSimple className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Value-First Approach:</strong> In European tech, relationships are built on shared value and long-term trust, not just transactional gains.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaBridge className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Regulatory Synergy:</strong> Networking with legal and compliance experts to navigate the complex EU single market effortlessly.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10 order-1 lg:order-2 text-left">
              "Europe rewards those who play the long game. Success here is measured by the strength of the bridges you build between different cultures."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12 text-center">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             Connect globally. <br />
             <span className="text-amber-500 text-luxury">Execute locally.</span>
          </blockquote>
          
          <div className="pt-12 text-center">
            <Link 
              href="/en" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">Return to Hub</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          Safi International Publication • 2026
        </p>
      </footer>
    </div>
  );
}