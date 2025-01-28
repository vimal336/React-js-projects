import React from 'react';
import { Code, Palette, Database, Globe, Server, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: 'React', level: 90 },
      // { name: 'TypeScript', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Html & CSS', level: 80 },
    ],
  },
  {
    title: 'Backend',
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: 'Node.js'},
      { name: 'Express'},
      { name: 'REST APIs'},
    ],
  },
  {
    title: 'Database',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'MySql', level: 85 },
      { name: 'Firebase', level: 85 },
      { name: 'Supabase', level: 85 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: 'Git', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="section-title reveal-fade dark:text-white">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="reveal-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold dark:text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: '0%',
                            animation: 'growWidth 1.5s ease-out forwards',
                            animationDelay: `${(index * 4 + skillIndex) * 100}ms`,
                          }}
                          data-width={`${skill.level}%`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;