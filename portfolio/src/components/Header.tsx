import React from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-gray-800 dark:text-white">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <a href="https://github.com/vimal336" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vimalsiva" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Linkedin size={20} />
            </a>
            <a href="mailto:asvimal336@gmail.com" className="social-icon">
              <Mail size={20} />
            </a>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} className="text-gray-800 dark:text-white" /> : <Menu size={24} className="text-gray-800 dark:text-white" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#home" className="mobile-nav-link">Home</a>
              <a href="#about" className="mobile-nav-link">About</a>
              <a href="#skills" className="mobile-nav-link">Skills</a>
              <a href="#experience" className="mobile-nav-link">Experience</a>
              <a href="#projects" className="mobile-nav-link">Projects</a>
              <a href="#contact" className="mobile-nav-link">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;