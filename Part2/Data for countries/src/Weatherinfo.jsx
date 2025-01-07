import React from "react";

const Weatherinfo = ({weather,name}) => {
  if(weather.main){
    return (
        <div>
          <h2>Weather in {name}</h2>
          <p>temprature {weather.main.temp} Celcius</p>
          <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} />
          <p>wind {weather.wind.speed} m/s</p>
        </div>
      );
  }else{
    return(
        <p>Loading...</p>
    )
  }
};

export default Weatherinfo;
