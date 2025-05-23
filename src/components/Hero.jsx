import { useState,useEffect } from "react";
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Hero = () => {

  const [isOpen,setIsOpen] = useState(false);

  useEffect(()=>{
    const textVisible=setTimeout(()=>{
      setIsOpen(true);
      return textVisible;
    },);
  },[]);
  return (
    <section id="hero" className=" relative items-center pt-16 overflow-hidden shadow-2xl shadow-black/75 ">

      <video  className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline>

          <source src="/background.mp4" type="video/mp4" />.
          Your browser does not support the video tag.
        </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/85 z-10"></div>
      <div className={` relative z-20 container mx-auto px-4 transform transition-all duration-1000 delay-200 ${isOpen ? 'translate-y-0 opacity-100' :  ' translate-y-10 opacity-0'}`}>
        <div className=" flex flex-col md:flex-row items-center mx-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-white `}>
              Hi, I'm <span className="text-primary">Yushan Dismitha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-100">
              Computer Science Student
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-lg">
              Passionate about software development, algorithms, and creating innovative solutions to complex problems.
            </p>
            <div className="flex space-x-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                className="btn btn-primary cursor-pointer"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="btn btn-outline cursor-pointer animate-slide hover:[animation-play-state:paused]"
              >
                Contact Me
              </Link>
            </div>
             <div className="  ">
            <button className="bg-primary text-white font-semibold py-4 px-[106px] rounded-xl mt-6 hover:bg-primary-dark transition duration-300 hover:scale-105" 
            onClick={() =>{
              const link = document.createElement('a');
              link.href = "/Dismithav CV.pdf";
              link.download = "Dismitha Cv.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}>
            Download CV
            </button>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/Dismi343"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary text-2xl transition-colors transition-transform duration-500 hover:scale-125"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yushan-dismitha-988b101bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-primary text-2xl transition-colors transition-transform duration-500 hover:scale-125 "
              >
                <FaLinkedin />
              </a>
             
            </div>
           
           
          </div>
          <div className="md:w-3/4 flex justify-center ">
            <div className="  w-full  md:w-[700px] md:h-[700px] grayscale  bg-pro bg-cover flex items-center justify-center margin-0 ">
              
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
};

export default Hero;