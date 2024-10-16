import React, { useEffect, useState } from 'react';
import { FaWind } from "react-icons/fa";
import { WiHumidity } from 'react-icons/wi';
import Image from 'next/image';

interface card {
  nameOfCity:string;
  icon:string;
  smallText:string;
  feel_1:number;
  feel_2:number;
  uvIndex:number;
  temp_1:number;
  temp_2:number;
  humidity:number;
  windSpeed_1:number;
  windSpeed_2:number;
}

const Card = ({ nameOfCity, icon, smallText, feel_1, feel_2, uvIndex, temp_1, temp_2, humidity, windSpeed_1, windSpeed_2 }: card) => {
  const [date, setdate] = useState<Date>(new Date());
    
  useEffect(() => {
      let myInterval = setInterval(() => {
          setdate(new Date());
      }, 1000);
    },[]);

  return (
    <div className='card'>
      {/* <img src={icon} alt="weather icon"/> */}
      <Image src={icon} alt={"weather icon"} width={50} height={50}/>
      <h2><i className="ri-map-pin-fill"></i> {nameOfCity}</h2>&nbsp;&nbsp;<span className="small">{smallText}</span>
      <br />
      <p><i className="fa-regular fa-clock"></i> Today at {date.toLocaleString()}</p>
      <p>Current {Math.floor(temp_1)} <i className="ri-celsius-fill"></i> ({Math.floor(temp_2)}<i className="ri-fahrenheit-fill"></i>)</p>
      <p>Feels like {Math.floor(feel_1)} <i className="ri-celsius-fill"></i> ({Math.floor(feel_2)}  <i className="ri-celsius-fill"></i>)</p>
      <p><i className="ri-sun-line"></i> UV index : {uvIndex}</p>
      <p><WiHumidity size={20} color='white' /> Humidity : {humidity}</p>
      <p><FaWind size={20} color='white' /> Windspeed : {Math.floor(windSpeed_1)} kph ({Math.floor(windSpeed_2)} mph)</p>
    </div>
  )
}
export default Card;