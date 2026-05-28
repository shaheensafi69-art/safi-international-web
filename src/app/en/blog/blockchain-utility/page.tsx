"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaLink, FaShieldHeart, FaHandshake, FaDatabase, FaLayerGroup, FaCube } from 'react-icons/fa6';

export default function BlockchainUtilityBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Cinematic Title */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            The Protocol of Pure Trust
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Blockchain: Beyond <br />
          <span className="text-amber-500 text-luxury">The Currency</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          From 0 to 100: Understanding why Blockchain is the most important invention since the Internet, and how it is quietly rewriting the rules of the physical world.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: What is it really? (The 0-100 Intro) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/blockchain-utility/hero.png" 
                alt="Blockchain Utility - Shaheen Safi" 
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
                <FaCube className="text-amber-500 group-hover:rotate-90 transition-transform duration-500" />
                <span className="border-b-2 border-amber-500/20">01. The Immutable Ledger</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                To understand Blockchain, forget Bitcoin for a moment. Imagine a giant, digital notebook that everyone can see, but no one can erase. Every time something happens—a contract is signed, a house is sold, or a diamond is mined—it’s written in this notebook with "permanent ink." 
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Because this notebook lives on thousands of computers simultaneously, you don't need a bank, a lawyer, or a government to verify that the entry is true. The <strong>Math</strong> verifies it. This is the shift from "Trust in Humans" to "Trust in Computation."
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "Blockchain is not just about money. It's about who owns the truth in a digital world."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Real World Utilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaHandshake className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Smart Contracts</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Self-executing agreements where the code is the judge and jury. No middlemen, no delays, no disputes.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaLink className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Supply Chain</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Trace your food or medicine from the raw seed to your hand. Total transparency in a globalized world.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaShieldHeart className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Digital Identity</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Own your data. Prove who you are without handing over your passport or private information to big tech.
            </p>
          </section>
        </div>

        {/* Section 3: The Architecture of Future */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">Why It <span className="text-amber-500">Matters</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <FaDatabase className="text-amber-500 mt-2" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Decentralization:</strong> Power is no longer concentrated in a single server. It is distributed, making it nearly impossible to hack or manipulate.</p>
              </div>
              <div className="flex gap-6 items-start">
                <FaLayerGroup className="text-amber-500 mt-2" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Tokenization:</strong> Imagine owning 1% of a luxury hotel in London or a rare Picasso painting through a digital token. Real-world assets are becoming liquid.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10">
              "We are moving from an Internet of Information—where we copy and send data—to an Internet of Value—where we move ownership instantly and securely."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             The revolution won't be televised; <br />
             <span className="text-amber-500">it will be hashed.</span>
          </blockquote>
          
          <div className="pt-12">
            <Link 
              href="/en" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">Explore More</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          Safi Digital Publication • 2026
        </p>
      </footer>
    </div>
  );
}