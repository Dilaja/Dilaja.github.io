import React from 'react';

export default function Education({ t }) {
  const educationList = [
    {
      degree: t?.masterDegree || 'Master of Engineering, Full Stack Software Development',
      institution: t?.jamkInstitution || 'JAMK University of Applied Sciences, Jyväskylä, Finland',
      year: 'May 2025',
    },
    {
      degree: t?.bachelorDegree || 'Bachelor of Information Technology',
      institution: t?.colomboInstitution || 'University of Colombo, Sri Lanka',
      year: '2019',
    },
    {
      degree: t?.diplomaDegree || 'Diploma in Computer System Design & Analysis',
      institution: t?.nibmInstitution || 'National Institute of Business Management, Sri Lanka',
      year: '2004',
    },
  ];

  const certifications = [
    t?.cert1 || 'Next.js & React - The Complete Guide | Udemy',
    t?.cert2 || 'Decoding DevOps - From Basics to Advanced Projects with AI | Udemy',
    t?.cert3 || 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno) | Udemy',
    t?.cert4 || 'Data Visualization with Power BI - Great Learning',
    t?.cert5 || 'NodeJS Security: JWT, Role-Based Access 2FA (/w React) | Udemy',
  ];

  return (
    <section id="education" className="py-20 bg-[#121212] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-10 border-b border-[#2c2c2c] pb-3">
          {t?.educationTitle || "Education & Training"}
        </h2>
        
        <div className="space-y-6 mb-12">
          <h3 className="text-xl font-semibold text-[#00E5FF]">
            {t?.academicBackground || "Academic Background"}
          </h3>
          {educationList.map((edu, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-6 rounded-2xl border border-[#2c2c2c] shadow-xl flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <h4 className="text-lg font-bold text-[#E0E0E0]">{edu.degree}</h4>
                <p className="text-slate-400 text-sm">{edu.institution}</p>
              </div>
              <span className="mt-2 sm:mt-0 text-[#00E5FF] font-semibold text-sm bg-[#121212] px-3 py-1 rounded-lg border border-[#2c2c2c] w-fit">
                {edu.year}
              </span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#00E5FF] mb-6">
            {t?.certificationsTitle || "Certifications & Continuous Learning"}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div key={idx} className="bg-[#1e1e1e] p-4 rounded-xl border border-[#2c2c2c] flex items-center space-x-3 shadow-md">
                <span className="text-[#00E5FF] font-bold">✓</span>
                <span className="text-slate-300 text-sm">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}