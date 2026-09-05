import React from 'react';
import profileImg from '../assets/profile.jpeg'; // Adjust the filename if yours is .png or named differently

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-900 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-slate-800 pb-3">Professional Summary</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Profile Picture Container */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-xl shadow-cyan-950/40 bg-slate-800">
              <img 
                src={profileImg} 
                alt="Dilip Ajantha" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Bio Text Container */}
          <div className="md:col-span-2 bg-slate-800 rounded-lg p-6 sm:p-8 shadow-xl border border-slate-700/50">
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-4">
              Results-driven Full-Stack Developer and Software Engineer with extensive experience in modernizing mission-critical national infrastructure, building high-uptime web platforms, and providing robust software support.
            </p>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
              Combines MERN mastery—React, Node.js, TypeScript, and rigorous TDD—with a Master's degree (Full Stack Software Development) from Finland (JAMK University of Applied Sciences).
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-700">
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <span className="block text-cyan-400 font-bold text-2xl mb-1">60%</span>
                <span className="text-slate-400 text-sm">Reduction in production bugs via robust TDD protocols</span>
              </div>
              <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                <span className="block text-cyan-400 font-bold text-2xl mb-1">70%</span>
                <span className="text-slate-400 text-sm">Acceleration in deployment cycles using Azure CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}