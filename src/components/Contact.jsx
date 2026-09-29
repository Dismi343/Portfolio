import React, { useState, useRef } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaPaperPlane,FaMediumM } from 'react-icons/fa';
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
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    emailJs.sendForm('service_nxdnli8', 'template_di1snp4', form.current, '79xE9zxsdqJW6N5Kk')
      .then((result) => {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! I will reach out soon.');
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        setSubmitStatus('error');
        setSubmitMessage('Something went wrong. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const contactInfo = [
    { icon: <FaPhone />, title: 'Call', value: '+94 76 749 2276', link: 'tel:+94767492276' },
    { icon: <FaEnvelope />, title: 'Email', value: 'yushanhettiarachchi639@gmail.com', link: 'mailto:yushanhettiarachchi639@gmail.com' },
    { icon: <FaGithub />, title: 'GitHub', value: '@Dismi343', link: 'https://github.com/Dismi343' },
    { icon: <FaMediumM />, title: 'Medium', value: '@YushanDismitha', link: 'https://medium.com/@yushanhettiarachchi639' },
    { icon: <FaLinkedin />, title: 'LinkedIn', value: 'Yushan Dismitha', link: 'https://www.linkedin.com/in/yushan-dismitha-988b101bb/' }
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#09090b] text-zinc-100 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16 md:mb-24 mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
            <span className="text-emerald-500 text-xs font-mono uppercase tracking-widest">Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            Get In <span className="text-zinc-500 italic font-light">Touch</span>
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to discuss my <span className="text-zinc-100">AI Quiz RAG system</span>? 
            Drop a message and let's build something impactful.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="text-sm font-mono text-emerald-500 uppercase tracking-[0.2em] mb-10">Contact Info</h3>
              <div className="grid grid-cols-1 gap-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-6 p-5 rounded-2xl bg-zinc-900/30 border border-zinc-800/50 hover:border-emerald-500/30 hover:bg-zinc-800/40 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-zinc-800 text-emerald-500 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{info.title}</p>
                      <p className="text-zinc-200 font-medium group-hover:text-emerald-400 transition-colors">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-800/50">
               <p className="text-zinc-500 text-sm font-mono mb-6 uppercase tracking-widest">Social Ecosystem</p>
               <div className="flex gap-4">
                  {[
                    { icon: <FaGithub />, link: 'https://github.com/Dismi343' },
                    { icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/yushan-dismitha-988b101bb/' }
                  ].map((social, i) => (
                    <a key={i} href={social.link} target="_blank" className="w-12 h-12 flex items-center justify-center rounded-full border border-zinc-800 text-zinc-400 hover:border-emerald-500 hover:text-emerald-500 transition-all duration-300">
                      {social.icon}
                    </a>
                  ))}
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-2 bg-emerald-500/5 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <form ref={form} onSubmit={sendEmail} className="relative p-8 md:p-10 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 backdrop-blur-xl space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-emerald-500 uppercase ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter name"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950 text-zinc-100 border border-zinc-800 focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-700"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-emerald-500 uppercase ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@company.com"
                    className="w-full px-5 py-4 rounded-xl bg-zinc-950 text-zinc-100 border border-zinc-800 focus:border-emerald-500/50 outline-none transition-all placeholder:text-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-emerald-500 uppercase ml-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="What are we building?"
                  className="w-full px-5 py-4 rounded-xl bg-zinc-950 text-zinc-100 border border-zinc-800 focus:border-emerald-500/50 outline-none transition-all resize-none placeholder:text-zinc-700"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 rounded-xl bg-emerald-500 text-zinc-950 font-bold uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-emerald-400 transition-all disabled:opacity-50 active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 animate-pulse">Processing...</span>
                ) : (
                  <>
                    <span>Send Inquiry</span>
                    <FaPaperPlane className="text-sm" />
                  </>
                )}
              </button>

              {submitMessage && (
                <div className={`text-center font-mono text-sm py-3 rounded-lg ${
                  submitStatus === 'success' ? 'text-emerald-400 bg-emerald-500/10' : 'text-red-400 bg-red-500/10'
                }`}>
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