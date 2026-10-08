import { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import profile from '../assets/Profile_pic2.png';
const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-slate-50 dark:bg-[#09090b] selection:bg-emerald-500/30 overflow-hidden transition-colors duration-500">
      
      {/* Subtle Mesh Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-500/10 dark:bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-400/10 dark:bg-emerald-900/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-emerald-600 dark:text-emerald-500 font-mono tracking-widest text-sm uppercase">
                Full-Stack Developer | Backend Enthusiast | Java, Python & JavaScript
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-zinc-100 leading-[1.1]">
                Computer Science <br /> 
                <span className="text-slate-400 dark:text-zinc-500">Student</span>
              </h1>
              <p className="text-slate-600 dark:text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
                Hi, I'm <span className="text-slate-900 dark:text-zinc-100 font-medium">Yushan Dismitha</span>. 
                I specialize in scalable backend systems and high-performance applications 
                using <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">LangChain</span> and <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">Milvus</span>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="projects"
                smooth={true}
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white dark:text-zinc-950 font-bold rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-emerald-500/25"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button 
                onClick={() => window.open('/Dismithav CV.pdf')}
                className="px-8 py-4 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-slate-400 dark:hover:border-zinc-600 text-slate-700 dark:text-zinc-300 rounded-full transition-all flex items-center gap-2 shadow-sm hover:shadow"
              >
                <HiOutlineDocumentDownload className="text-xl" />
                Resume
              </button>
            </div>

            {/* Social & Proof */}
            <div className="pt-8 flex items-center gap-8 border-t border-slate-200 dark:border-zinc-800/50 w-fit">
              <div className="flex gap-5">
                <a href="https://github.com/Dismi343" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 dark:text-zinc-500 dark:hover:text-emerald-500 transition-colors text-2xl">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yushan-dismitha-988b101bb/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-600 dark:text-zinc-500 dark:hover:text-emerald-500 transition-colors text-2xl">
                  <FaLinkedin />
                </a>
              </div>
              <div className="h-4 w-[1px] bg-slate-300 dark:bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-slate-500 dark:text-zinc-500 text-sm font-medium uppercase tracking-tighter">Available for work</span>
              </div>
            </div>
          </div>

          {/* Right Content - Realistic Portrait Container */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-slate-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl">
              <img 
                src={profile} 
                alt="Yushan Dismitha"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 dark:from-[#09090b] via-transparent to-transparent opacity-60" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;