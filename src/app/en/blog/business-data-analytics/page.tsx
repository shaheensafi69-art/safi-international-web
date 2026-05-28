"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaMagnifyingGlassChart, FaLightbulb, FaGear, FaChartLine, FaDatabase, FaBullseye } from 'react-icons/fa6';

export default function BusinessDataAnalyticsBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Intelligence Focus */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            The Science of Scalability
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Data: The Fuel for <br />
          <span className="text-amber-500 text-luxury">Business Growth</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          In the modern era, intuition is a luxury, but data is a necessity. Discover how to turn raw information into a competitive empire.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Core Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/business-data-analytics/hero.png" 
                alt="Business Data Analytics - Shaheen Safi" 
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
                <FaMagnifyingGlassChart className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Beyond the Surface</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Most businesses are drowning in data but starving for insights. Data analytics is the process of extracting the "Why" behind the "What." Why did a customer churn? Why did a campaign succeed? When you unlock these answers, you stop guessing and start dominating.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Strategic growth is built on <strong>Predictive Modeling</strong>. By analyzing past behaviors, businesses can forecast future trends with surgical precision, allowing them to allocate resources where they will yield the highest ROI.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "Data is the new oil, but intelligence is the refinery that turns it into wealth."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars of Analytics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaDatabase className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Descriptive</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Understanding the past. What happened in your business? Identifying benchmarks and historical performance.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaLightbulb className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Predictive</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Forecasting the future. What is likely to happen? Using AI to spot trends before they go mainstream.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaGear className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Prescriptive</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Optimizing the outcome. What should we do next? The ultimate roadmap for automated decision-making.
            </p>
          </section>
        </div>

        {/* Section 3: Strategic Growth Impact */}
        <div className="mb-32 space-y-12 bg-gradient-to-br from-zinc-900/40 to-black p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">Winning with <span className="text-amber-500">Precision</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <FaBullseye className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Customer Acquisition:</strong> Analytics reveals the exact profile of your most profitable customers, allowing you to target them with laser-focused marketing.</p>
              </div>
              <div className="flex gap-6 items-start">
                <FaChartLine className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Operational Efficiency:</strong> Streamline your supply chain and reduce waste by identifying bottlenecks through real-time data monitoring.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10">
              "In a world of noise, data is the only signal that never lies. Growth is no longer a game of chance; it is a game of mathematics."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             Measure what matters. <br />
             <span className="text-amber-500 text-luxury">Scale what works.</span>
          </blockquote>
          
          <div className="pt-12">
            <Link 
              href="/en" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">Back to Home</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          Safi Strategic Publication • 2026
        </p>
      </footer>
    </div>
  );
}