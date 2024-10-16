"use client";
import React, { useState } from 'react';

const Home = () => {
  const [characters, setcharacters] = useState<number>(0);
  const [words, setwords] = useState<number>(0);

  const handleCount = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const calculateWords = event.target.value.split(" ").length;
    const calculateCharacters = event.target.value.split("").length;
    setwords(calculateWords);
    setcharacters(calculateCharacters)
  }
  return (
    <div className='container'>
      <div className="card">
        <h1>Word counter</h1>
        <textarea name="text" id="text" onChange={handleCount} placeholder='Enter your text'></textarea>
        <br />
        <div className='info-container'>
          <p className='bold'>Words : {words}</p><p className='bold'>Characters : {characters}</p>
        </div>
      </div>
    </div>
  )
}

export default Home;