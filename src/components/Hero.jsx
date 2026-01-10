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
    <section id="hero" className="relative w-full min-h-screen flex items-center bg-[#09090b] selection:bg-emerald-500/30 overflow-hidden">
      
      {/* Subtle Mesh Background - More realistic than a full video for professional sites */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`lg:col-span-7 space-y-8 transition-all duration-1000 ease-out ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <div className="space-y-4">
              <h3 className="text-emerald-500 font-mono tracking-widest text-sm uppercase">
                Full-Stack Developer | Backned Enthusias | Java, Python & JavaScript
              </h3>
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-100 leading-[1.1]">
                Computer Science <br /> 
                <span className="text-zinc-500">Student</span>
              </h1>
              <p className="text-zinc-400 text-lg md:text-xl max-w-xl leading-relaxed">
                Hi, I'm <span className="text-zinc-100 font-medium">Yushan Dismitha</span>. 
                I specialize in scalable backend systems and high-performance applications 
                using <span className="text-emerald-500/90 font-mono">LangChain</span> and <span className="text-emerald-500/90 font-mono">Milvus</span>.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4 items-center">
              <Link
                to="projects"
                smooth={true}
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-zinc-950 font-bold rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                View Projects
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <button 
                onClick={() => window.open('/Dismithav CV.pdf')}
                className="px-8 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-600 text-zinc-300 rounded-full transition-all flex items-center gap-2"
              >
                <HiOutlineDocumentDownload className="text-xl" />
                Resume
              </button>
            </div>

            {/* Social & Proof */}
            <div className="pt-8 flex items-center gap-8 border-t border-zinc-800/50 w-fit">
              <div className="flex gap-5">
                <a href="https://github.com/Dismi343" target="_blank" className="text-zinc-500 hover:text-emerald-500 transition-colors text-2xl">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yushan-dismitha-988b101bb/" target="_blank" className="text-zinc-500 hover:text-emerald-500 transition-colors text-2xl">
                  <FaLinkedin />
                </a>
              </div>
              <div className="h-4 w-[1px] bg-zinc-800" />
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-zinc-500 text-sm font-medium uppercase tracking-tighter">Available for work</span>
              </div>
            </div>
          </div>

          {/* Right Content - Realistic Portrait Container */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${loaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            <div className="relative w-full max-w-[420px] mx-auto aspect-[4/5] rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-zinc-800 bg-zinc-900 shadow-2xl">
              {/* Replace with your actual image path */}
              <img 
                src={profile} 
                alt="Yushan Dismitha"
                className="w-full h-full object-cover"
               
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Design Element: Floating Card */}
            {/* <div className="absolute -bottom-6 -left-6 bg-zinc-900/90 border border-zinc-700 backdrop-blur-md p-4 rounded-xl hidden md:block shadow-2xl">
              <p className="text-zinc-400 text-xs font-mono mb-1">Current Project</p>
              <p className="text-zinc-100 text-sm font-semibold">AI Quiz Generator (RAG)</p>
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;