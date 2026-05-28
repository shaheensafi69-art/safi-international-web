"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaBrain, FaChartPie, FaMicrochip, FaShieldHalved, FaArrowTrendUp, FaGem } from 'react-icons/fa6';

export default function AIWealthManagementBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Strategic Intro */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            The Intersection of Intelligence & Capital
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          AI: The New Architect of <br />
          <span className="text-amber-500 text-luxury">Global Wealth</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          Moving beyond traditional advisory: Discover how Artificial Intelligence is redefining asset allocation, risk mitigation, and the very concept of financial freedom.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Paradigm Shift */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/ai-wealth-management/hero.png" 
                alt="AI Wealth Management - Shaheen Safi" 
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
                <FaBrain className="text-amber-500 group-hover:rotate-12 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Cognitive Asset Allocation</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Traditional wealth management relied on quarterly reviews and historical data. Today, AI operates in real-time. By processing millions of data points—from geopolitical shifts to social media sentiment—AI algorithms can predict market volatility before it manifests in price action. This is no longer about following trends; it is about out-calculating the market.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                For the modern investor, this means a portfolio that breathes with the market. AI-driven systems adjust exposures dynamically, ensuring that capital is always positioned in the path of least resistance and highest potential return.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "In the age of AI, wealth is not managed by human intuition alone, but by the synthesis of human vision and machine precision."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Core Pillars of AI Finance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <section className="p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaChartPie className="text-amber-500 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4 uppercase">Hyper-Personalization</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              AI crafts a unique "Financial DNA" for every investor, tailoring strategies to specific life goals, risk tolerance, and even ethical values.
            </p>
          </section>

          <section className="p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaShieldHalved className="text-amber-500 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4 uppercase">Predictive Security</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Advanced neural networks identify anomalous patterns, protecting high-net-worth portfolios from cyber threats and market manipulation.
            </p>
          </section>

          <section className="p-10 rounded-[3rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaMicrochip className="text-amber-500 mb-6" size={32} />
            <h3 className="text-2xl font-black mb-4 uppercase">Quantum Analytics</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Processing unstructured data at quantum speeds allows for the discovery of hidden correlations between diverse asset classes.
            </p>
          </section>
        </div>

        {/* Section 3: Deep Dive - The Human-Machine Hybrid */}
        <div className="mb-32 space-y-12">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">The Hybrid <span className="text-amber-500">Wealth Ecosystem</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                   <FaGem className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Alpha Generation</h4>
                  <p className="text-zinc-400 font-light">AI uncovers 'Alpha' in alternative data sets—satellite imagery, shipping manifests, and patent filings—giving investors an edge that traditional banks simply cannot see.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                   <FaArrowTrendUp className="text-amber-500" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Tax-Loss Harvesting</h4>
                  <p className="text-zinc-400 font-light">Automated, year-round tax optimization that executes trades to offset gains, potentially adding significant percentage points to net annual returns.</p>
                </div>
              </div>
            </div>
            <div className="p-12 rounded-[4rem] bg-gradient-to-br from-zinc-900 to-black border border-white/5 relative">
                <p className="text-zinc-300 leading-relaxed text-lg font-light text-justify">
                  The future of wealth management isn't about replacing human advisors; it's about augmenting them. The emotional intelligence of a seasoned strategist combined with the computational power of AI creates an unbreakable shield for your legacy. We are entering an era where sophisticated wealth tools, once reserved for institutional giants, are now accessible to the visionary individual.
                </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-zinc-300 border-x-2 border-amber-500/30 px-12 py-4">
             "Wealth is no longer just about what you own, but how intelligently it is managed."
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
          Safi Strategic Insights • 2026
        </p>
      </footer>
    </div>
  );
}