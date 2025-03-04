import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import chip from '../assets/chip.png';
import psw from '../assets/psw.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce application with admin dashboard',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'TypeScript'],
      image: chip,
      github: 'https://github.com/Dismi343/Chip-Heaven-react-fullstack',
     
    },
    {
      id: 2,
      title: 'Password Generator',
      description: 'An interactive application that provides random passwords according to user preferences.',
      technologies: ['python'],
      image: psw,
      github: 'https://github.com/Dismi343/pasword_generator',
      
    },
    {
      id: 3,
      title: 'Wage-calculator',
      description: 'Simple windows app that calculates the wage of an employee',
      technologies: ['java'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      github: 'https://github.com/Dismi343/wage-Calculator',
      
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Projects</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          Here are some of the projects I've worked on. Each project has helped me develop different skills and tackle unique challenges.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-dark">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4 flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary-dark transition-colors duration-300"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://github.com/Dismi343/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;