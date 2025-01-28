import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Frontend Developer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description: 'Leading the frontend development team, implementing modern web solutions, and mentoring junior developers.',
    skills: ['React', 'TypeScript', 'Next.js'],
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    period: '2020 - 2022',
    description: 'Developed responsive web applications and improved performance metrics by 40%.',
    skills: ['React', 'Redux', 'Tailwind CSS'],
  },
  {
    title: 'Junior Web Developer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description: 'Created interactive websites and collaborated with designers to implement pixel-perfect designs.',
    skills: ['JavaScript', 'HTML/CSS', 'jQuery'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Work Experience</h2>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 h-full w-[2px] bg-blue-200"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center gap-8 mb-16 md:mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white"></div>

              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? 'text-right md:pr-12' : 'md:pl-12'
                }`}
              >
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-2 mb-2 text-blue-600">
                    <Briefcase size={18} />
                    <h3 className="text-xl font-semibold">{exp.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for symmetry */}
              <div className="hidden md:block md:w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
