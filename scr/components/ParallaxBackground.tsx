import React, { useEffect, useState } from 'react';

interface ParallaxBackgroundProps {
  isDark: boolean;
  currentPhase?: number;
}

interface WeatherData {
  isDay: boolean;
  temperature: number;
  condition: string;
  showRain?: boolean;
  showSnow?: boolean;
}

// Moon phases configuration
const moonPhases = [
  { 
    name: 'Full Moon', 
    color: 'from-gray-100 via-white to-gray-200',
    bgGradient: 'from-gray-800 via-gray-900 to-black',
    glowColor: 'rgba(255, 255, 255, 0.4)',
    particleColor: 'bg-white'
  },
  { 
    name: 'Blood Moon', 
    color: 'from-red-600 via-red-700 to-red-900',
    bgGradient: 'from-red-950 via-red-900 to-gray-900',
    glowColor: 'rgba(220, 38, 38, 0.4)',
    particleColor: 'bg-red-300'
  },
  { 
    name: 'Blue Moon', 
    color: 'from-blue-300 via-blue-400 to-blue-600',
    bgGradient: 'from-blue-950 via-indigo-950 to-gray-900',
    glowColor: 'rgba(59, 130, 246, 0.4)',
    particleColor: 'bg-blue-300'
  },
  { 
    name: 'Harvest Moon', 
    color: 'from-orange-300 via-orange-400 to-orange-600',
    bgGradient: 'from-orange-950 via-amber-950 to-gray-900',
    glowColor: 'rgba(249, 115, 22, 0.4)',
    particleColor: 'bg-orange-300'
  }
];

