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
    <h1>Hello world</h1>
</body>
</html>`);

  const handleCode = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
    sethtml(event.target.value);
  }
  return (
    <div>
      <div className="head">
        <h1>HTML Previewer</h1>
        <br />
        <br />
      </div>
      <div className="container">
        <textarea name='code' id='code' value={html} className="notePad" onChange={handleCode}>
          </textarea>
        <iframe className="results" srcDoc={html}></iframe>
      </div>
    </div>
  )
}

export default Home;