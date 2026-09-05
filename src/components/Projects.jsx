import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'Customer Declaration System (CDS) & Postal Portals',
      description: 'Developed mission-critical public tracking and billing architectures (cdspost.slpost.gov.lk, ipspost.slpost.gov.lk, ec.slpost.gov.lk) serving national logistics workflows.',
      tags: ['Full Stack', 'Web Architecture', 'Public Infrastructure'],
    },
    {
      title: 'E-Commerce Platform with Shopping Cart',
      description: 'Built a full-stack online store featuring product catalog, shopping cart, and order management, with a RESTful API backend and MongoDB (Mongoose) data models.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    },
    {
      title: 'Employers’ Security Bond Fund Application',
      description: 'Designed a secure web application managing employer security bonds with automated financial calculations and strict data protocols.',
      tags: ['PHP', 'React', 'MySQL', 'Financial Security'],
    },
    {
      title: 'MERN-Based Educational Framework (Master’s Thesis)',
      description: 'Developed a scalable digital platform featuring interactive dashboards, data visualizations, and custom React and Node.js modules for performance tracking.',
      tags: ['React', 'Node.js', 'Data Visualization', 'MERN'],
    },
    {
      title: 'Factory Management System (Capstone Project)',
      description: 'Built a comprehensive system to digitize manufacturing workflows, incorporating inventory tracking, production scheduling, and resource allocation.',
      tags: ['Full Stack', 'Inventory Tracking', 'Scheduling'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/50 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-slate-700 pb-3">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-lg border border-slate-700 flex flex-col justify-between shadow-md">
              <div>
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-700/50">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-cyan-950/60 text-cyan-400 text-xs px-2.5 py-1 rounded border border-cyan-800/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}