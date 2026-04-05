import Image from 'next/image';
import Link from 'next/link';

export default function BlogPostEn() {
  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <article className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb & Date */}
        <div className="flex items-center gap-4 mb-8 font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500">
          <Link href="/en/blog" className="hover:text-amber-500 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-amber-500/60">April 05, 2026</span>
        </div>

        {/* Header Section */}
        <h1 className="text-4xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tighter uppercase italic">
          Beyond the Code: <br />
          <span className="text-luxury">An Empire Built in the Storm</span>
        </h1>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden border border-white/5 shadow-2xl mb-16">
          <Image 
            src="/blog/the-journey-of-safi/blog.jpeg" 
            alt="Shaheen Safi - Entrepreneurial Journey"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Side Info */}
          <div className="md:col-span-3 border-t border-zinc-800 pt-6">
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Author</p>
            <p className="font-bold text-sm text-white mb-6 uppercase">Shaheen Safi</p>
            
            <p className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">Focus</p>
            <p className="font-bold text-sm text-amber-500 uppercase italic">Fintech & Grit</p>
          </div>

          {/* Main Body */}
          <div className="md:col-span-9">
            <div className="prose prose-invert prose-amber max-w-none space-y-8 text-gray-300 text-lg leading-relaxed">
              <p className="text-2xl text-white font-medium leading-snug italic border-l-4 border-amber-500 pl-6 py-2">
                "Starting a business is never just a software project; it is an all-out war against the status quo."
              </p>

              <p>
                When I walked into **Istanbul Technical University (ITU)** in 2018, I knew that technical knowledge was only half the battle. The other half was the ability to stand tall against repeated "No's." Building **SafiPay** and **Safi TopUp** required a level of endurance that textbooks couldn't teach.
              </p>

              <h2 className="text-3xl font-black text-white mt-12 mb-4 tracking-tight">The Invisible Struggles</h2>
              
              <p>
                Behind every successful deployment on Netlify or Vercel, there were nights of absolute uncertainty. I made the heavy decision to sell **SafiPro**, a brand I had painstakingly built, just to fund the initial capital for SafiPay. Risking everything on a vision required a level of grit that is only forged in solitude.
              </p>

              <p>
                Trying to bridge the gap between Afghanistan and international financial systems felt like hitting a stone wall. Accounts were frozen, and doors were slammed shut, but we found—or built—new ways. Registering a company in London as an Afghan entrepreneur meant that my failures wouldn't just be my own; they would reflect on the potential of an entire generation back home.
              </p>

              <h2 className="text-3xl font-black text-white mt-12 mb-4 tracking-tight">The Outcome</h2>
              
              <p>
                Today, as **Safi AI** stands as our official spokesperson, I look back at the nights in Kabul’s darkness and Istanbul’s cold winters where the only light was my monitor. We didn't come here just to be an app; we came here to prove that borders cannot confine a vision.
              </p>
            </div>

            {/* Key Takeaways Box */}
            <div className="mt-16 p-8 rounded-3xl bg-zinc-900/50 border border-amber-500/10 backdrop-blur-xl">
              <h4 className="text-amber-500 font-mono text-xs uppercase tracking-widest mb-6">Key Insights for Founders</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-amber-500 font-bold">01.</span>
                  Liquidity follows vision: Don't be afraid to sell a success to fund a revolution.
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-amber-500 font-bold">02.</span>
                  Regulatory barriers are just code bugs in the real world—they can be debugged.
                </li>
                <li className="flex items-start gap-3 text-sm text-zinc-300">
                  <span className="text-amber-500 font-bold">03.</span>
                  Branding is the bridge between grit and trust.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>

      {/* Footer Branding */}
      <div className="mt-24 text-center">
        <div className="h-px w-24 bg-zinc-800 mx-auto mb-8" />
        <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-[0.5em]">
          Shaheen Safi • Global Ventures 2026
        </p>
      </div>
    </div>
  );
}