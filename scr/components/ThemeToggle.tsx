import React from 'react';
import { Moon } from 'lucide-react';

interface ThemeToggleProps {
  onToggle: () => void;
  currentPhase: number;
}

// Moon phases configuration
const moonPhases = [
  { 
    name: 'Full Moon', 
    color: 'from-gray-100 via-white to-gray-200',
    bgGradient: 'from-gray-800 via-gray-900 to-black',
    accent: 'white',
    shadowColor: 'rgba(255, 255, 255, 0.4)',
    className: 'new-moon'
  },
  { 
    name: 'Blood Moon', 
    color: 'from-red-600 via-red-700 to-red-900',
    bgGradient: 'from-red-950 via-red-900 to-gray-900',
    accent: 'red',
    shadowColor: 'rgba(220, 38, 38, 0.4)',
    className: 'blood-moon'
  },
  { 
    name: 'Blue Moon', 
    color: 'from-blue-300 via-blue-400 to-blue-600',
    bgGradient: 'from-blue-950 via-indigo-950 to-gray-900',
    accent: 'blue',
    shadowColor: 'rgba(59, 130, 246, 0.4)',
    className: 'blue-moon'
  },
  { 
    name: 'Harvest Moon', 
    color: 'from-orange-300 via-orange-400 to-orange-600',
    bgGradient: 'from-orange-950 via-amber-950 to-gray-900',
    accent: 'orange',
    shadowColor: 'rgba(249, 115, 22, 0.4)',
    className: 'harvest-moon'
  }
];

export default function ThemeToggle({ onToggle, currentPhase }: ThemeToggleProps) {
  const currentMoonPhase = moonPhases[currentPhase];

  return (
    <div
      onClick={onToggle}
      className="fixed top-4 right-4 md:top-6 md:right-6 w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-800/90 shadow-lg hover:shadow-xl transition-all duration-300 border-2 z-50 cursor-pointer group"
      style={{ 
        borderColor: currentMoonPhase.shadowColor,
        boxShadow: `0 0 20px ${currentMoonPhase.shadowColor}`
      }}
      aria-label={`Current Moon Phase: ${currentMoonPhase.name} - Click to change`}
    >
      {/* Moon Phase Display */}
      <div className="relative w-full h-full overflow-hidden rounded-full">
        {/* Current Moon Phase */}
        <div 
          className={`absolute inset-2 rounded-full bg-gradient-to-br ${currentMoonPhase.color} transition-all duration-500`}
          style={{
            boxShadow: `inset 0 0 20px ${currentMoonPhase.shadowColor}, 0 0 15px ${currentMoonPhase.shadowColor}`
          }}
        >
          {/* Moon Surface Details */}
          <div className="absolute inset-0 rounded-full">
            {/* Phase-specific Craters */}
            {currentMoonPhase.name === 'Blood Moon' && (
              <>
                <div className="absolute w-3 h-3 bg-red-800 rounded-full top-3 left-3 opacity-60"></div>
                <div className="absolute w-2 h-2 bg-red-800 rounded-full top-5 right-3 opacity-40"></div>
                <div className="absolute w-1.5 h-1.5 bg-red-800 rounded-full bottom-4 left-4 opacity-50"></div>
              </>
            )}
            
            {currentMoonPhase.name === 'Blue Moon' && (
              <>
                <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-3 left-3 opacity-60"></div>
                <div className="absolute w-2 h-2 bg-blue-600 rounded-full top-5 right-3 opacity-40"></div>
                <div className="absolute w-1.5 h-1.5 bg-blue-600 rounded-full bottom-4 left-4 opacity-50"></div>
              </>
            )}
            
            {currentMoonPhase.name === 'Harvest Moon' && (
              <>
                <div className="absolute w-3 h-3 bg-orange-600 rounded-full top-3 left-3 opacity-60"></div>
                <div className="absolute w-2 h-2 bg-orange-600 rounded-full top-5 right-3 opacity-40"></div>
                <div className="absolute w-1.5 h-1.5 bg-orange-600 rounded-full bottom-4 left-4 opacity-50"></div>
              </>
            )}
            
            {currentMoonPhase.name === 'Full Moon' && (
              <>
                <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-3 left-3 opacity-60"></div>
                <div className="absolute w-2 h-2 bg-gray-300 rounded-full top-5 right-3 opacity-40"></div>
                <div className="absolute w-1.5 h-1.5 bg-gray-300 rounded-full bottom-4 left-4 opacity-50"></div>
              </>
            )}
            
            {/* Central Moon Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Moon className="w-6 h-6 md:w-8 md:h-8 text-gray-200" />
            </div>
            
            {/* Phase-specific Glow */}
            <div 
              className="absolute inset-0 rounded-full opacity-20 blur-sm animate-pulse"
              style={{ backgroundColor: currentMoonPhase.shadowColor }}
            ></div>
          </div>
        </div>
        
        {/* Phase Indicator Dots */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {moonPhases.map((_, index) => (
            <div
              key={index}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                index === currentPhase 
                  ? 'bg-white opacity-100 scale-125' 
                  : 'bg-white opacity-40'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Phase Name Tooltip */}
      <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/75 text-white text-sm px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
        {currentMoonPhase.name}
      </div>
      
      {/* Next Phase Preview (subtle) */}
      <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-300">
        <div 
          className={`w-full h-full rounded-full bg-gradient-to-br ${moonPhases[(currentPhase + 1) % moonPhases.length].color} border border-white/30`}
        ></div>
      </div>
    </div>
  );
}