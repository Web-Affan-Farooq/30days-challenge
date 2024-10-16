"use client";
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [changeFormatDate, setchangeFormatDate] = useState("12 hour format");
  const [date, setDate] = useState<Date>(new Date());
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (changeFormatDate === "12 hour format") {
      setMessage(date?.toLocaleTimeString())
    } else {
      setMessage(date?.toTimeString().slice(0, 8));
    }
  }, [date, changeFormatDate]);

  const changeFormat = (event: React.MouseEvent<HTMLButtonElement>) => {
    setchangeFormatDate(event.currentTarget.innerText);
  }

  return (
    <div className='container'>
      <div className="card">
        <h1>Digital Clock</h1>
        <br />
        <div className="time">{message}</div>
        <br />
        <div className="btn-container">
          <button type="button" onClick={changeFormat}>12 hour format</button>
          <button type="button" onClick={changeFormat}>24 hour format</button>
        </div>
      </div>
    </div>
  );
}

export default Home;