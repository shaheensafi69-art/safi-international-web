"use client";

import Image from 'next/image';
import Link from 'next/link';
// تغییر FaGlobeAmericas به FaGlobe
import { FaArrowRight, FaPlaneDeparture, FaLaptopCode, FaGlobe, FaUnlockKeyhole, FaParachuteBox, FaCompass } from 'react-icons/fa6';

export default function DigitalNomadFreedomBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Adventure & Freedom */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            The World is Your Office
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Digital Nomads: <br />
          <span className="text-amber-500 text-luxury">Absolute Freedom</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          Decoupling income from location. How modern entrepreneurs are leveraging global fintech to live without borders and work with purpose.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Nomad Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/digital-nomad-freedom/hero.png" 
                alt="Digital Nomad Freedom - Shaheen Safi" 
                fill 
                className="object-cover transition-transform duration-[6s] group-hover:scale-110"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-10 pt-4 text-left">
            <div className="space-y-6 text-left">
              <h2 className="text-4xl font-black text-white flex items-center gap-4 group justify-start">
                <FaUnlockKeyhole className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Breaking the 9-to-5 Chains</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                The traditional office is a 20th-century relic. Today, "Freedom" isn't just about having money; it's about having control over your <strong>Geography</strong>. A Digital Nomad is someone who has mastered the art of high-performance work while being physically untethered. Whether it's a cafe in Istanbul or a co-working space in London, the world has become a unified workspace.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                This lifestyle is fueled by the <strong>Gig Economy</strong> and global payment infrastructures. When you can receive payments in USD or EUR while living in a region with a lower cost of living, you unlock a level of financial leverage that traditional employees can only dream of.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "The ultimate luxury is the ability to choose your view every Monday morning."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars of Nomadism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-left">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaLaptopCode className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Skill Arbitrage</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Selling high-value digital skills (Coding, Branding, Trading) to global markets while optimizing personal expenses.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaPlaneDeparture className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Global Mobility</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Navigating nomad visas and international regulations to maintain a legal and tax-efficient global presence.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaGlobe className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Borderless Finance</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Utilizing neobanks and multi-currency platforms to manage wealth across borders without friction.
            </p>
          </section>
        </div>

        {/* Section 3: Strategic Impact */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">The Nomad <span className="text-amber-500">Tech Stack</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left order-2 lg:order-1">
              <div className="flex gap-6 items-start justify-start">
                <FaParachuteBox className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Financial Safety Nets:</strong> Building automated savings and investment systems that function regardless of where you land next.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaCompass className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Remote Networking:</strong> Cultivating a powerful digital network of peers and mentors that transcends physical co-location.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10 order-1 lg:order-2 text-left">
              "The Digital Nomad lifestyle is the final test of entrepreneurship: it requires absolute discipline in exchange for absolute freedom."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             Adventure is your ROI. <br />
             <span className="text-amber-500 text-luxury">Freedom is your metric.</span>
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
          Safi Lifestyle Publication • 2026
        </p>
      </footer>
    </div>
  );
}