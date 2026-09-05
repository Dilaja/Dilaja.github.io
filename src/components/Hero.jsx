import React from 'react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-slate-900 to-slate-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-cyan-400 font-semibold tracking-wide uppercase text-sm mb-3">Full-Stack Software Developer</h2>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          Hi, I'm <span className="text-cyan-400">Dilip Ajantha</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Results-driven software engineer with extensive experience in modernizing mission-critical national infrastructure, building high-uptime web platforms, and implementing robust MERN solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#projects"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-cyan-400 hover:bg-cyan-500 transition-colors shadow-lg"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex justify-center items-center px-6 py-3 border border-slate-700 text-base font-medium rounded-md text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
          >
            Contact Me
          </a>
        </div>
        <div className="mt-12 text-slate-400 text-sm flex flex-wrap justify-center gap-6">
          <span>📍 Jyväskylä, Finland</span>
          <span>📞 +358 41 722 2602</span>
          <span>✉️ dilipajantha@gmail.com</span>
        </div>
      </div>
    </section>
  );
}