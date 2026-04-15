"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight, FaShopify, FaRocket, FaCreditCard, FaChartLine } from 'react-icons/fa6';

export default function ShopifyBlogEn() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden" dir="ltr">
      
      {/* 1. Header Section - Title & Intro */}
      <header className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-block px-6 py-2 border border-amber-500/30 rounded-full bg-amber-500/5 mb-10 animate-pulse">
          <span className="text-amber-500 font-mono text-xs uppercase tracking-[0.4em] font-bold">
            Strategic E-commerce Guide
          </span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black italic mb-10 leading-[1.1] tracking-tighter">
          Building an Empire on <br />
          <span className="text-luxury">Shopify</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
          How to transition from a raw idea to a global brand? The entrepreneur's roadmap to conquering digital markets.
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
                src="/shopify-start.jpeg" 
                alt="Starting Shopify Business - Shaheen Safi" 
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
                <FaShopify className="text-amber-500 group-hover:scale-110 transition-transform" />
                <span className="border-b-2 border-amber-500/20">01. Intelligent Product Selection</span>
              </h2>
              <p className="text-zinc-400 leading-9 text-xl font-light text-justify">
                Many fail by simply copying trending products. As an entrepreneur, you must seek a product that solves a problem or represents a lifestyle. In today's world, winning brands are those that sell a "solution" or an "identity" rather than just a commodity.
              </p>
            </div>
            
            <div className="p-10 rounded-[3rem] bg-zinc-900/30 border border-white/5 backdrop-blur-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-amber-500" />
              <p className="text-zinc-200 italic text-xl leading-relaxed">
                "In modern commerce, your product isn't just an item; it's a story the customer wants to be part of. Coding this story is your art."
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Store Design & Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 text-left">
          <section className="p-12 rounded-[3.5rem] bg-zinc-900/50 border border-white/5 flex flex-col justify-between hover:border-amber-500/30 transition-all duration-500 group">
            <FaRocket className="text-amber-500 mb-8 group-hover:-translate-y-2 transition-transform" size={40} />
            <div>
              <h2 className="text-3xl font-black mb-6">02. Design: The Credibility Window</h2>
              <p className="text-zinc-400 leading-8 text-lg text-justify">
                In the world of Shopify, Trust is the most expensive currency. Your store must be fast, luxury, and flawless. Use high-quality imagery and minimal styling so the customer feels the power of your brand at first sight.
              </p>
            </div>
          </section>

          <section className="p-12 rounded-[3.5rem] bg-gradient-to-br from-zinc-900 to-black border border-amber-500/20 flex flex-col justify-between hover:shadow-[0_20px_50px_rgba(212,175,55,0.05)] transition-all duration-500">
            <FaCreditCard className="text-amber-500 mb-8" size={40} />
            <div>
              <h2 className="text-3xl font-black mb-6">03. Payment Systems: The Heartbeat</h2>
              <p className="text-zinc-400 leading-8 text-lg text-justify">
                The biggest barrier in emerging markets is the payment system. A great business without a smooth payment flow is like a Ferrari without fuel. Utilizing smart solutions like <span className="text-white font-bold">SafiPay</span> ensures your global liquidity.
              </p>
            </div>
          </section>
        </div>

        {/* Section 3: Final Strategy */}
        <div className="max-w-4xl mx-auto space-y-16 text-center">
          <blockquote className="text-3xl md:text-5xl font-serif italic text-zinc-300 border-x-2 border-amber-500/30 px-12 py-4">
             "Bypass systemic barriers with digital strategies."
          </blockquote>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-black flex items-center justify-center gap-4">
              <FaChartLine className="text-amber-500" /> 04. Global Scalability
            </h2>
            <p className="text-zinc-400 leading-9 text-xl font-light max-w-3xl mx-auto text-center">
              Once the system is operational, it's time to generate targeted traffic. Harness the power of TikTok and Instagram to tell your brand's story. Shopify commerce isn't a sprint; it's a marathon where only the boldest prevail.
            </p>
          </div>

          {/* Call to Action - Back Link */}
          <div className="pt-24">
            <Link 
              href="/en" 
              className="group inline-flex items-center gap-6 px-10 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-amber-500 hover:text-black transition-all duration-500"
            >
              <span className="text-lg font-bold uppercase tracking-widest">Back Home</span>
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