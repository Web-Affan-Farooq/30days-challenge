"use client";

import React, { useState } from 'react';

const Home = () => {
  const [joke, setJoke] = useState("");
  const [punchline, setPunchline] = useState("");
  const [completeJoke, setCompleteJoke] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      if (!response.ok) {
        throw new Error("Failed to fetch joke");
      }
      
      const apiData = await response.json();
      console.log(apiData);
      setJoke(apiData.setup);
      setPunchline(apiData.punchline);
      setCompleteJoke(`${apiData.setup} - ${apiData.punchline}`);
    } catch (err) {
      console.error("Error while fetching", err);
    }
  };

  return (
    <div className="container">
      <h1>Random Joke Generator</h1>
      <div className="joke">
        <p>{completeJoke}</p>
      </div>
      <button type="button" onClick={getData}>😂 Generate Joke</button>
    </div>
  );
};

export default Home;