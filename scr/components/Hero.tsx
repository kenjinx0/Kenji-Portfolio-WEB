import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-16 relative">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="heading-primary text-5xl md:text-7xl mb-3 tracking-tight">
            Kunal 'Ken' Jha
          </h1>
          <p className="subheading text-xl md:text-2xl mb-2">
            Data Scientist & Designer
          </p>
          <p className="body-text text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            BCA student specializing in Data Science & Big Data Analysis. 
            Passionate about transforming data into insights and creating beautiful, functional designs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToAbout}
              className="button-text button-hover-pop inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full shadow-lg transition-all duration-300"
            >
              <span>Explore My Work</span>
              <ChevronDown className="w-4 h-4 ml-2" />
            </button>
            
            <button className="button-text button-hover-pop inline-flex items-center px-8 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-full transition-all duration-300">
              <Download className="w-4 h-4 mr-2" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto"></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
      </div>
    </section>
  );
}