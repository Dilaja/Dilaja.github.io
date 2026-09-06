import React from 'react';

export default function Projects({ t }) {
  const projects = [
    {
      title: t?.proj1Title || 'Customer Declaration System (CDS) & Postal Portals',
      description: t?.proj1Desc || 'Developed mission-critical public tracking and billing architectures (cdspost.slpost.gov.lk, ipspost.slpost.gov.lk, ec.slpost.gov.lk) serving national logistics workflows.',
      tags: ['Full Stack', 'Web Architecture', 'Public Infrastructure'],
    },
    {
      title: t?.proj2Title || 'E-Commerce Platform with Shopping Cart',
      description: t?.proj2Desc || 'Built a full-stack online store featuring product catalog, shopping cart, and order management, with a RESTful API backend and MongoDB (Mongoose) data models.',
      tags: ['Node.js', 'Express.js', 'MongoDB', 'REST API'],
    },
    {
      title: t?.proj3Title || 'Employers’ Security Bond Fund Application',
      description: t?.proj3Desc || 'Designed a secure web application managing employer security bonds with automated financial calculations and strict data protocols.',
      tags: ['PHP', 'React', 'MySQL', 'Financial Security'],
    },
    {
      title: t?.proj4Title || 'MERN-Based Educational Framework (Master’s Thesis)',
      description: t?.proj4Desc || 'Developed a scalable digital platform featuring interactive dashboards, data visualizations, and custom React and Node.js modules for performance tracking.',
      tags: ['React', 'Node.js', 'Data Visualization', 'MERN'],
    },
    {
      title: t?.proj5Title || 'Factory Management System (Capstone Project)',
      description: t?.proj5Desc || 'Built a comprehensive system to digitize manufacturing workflows, incorporating inventory tracking, production scheduling, and resource allocation.',
      tags: ['Full Stack', 'Inventory Tracking', 'Scheduling'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#121212] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-10 border-b border-[#2c2c2c] pb-3">
          {t?.projectsTitle || "Selected Projects"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-6 rounded-2xl border border-[#2c2c2c] flex flex-col justify-between shadow-xl">
              <div>
                <h3 className="text-xl font-bold text-[#E0E0E0] mb-3">{project.title}</h3>
                <p className="text-slate-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2c2c2c]">
                {project.tags.map((tag, i) => (
                  <span key={i} className="bg-[#121212] text-[#00E5FF] text-xs px-2.5 py-1 rounded-lg border border-[#2c2c2c]">
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