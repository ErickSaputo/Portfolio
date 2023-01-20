import React, { useEffect, useState } from "react";
import axios from "axios";

const Weather = () => {
    const [weather, setWeather] = useState(null)
    const [input, setInput] = useState([])

        useEffect(() => {
            axios.get("http://api.weatherapi.com/v1/current.json?key=59ab631d36864a20a84130524221912&q=London")
            .then(data => {
                setWeather(data.data);
            })
            .catch(err => console.log(err))
        },[]);
        //Event
        const weatherInput = (e) => {
            setInput(e.target.value)
    }
        const searchWeather = () => {
  
            axios.get(`http://api.weatherapi.com/v1/current.json?key=59ab631d36864a20a84130524221912&q=${input}`)
            .then(data => {
                setWeather(data.data)
                console.log(data.data)
            })
        }

        return(

      <div className="NewWeather">
        {weather && (
            <div className="card">
                <div className="search">
                    <input onChange={weatherInput} type="text" className="search-bar"  placeholder="search"/>
                    <button type="submit" onClick={searchWeather}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"></path><path d="M11.412,8.586C11.791,8.966,12,9.468,12,10h2c0-1.065-0.416-2.069-1.174-2.828c-1.514-1.512-4.139-1.512-5.652,0 l1.412,1.416C9.346,7.83,10.656,7.832,11.412,8.586z"></path></svg></button>
                </div>
                <div className="weather-info">
                  <h1>Weather in {weather.location.name}</h1>
                  <h2>{weather.current.temp_c}° celcius</h2>
                  <div className="condition">
                  <img className="icon" src={weather.current.condition.icon} alt="" />
                  <h3>{weather.current.condition.text}</h3>
                  </div>
                </div>
            </div>
        )}
      </div>
      )
}

export default Weather;