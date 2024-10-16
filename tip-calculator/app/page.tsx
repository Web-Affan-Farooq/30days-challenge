"use client";
import React, { useState } from 'react';

const Home = () => {
  const [amount, setamount] = useState<number>();
  const [tip, setTip] = useState<number>();
  const [message, setmessage] = useState<React.ReactElement>();

  const handleCalculation = (event:React.MouseEvent<HTMLButtonElement>) => {
    console.log(amount);
    console.log(Number(tip) /100);
    // console.log("Tip : ", Number(amount) * Number(tip) /100);
    setmessage(<p>{`Tip : ${Number(amount) * Number(tip) /100}`} Rs /-</p>)
  }

  return (
    <div>
      <div className="card">
        <h1>Tip Calculator App</h1>
        <input
          type="number"
          name="amount"
          id="amount"
          placeholder="Enter your amount"
          required
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setamount(Number(e.target.value))
          }}
        />
        <br />
        <br />
        <input
          type="number"
          name="tip"
          id="tip"
          placeholder="Enter tip in percentage"
          required
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => {
            setTip(Number(e.target.value))
          }}
        />
        <br />
        <br />
        <button type="button" className="calculate" onClick={handleCalculation}>
          Calculate Tip
        </button>
        {message}
      </div>
    </div>
  )
}

export default Home;