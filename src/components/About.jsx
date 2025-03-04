import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        <div className=" mb-[50px]">
            <h3 className="text-2xl font-semibold mb-4 text-dark mt-5 mb-8">Who I Am</h3>
            <p className="text-gray-700 mb-4">
              I'm a Computer Science student at University of Ruhuna, passionate about software development and problem-solving. I enjoy building applications that make a difference and am constantly learning new technologies to expand my skill set.
            </p>
          
            {/* <p className="text-gray-700">
              When I'm not coding, you can find me [your hobbies/interests], which helps me maintain a balanced lifestyle and brings fresh perspectives to my technical work.
            </p> */}
          </div>
          <div className="flex flex-col md:flex-row mt-[90px]">
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-3xl font-semibold mb-4 text-dark">Education</h3>
            <div className="mb-5">
              <h4 className="text-2xl font-medium text-primary">BSc in Computer Science</h4>
              <p className="text-gray-800 text-xl">University of Ruhuna </p>
              <p className="text-gray-600">2022-(up to date)</p>
              <p className="text-gray-700 mt-2 mb-5">
                Relevant coursework: Data Structures and Algorithms, Database Systems, Web Development, Software Engineering, Artificial Intelligence
              </p>
              <h4 className="text-2xl font-medium text-primary">Full-stack Master Developer program (Diploma)</h4>
              <p className="text-gray-800 text-xl">Developerstack</p>
              <p className="text-gray-600">2025-(up to date)</p>
            </div>
            </div>
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-semibold mb-4 text-dark">Certifications</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li className="mb-2">Learning Python (Linkedin)</li>
              <li className="mb-2">HTML Essential training (Linkedin)</li>
              <li className="mb-2">Participation in Road to Insergex 1.0 Hackathon</li>
              <li className="mb-2">Participation in Road to Insergex 1.0 Hackathon</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;