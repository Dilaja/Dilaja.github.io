import React from 'react';
import profileImg from '../assets/portfolio.jpeg'; // Adjust the filename if yours is .png or named differently

export default function About() {
  return (
    <section id="about" className="py-20 bg-[#121212] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-10 border-b border-[#2c2c2c] pb-3">Professional Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Picture Container - Converted to Circle with Glow Ring */}
          <div className="flex justify-center md:justify-start">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00E5FF] to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative w-60 h-60 sm:w-70 sm:h-70 rounded-full overflow-hidden border-2 border-[#00E5FF]/50 shadow-xl shadow-cyan-950/40 bg-[#1e1e1e]">
                <img 
                  src={profileImg} 
                  alt="Dilip Ajantha" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Bio Text Container */}
          <div className="md:col-span-2 bg-[#1e1e1e] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#2c2c2c]">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Results-driven Full-Stack Developer and Software Engineer with extensive experience in modernizing mission-critical national infrastructure, building high-uptime web platforms, and providing robust software support.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Combines MERN mastery—React, Node.js, TypeScript, and rigorous TDD—with a Master's degree (Full Stack Software Development) from Finland (JAMK University of Applied Sciences).
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#2c2c2c]">
              <div className="bg-[#121212] p-4 rounded-xl border border-[#2c2c2c]">
                <span className="block text-[#00E5FF] font-bold text-2xl mb-1">60%</span>
                <span className="text-slate-400 text-sm">Reduction in production bugs via robust TDD protocols</span>
              </div>
              <div className="bg-[#121212] p-4 rounded-xl border border-[#2c2c2c]">
                <span className="block text-[#00E5FF] font-bold text-2xl mb-1">70%</span>
                <span className="text-slate-400 text-sm">Acceleration in deployment cycles using Azure CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}