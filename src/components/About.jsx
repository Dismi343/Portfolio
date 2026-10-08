import React from 'react';
import { FaGraduationCap, FaAward, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white dark:bg-[#09090b] text-slate-800 dark:text-zinc-100 overflow-hidden transition-colors duration-500">
      {/* Subtle Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 dark:bg-emerald-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-600 dark:text-emerald-500 text-xs font-mono uppercase tracking-widest">About Me</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight text-slate-900 dark:text-zinc-100">
            Who <span className="text-slate-400 dark:text-zinc-500 italic font-light">I Am</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 leading-relaxed max-w-3xl">
            I am a Computer Science undergraduate specializing in backend and full-stack development. 
            Passionate about building <span className="text-slate-900 dark:text-zinc-100 font-medium">scalable solutions</span> and pushing the boundaries of technology.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column - Journey (Timeline) */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.2em] mb-10 flex items-center gap-3">
                <FaGraduationCap className="text-xl" />
                Educational Journey
              </h3>
              
              <div className="space-y-0">
                {/* Education Item 1 */}
                <div className="relative pl-10 pb-12 group">
                  {/* Timeline Line */}
                  <div className="absolute left-[7px] top-2 w-[2px] h-full bg-slate-200 dark:bg-zinc-800 group-last:h-0"></div>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-1.5 w-[16px] h-[16px] rounded-full border-2 border-emerald-500 bg-white dark:bg-[#09090b] z-10 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      BSc(Hons) in Computer Science
                    </h4>
                    <div className="flex items-center gap-4 text-slate-500 dark:text-zinc-500 font-mono text-sm">
                      <span>University of Ruhuna</span>
                      <span className="w-1 h-1 bg-slate-400 dark:bg-zinc-700 rounded-full"></span>
                      <span>2022 - Present</span>
                    </div>
                    <p className="text-slate-600 dark:text-zinc-400 mt-4 leading-relaxed max-w-xl">
                      Relevant coursework: Data Structures & Algorithms, Database Systems, Web Development, Software Engineering, Artificial Intelligence
                    </p>
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="relative pl-10 group">
                  <div className="absolute left-[7px] top-2 w-[2px] h-full bg-slate-200 dark:bg-zinc-800 hidden"></div>
                  <div className="absolute left-0 top-1.5 w-[16px] h-[16px] rounded-full border-2 border-emerald-500 bg-white dark:bg-[#09090b] z-10 group-hover:bg-emerald-500 transition-colors duration-300"></div>
                  
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold text-slate-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      Full-Stack Master Developer
                    </h4>
                    <div className="flex items-center gap-4 text-slate-500 dark:text-zinc-500 font-mono text-sm">
                      <span>Developerstack (Diploma)</span>
                      <span className="w-1 h-1 bg-slate-400 dark:bg-zinc-700 rounded-full"></span>
                      <span>2025-May - 2026-April</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Certifications & Skills */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              <h3 className="text-sm font-mono text-emerald-600 dark:text-emerald-500 uppercase tracking-[0.2em] flex items-center gap-3">
                <FaAward className="text-xl" />
                Achievements
              </h3>
              
              <div className="grid gap-3">
                {[
                  'python programming(2)-Ecertificate program (University of Moratuwa)',
                  'Manager - Outgoing Global Volunteer (OGV CXP) - Aiesec Univeristy of Ruhuna(2023-2025)',
                  'Participation in Road to Insergex 1.0 Hackathon',
                  'Full-Stack Developer Program (Developerstack)',
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/40 hover:bg-slate-100 dark:hover:bg-zinc-800/50 transition-all duration-300 group shadow-sm dark:shadow-none"
                  >
                    <FaCheckCircle className="text-emerald-500/70 group-hover:text-emerald-500 transition-colors" />
                    <span className="text-slate-700 dark:text-zinc-300 group-hover:text-slate-950 dark:group-hover:text-zinc-100 transition-colors text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Overview Box */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-emerald-500/5 to-transparent border border-emerald-500/30 dark:border-emerald-500/20 backdrop-blur-sm relative overflow-hidden group shadow-sm dark:shadow-none">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <p className="relative z-10 text-slate-700 dark:text-zinc-300 leading-relaxed">
                <span className="block font-mono text-emerald-600 dark:text-emerald-500 text-xs uppercase tracking-widest mb-2">Expertise</span>
                <span className="text-lg">
                  RESTful APIs, Database Design, Authentication Mechanisms, 
                  Full-Stack Development with <span className="text-slate-950 dark:text-zinc-100 font-semibold underline decoration-emerald-500/50 underline-offset-4">Modern JavaScript/React Ecosystem</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;