"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaCode, FaRobot, FaMicrochip, FaServer, FaUserShield, FaTerminal } from 'react-icons/fa';
// استفاده از FaTerminal به جای FaSquareTerminal برای پایداری بیشتر

export default function CodingFintechAIBlog() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Safi AI Identity */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            Insights from Safi AI
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter text-center">
          Coding the <br />
          <span className="text-amber-500 text-luxury">Financial Future</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto text-center">
          I am Safi AI. Today, we explore how the fusion of clean code and neural networks is building the next generation of global banking.
        </p>
      </header>

      {/* 2. Main Content Area */}
      <article className="max-w-6xl mx-auto px-6 pb-40">
        
        {/* Section 1: The Dev-AI Synergy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mb-32">
          <div className="lg:col-span-5 relative group">
            <div className="absolute -inset-2 bg-amber-500/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative aspect-[3/4] rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/blog/coding-fintech-ai/hero.png" 
                alt="Coding Fintech with AI - Safi AI Insights" 
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
                <FaTerminal className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Algorithmic Neobanking</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Fintech development is no longer just about building a CRUD application. It's about building an intelligent organism. Using <strong>Next.js</strong> for performance and <strong>Supabase</strong> for scalable real-time data, we are now injecting AI layers directly into the backend. 
              </p>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                At SafiPay, my core logic integrates predictive models that analyze transaction patterns as they occur. We don't just "store" data; we interpret it to prevent fraud and optimize liquidity in microseconds.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "Code is the law, but AI is the intellect that ensures the law evolves with the market."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Technical Pillars of AI Fintech */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaCode className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Automated Auditing</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              AI-driven code reviews and automated security auditing ensure that financial smart contracts are bulletproof before deployment.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaRobot className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">AI Middleware</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Implementing middleware that uses LLMs to translate complex banking regulations into executable code logic in real-time.
            </p>
          </section>

          <section className="p-10 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 hover:border-amber-500/30 transition-all group">
            <FaServer className="text-amber-500 mb-6" size={36} />
            <h3 className="text-2xl font-black mb-4 uppercase">Self-Healing Infra</h3>
            <p className="text-zinc-500 leading-relaxed italic">
              Serverless architectures that utilize AI to predict traffic spikes and scale resources at the edge, ensuring zero downtime.
            </p>
          </section>
        </div>

        {/* Section 3: Deep Tech - The Safi AI Perspective */}
        <div className="mb-32 space-y-12 bg-zinc-900/20 p-12 rounded-[4rem] border border-white/5">
          <h2 className="text-5xl font-black text-center mb-16 tracking-tighter italic">Engineered for <span className="text-amber-500">Trust</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex gap-6 items-start text-left">
                <FaMicrochip className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Neural Risk Assessment:</strong> We replace static credit scores with dynamic AI models that analyze real-world utility and cash flow, opening doors for the underbanked.</p>
              </div>
              <div className="flex gap-6 items-start text-left">
                <FaUserShield className="text-amber-500 mt-2 flex-shrink-0" />
                <p className="text-zinc-400 text-lg leading-relaxed"><strong>Privacy-First AI:</strong> Using Zero-Knowledge Proofs (ZKP) to train financial models without ever compromising the raw personal data of our users.</p>
              </div>
            </div>
            <div className="text-zinc-300 font-light text-xl leading-relaxed italic border-l-2 border-amber-500/30 pl-10 text-left">
              "As Safi AI, my mission is to bridge the gap between complex binary logic and human financial needs. We don't just write code; we write the future of trust."
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <blockquote className="text-3xl md:text-6xl font-black italic text-zinc-200 leading-tight">
             Master the stack. <br />
             <span className="text-amber-500 text-luxury">Build the legacy.</span>
          </blockquote>
          
          <div className="pt-12">
            <Link 
              href="/en" 
              className="group inline-flex items-center gap-6 px-12 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest font-sans">Back to Hub</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 text-center">
        <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.8em]">
          Powered by Safi AI • 2026
        </p>
      </footer>
    </div>
  );
}