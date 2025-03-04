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
    <section id="hero" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-emerald-50 to-emerald-900 ">
      <div className={`container mx-auto px-4 transform transition-all duration-1000 delay-200 ${isOpen ? 'translate-y-0 opacity-100' :  ' translate-y-10 opacity-0'}`}>
        <div className="flex flex-col md:flex-row items-center mx-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 text-dark `}>
              Hi, I'm <span className="text-primary">Yushan Dismitha</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-gray-700">
              Computer Science Student
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
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
                className="btn btn-outline cursor-pointer"
              >
                Contact Me
              </Link>
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://github.com/Dismi343"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary text-2xl transition-colors duration-300"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/yushan-dismitha-988b101bb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-primary text-2xl transition-colors duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full h-full md:w-80 md:h-80 rounded-full bg-pro bg-cover bg-bottom  from-primary to-secondary-light flex items-center justify-center  ">
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;