import Image from 'next/image';
import Link from 'next/link';

export default function SafiLegacyEn() {
  const storyPhases = [
    {
      id: "01",
      year: "2003 - 2007",
      title: "The Genesis: 2nd April 2003",
      text: "Born on April 2, 2003, in Tagab, Kapisa, Shaheen’s journey into the future began when his family moved to Kabul in 2006. By 2007, at the age of four, while other children were playing, Shaheen found his sanctuary in the black screens and command lines of a Linux terminal. This wasn't just a hobby; it was the birth of an unbreakable bond with technology.",
      img: "/shaheen1.jpeg"
    },
    {
      id: "02",
      year: "2009 - 2014",
      title: "The Underground Years: Age 6 to 12",
      text: "In 2009, at just 6 years old, Shaheen's curiosity led him into the depths of the Dark Web. He spent six transformative years navigating the most complex layers of the internet, mastering cryptography and blockchain long before they were mainstream. By the time he emerged at age 12, he possessed a digital expertise that few adults could claim.",
      img: "/shaheen2.jpeg"
    },
    {
      id: "03",
      year: "2015 - 2019",
      title: "The Shift: Business & The Banking Wall",
      text: "At age 12 (2015), Shaheen transitioned from the shadows to the global marketplace, starting with Amazon. However, he was immediately met with a harsh reality: systemic financial discrimination. Repeatedly blocked by traditional banking systems due to his location, his frustration became the catalyst for change. In 2017, he pivoted to Forex to master global capital movement.",
      img: "/shaheen3.jpeg"
    },
    {
      id: "04",
      year: "2020 - 2022",
      title: "SafiPro: A Strategic Sacrifice",
      text: "In 2020, he launched the successful clothing brand 'SafiPro'. Despite its rapid growth, the same banking limitations stifled its potential. At 18, Shaheen made a high-stakes decision: he sold SafiPro. He didn't sell it for wealth, but for capital—to build the ultimate solution to the financial exclusion he had faced since he was twelve.",
      img: "/shaheen4.jpeg"
    },
    {
      id: "05",
      year: "2023 - 2024",
      title: "IFTA Mastery & The SafiPay Blueprint",
      text: "After a year of rigorous financial architecture research, SafiPay was born in 2024. Even as he achieved the prestigious IFTA certificate in Forex in December 2024, Shaheen knew his mission was bigger than trading. He walked away from professional markets to dedicate every second to building the SafiPay ecosystem.",
      img: "/shaheen5.jpeg"
    },
    {
      id: "06",
      year: "2026",
      title: "Today: The Global Headquarters",
      text: "Today, operating from London, Shaheen Safi stands as the CEO of a global mission. From Linux at age 4 and the Dark Web at age 6 to a Fintech visionary today, his goal remains: ensuring no entrepreneur is ever stopped by financial borders. SafiPay is the culmination of every challenge faced from Tagab to London.",
      img: "/shaheen6.jpeg"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-32 pb-24 px-6 relative overflow-hidden" dir="ltr">
      {/* Background Cinematic Effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none" />

      <article className="max-w-5xl mx-auto relative z-10">
        <header className="text-left mb-32 border-l-4 border-amber-500 pl-8">
          <div className="flex items-center gap-4 mb-6 font-mono text-[10px] tracking-[0.4em] uppercase text-zinc-500">
            <Link href="/en/blog" className="hover:text-amber-500 transition-colors">SAFI HUB</Link>
            <span>/</span>
            <span className="text-amber-500/60">Legacy Profile</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
            THE SAFI <br />
            <span className="text-luxury">LEGACY</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-xl md:text-2xl font-light leading-relaxed italic">
            "Born April 2, 2003—A visionary who emerged from the Dark Web at age 12 to redefine the future of global finance."
          </p>
        </header>

        <div className="space-y-48">
          {storyPhases.map((phase, index) => (
            <div key={phase.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 md:gap-24 items-center`}>
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 bg-zinc-900 group shadow-[0_0_100px_rgba(0,0,0,0.8)]">
                  <Image src={phase.img} alt={phase.title} fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                  <div className="absolute top-8 left-8">
                    <span className="text-amber-500 font-mono text-xs font-black tracking-widest bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-amber-500/20">
                      {phase.year}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8 text-left">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-black text-white/5 font-mono">{phase.id}</span>
                  <div className="h-px flex-grow bg-gradient-to-r from-amber-500/30 to-transparent" />
                </div>
                <h3 className="text-4xl md:text-5xl font-black text-luxury leading-tight uppercase italic">
                  {phase.title}
                </h3>
                <p className="text-gray-400 text-xl md:text-2xl leading-relaxed text-justify font-light">
                  {phase.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Global Impact CTA */}
        <div className="mt-48 p-16 md:p-24 rounded-[4rem] bg-gradient-to-b from-zinc-900/50 to-black border border-amber-500/10 backdrop-blur-3xl text-center relative overflow-hidden shadow-2xl">
          <h2 className="text-5xl md:text-8xl font-black mb-12 text-white uppercase italic leading-[0.8]">
             Ending Financial <br />
            <span className="text-amber-500">Exclusion</span>
          </h2>
          <p className="text-zinc-500 font-mono text-sm tracking-[0.6em] uppercase">
            Shaheen Safi • CEO • Safi International Capital LTD • London
          </p>
        </div>
      </article>
    </div>
  );
}