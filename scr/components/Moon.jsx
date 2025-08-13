import React, { useEffect, useState } from 'react';
import '../App.css';

const Moon = ({ currentTheme }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const opacity = 1 - (scrollPosition / 500);
      setVisible(opacity > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getMoonStyle = () => {
    const baseStyle = {
      opacity: visible ? 1 : 0,
      boxShadow: '0 0 20px 5px'
    };

    switch (currentTheme) {
      case 'white':
        return { ...baseStyle, backgroundColor: '#ffffff', boxShadow: '0 0 20px 5px rgba(230, 230, 250, 0.8)' };
      case 'blue':
        return { ...baseStyle, backgroundColor: '#add8e6', boxShadow: '0 0 20px 5px rgba(147, 112, 219, 0.8)' };
      case 'red':
        return { ...baseStyle, backgroundColor: '#ffcccb', boxShadow: '0 0 20px 5px rgba(128, 0, 0, 0.8)' };
      default:
        return { ...baseStyle, backgroundColor: '#333333', boxShadow: 'none' };
    }
  };

  return <div className="moon" style={getMoonStyle()} />;
};

export default Moon;
