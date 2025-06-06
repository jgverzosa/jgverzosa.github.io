import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ 
  texts, 
  speed = 70, 
  deleteSpeed = 30, 
  pauseDuration = 1300 
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        if (currentTextIndex === texts.length - 1) {
          // Stay on the last text
          setIsDeleting(false);
        } else {
          setIsDeleting(true);
        }
      }, pauseDuration);
      
      return () => clearTimeout(pauseTimer);
    }

    if (!isDeleting && displayText === currentText) {
      // Finished typing current text
      if (currentTextIndex === texts.length - 1) {
        // Last text, don't delete
        return;
      }
      setIsPaused(true);
      return;
    }

    if (isDeleting && displayText === '') {
      // Finished deleting
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      return;
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, isPaused, currentTextIndex, texts, speed, deleteSpeed, pauseDuration]);

  return (
    <h1 className="typewriter-text">
      {displayText}
      <span className="cursor" aria-hidden="true">|</span>
    </h1>
  );
};

export default Typewriter;
