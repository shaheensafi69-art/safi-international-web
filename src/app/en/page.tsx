import Image from 'next/image';
import { getDictionary } from '@/lib/get-dictionary';
import { Locale } from '@/lib/i18n-config';

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const storyParagraphs = [
    {
      id: 1,
      img: '/shaheen1.jpeg',
      year: '2003 - 2007',
      title: 'Roots: From Tagab to Kabul',
      text: 'I was born in Tagab, Kapisa. At just 3 years old in 2006, my family moved to Kabul. In 2007, when I was only four, my father bought a computer for my brothers. While other kids played games, I was fascinated by the black screens and command lines of Linux. This was the moment my unbreakable bond with technology began.'
    },
    {
      id: 2,
      img: '/shaheen2.jpeg',
      year: '2008 - 2014',
      title: 'Digital Prodigy & The Dark Web',
      text: 'Within a year, at age 5 (2008), I mastered Python through self-study. This early brilliance led me into the world of security and hacking. In 2009, as Bitcoin was born, my curiosity took me into the depths of the Dark Web. I spent years in this complex space, learning about cryptography and blockchain in the hidden layers of the internet until I was 12.'
    },
    {
      id: 3,
      img: '/shaheen3.jpeg',
      year: '2015 - 2017',
      title: 'E-Commerce & The Banking Wall',
      text: 'In late 2015, I decided to enter the business world, starting with Amazon. However, I soon faced my biggest challenge: financial discrimination. Due to banking issues, my accounts were blocked repeatedly. This obstacle didn’t stop me; it inspired me to enter the world of Forex in 2017, seeking new ways to create wealth in global markets.'
    },
    {
      id: 4,
      img: '/shaheen4.jpeg',
      year: '2020 - 2022',
      title: 'The Rise & Fall of SafiPro',
      text: 'In 2020, I launched my clothing brand, "SafiPro". The business was thriving, but I faced the same old enemy: banking systems that stifled growth. I made a tough decision; I sold SafiPro to gain the capital needed to solve this problem at its root. I realized that until I fixed the payment issue, no business would be sustainable for me or my people.'
    },
    {
      id: 5,
      img: '/shaheen5.jpeg',
      year: '2023 - 2024',
      title: 'Forex Mastery & SafiPay Idea',
      text: 'I spent 2023 researching a modern financial system. In 2024, the idea of "SafiPay" was born. Simultaneously, after years of trading, I earned a prestigious IFTA certificate in Forex in December 2024. Despite this achievement, I knew my true calling was elsewhere. I left Forex behind to dedicate every second of my life to building SafiPay.'
    },
    {
      id: 6,
      img: '/shaheen6.jpeg',
      year: 'NOW',
      title: 'Today: The Global Mission',
      text: 'Today, all my energy is focused on SafiPay. I went from Linux at 4 and the Dark Web at 9 to building a bridge where no entrepreneur is ever stopped by financial limits. SafiPay is more than an app; it’s the result of every challenge I’ve faced from Tagab to London. We are building a future where moving money is as simple as sending a message.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white" dir="ltr">
      <div className="galaxy-overlay fixed inset-0 pointer-events-none" />
      
      {/* 1. Hero Section - Landscape box and side text */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Landscape Image Box */}
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden border border-safi-gold/20 shadow-[0_0_80px_rgba(212,175,55,0.1)] group">
              <Image 
                src="/hero.jpg" 
                alt="Shaheen Safi Vision" 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                priority 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>

          {/* Hero Side Text */}
          <div className="flex-1 space-y-8 order-1 lg:order-2 text-left">
            <div className="space-y-4">
              <span className="text-safi-gold font-mono tracking-widest text-sm uppercase">Founder & CEO</span>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic text-luxury leading-none">
                Shaheen <br />
                <span className="text-safi-gold">Safi</span>
              </h1>
            </div>
            <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed">
              Pioneering the next generation of financial freedom. 
              From mastering Linux at age 4 to building a global Fintech empire.
            </p>
            <div className="flex gap-4 justify-start items-center">
              <div className="h-px w-12 bg-safi-gold"></div>
              <span className="text-xs uppercase tracking-[0.4em] text-safi-gold/60 font-bold">Based in London</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Story Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto space-y-56">
        
        <h2 className="text-center text-luxury text-4xl md:text-6xl font-black mb-32 tracking-[0.2em] uppercase">
          The Path of a Visionary
        </h2>

        {storyParagraphs.map((item, index) => (
          <div 
            key={item.id} 
            className={`flex flex-col md:flex-row gap-20 items-center ${
                index % 2 === 0 
                ? 'md:flex-row' 
                : 'md:flex-row-reverse'
            }`}
          >
            <div className="flex-1 w-full max-w-[420px]">
              <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-[0_0_60px_rgba(212,175,55,0.15)] group">
                <Image 
                  src={item.img} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110" 
                />
                <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-xl px-5 py-2 rounded-2xl border border-safi-gold/40 text-safi-gold font-mono font-bold">
                  {item.year}
                </div>
              </div>
            </div>

            <div className="flex-1 space-y-8 text-left">
              <div className="flex items-center gap-6 justify-start">
                <span className="text-safi-gold/50 font-mono text-xl tracking-tighter">PHASE_0{item.id}</span>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-amber-500/50 to-transparent"></div>
              </div>
              <h3 className="text-4xl md:text-5xl font-black text-luxury leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light text-justify border-l-2 pl-6 border-zinc-900 hover:border-safi-gold transition-colors duration-500">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* 3. CTA Section */}
      <section className="py-40 text-center px-6">
        <div className="glass-card max-w-5xl mx-auto p-20 rounded-[3rem] border border-safi-gold/10 bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden">
          <h2 className="text-5xl md:text-7xl font-black mb-10 text-luxury leading-tight">
              FIXING THE FUTURE <br /> OF FINTECH
          </h2>
          <p className="text-gray-500 tracking-[0.8em] uppercase text-sm font-medium">
            Safi International Capital LTD • London
          </p>
        </div>
      </section>
    </div>
  );
}