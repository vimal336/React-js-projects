import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90" />
      </div>

      <div className="container mx-auto px-6 py-24 relative">
        <div className="text-center">
          <div className="space-y-6 reveal-slide-up">
            <h2 className="text-xl md:text-2xl font-medium text-blue-400">
              Hello, I'm a
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Frontend Developer
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Passionate about Javascript, React, and Tailwind CSS.
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary-light">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-white" />
      </a>
    </section>
  );
};

export default Hero;