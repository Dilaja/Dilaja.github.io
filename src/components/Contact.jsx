import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Contact({ t }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Insert your form submission logic (e.g., Formspree, EmailJS, or backend API) here
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#121212] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-3">
          {t?.getInTouch || "Get In Touch"}
        </h2>
        <p className="text-slate-400 mb-12">
          {t?.contactSubtitle || "Let's discuss opportunities, collaborations, or engineering solutions."}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* Column 1: Contact Details & Social Links */}
          <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-[#2c2c2c] shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-[#E0E0E0] mb-6">
                {t?.contactInfo || "Contact Information"}
              </h3>
              
              <ul className="space-y-6 mb-8">
                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#121212] text-[#00E5FF] rounded-lg border border-[#2c2c2c]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">
                      {t?.emailLabel || "Email"}
                    </span>
                    <a href="mailto:dilipajantha@gmail.com" className="text-[#E0E0E0] hover:text-[#00E5FF] transition-colors">
                      dilipajantha@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#121212] text-[#00E5FF] rounded-lg border border-[#2c2c2c]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">
                      {t?.phoneLabel || "Contact Number"}
                    </span>
                    <span className="text-[#E0E0E0]">+358 41 722 2602</span>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="p-3 bg-[#121212] text-[#00E5FF] rounded-lg border border-[#2c2c2c]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-sm text-slate-400">
                      {t?.locationLabel || "Location"}
                    </span>
                    <span className="text-[#E0E0E0]">Jyväskylä, Finland</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Social Media Links with Icons */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">
                {t?.connectSocials || "Connect on Socials"}
              </h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/Dilaja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-[#121212] text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Contact Form */}
          <div className="bg-[#1e1e1e] p-8 rounded-2xl border border-[#2c2c2c] shadow-xl relative">
            {submitted ? (
              <div className="absolute inset-0 bg-[#1e1e1e] rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                <CheckCircle2 className="w-16 h-16 text-[#00E5FF] mb-4" />
                <h3 className="text-2xl font-bold text-[#E0E0E0] mb-2">
                  {t?.messageSentTitle || "Message Sent!"}
                </h3>
                <p className="text-slate-400">
                  {t?.messageSentDesc || "Thank you for reaching out. I will get back to you shortly."}
                </p>
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t?.nameLabel || "Your Name"}
                </label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t?.namePlaceholder || "John Doe"}
                  className="w-full bg-[#121212] border border-[#2c2c2c] rounded-lg px-4 py-3 text-[#E0E0E0] focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t?.emailInputLabel || "Your Email"}
                </label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full bg-[#121212] border border-[#2c2c2c] rounded-lg px-4 py-3 text-[#E0E0E0] focus:outline-none focus:border-[#00E5FF] transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  {t?.messageLabel || "Message"}
                </label>
                <textarea 
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t?.messagePlaceholder || "Write your message here..."}
                  className="w-full bg-[#121212] border border-[#2c2c2c] rounded-lg px-4 py-3 text-[#E0E0E0] focus:outline-none focus:border-[#00E5FF] transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-[#00E5FF] text-[#121212] font-semibold py-3 px-6 rounded-lg hover:bg-[#00c4dc] transition-colors cursor-pointer shadow-lg shadow-cyan-950/20"
              >
                <Send className="w-4 h-4" /> {t?.sendButton || "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}