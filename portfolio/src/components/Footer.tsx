import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Let's Build Something Amazing</h3>
            <p className="text-gray-400">Frontend Developer Portfolio</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/vimal336" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/vimalsiva" target="_blank" rel="noopener noreferrer" className="footer-social-link">
              <Linkedin size={20} />
            </a>
            <a href="mailto:asvimal336@gmail.com" className="footer-social-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; Vimal S - All rights reserved {new Date().getFullYear()} </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;