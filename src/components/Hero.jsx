import React from 'react';
import { ArrowRight, Cpu } from 'lucide-react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram } from 'react-icons/fa';
import heroBg from '../assets/backdrop.jpg'; // Make sure the path and filename match your image

export default function Hero({ t }) {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      {/* Dark Overlay to ensure text readability over the image */}
      <div className="absolute inset-0 bg-[#121212]/80 backdrop-blur-[2px] z-0"></div>

      {/* Optional colorful glowing accent elements on top of the image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-cyan-500/20 via-purple-600/20 to-transparent blur-[120px] rounded-full"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center z-10">
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#E0E0E0] tracking-tight mb-4">
          {t?.heroTitle1 || "HELLO, I'M"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-blue-400">DILIP AJANTHA</span>.
        </h1>

        <p className="text-lg md:text-xl text-[#00E5FF] font-semibold tracking-wide uppercase mb-6">
          {t?.heroTitle2 || "FULL-STACK SOFTWARE DEVELOPER."}
        </p>

        <p className="max-w-2xl mx-auto text-slate-300 text-sm md:text-base mb-10">
          {t?.heroSubtitle || "CREATING MODERN, RESPONSIVE WEB EXPERIENCES."}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#00E5FF] text-[#121212] font-semibold py-3.5 px-8 rounded-xl hover:bg-[#00c4dc] transition-all shadow-lg shadow-cyan-950/30"
          >
            {t?.viewPortfolio || "VIEW MY PROJECTS"} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Hero Social Links */}
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com/Dilaja" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#1e1e1e]/80 text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all backdrop-blur-sm"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#1e1e1e]/80 text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all backdrop-blur-sm"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#1e1e1e]/80 text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all backdrop-blur-sm"
            aria-label="YouTube"
          >
            <FaYoutube className="w-5 h-5" />
          </a>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 bg-[#1e1e1e]/80 text-[#E0E0E0] hover:text-[#00E5FF] hover:border-[#00E5FF] border border-[#2c2c2c] rounded-xl transition-all backdrop-blur-sm"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}