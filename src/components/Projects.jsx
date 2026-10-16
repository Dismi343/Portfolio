import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaCircle } from 'react-icons/fa';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import chip from '../assets/chip.png';
import psw from '../assets/weather.png';
import infocur from '../assets/infocur.png';
import rag from '../assets/RAG-PDF.png';
import RIUSS from '../assets/RIUSS.png';
import cragvi from '../assets/video.mp4';
import smarttask from '../assets/smart_task.jpeg';
import ThaksalawaAI from '../assets/Thaksalawa-AI.png';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Thaksalawa-AI',
      description: 'Developed an AI-powered Learning Management System using Python, FastAPI, and RAG for intelligent question answering over educational materials. As a backend developer, I implemented PDF processing, text chunking, embedding generation, semantic search using Milvus/Zilliz, and user authentication, while integrating OpenAI GPT-4o mini for AI-powered learning features.',
      technologies: ['Python', 'RAG', 'Milvus', 'React', 'FastAPI', 'OpenAI GPT-4o mini'],
      image: ThaksalawaAI,
      github: 'https://github.com/Dismi343/Thaksalawa-AI',
      link: '#',
      isLive: false,
    },
    {
      id: 2,
      title: 'RIUSS-2025',
      description: 'As the Frontend Developer for the Ruhuna International Undergraduate Science Symposium (RIUSS 2025), I designed and implemented a professional academic platform for the University of Ruhuna. I focused on creating a high-performance, responsive interface that serves as the central information hub for global researchers and students. The project required rigorous attention to detail—ensuring accessibility across all devices, managing complex scheduling layouts, and maintaining a visual identity aligned with university standards.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: RIUSS,
      github: '#',
      link: 'https://www.sci.ruh.ac.lk/conference/RIUSS2025/',
      isLive: true,
    },
    {
      id: 3,
      title: 'CRAG-Corrective Retrieval-Augmented Generation',
      description: 'A cutting-edge AI research project that integrates retrieval-augmented generation with corrective feedback loops. This system is designed to enhance the accuracy and relevance of generated content by leveraging a multi-stage retrieval process.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: RIUSS,
      video: cragvi,
      github: '#',
      link: 'https://github.com/Dismi343/CRAG_implementation',
      isLive: false,
    },
    {
      id: 4,
      title: 'Smart-Task',
      description: 'Task management application with real-time collaboration features, including task assignment, progress tracking, and deadline notifications.',
      technologies: ['React', 'Spring Boot', 'FastAPI', 'Python', 'MySQL', 'Hugging Face API', 'Google SMTP'],
      image: smarttask,
      github: '#',
      link: 'https://github.com/Dismi343/SmartTask',
      isLive: false,
    },
    {
      id: 5,
      title: 'Infocur site - Event Booking & Progress Tracking Platform',
      subtitle: '(Group Project)',
      description: 'As the lead backend developer, I architected a robust event management system using Spring Boot and MongoDB. I designed a structured database schema that automates the transition from client bookings to post-production workflows. A key feature is the automated progress-tracking engine that synchronizes event statuses and media deliverables. I implemented complex business logic including custom DTO handling, service-layer abstraction, and a recursive cascade deletion system to ensure 100% data consistency across sessions and bookings.',
      technologies: ['React', 'Spring-Boot', 'Rest-API', 'MongoDB'],
      image: infocur,
      github: 'https://github.com/Dismi343/Infocur-site',
      link: 'https://infocur-site.vercel.app/',
      isLive: true,
    },
    {
      id: 6,
      title: 'Weather-App',
      description: 'A full-stack application leveraging Flask microservices and React. Handles dynamic API data fetching and conditional UI rendering based on real-time weather codes.',
      technologies: ['Python', 'React', 'Flask', 'OpenWeatherMap'],
      image: psw,
      github: 'https://github.com/Dismi343/Weather-app',
      link: 'https://weather-app-frontend-xmff.onrender.com/',
      isLive: true,
    },
    {
      id: 7,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application featuring a robust admin dashboard, secure checkout, and real-time inventory tracking.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: chip,
      github: 'https://github.com/Dismi343/Chip-Heaven-react-fullstack',
      link: 'https://chip-heaven-react-fullstack.onrender.com',
      isLive: true,
    },
    {
      id: 8,
      title: 'AI Chat-Bot (RAG Architecture)',
      description: 'A sophisticated document intelligence tool using Gemma and Milvus to perform semantic search on uploaded PDFs. Features a custom pipeline for text chunking and real-time context injection.',
      technologies: ['Python', 'RAG', 'Milvus', 'Next.js'],
      image: rag,
      github: 'https://github.com/Dismi343/PDf-Reader',
      link: '#',
      isLive: false,
    }
  ];

  useEffect(() => {
    const cards = cardsRef.current.filter(Boolean);
    if (!cards.length || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Initial positioning:
      // Card 0 rests in the center; subsequent cards start outside the viewport to the right
      gsap.set(cards[0], {
        xPercent: 0,
        yPercent: 0,
        scale: 1,
        opacity: 1,
        filter: 'brightness(1)',
      });

      cards.slice(1).forEach((card) => {
        gsap.set(card, {
          xPercent: 125,
          yPercent: 0,
          scale: 1,
          opacity: 1,
          filter: 'brightness(1)',
        });
      });

      const totalSteps = cards.length - 1;
      const scrollDistance = totalSteps * 900;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollDistance}`,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const step = Math.min(
              cards.length - 1,
              Math.floor(self.progress * cards.length)
            );
            setActiveCardIndex(step);
          },
        },
      });

      // Animate each card entering horizontally one by one
      for (let i = 1; i < cards.length; i++) {
        const card = cards[i];
        const media = card.querySelector('.project-media');
        const prevCard = cards[i - 1];
        const olderCards = cards.slice(0, i - 1);
        const label = `step-${i}`;

        tl.addLabel(label);

        // 1. Current card glides in horizontally from the right to the stacked position
        tl.to(
          card,
          {
            xPercent: 0,
            ease: 'power2.out',
            duration: 1,
          },
          label
        );

        // 2. Parallax depth: Image inside entering card scales down & shifts slightly
        if (media) {
          tl.fromTo(
            media,
            { scale: 1.25, xPercent: -10 },
            { scale: 1, xPercent: 0, ease: 'none', duration: 1 },
            label
          );
        }

        // 3. Immediately previous card scales down slightly and dims to stay in stacked position
        if (prevCard) {
          tl.to(
            prevCard,
            {
              scale: 0.94,
              yPercent: -2,
              filter: 'brightness(0.7)',
              ease: 'power2.out',
              duration: 1,
            },
            label
          );
        }

        // 4. Any older cards in the stack scale down progressively further
        if (olderCards.length > 0) {
          tl.to(
            olderCards,
            {
              scale: (idx) => Math.max(0.82, 0.94 - (i - 1 - idx) * 0.04),
              yPercent: (idx) => -2 - (i - 1 - idx) * 2,
              filter: (idx) => `brightness(${Math.max(0.35, 0.7 - (i - 1 - idx) * 0.15)})`,
              ease: 'power2.out',
              duration: 1,
            },
            label
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [projects.length]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative bg-slate-50 dark:bg-[#09090b] text-slate-800 dark:text-zinc-100 transition-colors duration-500 overflow-hidden"
    >
      {/* Pinned Viewport Container */}
      <div className="h-screen w-full flex flex-col justify-between overflow-hidden relative pt-20 md:pt-24 pb-6 md:pb-8 px-4 sm:px-6 lg:px-12">
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />

        {/* Header & Step Counter */}
        <div className="max-w-5xl mx-auto w-full flex items-end justify-between gap-4 mb-4 md:mb-6 z-10 shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
              <span className="text-emerald-600 dark:text-emerald-500 text-[11px] font-mono uppercase tracking-[0.2em]">
                Deployment Pipeline
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
              Featured <span className="text-slate-400 dark:text-zinc-500 italic font-light">Work</span>
            </h2>
          </div>

          {/* Real-time Step Counter & Dots */}
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                {(activeCardIndex + 1).toString().padStart(2, '0')}
              </span>
              <span className="text-xs font-mono text-slate-400 dark:text-zinc-600">/</span>
              <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">
                {projects.length.toString().padStart(2, '0')}
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              {projects.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeCardIndex
                    ? 'w-6 bg-emerald-500'
                    : idx < activeCardIndex
                      ? 'w-2 bg-emerald-500/50'
                      : 'w-2 bg-slate-300 dark:bg-zinc-800'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Stacked Cards Container */}
        <div className="relative w-full max-w-5xl mx-auto flex-1 flex items-center justify-center min-h-[380px] md:min-h-[500px]">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[index] = el)}
              style={{ zIndex: index + 10 }}
              className="project-card absolute w-full h-[64vh] sm:h-[66vh] md:h-[500px] lg:h-[520px] max-h-[540px] flex flex-col md:flex-row bg-white/95 dark:bg-zinc-900/95 backdrop-blur-2xl border border-slate-200 dark:border-zinc-800 rounded-3xl overflow-hidden shadow-2xl transition-[filter,box-shadow] duration-300 will-change-transform"
            >
              {/* Media Preview (Video or Image) */}
              <div className="relative w-full h-44 sm:h-52 md:h-full md:w-7/12 overflow-hidden bg-slate-950 shrink-0">
                {project.video ? (
                  <video
                    src={project.video}
                    poster={project.image}
                    className="project-media w-full h-full object-cover will-change-transform"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-media w-full h-full object-cover will-change-transform"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                {/* Status Badge */}
                {project.isLive && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 bg-emerald-500 text-zinc-950 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    <FaCircle className="animate-pulse text-[6px]" />
                    Live Now
                  </div>
                )}

                {/* Floating Tech Badges */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5 pointer-events-none">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 text-[10px] font-mono bg-black/60 backdrop-blur-md text-emerald-400 border border-emerald-500/30 rounded-md shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-[10px] font-mono bg-black/60 backdrop-blur-md text-zinc-400 border border-zinc-700/50 rounded-md">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Details & Actions */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow overflow-y-auto bg-slate-50/60 dark:bg-zinc-900/40">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-zinc-100">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-bold shrink-0">
                      #{project.id.toString().padStart(2, '0')}
                    </span>
                  </div>

                  <div className="text-slate-600 dark:text-zinc-400 text-xs md:text-sm leading-relaxed mb-4 max-h-24 sm:max-h-28 md:max-h-36 overflow-y-auto pr-1">
                    {project.description}
                  </div>

                  <div className="hidden sm:flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-[10px] font-mono bg-white dark:bg-zinc-950 text-slate-600 dark:text-zinc-400 border border-slate-200 dark:border-zinc-800 rounded shadow-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-3 border-t border-slate-200 dark:border-zinc-800/60 shrink-0">
                  {project.isLive ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 md:py-3 rounded-xl bg-emerald-500 text-zinc-950 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-emerald-400 transition-all shadow-md hover:shadow-emerald-500/25"
                    >
                      Launch Application <FaExternalLinkAlt size={10} />
                    </a>
                  ) : (
                    <div className="w-full py-2.5 md:py-3 rounded-xl bg-slate-100 dark:bg-zinc-800/50 text-slate-500 dark:text-zinc-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-not-allowed border border-slate-200 dark:border-zinc-700/30">
                      Local Environment Only
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-slate-900 dark:text-zinc-500 dark:hover:text-white flex items-center gap-2 text-xs font-mono transition-colors"
                    >
                      <FaGithub size={15} /> Source Code
                    </a>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-zinc-600">
                      Project {index + 1} of {projects.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation Bar */}
        <div className="max-w-5xl mx-auto w-full flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-zinc-500 pt-2 shrink-0">
          {/* <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>Horizontal Stacked Scroll</span>
          </div> */}
          <div className="flex items-center gap-1.5 animate-pulse">
            <span>Scroll to explore projects</span>
            <span>↓</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;