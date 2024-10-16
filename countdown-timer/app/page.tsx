"use client";

import React, { useState, useRef } from 'react';

function Home() {
  const [count, setCount] = useState<number>(0); 
  const intervalRef = useRef<NodeJS.Timeout | null>(null); 

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value !== "" && Number(value) < 60) {
      setCount(Number(value));
    }
  };

  // Start the countdown
  const startCountdown = () => {
    if (intervalRef.current !== null) return; 


    intervalRef.current = setInterval(() => {
      setCount(prevCount => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(intervalRef.current!); 
          intervalRef.current = null;
          return 0;
        }
      });
    }, 1000);
  };

  // Stop the countdown
  const stopCountdown = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Resume the countdown
  const resumeCountdown = () => {
    if (intervalRef.current === null && count > 0) {
      startCountdown();
    }
  };

  // Reset the countdown
  const resetCountdown = () => {
    stopCountdown(); 
    setCount(0); 
  };

  return (
    <div className='container'>
      <div className="card">
        <h1>Countdown Timer</h1>
        <input 
          type="number" 
          name="input" 
          id="countdown" 
          required 
          placeholder="Enter countdown in seconds" 
          onChange={handleInputChange} 
        />
        <div className="counter">{count}</div>
        <div className="btn-container">
          <button type="button" onClick={startCountdown}>Start</button>
          <button type="button" onClick={stopCountdown}>Stop</button>
          <button type="button" onClick={resumeCountdown}>Resume</button>
          <button type="button" onClick={resetCountdown}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
