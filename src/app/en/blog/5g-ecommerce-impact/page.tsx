"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaBolt, FaVrCardboard, FaCubes, FaArrowTrendUp, FaSignal } from 'react-icons/fa6';

export default function FiveGEcommerceImpact() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Title & Intro */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            Future Tech Insights 2026
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Hyper-Speed: <br />
          <span className="text-amber-500 text-luxury">5G Impact</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          Beyond just faster downloads: Discover how 5G is fundamentally rewriting the DNA of global E-commerce and customer experience.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: Image & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/5g-ecommerce-impact/hero.png" 
                alt="5G and E-commerce Impact - Shaheen Safi" 
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
                <FaBolt className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Zero Latency Shopping</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                In E-commerce, milliseconds cost millions. 5G eliminates the "loading" barrier, making mobile shopping as fluid as physical browsing. When pages load instantly and high-res videos play without buffering, conversion rates skyrocket.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "5G isn't a speed upgrade; it's a foundation for immersive commerce that was previously impossible on mobile devices."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 text-left">
          <section className="p-12 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-500 group">
            <FaVrCardboard className="text-amber-500 mb-8 group-hover:-translate-y-2 transition-transform" size={40} />
            <div>
              <h2 className="text-3xl font-black mb-6">02. Immersive AR Experiences</h2>
              <p className="text-zinc-400 leading-8 text-lg text-justify">
                5G enables real-time Augmented Reality (AR) without lag. Customers can "place" furniture in their room or "try on" clothes with perfect precision, drastically reducing return rates and building ultimate brand trust.
              </p>
            </div>
          </section>

          <section className="p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-all duration-500">
            <FaCubes className="text-amber-500 mb-8" size={40} />
            <div>
              <h2 className="text-3xl font-black mb-6">03. Smart Logistics & IoT</h2>
              <p className="text-zinc-400 leading-8 text-lg text-justify">
                Beyond the storefront, 5G powers the "Industrial Internet of Things." From automated warehouses to real-time inventory tracking and drone deliveries, the entire supply chain becomes an intelligent, self-optimizing organism.
              </p>
            </div>
          </section>
        </div>

        {/* Section 3: Final Strategy */}
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-zinc-300 border-x-2 border-amber-500/30 px-12 py-4 leading-snug text-center">
             "Speed is the new currency of customer loyalty."
          </blockquote>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black flex items-center justify-center gap-4">
              <FaArrowTrendUp className="text-amber-500" /> 04. Data-Driven Scalability
            </h2>
            <p className="text-zinc-400 leading-9 text-xl font-light max-w-3xl mx-auto text-center">
              The massive bandwidth of 5G allows for deeper AI analytics in real-time. Brands can now predict customer behavior at a granular level, delivering hyper-personalized offers at the exact moment they are needed.
            </p>
          </div>

          {/* Call to Action - Back Link */}
          <div className="pt-24 text-center">
            <Link 
              href="/en" 
              className="group inline-flex items-center gap-6 px-10 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">Back Home</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Simple Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          Safi Digital Publication • 2026
        </p>
      </footer>
    </div>
  );
}