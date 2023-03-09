import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

const Typewriter: React.FC<Props> = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      currentText += text[currentIndex];
      setDisplayText(currentText);
      currentIndex++;

      if (currentIndex === text.length) {
        clearInterval(intervalId);
      }
    }, 70);

    return () => clearInterval(intervalId);
  }, [text]);

  return <h1>{displayText}</h1>;
};

export default Typewriter;
