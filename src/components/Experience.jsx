import React from 'react';

export default function Experience({ t }) {
  const experiences = [
    {
      title: t?.exp1Title || 'Full Stack Developer',
      company: t?.exp1Company || 'Department of Posts, Sri Lanka',
      period: 'Feb 2013 - Aug 2023',
      description: [
        t?.exp1Desc1 || 'Architected, deployed, and supported mission-critical web applications handling over 10,000 monthly transactions with 99.9% system uptime using modern tools.',
        t?.exp1Desc2 || 'Integrated the IPS International System with local postal logistics (cdspost.slpost.gov.lk, ipspost.slpost.gov.lk, ec.slpost.gov.lk), reducing support inquiries by 40% through streamlined troubleshooting.',
        t?.exp1Desc3 || 'Established Test-Driven Development (TDD) protocols and optimized Azure CI/CD pipelines, reducing production bugs by 60% and accelerating deployment cycles by 70%.',
      ],
    },
    {
      title: t?.exp2Title || 'Software Developer',
      company: t?.exp2Company || 'Vaughan Software (Pvt) Ltd',
      period: 'March 2010 - June 2012',
      description: [
        t?.exp2Desc1 || 'Engineered and maintained core client-facing web architectures and relational databases, ensuring transaction stability and rapid response times under heavy user loads.',
        t?.exp2Desc2 || 'Provided ongoing software maintenance, performance tuning, and bug fixes for production web applications.',
      ],
    },
    {
      title: t?.exp3Title || 'Career Break & Relocation',
      company: t?.exp3Company || 'Suvic Force Oy (Finland) / Studies',
      period: '2024 - 2026',
      description: [
        t?.exp3Desc1 || 'Relocated to Finland and completed Master’s studies at JAMK University of Applied Sciences.',
        t?.exp3Desc2 || 'Worked in solar park operations with Suvic Force Oy while adapting to the local professional environment.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-[#121212] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-10 border-b border-[#2c2c2c] pb-3">
          {t?.experienceTitle || "Professional Experience"}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-6 sm:p-8 rounded-2xl border border-[#2c2c2c] shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#E0E0E0]">{exp.title}</h3>
                  <p className="text-[#00E5FF] font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-400 mt-1 sm:mt-0 bg-[#121212] px-3 py-1 rounded-lg border border-[#2c2c2c] w-fit">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-300">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}