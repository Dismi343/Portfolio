import React from 'react';
import { FaGithub, FaLinkedin, FaArrowUp, FaTerminal } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#09090b] border-t border-slate-200 dark:border-zinc-800/50 overflow-hidden transition-colors duration-500">
      {/* Subtle Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand/Identity Section */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-500 text-zinc-950 rounded-xl flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                YD
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-zinc-100">
                Yushan <span className="text-emerald-600 dark:text-emerald-500 italic font-light">Dismitha</span>
              </span>
            </div>
            <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed max-w-sm">
              Computer Science student specializing in full-stack architecture and AI-driven applications. 
              Currently exploring RAG systems with Milvus and LangChain.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/Dismi343"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-600 dark:text-zinc-500 dark:hover:text-emerald-400 transition-colors p-2.5 border border-slate-200 dark:border-zinc-800 rounded-lg hover:border-emerald-500/40 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/yushan-dismitha-988b101bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-emerald-600 dark:text-zinc-500 dark:hover:text-emerald-400 transition-colors p-2.5 border border-slate-200 dark:border-zinc-800 rounded-lg hover:border-emerald-500/40 bg-white dark:bg-transparent shadow-sm dark:shadow-none"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Section */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500 mb-6">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-slate-300 dark:bg-zinc-800 group-hover:bg-emerald-500 rounded-full transition-colors"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Status/Current Section */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-500 mb-6">Current Focus</h4>
            <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900/50 border border-slate-200 dark:border-zinc-800 shadow-sm dark:shadow-none group">
              <div className="flex items-center gap-3 mb-2 text-slate-800 dark:text-zinc-200">
                <FaTerminal className="text-emerald-600 dark:text-emerald-500 text-xs" />
                <span className="text-sm font-medium">Building AI Quiz App</span>
              </div>
              <p className="text-xs text-slate-500 dark:text-zinc-500 leading-relaxed">
                Integrating Gemma-2b with Milvus vector DB for intelligent question generation.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 dark:text-zinc-500 text-[11px] font-mono uppercase tracking-widest">
            © {currentYear} // Built with React & Tailwind
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 px-6 py-2 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-300 group text-xs font-mono shadow-sm dark:shadow-none"
          >
            <span>Return to Top</span>
            <FaArrowUp size={10} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;