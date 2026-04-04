"use client";

import Image from 'next/image';

export default function AboutPage() {
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
        'Adobe Photoshop', 'Adobe Illustrator', 'Adobe Premiere Pro', 
        'Adobe After Effects', 'Adobe InDesign', 'CorelDRAW',
        'Autodesk Maya', 'Autodesk 3ds Max', 'Cinema 4D', 'Blender'
      ] 
    },
    { 
      category: 'Software Development', 
      items: [
        'Flutter (Mobile)', 'Next.js', 'React.js', 'Dart', 
        'Python', 'JavaScript', 'Node.js', 'PHP', 'C#', 'C++'
      ] 
    },
    { 
      category: 'Database & Backend', 
      items: [
        'Firebase', 'Supabase', 'MySQL', 'PostgreSQL', 
        'MongoDB', 'Microsoft SQL Server'
      ] 
    },
    { 
      category: 'E-Commerce & Business', 
      items: [
        'Amazon Expert', 'Shopify', 'TikTok Shop', 'Freelancing', 
        'Digital Marketing', 'Trading', 'Entrepreneurship'
      ] 
    },
    { 
      category: 'Networking & Security', 
      items: [
        'Cisco Routing & Switching', 'Mikrotik Configuration', 
        'Firewall Management', 'Network Security', 'VPN Setup'
      ] 
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white ltr pt-32 pb-24 px-6" dir="ltr">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-16 items-center mb-32">
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-safi-gold animate-pulse opacity-20"></div>
            <Image 
              src="/shaheen4.jpeg" 
              alt="Shaheen Safi" 
              fill 
              className="object-cover rounded-full border-4 border-zinc-900 shadow-2xl"
            />
          </div>
          
          <div className="space-y-6 text-left">
            <h1 className="text-5xl md:text-7xl font-black text-luxury">Shaheen Safi</h1>
            <p className="text-safi-gold text-2xl font-light tracking-wide font-mono uppercase">Computer Specialist</p>
            <p className="text-gray-400 text-lg leading-relaxed text-justify max-w-2xl">
              Creative, energetic, and passionate about technology and online business. Experienced in computer science teaching, IT system management, and founder of SafiPro.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-luxury mb-12 border-l-4 border-safi-gold pl-4">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <div key={index} className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/20 p-8 hover:border-safi-gold/30 transition-all">
                <h3 className="text-xl text-white font-bold">{edu.university}</h3>
                <p className="text-safi-gold mt-2 font-medium">{edu.degree}</p>
                <p className="text-zinc-500 text-sm mt-1 font-mono">{edu.duration}</p>
                <p className="text-gray-400 mt-4 text-sm leading-relaxed">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-luxury mb-12 border-l-4 border-safi-gold pl-4">Work Experience</h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 rounded-3xl border border-zinc-900 bg-black group hover:border-safi-gold/20 transition-all">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-safi-gold transition-colors">{exp.role}</h3>
                  <p className="text-gray-500">{exp.company}</p>
                </div>
                <div className="mt-4 md:mt-0 text-left">
                  <span className="text-zinc-600 font-mono block">{exp.duration}</span>
                  <p className="text-gray-400 text-sm mt-1">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h2 className="text-3xl font-bold text-luxury mb-12 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="p-8 rounded-3xl border border-zinc-900 bg-zinc-900/10 hover:border-safi-gold/30 transition-all group">
                <h4 className="text-safi-gold font-bold mb-6 text-xl border-b border-safi-gold/10 pb-2">{skill.category}</h4>
                <ul className="space-y-3">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-500 group-hover:text-gray-300 transition-colors flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-safi-gold/40 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}