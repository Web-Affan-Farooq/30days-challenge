"use client";
import React, {useEffect, useState } from 'react';
import "../styles/globals.css";
import Card from './Card';
const Page = () => {
    const [cityName, setcityName] = useState("");
    
    const [searchResults, setsearchResults] = useState<React.ReactElement>(<p className='center'>no searches...</p>);

    const getData = async () => {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}`);
        if(!response.ok) {
            setsearchResults(<p className='center'>Please enter a valid city name and also check the typo .</p>)
        }
        const requiredData = await response.json();
        
        setsearchResults(<Card nameOfCity={cityName} icon={`https:${requiredData.current.condition.icon}`} smallText={requiredData.current.condition.text} feel_1={requiredData.current.feelslike_c} feel_2={requiredData.current.feelslike_f} uvIndex={requiredData.current.uv} temp_1={requiredData.current.temp_c} temp_2={requiredData.current.temp_f} humidity={requiredData.current.humidity} windSpeed_1={requiredData.current.wind_kph} windSpeed_2={requiredData.current.wind_mph}/>)
    }
    // getData();
    return (
        // <div>
        //     <button type="button" onClick={getData}>get data</button>
        //     <img src={data} alt="" />
        // </div>
        <div>
            <div className='container'>
                <h1>Weather app</h1>
                <div>
                    <input type="text" name='cityName' id="city-name" placeholder='Search city' onChange={(e) => {
                        setcityName(e.target.value.trim())
                    }}/>
                    &nbsp;
                    <button type="button" className='search-btn' onClick={getData}>Search</button>
                </div>
            </div>
            <div>
                <br /><br /><br /><br /><br />
                <br />
                {searchResults}
            </div>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Page;