"use client";

import React from 'react';
import Link from 'next/link';
import { 
  FaShieldAlt, 
  FaLock, 
  FaCookieBite, 
  FaUserCheck, 
  FaGlobeAmericas, 
  FaEnvelope, 
  FaArrowLeft,
  FaFileContract,
  FaCheckCircle
} from 'react-icons/fa';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicyEn() {
  const lastUpdated = "April 2026";

  return (
    <div className="min-h-screen bg-black text-white selection:bg-amber-400 selection:text-black font-sans relative overflow-x-hidden" dir="ltr">
      <Header lang="en" />

      {/* Ambient Celestial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] bg-blue-500/5 blur-[160px] rounded-full pointer-events-none" />

      <main className="pt-36 pb-28 px-4 sm:px-6 w-[98%] max-w-[1400px] mx-auto relative z-10">
        
        {/* Breadcrumb & Navigation */}
        <div className="flex items-center gap-3 mb-10 text-xs font-mono text-zinc-500 uppercase tracking-widest">
          <Link href="/en" className="hover:text-amber-400 transition-colors flex items-center gap-2">
            <FaArrowLeft size={10} />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-amber-400">Privacy Policy</span>
        </div>

        {/* Hero Header */}
        <header className="mb-16 border-b border-white/10 pb-12">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-mono tracking-widest uppercase mb-6">
            <FaShieldAlt size={12} />
            <span>Global Data Protection & Trust Framework</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase italic tracking-tight text-white mb-6">
            Privacy <span className="text-luxury">Policy</span>
          </h1>
          <p className="text-zinc-400 text-base sm:text-lg max-w-3xl leading-relaxed font-light">
            Welcome to the official digital portal of <span className="text-white font-medium">Shaheen Safi</span> (<code className="text-amber-300 font-mono text-sm">shaheensafi.blog</code>). 
            We maintain sovereign-grade privacy standards, strict compliance with the European General Data Protection Regulation (GDPR), UK Data Protection Act 2018, California Consumer Privacy Act (CCPA), and Google AdSense publisher policies.
          </p>
          <div className="flex items-center gap-6 mt-6 text-xs font-mono text-zinc-500 uppercase tracking-wider">
            <span>Effective Date: <strong>January 1, 2024</strong></span>
            <span>•</span>
            <span>Last Revision: <strong>{lastUpdated}</strong></span>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1.5">
              <FaCheckCircle size={11} /> 100% Google AdSense Compliant
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
                <span>Contents</span>
              </div>
              <nav className="space-y-2 text-xs font-mono text-zinc-400">
                <a href="#introduction" className="block hover:text-amber-300 transition-colors py-1">1. Scope & Sovereign Governance</a>
                <a href="#information-collection" className="block hover:text-amber-300 transition-colors py-1">2. Information We Collect</a>
                <a href="#google-adsense" className="block text-amber-400 font-bold hover:text-amber-300 transition-colors py-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  3. Google AdSense & Cookies
                </a>
                <a href="#cookie-policy" className="block hover:text-amber-300 transition-colors py-1">4. DoubleClick DART Cookies & Web Beacons</a>
                <a href="#third-parties" className="block hover:text-amber-300 transition-colors py-1">5. Third-Party Vendor Advertising</a>
                <a href="#gdpr-rights" className="block hover:text-amber-300 transition-colors py-1">6. GDPR & UK Data Subject Rights</a>
                <a href="#ccpa-rights" className="block hover:text-amber-300 transition-colors py-1">7. CCPA & California Privacy Rights</a>
                <a href="#children" className="block hover:text-amber-300 transition-colors py-1">8. Children's Privacy (COPPA)</a>
                <a href="#security" className="block hover:text-amber-300 transition-colors py-1">9. Enterprise Security Protocols</a>
                <a href="#contact" className="block hover:text-amber-300 transition-colors py-1">10. Legal Contact & DPO</a>
              </nav>

              <div className="pt-4 border-t border-white/10">
                <Link 
                  href="/en/terms" 
                  className="text-xs font-mono text-zinc-400 hover:text-white flex items-center justify-between"
                >
                  <span>Terms of Service</span>
                  <span className="text-amber-400">→</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Detailed Legal Sections */}
          <article className="lg:col-span-8 space-y-12 text-zinc-300 leading-relaxed font-light text-sm sm:text-base">
            
            {/* Section 1 */}
            <section id="introduction" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaLock className="text-amber-400" size={18} />
                <span>1. Scope & Sovereign Governance</span>
              </h2>
              <p>
                This Privacy Policy governs the manner in which <strong>Shaheen Safi</strong> (hereinafter referred to as "the Publisher", "we", "our", or "us"), operating the digital publication portal located at <code className="text-amber-300 font-mono">https://shaheensafi.blog</code>, collects, uses, maintains, and discloses information collected from users (each, a "User" or "Visitor") of the website.
              </p>
              <p>
                This policy applies strictly to the website and all editorial articles, market commentary, strategic frameworks, and media publications offered by Shaheen Safi. It upholds the highest ethical standards of financial journalism, digital freedom, and cross-border confidentiality.
              </p>
            </section>

            {/* Section 2 */}
            <section id="information-collection" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaUserCheck className="text-amber-400" size={18} />
                <span>2. Information We Collect</span>
              </h2>
              <h3 className="text-lg font-semibold text-white">A. Non-Personal Identification Information (Log Files)</h3>
              <p>
                Like virtually all high-performance web properties, <code className="text-amber-300 font-mono">shaheensafi.blog</code> utilizes standard server log files. The information inside these log files includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400 font-mono text-xs">
                <li>Internet Protocol (IP) addresses (anonymized in compliance with GDPR guidelines)</li>
                <li>Browser type and version (e.g., Chrome, Safari, Firefox, Edge)</li>
                <li>Internet Service Provider (ISP) and autonomous system number</li>
                <li>Date and timestamp of requests</li>
                <li>Referring and exit pages</li>
                <li>Platform type and operating system details</li>
                <li>Aggregated click-stream telemetry to analyze trends and administer the site</li>
              </ul>
              <p>
                None of this telemetry is linked to personally identifiable information. Its exclusive utility is performance optimization, security monitoring against automated attacks, and Core Web Vitals refinement.
              </p>

              <h3 className="text-lg font-semibold text-white pt-2">B. Personal Identification Information Voluntarily Provided</h3>
              <p>
                Users may browse the website anonymously. We only collect personally identifiable information when voluntarily submitted—for instance, when contacting our executive office via direct correspondence, subscribing to official dispatches, or submitting media inquiries.
              </p>
            </section>

            {/* Section 3: Google AdSense - CRITICAL FOR APPROVAL */}
            <section id="google-adsense" className="glass-card-gold p-8 rounded-3xl border border-amber-500/30 space-y-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                  <FaCookieBite className="text-amber-400" size={20} />
                  <span>3. Google AdSense & Advertising Disclosures</span>
                </h2>
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 font-bold">
                  Mandatory AdSense Disclosure
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-amber-400/20 space-y-2 text-xs font-mono text-zinc-300">
                <p><strong>Publisher Account ID:</strong> ca-pub-6551903544426492</p>
                <p><strong>Primary In-Feed Ad Unit Slot:</strong> 5523998767</p>
                <p><strong>Network Verification:</strong> google.com, pub-6551903544426492, DIRECT, f08c47fec0942fa0</p>
              </div>

              <p>
                This website partners with <strong>Google AdSense</strong> to display programmatic and native in-feed advertisements. We are obligated by Google’s Publisher Policies and international privacy legislation to provide full transparency regarding how Google utilizes user data:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-zinc-300">
                <li>
                  <strong>Third-Party Vendor Role:</strong> Google is a third-party vendor that uses cookies to serve contextual and interest-based advertisements on <code className="text-amber-300 font-mono">shaheensafi.blog</code>.
                </li>
                <li>
                  <strong>DoubleClick DART Cookie:</strong> Google’s use of advertising cookies enables it and its partners to serve ads to our visitors based on their visit to our site and/or other websites on the Internet.
                </li>
                <li>
                  <strong>User Opt-Out Rights:</strong> Visitors may opt out of personalized advertising by visiting the official 
                  <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-medium ml-1 mr-1">
                    Google Ads Settings
                  </a> 
                  page.
                </li>
                <li>
                  <strong>Cross-Network Opt-Out:</strong> Alternatively, users may opt out of third-party vendors’ use of cookies for personalized advertising by visiting 
                  <a href="https://www.aboutads.info/choices/" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-medium ml-1 mr-1">
                    www.aboutads.info
                  </a>
                  or the European Interactive Digital Advertising Alliance at 
                  <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline font-medium ml-1">
                    Your Online Choices
                  </a>.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="cookie-policy" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaCookieBite className="text-amber-400" size={18} />
                <span>4. DoubleClick DART Cookies & Web Beacons</span>
              </h2>
              <p>
                Some of our advertising partners may use cookies and web beacons on our site. Our primary advertising partner is <strong>Google AdSense</strong>.
              </p>
              <p>
                Third-party ad servers or ad networks use technology in their respective advertisements and links that appear on <code className="text-amber-300 font-mono">shaheensafi.blog</code> and are sent directly to your browser. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our third-party ad networks to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on the site.
              </p>
              <p className="text-amber-300/90 text-xs font-mono bg-amber-400/5 p-4 rounded-2xl border border-amber-400/10">
                Notice: Shaheen Safi has no access to or control over these cookies that are used by third-party advertisers. You should consult the respective privacy policies of these third-party ad servers for more detailed information.
              </p>
            </section>

            {/* Section 5 */}
            <section id="third-parties" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaGlobeAmericas className="text-amber-400" size={18} />
                <span>5. Third-Party Links & Ecosystem Partners</span>
              </h2>
              <p>
                Our site provides direct links to associated entrepreneurial ventures within the Shaheen Safi ecosystem, including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">SafiPay</span>
                  <span className="text-zinc-400">Digital Banking & Multi-Currency Rails (safipay.net)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">Safi TopUp</span>
                  <span className="text-zinc-400">Global Telecom Distribution (safitopup.site)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">Safi International Capital</span>
                  <span className="text-zinc-400">Venture Capital Syndication (London, UK)</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-xs font-mono">
                  <span className="text-amber-400 font-bold block mb-1">ZEV Social App</span>
                  <span className="text-zinc-400">Decentralized Social Ecosystem (zevapp.com)</span>
                </div>
              </div>
              <p className="pt-2 text-zinc-400 text-xs">
                Each affiliated entity maintains its independent regulatory registrations and distinct privacy disclosures where financial services are rendered.
              </p>
            </section>

            {/* Section 6 */}
            <section id="gdpr-rights" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>6. GDPR & UK Data Subject Rights</span>
              </h2>
              <p>
                Under the European General Data Protection Regulation (GDPR) and the UK Data Protection Act 2018, European and British visitors possess extensive sovereign rights over their personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li><strong>The right to access:</strong> You have the right to request copies of your personal data held by us.</li>
                <li><strong>The right to rectification:</strong> You have the right to request correction of inaccurate or incomplete information.</li>
                <li><strong>The right to erasure:</strong> You have the right to request that we erase your personal data under certain conditions.</li>
                <li><strong>The right to restrict processing:</strong> You have the right to request that we restrict processing of your personal data.</li>
                <li><strong>The right to object to processing:</strong> You have the right to object to our processing of your personal data.</li>
                <li><strong>The right to data portability:</strong> You have the right to request transfer of your data to another organization.</li>
              </ul>
              <p className="text-xs text-zinc-500">
                If you make a request, we have one calendar month to respond to you. Please direct all statutory requests to <code className="text-amber-400 font-mono">legal@shaheensafi.blog</code>.
              </p>
            </section>

            {/* Section 7 */}
            <section id="ccpa-rights" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaUserCheck className="text-amber-400" size={18} />
                <span>7. CCPA & California Privacy Rights (Do Not Sell My Info)</span>
              </h2>
              <p>
                Under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA), California residents have specific statutory rights:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-zinc-400">
                <li>The right to know what personal data categories a business collects.</li>
                <li>The right to request the deletion of personal data collected.</li>
                <li>The right to opt out of the sale or sharing of personal data.</li>
              </ul>
              <div className="p-4 rounded-2xl bg-zinc-900 border border-white/10 text-xs font-mono text-emerald-400">
                Declaration: <code className="text-white font-bold">shaheensafi.blog</code> DOES NOT sell, rent, or trade your personal information to third parties for monetary consideration.
              </div>
            </section>

            {/* Section 8 */}
            <section id="children" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaLock className="text-amber-400" size={18} />
                <span>8. Children's Privacy Protection (COPPA)</span>
              </h2>
              <p>
                Protecting the privacy of children online is of utmost importance. <code className="text-amber-300 font-mono">shaheensafi.blog</code> does not knowingly collect any personally identifiable information from children under the age of 13 (or under 16 in certain European jurisdictions).
              </p>
              <p>
                If a parent or guardian believes that our website has stored personally identifiable information of a child under the age of 13 in its database, please contact us immediately and we will make best efforts to promptly remove such information from our records.
              </p>
            </section>

            {/* Section 9 */}
            <section id="security" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaShieldAlt className="text-amber-400" size={18} />
                <span>9. Enterprise Security Protocols</span>
              </h2>
              <p>
                We adopt appropriate data collection, storage, and processing practices and enterprise-grade security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
              </p>
              <p className="text-zinc-400 text-xs">
                All traffic between your browser and our edge servers is encrypted using modern TLS 1.3 cryptography with strict HTTP Strict Transport Security (HSTS) headers enabled.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact" className="glass-card p-8 rounded-3xl border border-white/10 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaEnvelope className="text-amber-400" size={18} />
                <span>10. Legal Contact & Data Protection Officer</span>
              </h2>
              <p>
                If you have questions regarding this Privacy Policy, the practices of this site, or your dealings with this website, please direct correspondence to:
              </p>
              <div className="p-6 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2 text-xs font-mono">
                <p className="text-white font-bold text-sm">Shaheen Safi Executive Office</p>
                <p className="text-zinc-400">Legal & Data Privacy Department</p>
                <p className="text-zinc-400">Safi International Capital LTD</p>
                <p className="text-zinc-400">Jurisdiction: London, United Kingdom</p>
                <p className="text-amber-400 pt-2">Email: <strong>legal@shaheensafi.blog</strong> / <strong>contact@shaheensafi.blog</strong></p>
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
