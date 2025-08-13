import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import ScrollProgress from './components/ScrollProgress';
import ParallaxBackground from './components/ParallaxBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Moon phases configuration
const moonPhases = [
  { name: 'Full Moon', className: 'new-moon' },
  { name: 'Blood Moon', className: 'blood-moon' },
  { name: 'Blue Moon', className: 'blue-moon' },
  { name: 'Harvest Moon', className: 'harvest-moon' }
];

function App() {
  const [currentMoonPhase, setCurrentMoonPhase] = useState(0);

  // Get initial moon phase from localStorage or default to 0
  useEffect(() => {
    const savedPhase = localStorage.getItem('moonPhase') || '0';
    const phaseIndex = parseInt(savedPhase, 10);
    
    setCurrentMoonPhase(phaseIndex);
    
    // Remove all moon phase classes first
    moonPhases.forEach(phase => {
      document.documentElement.classList.remove(phase.className);
    });
    
    // Always add dark class since we only have dark themes
    document.documentElement.classList.add('dark');
    // Add current moon phase class
    document.documentElement.classList.add(moonPhases[phaseIndex].className);
  }, []);

  const cycleMoonPhase = () => {
    const nextPhase = (currentMoonPhase + 1) % moonPhases.length;
    setCurrentMoonPhase(nextPhase);
    
    // Remove all moon phase classes first
    moonPhases.forEach(phase => {
      document.documentElement.classList.remove(phase.className);
    });
    
    // Always keep dark class
    document.documentElement.classList.add('dark');
    // Add new moon phase class
    document.documentElement.classList.add(moonPhases[nextPhase].className);
    
    // Save preference
    localStorage.setItem('moonPhase', nextPhase.toString());
  };

  return (
    <div className="min-h-screen transition-colors duration-300 relative">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* 3D Parallax Background */}
      <ParallaxBackground isDark={true} currentPhase={currentMoonPhase} />
      
      <Navbar />
      <ThemeToggle onToggle={cycleMoonPhase} currentPhase={currentMoonPhase} />
      
      <main className="relative z-10 bg-transparent">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        
        {/* Footer */}
        <footer className="py-8 text-center border-t border-gray-200/30 dark:border-gray-700/30 bg-white/10 dark:bg-gray-900/10 backdrop-blur-sm">
          <p className="body-text">&copy; 2025 Kunal Jha. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;