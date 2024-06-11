import React, { useState, useEffect } from 'react';

const Typewriter = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    let index = 0;
    let interval;

    // Function to start generating text
    const startGenerating = () => {
      interval = setInterval(() => {
        setDisplayText((prevText) => prevText + text[index]);
        index++;

        // Stop interval when all text is displayed
        if (index === text.length) {
          clearInterval(interval);
          setIsGenerating(false);
        }
      }, 10);
    };

    // Function to reset text
    const resetText = () => {
      clearInterval(interval);
      setDisplayText('');
      setIsGenerating(false);
    };

    // Check if generating text is in progress
    if (isGenerating) {
      startGenerating();
    }

    // Cleanup function
    return () => {
      clearInterval(interval);
    };
  }, [text, isGenerating]);

  return (
    <div>
      {/* Display text */}
      <div>{displayText}</div>
      {/* Buttons */}
      <button onClick={() => setIsGenerating(true)} disabled={isGenerating}>Start Generating</button>
      <button onClick={() => setDisplayText('')}>Reset</button>
    </div>
  );
};

export default Typewriter;
