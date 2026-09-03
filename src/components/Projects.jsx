import React, { useEffect, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode, FaCircle } from 'react-icons/fa';
import chip from '../assets/chip.png';
import psw from '../assets/weather.png';
import infocur from '../assets/infocur.png';
import rag from '../assets/RAG-PDF.png';
import RIUSS from '../assets/RIUSS.png';
import cragvi from '../assets/video.mp4';
import smarttask from '../assets/smart_task.jpeg';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'AI Chat-Bot (RAG Architecture)',
      description: 'A sophisticated document intelligence tool using Gemma and Milvus to perform semantic search on uploaded PDFs. Features a custom pipeline for text chunking and real-time context injection.',
      technologies: ['Python', 'RAG', 'Milvus', 'Next.js'],
      image: rag,
      github: 'https://github.com/Dismi343/PDf-Reader',
      link: "#",
      isLive: false
    },
     {
      id: 2,
      title: 'CRAG-Corrective Retrieval-Augmented Generation',
      description: 'A cutting-edge AI research project that integrates retrieval-augmented generation with corrective feedback loops. This system is designed to enhance the accuracy and relevance of generated content by leveraging a multi-stage retrieval process.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: RIUSS,
      video: cragvi,
      github: '#',
      link: "https://github.com/Dismi343/CRAG_implementation",
      isLive: false
    },
    {
      id: 3,
      title: 'Weather-App',
      description: 'A full-stack application leveraging Flask microservices and React. Handles dynamic API data fetching and conditional UI rendering based on real-time weather codes.',
      technologies: ['Python', 'React', 'Flask', 'OpenWeatherMap'],
      image: psw,
      github: 'https://github.com/Dismi343/Weather-app',
      link: "https://weather-app-frontend-xmff.onrender.com/",
      isLive: true
    },
    {
      id: 4,
      title: 'Infocur site - Event Booking & Progress Tracking Platform',
      subtitle: '(Group Project)',
      description: 'As the lead backend developer, I architected a robust event management system using Spring Boot and MongoDB. I designed a structured database schema that automates the transition from client bookings to post-production workflows. A key feature is the automated progress-tracking engine that synchronizes event statuses and media deliverables. I implemented complex business logic including custom DTO handling, service-layer abstraction, and a recursive cascade deletion system to ensure 100% data consistency across sessions and bookings.',
      technologies: ['React', 'Spring-Boot', 'Rest-API', 'MongoDB'],
      image: infocur,
      github: 'https://github.com/Dismi343/Infocur-site',
      link: "https://infocur-site.vercel.app/",
      isLive: true
    },
    {
      id: 5,
      title: 'Smart-Task',
      description: 'Task management application with real-time collaboration features, including task assignment, progress tracking, and deadline notifications.',
      technologies: ['React', 'Spring Boot', 'FastAPI', 'Python', 'MySQL', 'Hugging Face API', 'Google SMTP'],
      image: smarttask,
      github: '#',
      link: "https://github.com/Dismi343/SmartTask",
      isLive: false
    },
     {
      id: 6,
      title: 'RIUSS-2025',
      description: 'As the Frontend Developer for the Ruhuna International Undergraduate Science Symposium (RIUSS 2025), I designed and implemented a professional academic platform for the University of Ruhuna. I focused on creating a high-performance, responsive interface that serves as the central information hub for global researchers and students. The project required rigorous attention to detail—ensuring accessibility across all devices, managing complex scheduling layouts, and maintaining a visual identity aligned with university standards.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: RIUSS,
      github: '#',
      link: "https://www.sci.ruh.ac.lk/conference/RIUSS2025/",
      isLive: true
    },
     {
      id: 7,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application featuring a robust admin dashboard, secure checkout, and real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: chip,
      github: 'https://github.com/Dismi343/Chip-Heaven-react-fullstack',
      link: "https://chip-heaven-react-fullstack.onrender.com",
      isLive: true
    },
   
  ];

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-16 md:mb-24">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
            <span className="text-emerald-500 text-xs font-mono uppercase tracking-[0.2em]">Deployment Pipeline</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Featured <span className="text-zinc-500 italic font-light">Work</span>
          </h2>
        </div>

        {/* Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Image Preview */}
              <div className="relative aspect-video overflow-hidden">
                {project.video?(<video
                  src={project.video}
                  poster={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay
                  muted
                  loop
                  playsInline/>
                ):(<img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />)}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/20 to-transparent" />
                
                {/* Status Badge for Live Apps */}
                {project.isLive && (
                  <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 bg-emerald-500 text-zinc-950 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    <FaCircle className="animate-pulse text-[6px]" />
                    Live Now
                  </div>
                )}

                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-[10px] font-mono bg-zinc-950/90 text-zinc-400 border border-zinc-800 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <p className="text-sm text-emerald-500 font-semibold mt-1">
                      {project.subtitle}
                    </p>
                  )}
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 line-clamp-3">
                  {project.description}
                </p>

                {/* Primary Action Button for Live Apps */}
                <div className="mt-auto space-y-4">
                  {project.isLive ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all"
                    >
                      Launch Application <FaExternalLinkAlt size={10} />
                    </a>
                  ) : (
                    <div className="w-full py-3 rounded-xl bg-zinc-800/50 text-zinc-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed border border-zinc-700/30">
                      Local Environment Only
                    </div>
                  )}

                  {/* Secondary Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-800/50">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      className="text-zinc-500 hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
                    >
                      <FaGithub size={16} /> Source Code
                    </a>
                    <span className="text-[10px] font-mono text-zinc-600">
                      #{project.id.toString().padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;