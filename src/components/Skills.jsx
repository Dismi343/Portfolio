import React, { useEffect, useState } from 'react';
import { FaCode, FaDatabase, FaServer, FaLaptopCode, FaRocket, FaChevronRight,FaBrain } from 'react-icons/fa';
// Keep your existing imports as they are
import Reactlogo from '../assets/skills/react-logo.png';  
import Mysql from '../assets/skills/Mysql_logo.png';
import Java from '../assets/skills/java.png';
import Javascriupt from '../assets/skills/javascript.png';
import Typescript from '../assets/skills/typescript.png';
import Php from '../assets/skills/php.png';
import Nodejs from '../assets/skills/nodejs.png';
import Mongodb from '../assets/skills/mongodb.png';
import Angular from '../assets/skills/angular.png';
import Git from '../assets/skills/git.png';

const Skills = () => {
  const [isScrolled, setScrolled] = useState(false);
  
  const images = [
    {id:1, src:Reactlogo, alt:"react" },
    {id:2, src:Mysql, alt:"mysql"},
    {id:3, src:Java, alt:"java"},
    {id:4, src:Javascriupt, alt:"js"},
    {id:5, src:Typescript, alt:"ts"},
    {id:6, src:Php, alt:"php"},
    {id:7, src:Nodejs, alt:"nodejs"},
    {id:8, src:Mongodb, alt:"mdb"},
    {id:9, src:Angular, alt:"A"},
    {id:10, src:Git, alt:"git"},
  ];

  const skillCategories = [
    {
      _id: 1,
      title: 'Languages',
      icon: <FaCode />,
      skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'PHP']
    },
    {
      _id: 2,
      title: 'Frontend',
      icon: <FaLaptopCode />,
      skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS']
    },
    {
      _id: 3,
      title: 'Backend',
      icon: <FaServer />,
      skills: ['Node.js', 'Spring Boot', 'Fast-API', 'RESTful APIs']
    },
    {
      _id: 4,
      title: 'AI & Data Engineering', // New specialized category
      icon: <FaBrain />, // You'll need to import { FaBrain } from 'react-icons/fa'
      skills: ['LangChain', 'RAG', 'Milvus', 'Gemma (LLM)', 'Embeddings']
    },
    {
      _id: 5,
      title: 'Infrastructure',
      icon: <FaDatabase />,
      skills: ['MongoDB', 'MySQL', 'Vector DBs', 'Docker', 'Git']
    }
  ];

  useEffect(() => {
    const HandleScroll = () => {
      setScrolled(window.scrollY > 400); // Adjusted for better trigger timing
    };
    window.addEventListener('scroll', HandleScroll);
    return () => window.removeEventListener('scroll', HandleScroll);
  }, []);

  return (
    <section id="skills" className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">Stack</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Technical <span className="text-zinc-500 italic font-light">Expertise</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I've developed expertise across a diverse range of technologies, 
            focusing on performance, scalability, and maintainable code.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {skillCategories.map((category) => (
            <div 
              key={category._id} 
              className="group relative p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="p-4 rounded-xl bg-zinc-800 text-emerald-500 text-2xl group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
                  {category.icon}
                </div>
                <span className="text-zinc-700 font-mono text-xl group-hover:text-emerald-500/20 transition-colors">0{category._id}</span>
              </div>

              <h3 className="text-2xl font-bold text-zinc-100 mb-6">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 text-xs font-mono rounded-md bg-zinc-950 text-zinc-400 border border-zinc-800 group-hover:border-zinc-700 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Scrolling Tech Marquee */}
        <div className="mb-32">
          <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.2em] mb-12 flex items-center gap-3">
            <FaRocket /> Core Technologies
          </h3>
          
          <div className="flex gap-8 overflow-hidden group">
            <div className="flex gap-8 animate-scroll whitespace-nowrap py-4">
              {/* Double the array for seamless infinite scroll */}
              {[...images, ...images].map((image, idx) => (
                <div
                  key={`${image.id}-${idx}`}
                  className="w-20 h-20 md:w-28 md:h-28 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800 flex items-center justify-center"
                >
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Journey - Refined Card */}
        <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/20 border border-zinc-800 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[80px]"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-emerald-500"></span>
                Learning Journey
              </h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-4">
                I believe in continuous learning and staying updated with the latest technologies. 
                Currently, I'm deepening my knowledge in:
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {[
                'Exploring cloud architecture with AWS',
                'Exploring machine learning and AI concepts',
                'Improving skills in system design and scalability',
                'Contributing to open source projects'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <FaChevronRight className="text-emerald-500 text-xs group-hover:translate-x-1 transition-transform" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;