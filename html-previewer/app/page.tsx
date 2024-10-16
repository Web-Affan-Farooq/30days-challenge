"use client";

import React, { useState } from 'react';

const Home = () => {
  const [html, sethtml] = useState(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
    <h1>fhkjfhjkhdfjkd fdfjshdfkjhdf dfjkhdshfd fjkhdfjhdfjhd f</h1>
</body>
</html>`);

  const handleWindow = (event: any) => {
    let newWindow = window.open(window.URLSearchParams.toString(), "_blank");
  }

  return (
    <div className='container'>
      <div className="card">
        <h1>HTML Previewer App</h1>
        <button type="button" className="calculate" onClick={handleWindow}>Run</button>
        <br />
        <br />
        <br />
        <label htmlFor="select from unit">Write some html code</label>
        <br /><br />
        <textarea name="code" id="code" value={html} onChange={(e: any) => {
          sethtml(e.target.value);
        }}>
        </textarea>
      </div>
      <div className="results">
        <iframe src={html}>
        </iframe>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Home;