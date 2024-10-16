"use client";
import React, { useState } from 'react';

const Home = () => {
  const [height, setheight] = useState<number>();
  const [weight, setweight] = useState<number>();
  const [Bmi, setBmi] = useState<number>();
  const [message, setmessage] = useState<string>();

  const handleCalculation = () => {
    if (weight && height) {
      const calculatedBmi = Number(weight) / (Number(height) * Number(height));
      setBmi(calculatedBmi);

      if (calculatedBmi < 18.5) {
        setmessage("Underweight");
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setmessage("Normal weight");
      } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
        setmessage("Overweight");
      } else {
        setmessage("Obesity");
      }
    }
  };

  return (
    <div>
      <div className="card">
        <h1>BMI Calculator App</h1>
        <input
          type="number"
          name="weight"
          id="weight"
          placeholder="Enter your weight in kgs"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setweight(Number(e.target.value))}
        />
        <br />
        <br />
        <input
          type="number"
          name="height"
          id="height"
          placeholder="Enter your height in meters"
          required
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setheight(Number(e.target.value))}
        />
        <br />
        <br />
        <button type="button" className="calculate" onClick={handleCalculation}>
          Calculate BMI
        </button>
        {message && <p>Category: {message}</p>}
      </div>
    </div>
  );
};

export default Home;
