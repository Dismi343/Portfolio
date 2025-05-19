import React, { useEffect, useState } from 'react';
import { FaCode, FaDatabase, FaMobile, FaServer, FaTools, FaLaptopCode } from 'react-icons/fa';
import Reactlogo from '../assets/skills/react-logo.png';  
import Mysql from '../assets/skills/Mysql_logo.png';
import Java from '../assets/skills/java.png';
import Javascriupt from '../assets/skills/javascript.png';
import Typescript from '../assets/skills/typescript.png';
import Php from '../assets/skills/php.png';
import Nodejs from '../assets/skills/nodejs.png';
import Mongodb from '../assets/skills/mongodb.png';
import Angular from '../assets/skills/angular.png';
import Git from '../assets/skills/git.png';

const Skills = () => {

    const [isScrolled, setScrolled] = useState(false);
   const images=[
            {id:1, src:`${Reactlogo}`,alt:"react" },
            {id:2, src:`${Mysql}`,alt:"mysql"},
            {id:3, src:`${Java}`,alt:"java"},
            {id:4, src:`${Javascriupt}`,alt:"js"},
            {id:5, src:`${Typescript}`,alt:"ts"},
            {id:6, src:`${Php}`,alt:"php"},
            {id:7, src:`${Nodejs}`,alt:"nodejs"},
            {id:8, src:`${Mongodb}`,alt:"mdb"},
            {id:9, src:`${Angular}`,alt:"A"},
            {id:10, src:`${Git}`,alt:"git"},
         
        ];

        const duplicatedImages = [...images];


  const skillCategories = [
    {
      _id: 1,
      title: 'Programming Languages',
      icon: <FaCode className="text-4xl text-primary-light mb-4" />,
      skills: ['JavaScript', 'TypeScript', 'Java',  'HTML/CSS']
    },
    {
      _id: 2,
      title: 'Frontend Development',
      icon: <FaLaptopCode className="text-4xl text-primary-light mb-4" />,
      skills: ['React',  'Tailwind CSS', 'Bootstrap']
    },
    {
      _id: 3,
      title: 'Backend Development',
      icon: <FaServer className="text-4xl text-primary-light mb-4" />,
      skills: ['Node.js', 'Express']
    },
    {
      _id: 4,
      title: 'Database',
      icon: <FaDatabase className="text-4xl text-primary-light mb-4" />,
      skills: ['MongoDB', 'MySQL']
    },
    
  ];

  useEffect(()=>{
    const HandleScroll = ()=>{
      const currentScroll = window.pageYOffset;
      setScrolled(currentScroll > 1900);
    };
    window.addEventListener('scroll',HandleScroll);
  })

  return (

    <>
    <hr className='border-secondary-dark border-2 shadow-2xl  w-full shadow-md'></hr>
    <section id="skills" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <div className='text-white'>
          My Skills
          </div>
          </h2>
        <p className="text-white mb-10 max-w-2xl">
          I've developed a diverse set of skills throughout my academic journey and personal projects. Here's an overview of my technical expertise:
        </p>
        
        <div className={`overflow-x-hidden grid grid-rows-2 md:grid-rows-2 lg:grid-cols-2  gap-8 transition-transform duration-1000 `}>
          {skillCategories.map((category, index) => (
            <div key={category._id} className={`bg-secondary p-6 rounded-lg shadow-lg transform transition-all duration-700 ${isScrolled ? index %2 ===0?'transform translate-x-0 opacity-100':'transform translate-x-0 opacity-100' : index %2 ===0?'transform -translate-x-full opacity-0':'transform translate-x-full opacity-0'} `} >
              <div className="text-center mb-4  md:flex-col items-center justify-center gap-2 md:relative  ">
                <div className="md:absolute left-0 flex justify-center">{category.icon}</div>
                <h3 className="text-xl font-semibold text-dark mx-auto text-white text-shadow-lg/30 ">{category.title}</h3>
              </div>

              <div className="flex flex-wrap mt-10 justify-center">
                {category.skills.map((skill) => (
                  <span key={skill} className="p-4 bg-primary hover: m-2 rounded-full h-10 flex items-center justify-center shadow-lg shadow-dark-dark">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-primary-light">My Learning Journey</h3>
          <div className="bg-dark p-6 rounded-lg shadow-sm">
            <p className="text-white mb-4">
              I believe in continuous learning and staying updated with the latest technologies. Currently, I'm focusing on:
            </p>
            <ul className="list-disc list-inside text-white space-y-2">
              <li>Exploring cloud architecture with AWS</li>
              <li>Exploring machine learning and AI concepts</li>
              <li>Improving my skills in system design and scalability</li>
            </ul>
          </div>
        </div>
      </div>

         <div className={`mt-8 relative w-full overflow-hidden bg-transparent py-4 flex`}>
            <div className="relative flex gap-1">
                <div className="flex  animate-scroll  ">
                    {duplicatedImages.map(image => (
                    <div
                    key={image.id}
                    className={`
                        flex-shrink-0  md:w-80 w-20  overflow-hidden rounded-lg 
                    `}
                    >
                    <div key={image.id} className="overflow-hidden rounded-lg lg:w-40 lg:h-40 w-10 h-10 md:w-20 md:h-20">
                        <img 
                        key={image.id}
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover "
                        loading="lazy"
                        />
              </div>
            </div>

                ) )}
                </div>
            </div> 
      </div>
    </section>
    </>
    
  );
};

export default Skills;