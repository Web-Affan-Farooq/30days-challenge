"use client";

import React, { useState } from 'react';

function Page() {
  const [guessNumber, setGuessNumber] = useState<number | undefined>();
  const [requiredNumber] = useState<number>(Math.floor(Math.random() * 10 + 1)); 
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>("");

  const handleGuess = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGuessNumber(Number(event.target.value));
  }

  const guessTheNumber = () => {
    setCount(prevCount => prevCount + 1);

    if (guessNumber === requiredNumber) {
      setMessage("Hurray! You've won");
    } else {
      setMessage(`Try again! You guessed ${guessNumber}`);
    }
  }

  return (
    <div className='container'>
      <div className="card">
        <h1>Number Guessing Game</h1>
        <p>Enter a number between 1 and 10</p>
        <input 
          type="number" 
          name="number" 
          id="number" 
          required 
          placeholder="Enter number" 
          onChange={handleGuess} 
        />
        <br />
        <br />
        <button 
          type="button" 
          className="guess-button" 
          onClick={guessTheNumber}
        >
          Guess
        </button>
        <br />
        <br />
        <div>{message}</div>
        <br />
        <div>Attempts: {count}</div>
      </div>
    </div>
  );
}

export default Page;