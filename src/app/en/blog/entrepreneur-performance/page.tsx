"use client";

import Image from 'next/image';
import Link from 'next/link';
// Icons fixed for stability and error prevention
import { FaArrowRight, FaBrain, FaBolt, FaClock, FaBullseye, FaBatteryFull, FaMedal } from 'react-icons/fa6';

export default function HighPerformanceHabitsBlogEn() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Power & Discipline */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse text-center">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            The Science of Success
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          High-Performance <br />
          <span className="text-amber-500 text-luxury">Entrepreneurship</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          Why do some entrepreneurs thrive while others burn out? Master the physiological and psychological habits that fuel long-term market dominance.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Bio-Hacking Mindset */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/entrepreneur-performance/hero.png" 
                alt="High Performance Habits - Shaheen Safi" 
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
                <FaBrain className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Cognitive Optimization</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                High performance isn't about working more hours; it's about extracting more value from every second. An elite entrepreneur treats their brain like high-end hardware. This requires **Deep Work**—the ability to focus without distraction on cognitively demanding tasks. By eliminating "attention residue" and focusing on one high-impact goal at a time, you outpace the competition.
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Decision fatigue is the silent killer of empires. Top performers automate trivial tasks to save their primary cognitive energy for high-stakes strategic decisions.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "Discipline is the bridge between goals and accomplishment. In high-stakes environments, your habits are your only insurance."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 text-left">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaBolt className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Energy Auditing</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Manage energy, not time. Identify your biological peak hours to solve your hardest problems when your alertness is highest.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaBullseye className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Radical Clarity</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Know exactly what success looks like today, this month, and this decade. Without clarity, speed is useless.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaBatteryFull className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Strategic Recovery</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Professional recovery is part of professional work. High-achievers don't burn out; they recover with intention.
            </p>
          </section>
        </div>

        {/* Section 3: The Framework */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">The Winner's <span className="text-amber-500">Framework</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 text-left">
              <div className="flex gap-6 items-start justify-start">
                <FaClock className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Time Blocking:</strong> Allocating non-negotiable time blocks for creativity, management, and deep reflection.</p>
              </div>
              <div className="flex gap-6 items-start justify-start">
                <FaMedal className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Outcome Obsession:</strong> Measuring performance based on results achieved, not just the volume of tasks completed.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10">
              "You do not rise to the level of your goals; you fall to the level of your systems. Build systems that make failure impossible."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
            Conquer your day. <br />
            <span className="text-amber-500 text-luxury">Build your legacy.</span>
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
          Safi Strategic Performance Publication • 2026
        </p>
      </footer>
    </div>
  );
}