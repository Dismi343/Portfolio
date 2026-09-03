import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaCode, FaTerminal } from 'react-icons/fa';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'projects', label: 'Projects' },
    { to: 'skills', label: 'Skills' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-4 backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50 shadow-2xl' 
          : 'py-8 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="hero"
            smooth={true}
            duration={500}
            className="flex items-center gap-3 cursor-pointer group"
          >
           
            <div className="flex flex-col leading-none">
             
              <span className="text-[10px] font-mono text-emerald-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">Dev</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center gap-2 transition-all duration-700 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}>
            {navLinks.map((link) => (
              <Link 
                key={link.to}
                activeClass="!text-emerald-400 !bg-emerald-500/5"
                to={link.to}
                spy={true} 
                smooth={true} 
                duration={500}
                offset={-80}
                className="text-zinc-400 hover:text-zinc-100 text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 cursor-pointer relative"
              >
                {link.label}
              </Link>
            ))}
            
            {/* Terminal CTA Style Link */}
            <Link
              to="contact"
              smooth={true}
              className="ml-4 px-5 py-2 bg-emerald-500 text-zinc-950 text-xs font-bold rounded-full hover:bg-emerald-400 transition-colors cursor-pointer flex items-center gap-2"
            >
              
              HIRE ME
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-zinc-100 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 flex flex-col items-end gap-1.5">
              <span className={`h-0.5 bg-emerald-500 transition-all duration-300 ${isMenuOpen ? 'w-6 translate-y-2 rotate-45' : 'w-6'}`}></span>
              <span className={`h-0.5 bg-emerald-500 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`}></span>
              <span className={`h-0.5 bg-emerald-500 transition-all duration-300 ${isMenuOpen ? 'w-6 -translate-y-2 -rotate-45' : 'w-5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden absolute top-full left-0 right-0 mt-4 mx-6 transition-all duration-500 transform ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-10 opacity-0 invisible'}`}>
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.to}
                  to={link.to}
                  spy={true} 
                  smooth={true} 
                  duration={500}
                  offset={-80}
                  className="text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/5 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;