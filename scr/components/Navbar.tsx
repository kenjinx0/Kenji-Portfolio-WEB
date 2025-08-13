import React, { useState, useEffect } from 'react';
import { User, Briefcase, Mail, Code, Home } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 px-2 w-full max-w-2xl">
      <div className="bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-full px-2 md:px-3 py-1.5 border border-white/30 dark:border-gray-700/30 shadow-lg">
        <div className="flex items-center justify-center space-x-0.5 md:space-x-2 overflow-x-auto">
          <button
            onClick={() => scrollToSection('hero')}
            className={`flex items-center space-x-1 md:space-x-1.5 px-1 md:px-2 py-1 rounded-full transition-all duration-500 whitespace-nowrap text-xs md:text-sm transform-gpu ${
              activeSection === 'hero'
                ? 'bg-purple-500/40 text-purple-600 dark:text-purple-400 shadow-lg scale-105 animate-slideIn'
                : 'nav-text hover:bg-purple-100/50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105'
            }`}
            style={{
              boxShadow: activeSection === 'hero' ? '0 4px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
              background: activeSection === 'hero' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(147, 51, 234, 0.3))' : undefined
            }}
          >
            <Home className="w-3 h-3 md:w-4 md:h-4" />
            <span className="nav-text font-medium">Home</span>
          </button>
          
          <button
            onClick={() => scrollToSection('about')}
            className={`flex items-center space-x-1 md:space-x-1.5 px-1 md:px-2 py-1 rounded-full transition-all duration-500 whitespace-nowrap text-xs md:text-sm transform-gpu ${
              activeSection === 'about'
                ? 'bg-purple-500/40 text-purple-600 dark:text-purple-400 shadow-lg scale-105 animate-slideIn'
                : 'nav-text hover:bg-purple-100/50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105'
            }`}
            style={{
              boxShadow: activeSection === 'about' ? '0 4px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
              background: activeSection === 'about' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(147, 51, 234, 0.3))' : undefined
            }}
          >
            <User className="w-3 h-3 md:w-4 md:h-4" />
            <span className="nav-text font-medium">About</span>
          </button>
          
          <button
            onClick={() => scrollToSection('skills')}
            className={`flex items-center space-x-1 md:space-x-1.5 px-1 md:px-2 py-1 rounded-full transition-all duration-500 whitespace-nowrap text-xs md:text-sm transform-gpu ${
              activeSection === 'skills'
                ? 'bg-purple-500/40 text-purple-600 dark:text-purple-400 shadow-lg scale-105 animate-slideIn'
                : 'nav-text hover:bg-purple-100/50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105'
            }`}
            style={{
              boxShadow: activeSection === 'skills' ? '0 4px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
              background: activeSection === 'skills' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(147, 51, 234, 0.3))' : undefined
            }}
          >
            <Code className="w-3 h-3 md:w-4 md:h-4" />
            <span className="nav-text font-medium">Skills</span>
          </button>
          
          <button
            onClick={() => scrollToSection('projects')}
            className={`flex items-center space-x-1 md:space-x-1.5 px-1 md:px-2 py-1 rounded-full transition-all duration-500 whitespace-nowrap text-xs md:text-sm transform-gpu ${
              activeSection === 'projects'
                ? 'bg-purple-500/40 text-purple-600 dark:text-purple-400 shadow-lg scale-105 animate-slideIn'
                : 'nav-text hover:bg-purple-100/50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105'
            }`}
            style={{
              boxShadow: activeSection === 'projects' ? '0 4px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
              background: activeSection === 'projects' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(147, 51, 234, 0.3))' : undefined
            }}
          >
            <Briefcase className="w-3 h-3 md:w-4 md:h-4" />
            <span className="nav-text font-medium">Projects</span>
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className={`flex items-center space-x-1 md:space-x-1.5 px-1 md:px-2 py-1 rounded-full transition-all duration-500 whitespace-nowrap text-xs md:text-sm transform-gpu ${
              activeSection === 'contact'
                ? 'bg-purple-500/40 text-purple-600 dark:text-purple-400 shadow-lg scale-105 animate-slideIn'
                : 'nav-text hover:bg-purple-100/50 dark:hover:bg-purple-900/30 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105'
            }`}
            style={{
              boxShadow: activeSection === 'contact' ? '0 4px 20px rgba(168, 85, 247, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)' : 'none',
              background: activeSection === 'contact' ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.4), rgba(147, 51, 234, 0.3))' : undefined
            }}
          >
            <Mail className="w-3 h-3 md:w-4 md:h-4" />
            <span className="nav-text font-medium">Contact</span>
          </button>
        </div>
      </div>
    </nav>
  );
}