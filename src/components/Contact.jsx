import React, { useState,useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt,FaPhone } from 'react-icons/fa';
import emailJs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

   const sendEmail = (e)=>{
    e.preventDefault();
    setIsSubmitting(true);
    emailJs.sendForm('service_nxdnli8','template_di1snp4',form.current,'79xE9zxsdqJW6N5Kk')
    .then((result) => {
      console.log(result.text);
    },(error)=>{
      console.log(error.text);
    })

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setSubmitMessage('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);

   }

  
  return (
    <section id="contact" className="py-20 bg-dark-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          <div className='text-white'>
              Reach Out to Me
          </div>
          </h2>
        <p className="text-white mb-10 max-w-2xl">
          Feel free to reach out if you have any questions, opportunities, or just want to say hello!
        </p>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h3 className="text-2xl font-semibold mb-6 text-primary-light">Contact Information</h3>
            <div className="space-y-4">
            <div className="flex items-start">
                <FaPhone className="text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-primary">Call</h4>
                  <a 
                    href="tel:+94767492276" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    +94 76 749 2276
                  </a>
                </div>
              </div>

            
              <div className="flex items-start">
                <FaEnvelope className="text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-primary">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-white hover:text-primary transition-colors duration-300">
                    yushanhettiarachchi639@gmail.com
                  </a>
                </div>
              </div>
              
              {/* <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-dark">Location</h4>
                  <p className="text-gray-700">Your City, Your Country</p>
                </div>
              </div> */}
                 
             
              <div className="flex items-start">
                <FaGithub className="text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-primary">GitHub</h4>
                  <a 
                    href="https://github.com/Dismi343" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    https://github.com/Dismi343
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <FaLinkedin className="text-primary mt-1 mr-4" />
                <div>
                  <h4 className="font-medium text-primary">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/yushan-dismitha-988b101bb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors duration-300"
                  >
                    www.linkedin.com/in/dismitha


                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-semibold mb-6 text-primary-light">Send Me a Message</h3>
            
            <form ref={form} onSubmit={sendEmail}  >
              <div className="mb-4">
                <label htmlFor="name" className="block text-primary mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-dark-dark/40 text-white"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-primary mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-dark-dark/40 text-white"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-primary mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-dark-dark/40 text-white"
                  required
                ></textarea>
              </div>
              
              <div className='w-full flex justify-center'>
                 <button
                type="submit"
                className="btn btn-primary w-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              </div>
             
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded-2xl ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;