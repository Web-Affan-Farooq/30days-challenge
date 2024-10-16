"use client";

import React from 'react';
import { useState } from 'react';

const Home= () => {
  const [value, setValue] = useState(""); // initializing value with blank string

  const [inputValue, setInputValue] = useState(0); //initializing a variable with value 0;

  const change = (event:React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = event.currentTarget.innerText;// targeting innertext of element
    setValue( value + buttonText);// updating main value
  }
  const calculate = (event:React.MouseEvent<HTMLButtonElement>) => {
    setValue(eval(value));
  }
  const clear = (event:React.MouseEvent<HTMLButtonElement>) => {
    setValue("");
  }

  return (
    <div className='container'>
      <h1>Calculator</h1>
      <div className="keypad">
        <input type="text" name='results' id="results" value={value} readOnly/>
        <br />
        <br />
        <div className="btn-container">
        <button type="button" onClick={change}>1</button>
        <button type="button" onClick={change}>2</button>
        <button type="button" onClick={change}>3</button>
        <button type="button" onClick={change} className='sp-btn'>+</button>
        <button type="button" onClick={change}>4</button>
        <button type="button" onClick={change}>5</button>
        <button type="button" onClick={change}>6</button>
        <button type="button" onClick={change} className='sp-btn'>-</button>
        <button type="button" onClick={change}>7</button>
        <button type="button" onClick={change}>8</button>
        <button type="button" onClick={change}>9</button>
        <button type="button" onClick={change} className='sp-btn'>*</button>
        <button type="button" onClick={change}>0</button>
        <button type="button" onClick={clear} className='sp-btn'>X</button>
        <button type="button" onClick={calculate} className='sp-btn'>=</button>
        <button type="button" onClick={change} className='sp-btn'>/</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
