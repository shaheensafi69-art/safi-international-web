"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaGem, FaEye, FaCrown, FaFingerprint, FaLayerGroup, FaChessKnight } from 'react-icons/fa6';

export default function DigitalLuxuryBrandingBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Aesthetic Elegance */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            The Art of Digital Scarcity
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Luxury in the <br />
          <span className="text-amber-500 text-luxury">Digital Age</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          How to command prestige in an era of infinite noise. The transformation of heritage into high-performance digital identity.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The New Paradigm */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/digital-luxury-branding/hero.png" 
                alt="Digital Luxury Branding - Shaheen Safi" 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 pt-4 text-left">
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-white flex items-center gap-4 group">
                <FaCrown className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. The Paradox of Exclusivity</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Traditional luxury was defined by closed doors and physical distance. In the digital age, luxury is defined by <strong>Selective Visibility</strong>. It’s not about being found by everyone; it’s about being understood by the few. Digital luxury branding is the science of creating an online experience that feels as rare and tailored as a bespoke suit from Savile Row.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Prestige is now built through <strong>Algorithm Mastery</strong> and high-fidelity storytelling. A luxury brand doesn't just post content; it curates a digital universe that commands attention through silence and sophistication.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "In a digital world, true luxury is the one thing the internet cannot easily replicate: a soul."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Pillars of Digital Prestige */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaFingerprint className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Hyper-Personalization</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Treating the digital user as an individual, not a statistic. AI-driven white-glove service at scale.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaEye className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Quiet Sophistication</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Minimalist design that breathes. Luxury is the absence of clutter and the presence of intentionality.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaGem className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Digital Scarcity</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Utilizing Web3 and limited digital releases to create genuine ownership in a world of copies.
            </p>
          </section>
        </div>

        {/* Section 3: Strategic Impact */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">Winning the <span className="text-amber-500">Attention Game</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <FaChessKnight className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Strategic Mystery:</strong> A luxury brand tells enough to entice, but leaves enough unsaid to maintain an aura of mystery and desire.</p>
              </div>
              <div className="flex gap-6 items-start">
                <FaLayerGroup className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Seamless Ecosystems:</strong> From the website to the NFT to the physical product—the luxury journey must be a single, flawless thread of quality.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10">
              "The digital age hasn't killed luxury; it has given it a new set of tools to prove its enduring power over time."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             Style is eternal. <br />
             <span className="text-amber-500 text-luxury">Digital is the medium.</span>
          </blockquote>
          
          <div className="pt-12">
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
          Safi Luxury Publication • 2026
        </p>
      </footer>
    </div>
  );
}