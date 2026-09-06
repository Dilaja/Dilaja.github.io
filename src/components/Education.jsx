import React from 'react';

export default function Education() {
  const educationList = [
    {
      degree: 'Master of Engineering, Full Stack Software Development',
      institution: 'JAMK University of Applied Sciences, Jyväskylä, Finland',
      year: 'May 2025',
    },
    {
      degree: 'Bachelor of Information Technology',
      institution: 'University of Colombo, Sri Lanka',
    
    },
    {
      degree: 'Diploma in Computer System Design & Analysis',
      institution: 'National Institute of Business Management, Sri Lanka',
     
    },
  ];

  const certifications = [
    'Next.js & React - The Complete Guide | Udemy',
    'Decoding DevOps - From Basics to Advanced Projects with AI | Udemy',
    'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) | Udemy',
    'Data Visualization with Power BI - Great Learning',
    'NodeJS Security: JWT, Role-Based Access 2FA (/w React) | Udemy',
  ];

  return (
    <section id="education" className="py-20 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-slate-800 pb-3">Education & Training</h2>
        
        <div className="space-y-6 mb-12">
          <h3 className="text-xl font-semibold text-cyan-400">Academic Background</h3>
          {educationList.map((edu, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                <p className="text-slate-400 text-sm">{edu.institution}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-cyan-400 font-semibold text-sm bg-slate-900 px-3 py-1 rounded border border-slate-700 w-fit">
                {edu.year}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-cyan-400 mb-6">Certifications & Continuous Learning</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-slate-800 p-4 rounded-lg border border-slate-700 flex items-center space-x-3">
                <span className="text-cyan-400 font-bold">✓</span>
                <span className="text-slate-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}