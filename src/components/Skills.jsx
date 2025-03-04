import React from 'react';
import { FaCode, FaDatabase, FaMobile, FaServer, FaTools, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      id: 1,
      title: 'Programming Languages',
      icon: <FaCode className="text-4xl text-primary mb-4" />,
      skills: ['JavaScript', 'TypeScript', 'Java',  'HTML/CSS']
    },
    {
      id: 2,
      title: 'Frontend Development',
      icon: <FaLaptopCode className="text-4xl text-primary mb-4" />,
      skills: ['React',  'Tailwind CSS', 'Bootstrap']
    },
    {
      id: 3,
      title: 'Backend Development',
      icon: <FaServer className="text-4xl text-primary mb-4" />,
      skills: ['Node.js', 'Express']
    },
    {
      id: 4,
      title: 'Database',
      icon: <FaDatabase className="text-4xl text-primary mb-4" />,
      skills: ['MongoDB', 'MySQL']
    },
    // {
    //   id: 5,
    //   title: 'Mobile Development',
    //   icon: <FaMobile className="text-4xl text-primary mb-4" />,
    //   skills: [ 'Flutter', 'Android (Java)']
    // },
    // {
    //   id: 6,
    //   title: 'Tools & Others',
    //   icon: <FaTools className="text-4xl text-primary mb-4" />,
    //   skills: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile/Scrum', 'Testing (Jest, Mocha)']
    // }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Skills</h2>
        <p className="text-gray-700 mb-10 max-w-2xl">
          I've developed a diverse set of skills throughout my academic journey and personal projects. Here's an overview of my technical expertise:
        </p>
        
        <div className="grid grid-rows-2 md:grid-rows-2 lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="text-center mb-4  md:flex-col items-center justify-center gap-2 md:relative ">
                <div className="md:absolute left-0 flex justify-center">{category.icon}</div>
                <h3 className="text-xl font-semibold text-dark mx-auto">{category.title}</h3>
              </div>

              <div className="flex flex-wrap mt-10 justify-center">
                {category.skills.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-6 text-dark">My Learning Journey</h3>
          <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              I believe in continuous learning and staying updated with the latest technologies. Currently, I'm focusing on:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Exploring cloud architecture with AWS</li>
              <li>Exploring machine learning and AI concepts</li>
              <li>Improving my skills in system design and scalability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;