export default function ParallaxBackground({ isDark, currentPhase = 0 }: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 30 });
  const [weather, setWeather] = useState<WeatherData | null>(null);

  // Get current moon phase
  const currentMoonPhase = moonPhases[currentPhase];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Fetch weather data to determine weather effects
    const fetchWeather = async () => {
      try {
        // Using OpenWeatherMap API (you'll need to replace with your API key)
        // const API_KEY = 'your-api-key-here'; // Replace with actual API key
        // const city = 'your-city'; // Replace with desired city
        
        // For demo purposes, we'll simulate weather data
        // In production, use: const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
        
        // Simulated weather data - randomly show rain/snow occasionally
        const currentHour = new Date().getHours();
        const isDay = currentHour >= 6 && currentHour < 18;
        const random = Math.random();
        
        let condition = 'clear';
        let showRain = false;
        let showSnow = false;
        
        // 10% chance of rain, 5% chance of snow (adjust as needed)
        if (random < 0.1) {
          condition = 'rain';
          showRain = true;
        } else if (random < 0.15) {
          condition = 'snow';
          showSnow = true;
        }
        
        setWeather({
          isDay,
          temperature: 22,
          condition,
          showRain,
          showSnow
        });
      } catch (error) {
        // Fallback weather
        const currentHour = new Date().getHours();
        const isDay = currentHour >= 6 && currentHour < 18;
        setWeather({
          isDay,
          temperature: 22,
          condition: 'clear',
          showRain: false,
          showSnow: false
        });
      }
    };

    fetchWeather();
    // Refresh weather data every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Calculate celestial body position based on scroll and mouse (smoother movement)
  const scrollProgress = Math.min(scrollY / (document.body.scrollHeight - window.innerHeight), 1);
  const celestialX = 15 + (scrollProgress * 50) + (mousePosition.x * 0.1); // Reduced mouse influence for smoother movement
  const celestialY = 15 + Math.sin(scrollProgress * Math.PI * 0.5) * 15 + (mousePosition.y * 0.05); // Smoother arc movement

  // Theme switching works normally, weather only affects rain/snow

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Gradient Sky Background - Dynamic based on moon phase */}
      <div 
        className={`absolute inset-0 transition-all duration-1000 bg-gradient-to-b ${currentMoonPhase.bgGradient}`}
      />

      {/* Only show celestial bodies on hero section with fade effect */}
      <div 
        className="transition-opacity duration-1000 ease-out"
        style={{
          opacity: scrollY < window.innerHeight ? 1 : Math.max(0, 1 - (scrollY - window.innerHeight) / 200)
        }}
      >
        {/* Celestial Body (Moon) with Smooth Natural Movement */}
        <div
          className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${currentMoonPhase.color}`}
          style={{
            left: `${Math.min(Math.max(celestialX, 5), 85)}%`,
            top: `${Math.min(Math.max(celestialY, 5), 70)}%`,
            transform: `translate(-50%, -50%) scale(${0.9 + scrollProgress * 0.3})`,
            boxShadow: `0 0 40px ${currentMoonPhase.glowColor}, inset -10px -10px 0 rgba(0, 0, 0, 0.3)`,
            transition: 'left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), top 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.3s ease-out',
          }}
        >
            {/* Moon Craters - Phase specific */}
            <>
              {currentMoonPhase.name === 'Blood Moon' && (
                <>
                  <div className="absolute w-4 h-4 bg-red-800 rounded-full top-6 left-5 opacity-60" />
                  <div className="absolute w-3 h-3 bg-red-800 rounded-full top-8 right-6 opacity-40" />
                  <div className="absolute w-2 h-2 bg-red-800 rounded-full bottom-7 left-7 opacity-50" />
                </>
              )}
              
              {currentMoonPhase.name === 'Blue Moon' && (
                <>
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full top-6 left-5 opacity-60" />
                  <div className="absolute w-3 h-3 bg-blue-600 rounded-full top-8 right-6 opacity-40" />
                  <div className="absolute w-2 h-2 bg-blue-600 rounded-full bottom-7 left-7 opacity-50" />
                </>
              )}
              
              {currentMoonPhase.name === 'Harvest Moon' && (
                <>
                  <div className="absolute w-4 h-4 bg-orange-600 rounded-full top-6 left-5 opacity-60" />
                  <div className="absolute w-3 h-3 bg-orange-600 rounded-full top-8 right-6 opacity-40" />
                  <div className="absolute w-2 h-2 bg-orange-600 rounded-full bottom-7 left-7 opacity-50" />
                </>
              )}
              
              {currentMoonPhase.name === 'Full Moon' && (
                <>
                  <div className="absolute w-4 h-4 bg-gray-300 rounded-full top-6 left-5 opacity-60" />
                  <div className="absolute w-3 h-3 bg-gray-300 rounded-full top-8 right-6 opacity-40" />
                  <div className="absolute w-2 h-2 bg-gray-300 rounded-full bottom-7 left-7 opacity-50" />
                </>
              )}
            </>
            
            {/* Sun Shining Beams (Light Mode Only) */}
            {!isDark && (
              <div className="absolute inset-0">
                {/* Bright area effect around sun */}
                <div 
                  className="absolute rounded-full bg-yellow-200 opacity-20 blur-2xl animate-pulse"
                  style={{
                    width: '200%',
                    height: '200%',
                    left: '-50%',
                    top: '-50%',
                  }}
                />
                <div 
                  className="absolute rounded-full bg-orange-200 opacity-15 blur-3xl animate-pulse"
                  style={{
                    width: '300%',
                    height: '300%',
                    left: '-100%',
                    top: '-100%',
                    animationDelay: '1s',
                  }}
                />
                {/* Shining beams */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-40 blur-sm"
                    style={{
                      width: '200%',
                      height: '2px',
                      left: '-50%',
                      top: '50%',
                      transformOrigin: '50% 50%',
                      transform: `rotate(${i * 45}deg)`,
                      animation: `pulse 3s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>
      </div>

      {/* Weather info display */}
      {weather && (
        <div className="absolute top-4 left-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-md rounded-lg px-3 py-2 text-xs text-gray-700 dark:text-gray-300">
          {weather.temperature}°C • {weather.condition}
        </div>
      )}

      {/* Gradient Overlay for Better Text Readability */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ${
          isDark 
            ? 'bg-gradient-to-b from-transparent via-transparent to-gray-900/20' 
            : 'bg-gradient-to-b from-transparent via-transparent to-white/10'
        }`}
      />
    </div>
  );
}