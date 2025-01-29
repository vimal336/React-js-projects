import React from "react";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="section-title">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-white">
              I'm a passionate frontend developer with a keen eye for design and
              a love for creating seamless user experiences. With expertise in
              modern web technologies, I transform ideas into reality through
              clean and efficient code.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white ">
                My Skills
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {["React", "Tailwind CSS", "Next.js", "Node.js", "Git"].map(
                  (skill, index) => (
                    <div
                      key={index}
                      className="skill-tag bg-blue-100 text-blue-700 rounded-full px-4 py-2 text-center font-medium hover:bg-blue-200 transform transition duration-300 ease-in-out hover:scale-105 animate-fade-in dark:text-blue-700 dark:bg-blue-100"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="feature-card dark:bg-white">
              <Code className="text-blue-500" size={24} />
              <h3 className="text-xl font-semibold">Clean Code</h3>
              <p>Writing maintainable and scalable code is my priority</p>
            </div>

            <div className="feature-card dark:bg-white">
              <Palette className="text-purple-500" size={24} />
              <h3 className="text-xl font-semibold">Design Focused</h3>
              <p>Creating beautiful and intuitive user interfaces</p>
            </div>

            <div className="feature-card dark:bg-white">
              <Zap className="text-yellow-500" size={24} />
              <h3 className="text-xl font-semibold">Performance First</h3>
              <p>Optimizing for the best possible user experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
