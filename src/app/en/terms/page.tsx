"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaBalanceScale, 
  FaFileContract, 
  FaShieldAlt, 
  FaExclamationTriangle, 
  FaGavel, 
  FaGlobeAmericas, 
  FaEnvelope, 
  FaArrowLeft,
  FaCheckCircle
} from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServiceEn() {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden" dir="ltr">
      <Header lang="en" />

      {/* Ambient Celestial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 blur-[160px] rounded-full pointer-events-none" />

      <main className="pt-36 pb-28 px-4 sm:px-6 w-[98%] max-w-[1400px] mx-auto relative z-10">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/en" className="hover:text-amber-400 transition-colors flex items-center gap-2">
            <FaArrowLeft size={10} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400">Terms of Service</span>
        </div>

        {/* Hero Header */}
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6">
            <FaBalanceScale size={12} />
            <span>Sovereign Legal & Jurisdictional Agreement</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tight text-white mb-6">
            Terms of <span className="text-luxury">Service</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            These Terms of Service constitute a legally binding agreement between you and <span className="text-white font-medium">Shaheen Safi</span> governing your access to and utilization of <code className="text-amber-300 font-mono text-sm">shaheensafi.blog</code> and all affiliated editorial dispatches.
          </p>
          <div className="flex items-center gap-6 mt-6 text-xs font-mono text-zinc-500 uppercase tracking-wider">
            <span>Jurisdiction: <strong>London, England (UK)</strong></span>
            <span>•</span>
            <span>Last Revision: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <FaCheckCircle size={11} /> Enterprise Institutional Standard
            </span>
          </div>
        </header>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Table of Contents Sticky Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-32 glass-card p-6 rounded-3xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-400 font-bold">
                <FaFileContract size={13} />
                <span>Agreement Sections</span>
              </div>
              <nav className="space-y-2 text-xs font-mono text-zinc-400">
                <a href="#acceptance" className="block hover:text-amber-300 transition-colors py-1">1. Acceptance of Terms</a>
                <a href="#intellectual-property" className="block hover:text-amber-300 transition-colors py-1">2. Intellectual Property & Trademarks</a>
                <a href="#non-financial-disclaimer" className="block hover:text-amber-300 transition-colors py-1 text-amber-400 font-semibold">3. Non-Financial Advice Disclaimer</a>
                <a href="#advertising-policy" className="block hover:text-amber-300 transition-colors py-1">4. Advertising & Google AdSense</a>
                <a href="#user-conduct" className="block hover:text-amber-300 transition-colors py-1">5. Acceptable Use & Cyber Security</a>
                <a href="#limitation-liability" className="block hover:text-amber-300 transition-colors py-1">6. Limitation of Liability</a>
                <a href="#ecosystem-links" className="block hover:text-amber-300 transition-colors py-1">7. Ecosystem & Third-Party Portals</a>
                <a href="#governing-law" className="block hover:text-amber-300 transition-colors py-1">8. Governing Law & Jurisdiction</a>
                <a href="#modifications" className="block hover:text-amber-300 transition-colors py-1">9. Modifications to Agreement</a>
                <a href="#contact-legal" className="block hover:text-amber-300 transition-colors py-1">10. Official Legal Contact</a>
              </nav>

              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/en/privacy" 
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center justify-between"
                >
                  <span>Privacy Policy</span>
                  <span className="text-amber-400">→</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Detailed Legal Sections */}
          <article className="lg:col-span-8 space-y-12 text-zinc-300 leading-relaxed font-light text-sm sm:text-base">
            
            {/* Section 1 */}
            <section id="acceptance" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaFileContract className="text-amber-400" size={18} />
                <span>1. Acceptance of Terms</span>
              </h2>
              <p>
                By accessing, browsing, or utilizing this website (<code className="text-amber-300 font-mono">https://shaheensafi.blog</code>), you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and to comply with all applicable laws and regulations, including export control and cybersecurity laws.
              </p>
              <p>
                If you do not agree to these terms, you are expressly prohibited from using this portal and must discontinue your session immediately.
              </p>
            </section>

            {/* Section 2 */}
            <section id="intellectual-property" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>2. Intellectual Property & Proprietary Trademarks</span>
              </h2>
              <p>
                Unless otherwise indicated, all original articles, software architecture analyses, editorial commentary, photographs, graphics, audio-visual works, UI styling, and overall look-and-feel published on <code className="text-amber-300 font-mono">shaheensafi.blog</code> are the exclusive intellectual property of <strong>Shaheen Safi</strong> and protected under international copyright, trademark, and unfair competition laws.
              </p>
              <p>
                The proprietary enterprise marks, trade names, and registered logos including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-xs font-mono text-amber-300">
                <li>SafiPay™ & SafiPay European FinTech Rails</li>
                <li>Safi TopUp™ Global Telecom Gateway</li>
                <li>Safi International Capital LTD™ (London)</li>
                <li>ZEV™ Super-App & Communications Network</li>
                <li>Safi Academy™</li>
                <li>SafiPro™ Brand Heritage</li>
              </ul>
              <p className="text-xs text-zinc-400">
                are proprietary trademarks. No license, express or implied, is granted to reproduce, scrape, duplicate, redistribute, or reverse-engineer any intellectual assets without express prior written consent from Shaheen Safi.
              </p>
            </section>

            {/* Section 3 */}
            <section id="non-financial-disclaimer" className="glass-card-gold p-8 rounded-3xl border border-amber-500/30 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaExclamationTriangle className="text-amber-400" size={18} />
                <span>3. Non-Financial & Informational Advice Disclaimer</span>
              </h2>
              <p>
                The content published on this website reflects personal perspectives, entrepreneurial methodologies, macroeconomic reflections, and technology analyses.
              </p>
              <div className="p-4 rounded-2xl bg-black/70 border border-amber-400/20 text-xs text-zinc-300 space-y-2">
                <p className="font-bold text-amber-400 uppercase tracking-wider">Notice to Institutional & Retail Readers:</p>
                <p>
                  Nothing contained on <code className="text-white font-mono">shaheensafi.blog</code> constitutes financial, investment, legal, accounting, or tax advice. Past commercial performance, venture valuations, or trading analyses referenced in legacy articles do not guarantee future returns.
                </p>
                <p>
                  Users must exercise their own independent due diligence and consult accredited legal and financial advisors before undertaking capital allocation or high-stakes business decisions.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="advertising-policy" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaBalanceScale className="text-amber-400" size={18} />
                <span>4. Advertising Disclosures & Google AdSense</span>
              </h2>
              <p>
                This website hosts programmatic, in-feed, and display advertisements managed via <strong>Google AdSense</strong> (Publisher Account: <code className="text-amber-300 font-mono">ca-pub-6551903544426492</code>).
              </p>
              <p>
                Advertisements delivered through automated ad networks are served by third parties. The Publisher does not endorse, guarantee, or assume liability for any products, services, claims, or guarantees promoted by third-party advertisers. Engagement with any commercial advertiser featured on this portal is undertaken entirely at your own discretion.
              </p>
            </section>

            {/* Section 5 */}
            <section id="user-conduct" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>5. Acceptable Use & Cybersecurity</span>
              </h2>
              <p>You agree not to engage in any of the following restricted activities:</p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 text-xs font-mono">
                <li>Deploying automated crawlers, bots, scrapers, or extraction algorithms without explicit API licensing.</li>
                <li>Executing Denial-of-Service (DoS/DDoS) operations, stress tests, or vulnerability probing against our edge servers.</li>
                <li>Transmitting malicious code, exploits, trojans, worms, or unauthorized scripts.</li>
                <li>Impersonating Shaheen Safi, executives, venture directors, or affiliates of Safi International Capital LTD.</li>
                <li>Framing or mirroring any portion of this portal within third-party domains without written authorization.</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section id="limitation-liability" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGavel className="text-amber-400" size={18} />
                <span>6. Limitation of Liability</span>
              </h2>
              <p>
                To the fullest extent permissible pursuant to applicable law, Shaheen Safi and affiliated enterprises disclaim all warranties, express or implied, including, but not limited to, implied warranties of merchantability and fitness for a particular purpose.
              </p>
              <p>
                In no event shall the Publisher or his representatives be held liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of, or inability to use, this website or any information published herein.
              </p>
            </section>

            {/* Section 7 */}
            <section id="ecosystem-links" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGlobeAmericas className="text-amber-400" size={18} />
                <span>7. Ecosystem & Third-Party Portals</span>
              </h2>
              <p>
                Hyperlinks to separate corporate websites (such as SafiPay.net, SafiTopUp.site, SafiAcademy.org, ZEVapp.com) are governed by their respective independent Terms and Conditions and regulatory authorizations.
              </p>
            </section>

            {/* Section 8 */}
            <section id="governing-law" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGavel className="text-amber-400" size={18} />
                <span>8. Governing Law & Dispute Resolution</span>
              </h2>
              <p>
                These Terms of Service and any dispute, controversy, or claim arising out of or in connection with them shall be governed by and construed in accordance with the substantive laws of <strong>England and Wales</strong>, United Kingdom, without giving effect to any principles of conflicts of law.
              </p>
              <p>
                The courts of London, England, shall have exclusive jurisdiction to adjudicate any dispute arising from or related to this agreement.
              </p>
            </section>

            {/* Section 9 */}
            <section id="modifications" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaFileContract className="text-amber-400" size={18} />
                <span>9. Modifications to Agreement</span>
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time to align with legal, regulatory, or technological advancements. Updated versions will be posted immediately with a revised "Last Updated" timestamp.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact-legal" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaEnvelope className="text-amber-400" size={18} />
                <span>10. Official Legal Contact</span>
              </h2>
              <p>
                Inquiries concerning these Terms of Service should be directed to the corporate legal desk:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2 text-xs font-mono">
                <p className="text-white font-bold text-sm">Shaheen Safi Legal & Compliance Office</p>
                <p className="text-zinc-400">Safi International Capital LTD</p>
                <p className="text-zinc-400">London, United Kingdom</p>
                <p className="text-amber-400 pt-2">Email: <strong>legal@shaheensafi.blog</strong></p>
                <p className="text-zinc-500">Official Web: https://shaheensafi.blog</p>
              </div>
            </section>

          </article>

        </div>
      </main>

      <Footer lang="en" />
    </div>
  );
}
