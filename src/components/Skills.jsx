import React from 'react';

export default function Skills({ t }) {
  const skillCategories = [
    {
      category: t?.catFrontend || 'Frontend',
      skills: ['React.js', 'TypeScript', 'Redux', 'React Query', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3', 'Data Visualization (Power BI)', 'WCAG 2.2 Accessibility'],
    },
    {
      category: t?.catBackend || 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'Sequelize', 'PHP', 'Python (Basic)'],
    },
    {
      category: t?.catDatabases || 'Databases',
      skills: ['MySQL', 'MongoDB (Mongoose)', 'SQL', 'PostgreSQL', 'GraphQL'],
    },
    {
      category: t?.catDevOps || 'DevOps & Tools',
      skills: ['AWS', 'Azure DevOps', 'Kubernetes', 'Docker', 'CI/CD Pipelines', 'Microservices', 'Git', 'Postman', 'Jest', 'GitHub Copilot', 'Cursor'],
    },
    {
      category: t?.catMethodologies || 'Methodologies & Support',
      skills: ['Agile / Scrum', 'Test-Driven Development (TDD)', 'Root Cause Analysis', 'Production Incident Troubleshooting'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#121212] px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-10 border-b border-[#2c2c2c] pb-3">
          {t?.skillsTitle || "Core Competencies & Skills"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-6 rounded-2xl border border-[#2c2c2c] shadow-xl">
              <h3 className="text-[#00E5FF] font-bold text-lg mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-[#121212] text-slate-300 text-sm px-3.5 py-1.5 rounded-lg border border-[#2c2c2c]"
                  >
                    {skill}
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