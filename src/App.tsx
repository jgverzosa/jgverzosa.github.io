import React, { useEffect, useState } from 'react';
import './App.css';
import Typewriter from './component/Typewriter/Typewriter';
import TagManager from 'react-gtm-module';
import Face from './component/Avatar/Face';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [isLoaded, setIsLoaded] = useState(false);

  const getThemeByTime = (): 'light' | 'dark' => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    // Light theme: 6 AM to 6 PM (6-18)
    // Dark theme: 6 PM to 6 AM (18-6)
    return (currentHour >= 6 && currentHour < 18) ? 'light' : 'dark';
  };

  useEffect(() => {
    TagManager.initialize({ gtmId: 'G-WTN3B2WCQ7' });
    
    // Check if user has a saved theme preference, otherwise use time-based theme
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      // Use automatic time-based theme for first visit
      const autoTheme = getThemeByTime();
      setTheme(autoTheme);
      document.documentElement.setAttribute('data-theme', autoTheme);
      localStorage.setItem('theme', autoTheme);
    }

    // Add loaded state for animations
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Track theme changes (if gtag is available)
    if ((window as any).gtag) {
      (window as any).gtag('event', 'theme_change', {
        theme: newTheme
      });
    }
  };



  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const timeOfDay = currentHour < 12 ? 'morning' : currentHour < 18 ? 'afternoon' : 'evening';

  const words = [
    "Good " + timeOfDay + "!", 
    "I'm Jomar", 
    "Nice to meet you"
  ]
  
  // Generate particles
  const particles = Array.from({ length: 9 }, (_, i) => (
    <div key={i} className="particle" />
  ));

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      {/* Floating particles */}
      <div className="particles">
        {particles}
      </div>
      
      {/* Theme controls */}
      <div className="theme-controls">
        <button 
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>

      <header className="App-header">
        <div className="avatar-container">
          <Face />
        </div>
        <div className="typewriter-container">
          <Typewriter texts={words} />
        </div>
      </header>
    </div>
  );
}

export default App;
