import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const [isOpen,setIsOpen] = useState(false);

  useEffect(()=>{
    const textVisible=setTimeout(()=>{
      setIsOpen(true);
      return textVisible;
    },);
  },[]);

  useEffect(() => {
    
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-emerald-900/25 py-4 '
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="hero" 
          spy={true} 
          smooth={true} 
          duration={500} 
          className="text-xl font-bold text-primary cursor-pointer"
        >
        
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation */}
        <nav className={`hidden md:flex space-x-1 transform transition-all duration-1000 delay-200 ${isOpen ? 'translate-y-0 opacity-100' :  ' translate-y-10 opacity-0'}`}>
          <Link 
            activeClass="active"
            to="hero" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="nav-link cursor-pointer"
          >
            Home
          </Link>
          <Link 
            activeClass="active"
            to="about" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="nav-link  cursor-pointer"
          >
            About
          </Link>
          <Link 
            activeClass="active"
            to="projects" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="nav-link cursor-pointer"
          >
            Projects
          </Link>
          <Link 
            activeClass="active"
            to="skills" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="nav-link cursor-pointer"
          >
            Skills
          </Link>
          <Link 
            activeClass="active"
            to="contact" 
            spy={true} 
            smooth={true} 
            duration={500}
            className="nav-link cursor-pointer"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <Link 
              activeClass="active"
              to="hero" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="nav-link py-3 border-b border-gray-100 text-black"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              activeClass="active"
              to="about" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="nav-link py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              activeClass="active"
              to="projects" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="nav-link py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link 
              activeClass="active"
              to="skills" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="nav-link py-3 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link 
              activeClass="active"
              to="contact" 
              spy={true} 
              smooth={true} 
              duration={500}
              className="nav-link py-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;