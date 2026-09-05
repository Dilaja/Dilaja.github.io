import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React.js', 'TypeScript', 'Redux', 'React Query', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3', 'Data Visualization (Power BI)', 'WCAG 2.2 Accessibility'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT', 'Sequelize', 'PHP', 'Python (Basic)'],
    },
    {
      category: 'Databases',
      skills: ['MySQL', 'MongoDB (Mongoose)', 'SQL', 'PostgreSQL', 'GraphQL'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['AWS', 'Azure DevOps', 'Kubernetes', 'Docker', 'CI/CD Pipelines', 'Microservices', 'Git', 'Postman', 'Jest', 'GitHub Copilot', 'Cursor'],
    },
    {
      category: 'Methodologies & Support',
      skills: ['Agile / Scrum', 'Test-Driven Development (TDD)', 'Root Cause Analysis', 'Production Incident Troubleshooting'],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-10 border-b border-slate-800 pb-3">Core Competencies & Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="bg-slate-800 p-6 rounded-lg border border-slate-700/80 shadow-md">
              <h3 className="text-cyan-400 font-bold text-lg mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-slate-900 text-slate-300 text-sm px-3 py-1.5 rounded-md border border-slate-700"
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