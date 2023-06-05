import React, { useState, useEffect } from 'react';
import CurrentDate from './currentDate';
import {Apikey} from './Apikey';


const WeatherContext = React.createContext();
const WeatherProvider = ({ children }) => {

  const defaultCoord = {
    lat: '48.8534',
    lon: '2.3488'
  }
  const [data, setData] = useState(null);
  const [unit, setunit] = useState("metric");
  const [coord, setCoord] = useState(defaultCoord);
  const [date, setDate] = useState();

  // setting user location through geolocation
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const current_lat = position.coords.latitude;
        const current_lon = position.coords.longitude;
        setCoord({ ...coord, lat: current_lat, lon: current_lon });

      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }

  }, []);

  // fetching data from api

  useEffect(() => {
    // const apiKey = '43343';
    const units = unit;

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&units=${units}&appid=${Apikey}`;
    const fetchData = async () => {
      try {
        // console.log(lat);
        const response = await fetch(apiUrl);
        if (response.ok) {
          const jsonData = await response.json();
          setData(jsonData);
          console.log(jsonData);
        } else {
          throw new Error("Error fetching data" + response);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // const interval = setInterval(fetchData, 60000);
    // return () => clearInterval(interval);

  }, [coord.lat, coord.lon, unit]);

  useEffect(() => {
    
      if (data) {
      setDate(CurrentDate(data.timezone));
      }
  }, [data]);
  
  return (
    <WeatherContext.Provider value={{ ...data, unit,setunit,...date,setCoord,coord}}>
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherContext, WeatherProvider };