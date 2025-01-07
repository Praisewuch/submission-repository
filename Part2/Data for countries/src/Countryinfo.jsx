import React, { useEffect, useState } from "react";
import weatherdat from './services/fetch_data';
import Weatherinfo from "./Weatherinfo";

const Countryinfo = ({ item }) => {
     const [weather, setWeather] = useState([])
     const lang = Object.values(item.languages)

     useEffect(() => {
      weatherdat.getWeather(item.name.common)
      .then(forcast => setWeather(forcast))
     })
     console.log(weather)

  return (
    <div>
      <h1>{item.name.common}</h1>
      <p>
        <span>capital {item.capital}</span>
        <br />
        <span>area {item.area}</span>
      </p>

      <b>languages:</b>
       <p>
       {lang.map((lan,key) => (
            <li key={key}>{lan}</li>
        ))}
       </p>
       <img src={item.flags.png}/> 
       <Weatherinfo weather = {weather} name = {item.name.common}/>
    </div>
  );
};

export default Countryinfo;
