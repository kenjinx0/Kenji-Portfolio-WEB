import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaDiscord, FaEnvelope } from 'react-icons/fa';
import Moon from './components/Moon';
import './App.css';

function App() {
  const [theme, setTheme] = useState('white');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.className = `${newTheme}-theme`;
  };

  const getThemeColors = () => {
    switch (theme) {
      case 'white': return { primary: '#ffffff', secondary: '#e6e6fa' };
      case 'blue': return { primary: '#add8e6', secondary: '#9370db' };
      case 'red': return { primary: '#ffcccb', secondary: '#800000' };
      default: return { primary: '#1a1a1a', secondary: '#333333' };
    }
  };

  const buttonStyle = {
    borderColor: getThemeColors().secondary,
    color: getThemeColors().secondary,
  };

  return (
    <div className={`app ${theme}-theme`}>
      <Moon currentTheme={theme} />
      
      <div className="theme-buttons">
        <button 
          className="interactive-element"
          style={buttonStyle}
          onClick={() => handleThemeChange('white')}
        >
          White Moon
        </button>
        {/* Add similar buttons for other moon phases */}
      </div>

      <section className="social-links">
        <a href="https://github.com/kenjinx0" className="social-icon" style={{ color: getThemeColors().secondary }}>
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/kunal-jha-kenji/" className="social-icon" style={{ color: getThemeColors().secondary }}>
          <FaLinkedin />
        </a>
      </section>

      <section className="contact-section">
        <a href="mailto:kjha.business@gmail.com" className="social-icon" style={{ color: getThemeColors().secondary }}>
          <FaEnvelope />
        </a>
        <a href="https://discord.com/users/703615436507578368" className="social-icon" style={{ color: getThemeColors().secondary }}>
          <FaDiscord />
        </a>
      </section>

      <section className="resume-section" style={buttonStyle}>
        <h2>Resume</h2>
        <a 
          href="/resume.pdf" 
          download 
          className="interactive-element"
          style={buttonStyle}
        >
          Download Resume
        </a>
      </section>
    </div>
  );
}

export default App;
