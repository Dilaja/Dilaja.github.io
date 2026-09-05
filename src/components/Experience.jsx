import React from 'react';

export default function Experience() {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Department of Posts, Sri Lanka',
      period: 'Feb 2013 - Aug 2023',
      description: [
        'Architected, deployed, and supported mission-critical web applications handling over 10,000 monthly transactions with 99.9% system uptime using modern tools.',
        'Integrated the IPS International System with local postal logistics (cdspost.slpost.gov.lk, ipspost.slpost.gov.lk, ec.slpost.gov.lk), reducing support inquiries by 40% through streamlined troubleshooting.',
        'Established Test-Driven Development (TDD) protocols and optimized Azure CI/CD pipelines, reducing production bugs by 60% and accelerating deployment cycles by 70%.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Vaughan Software (Pvt) Ltd',
      period: 'March 2010 - June 2012',
      description: [
        'Engineered and maintained core client-facing web architectures and relational databases, ensuring transaction stability and rapid response times under heavy user loads.',
        'Provided ongoing software maintenance, performance tuning, and bug fixes for production web applications.',
      ],
    },
    {
      title: 'Career Break & Relocation',
      company: 'Suvic Force Oy (Finland) / Studies',
      period: '2024 - 2026',
      description: [
        'Relocated to Finland and completed Master’s studies at JAMK University of Applied Sciences.',
        'Worked in solar park operations with Suvic Force Oy while adapting to the local professional environment.',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800/50 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-slate-700 pb-3">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-slate-800 p-6 sm:p-8 rounded-lg border border-slate-700 shadow-md">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-cyan-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-400 mt-1 sm:mt-0 bg-slate-900 px-3 py-1 rounded-full border border-slate-700 w-fit">
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