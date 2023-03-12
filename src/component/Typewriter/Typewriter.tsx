import React, { useState, useEffect } from 'react';

const Typewriter: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [continueTyping, setContinueTyping] = useState(true);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!continueTyping) {
      return;
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayText(texts[currentTextIndex].slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= texts[currentTextIndex].length) {
        clearInterval(intervalId);
        setTimeout(() => {
          if ((currentTextIndex + 1) === texts.length) {
            setContinueTyping(false);
          }
          setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        }, 1300);
      }
    }, 70);
    return () => clearInterval(intervalId);
  }, [currentTextIndex, continueTyping, texts]);

  return <h1>{displayText}</h1>;
};

export default Typewriter;
