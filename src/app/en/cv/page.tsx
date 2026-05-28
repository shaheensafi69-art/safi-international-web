"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CVPage() {
  const [activeTab, setActiveTab] = useState('information');

  const education = [
    {
      university: 'Istanbul Technical University (ITU)',
      degree: 'Bachelor of Computer Science',
      duration: '2018 - 2022',
      details: 'Focused on software engineering and intelligent systems at one of the world\'s leading technical universities.'
    },
    {
      university: 'Business Management Courses',
      degree: 'Specialized in Digital Marketing & E-commerce',
      duration: '2016 - 2023',
      details: 'Completed specialized business management courses with a focus on e-commerce strategies and entrepreneurship.'
    }
  ];

  const experience = [
    {
      role: 'IT Specialist',
      company: 'Afghanistan Football Federation',
      duration: '1.5 Years',
      description: 'Management of IT systems and network infrastructure.'
    },
    {
      role: 'IT Instructor',
      company: 'Educational Centers',
      duration: '3 Years',
      description: 'Teaching computer science and specialized Information Technology subjects.'
    }
  ];

  const skills = [
    { 
      category: 'Creative Design & 3D', 
      items: [
        { name: 'Photoshop', color: 'text-blue-500' }, { name: 'Illustrator', color: 'text-orange-500' }, 
        { name: 'Premiere Pro', color: 'text-purple-500' }, { name: 'After Effects', color: 'text-indigo-400' }, 
        { name: 'InDesign', color: 'text-pink-500' }, { name: 'CorelDRAW', color: 'text-green-500' },
        { name: 'Maya', color: 'text-teal-400' }, { name: '3ds Max', color: 'text-blue-400' }, 
        { name: 'Cinema 4D', color: 'text-indigo-500' }, { name: 'Blender', color: 'text-orange-400' }
      ] 
    },
    { 
      category: 'Software Development', 
      items: [
        { name: 'Flutter', color: 'text-blue-400' }, { name: 'Next.js', color: 'text-white' }, 
        { name: 'React.js', color: 'text-cyan-400' }, { name: 'Dart', color: 'text-blue-500' }, 
        { name: 'Python', color: 'text-yellow-400' }, { name: 'TypeScript', color: 'text-blue-600' }, 
        { name: 'Node.js', color: 'text-green-500' }, { name: 'PHP', color: 'text-indigo-400' }, 
        { name: 'C#', color: 'text-purple-500' }, { name: 'C++', color: 'text-blue-500' }
      ] 
    },
    { 
      category: 'Database & Backend', 
      items: [
        { name: 'Firebase', color: 'text-yellow-500' }, { name: 'Supabase', color: 'text-emerald-500' }, 
        { name: 'MySQL', color: 'text-blue-400' }, { name: 'PostgreSQL', color: 'text-blue-300' }, 
        { name: 'MongoDB', color: 'text-green-500' }, { name: 'SQL Server', color: 'text-red-500' }
      ] 
    },
    { 
      category: 'E-Commerce & Business', 
      items: [
        { name: 'Amazon Expert', color: 'text-orange-400' }, { name: 'Shopify', color: 'text-green-400' }, 
        { name: 'TikTok Shop', color: 'text-white' }, { name: 'Freelancing', color: 'text-blue-400' }, 
        { name: 'Digital Marketing', color: 'text-yellow-500' }, { name: 'Trading', color: 'text-emerald-400' }, 
        { name: 'Entrepreneurship', color: 'text-purple-400' }
      ] 
    },
    { 
      category: 'Networking & Security', 
      items: [
        { name: 'Cisco R&S', color: 'text-cyan-500' }, { name: 'Mikrotik', color: 'text-gray-300' }, 
        { name: 'Firewalls', color: 'text-red-500' }, { name: 'Network Security', color: 'text-blue-500' }, 
        { name: 'VPN Setup', color: 'text-indigo-400' }
      ] 
    }
  ];

  const socials = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shaheen-safi-b73a30299', icon: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /> },
    { name: 'Instagram', url: 'https://www.instagram.com/top_g_official1', icon: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></> },
    { name: 'TikTok', url: 'https://www.tiktok.com/@safi_sahib6', icon: <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5v3a3 3 0 0 1-3-3v7a8 8 0 1 1-8-8v3a5 5 0 0 0 5 5z" /> },
    { name: 'WhatsApp', url: 'https://wa.me/19342032497', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /> },
    { name: 'Facebook', url: 'https://www.facebook.com/share/18h8Drdg6z/', icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /> },
  ];

  const tabs = [
    { id: 'information', label: 'Information' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 selection:bg-[#D4AF37] selection:text-black font-sans relative overflow-hidden flex justify-center py-20 px-4 md:px-8" dir="ltr">
      
      {/* Animated 3D Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-[#D4AF37] opacity-[0.03] rounded-full blur-[100px] animate-[pulse_8s_ease-in-out_infinite]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-zinc-600 opacity-[0.05] rounded-full blur-[120px] animate-[pulse_10s_ease-in-out_infinite_reverse]"></div>
        <div className="absolute top-[40%] left-[60%] w-[20rem] h-[20rem] bg-[#D4AF37] opacity-[0.02] rounded-full blur-[80px] animate-[bounce_15s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-7xl w-full flex flex-col md:flex-row gap-10 relative z-10">
        
        {/* LEFT SIDEBAR */}
        <div className="w-full md:w-80 shrink-0 flex flex-col gap-8">
          {/* Profile Card */}
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-8 flex flex-col items-center text-center shadow-2xl shadow-black hover:shadow-[#D4AF37]/5 hover:-translate-y-1 transition-all duration-500 group">
            <div className="relative w-48 h-48 mb-6">
              <div className="absolute inset-0 rounded-full border border-[#D4AF37] animate-[spin_10s_linear_infinite] opacity-50"></div>
              <div className="absolute -inset-2 rounded-full border border-dashed border-zinc-700 animate-[spin_15s_linear_infinite_reverse] opacity-50"></div>
              <Image 
                src="/shaheen4.jpeg" 
                alt="Shaheen Safi" 
                fill 
                className="object-cover rounded-full border-4 border-[#0a0a0a] grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight mb-2">Shaheen <span className="text-[#D4AF37]">Safi</span></h1>
            <div className="px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] rounded-full text-xs font-mono uppercase tracking-widest mb-6">
              Computer Specialist
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-4 flex flex-col gap-2 shadow-2xl">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-6 py-4 rounded-2xl font-bold uppercase tracking-wider text-sm transition-all duration-300 flex items-center gap-4 ${
                  activeTab === tab.id 
                    ? 'bg-[#D4AF37] text-black shadow-[0_0_20px_rgba(212,175,55,0.4)] scale-105' 
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${activeTab === tab.id ? 'bg-black animate-pulse' : 'bg-zinc-700'}`}></div>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT MAIN CONTENT */}
        <div className="flex-1 bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black relative overflow-hidden min-h-[600px]">
          
          {/* Dynamic Content Rendering */}
          <div className="animate-[fadeIn_0.5s_ease-out]">
            
            {/* INFORMATION TAB */}
            {activeTab === 'information' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight">About <span className="text-[#D4AF37]">Me</span></h2>
                  <p className="text-zinc-400 text-lg leading-relaxed text-justify max-w-3xl">
                    Creative, energetic, and passionate about technology and online business. Experienced in computer science teaching, IT system management, and founder of Safi Group. I bridge the gap between technical infrastructure and modern digital ecosystems.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-[#D4AF37] pl-4">Social Media</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socials.map((social, idx) => (
                      <Link 
                        key={idx} 
                        href={social.url}
                        target="_blank"
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-black border border-zinc-800 hover:border-[#D4AF37]/50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all duration-300">
                          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            {social.icon}
                          </svg>
                        </div>
                        <span className="font-bold text-zinc-300 group-hover:text-white transition-colors">{social.name}</span>
                        <svg className="w-4 h-4 ml-auto text-zinc-600 group-hover:text-[#D4AF37] group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* EDUCATION TAB */}
            {activeTab === 'education' && (
              <div>
                <h2 className="text-4xl font-black text-white mb-10 uppercase tracking-tight">My <span className="text-[#D4AF37]">Education</span></h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 hover:border-[#D4AF37]/30 hover:-translate-y-1 transition-all duration-500 group">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 group-hover:bg-[#D4AF37] transition-colors duration-500"></div>
                      <h3 className="text-2xl text-white font-bold mb-2">{edu.university}</h3>
                      <p className="text-[#D4AF37] font-medium text-lg">{edu.degree}</p>
                      <div className="inline-block mt-3 px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-500 text-sm font-mono">{edu.duration}</div>
                      <p className="text-zinc-400 mt-5 text-base leading-relaxed max-w-2xl">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* SKILLS TAB (With New Small Boxes & Colors) */}
            {activeTab === 'skills' && (
              <div>
                <h2 className="text-4xl font-black text-white mb-10 uppercase tracking-tight">Technical <span className="text-[#D4AF37]">Skills</span></h2>
                <div className="space-y-12">
                  {skills.map((skillGroup, index) => (
                    <div key={index}>
                      <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider border-l-4 border-[#D4AF37] pl-4">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {skillGroup.items.map((skill, i) => (
                          <div 
                            key={i} 
                            className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-black/50 border border-zinc-800 backdrop-blur-md hover:border-[#D4AF37]/50 hover:bg-black hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-300 cursor-default"
                          >
                            <div className={`w-2 h-2 rounded-full shadow-[0_0_10px_currentColor] ${skill.color}`}></div>
                            <span className="font-semibold text-zinc-300 group-hover:text-white transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* EXPERIENCE TAB */}
            {activeTab === 'experience' && (
              <div>
                <h2 className="text-4xl font-black text-white mb-10 uppercase tracking-tight">Work <span className="text-[#D4AF37]">Experience</span></h2>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black p-8 hover:border-[#D4AF37]/30 hover:-translate-y-1 transition-all duration-500 group">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors">{exp.role}</h3>
                          <p className="text-zinc-400 mt-2 text-lg">{exp.company}</p>
                        </div>
                        <div className="shrink-0">
                          <span className="inline-block px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-xl text-zinc-500 font-mono text-sm">{exp.duration}</span>
                        </div>
                      </div>
                      <div className="mt-6 pt-6 border-t border-zinc-800/50">
                        <p className="text-zinc-400 text-base leading-relaxed max-w-2xl">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* Simple Keyframes definition inline for Next.js to render safely if standard tailwind doesn't pick it up */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}