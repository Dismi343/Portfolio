import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">CS Portfolio</h2>
            <p className="text-gray-400">
              Computer Science Student & Developer
            </p>
          </div>
          
          </div>
        
      
      </div>
    </footer>
  );
};

export default Footer;