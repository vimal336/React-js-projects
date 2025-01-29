import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Node.js', 'MongoDB'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Landing Website',
    description: 'A Landing Website built with Html, Css and Javascript',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    tags: ['Javascript', 'CSS', 'Html'],
    githubLink: 'https://vimal336.github.io/js-projects/landing-page/',
    liveLink: 'https://vimal336.github.io/js-projects/landing-page/'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates',
    image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'Firebase', 'Tailwind'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather dashboard with interactive maps and forecasts',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1000',
    tags: ['React', 'TypeScript', 'APIs'],
    githubLink: 'https://github.com',
    liveLink: 'https://example.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="project-card group  dark:bg-white">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={20} />
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-link">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 dark:text-black">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="project-tag">
                      {tag}
                    </span>
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

export default Projects;


// import React from "react";

// type EducationDetails = {
//   period: string;
//   percentage: string;
//   degree: string;
//   institution: string;
// };

// type ExperienceDetails = {
//   role: string;
//   duration: string;
//   company: string;
//   tasks: string[];
// };

// const experiences: ExperienceDetails[] = [
//   {
//     role: "Front-End Developer",
//     duration: "August 2024 - Present",
//     company: "App Avengers.co",
//     tasks: [
//       "Developed and implemented CRUD (Create, Read, Update, Delete) API functionality using Firebase for the mobile application dashboard.",
//       "Improved website responsiveness and optimized page load times across various devices.",
//       "Ensured cross-browser compatibility for a seamless user experience on multiple platforms.",
//       "Implemented wallet connection features with MetaWallet and Stellar Freighter, streamlining user interactions and improving transaction efficiency."
//     ]
//   },
//   {
//     role: "Front-End Developer",
//     duration: "January 2024 - August 2024",
//     company: "Aequalis Software Solutions Pvt Ltd Chennai",
//     tasks: [
//       "Developed responsive chat interfaces using ReactJS.",
//       "Enhanced app performance by implementing React Query for API handling, leading to a 30% decrease in loading times, 20% increase in user retention, and a 10% boost in overall user satisfaction.",
//       "Established real-time communication using WebSocket connections.",
//       "Integrated Media Devices web APIs for audio messaging.",
//       "Brought responsive websites for customers using semantic HTML5, JavaScript, ReactJS, and CSS.",
//       "Worked on web development projects using HTML, CSS, and Bootstrap.",
//       "Integrated RESTful APIs to fetch and display dynamic content, enhancing the interactivity of the application.",
//       "Developed and maintained responsive web applications using React.js and Redux, improving performance and user experience."
//     ]
//   }
// ];

// const educationDetails: EducationDetails[] = [
//   {
//     period: "2019-2021",
//     percentage: "80%",
//     degree: "MSc Computer Science",
//     institution: "Arignar Anna Arts and Science College, Villupuram"
//   },
//   {
//     period: "2016-2019",
//     percentage: "74%",
//     degree: "BSc Computer Science",
//     institution: "Arignar Anna Arts and Science College, Villupuram"
//   },
//   {
//     period: "2015-2016",
//     percentage: "80%",
//     degree: "Higher Secondary",
//     institution: "Sacred Heart Convent of A.I Higher Secondary School, Villupuram"
//   },
//   {
//     period: "2013-2014",
//     percentage: "90%",
//     degree: "SSLC",
//     institution: "The New John Dewey Matriculation School, Villupuram"
//   }
// ];

// const EducationSection: React.FC = () => {
//   return (
//     <div className="bf" id="education">
//       <div className="education px-4 py-8 sm:px-8 md:px-16 lg:px-24">
//         <main className="edurow-2">
//           <section className="educol mb-8">
//             <header className="title mb-4">
//               <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">Professional Experience</h1>
//             </header>
//             {experiences.map((exp, index) => (
//               <div className="educontents mb-6" key={index}>
//                 <div className="edubox bg-white p-4 rounded-lg shadow-md">
//                   <h4 className="text-lg font-semibold text-gray-700">{`${exp.role} - ${exp.duration}`}</h4>
//                   <h3 className="text-md text-gray-600 mb-2">{exp.company}</h3>
//                   <ul className="list-disc list-inside text-gray-600">
//                     {exp.tasks.map((task, taskIndex) => (
//                       <li key={taskIndex} className="mb-1">{task}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             ))}
//           </section>
//           <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl mb-4">Educational Details</h1>
//           <main className="edurow grid grid-cols-1 sm:grid-cols-2 gap-8">
//             <section className="educol">
//               <header className="title mb-4">
//                 <h2 className="text-xl font-semibold text-gray-700">COLLEGE</h2>
//               </header>
//               {educationDetails.slice(0, 2).map((edu, index) => (
//                 <div className="educontents mb-4" key={index}>
//                   <div className="edubox bg-white p-4 rounded-lg shadow-md">
//                     <h4 className="text-lg font-semibold text-gray-700">{`${edu.period} - ${edu.percentage}`}</h4>
//                     <h3 className="text-md text-gray-600 mb-2">{edu.degree}</h3>
//                     <p className="text-gray-600">{edu.institution}</p>
//                   </div>
//                 </div>
//               ))}
//             </section>
//             <section className="educol">
//               <header className="title mb-4">
//                 <h2 className="text-xl font-semibold text-gray-700">SCHOOL</h2>
//               </header>
//               {educationDetails.slice(2).map((edu, index) => (
//                 <div className="educontents mb-4" key={index}>
//                   <div className="edubox bg-white p-4 rounded-lg shadow-md">
//                     <h4 className="text-lg font-semibold text-gray-700">{`${edu.period} - ${edu.percentage}`}</h4>
//                     <h3 className="text-md text-gray-600 mb-2">{edu.degree}</h3>
//                     <p className="text-gray-600">{edu.institution}</p>
//                   </div>
//                 </div>
//               ))}
//             </section>
//           </main>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default EducationSection;
