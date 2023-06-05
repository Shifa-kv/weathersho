import { useEffect, useState, useContext } from 'react'
import { Box } from "@mui/material"
import Hourforecast from "../Store/Forecast";
import { WeatherContext } from "../Store/OpenWeatherMap";
import WeatherIcon from './WeatherIcon';

const TodayForecast = (props) => {
    const { timezone, unit, dt } = useContext(WeatherContext);
    const [Tooltip, setTooltip] = useState();

    const today = new Date((dt + timezone) * 1000).getUTCDate();
    const OpenTooltip = (index)=>{
        setTooltip(index);
    }
    const CloseTooltip = (index)=>{
        setTooltip(null);
    }


    return (
        <Box className="forecastbox " >
            <h3>Hourly forecast</h3>
            <div className="TodayForecast">
                {props.data && props.data[3].map((res,index) => {
                    if (today === props.timeFunction(res.dt_txt)[1]) {
                        return ( 
                        <div 
                        onMouseOver={()=>OpenTooltip(index)} 
                        onMouseLeave={()=>CloseTooltip(index)} 
                        key={index}
                        >
                            <p className="time">{props.timeFunction(res.dt_txt)[0]}</p>
                            {res.weather && <WeatherIcon icon={res.weather[0].icon} />}
                            <p className="weatherDegree">
                                {Math.round(res.main.temp)}
                                <span className=''>{unit == "metric" ? '°C' : '°F'}</span>
                            </p>
                            {Tooltip===index &&
                                <div className='tooltip'>
                                    <ul>
                                        <li>{res.weather[0].description}</li>
                                        <li>Temp(max) : {Math.round(res.main.temp_max)}{unit == "metric" ? '°C' : '°F'}</li>
                                        <li>Temp(min) : {Math.round(res.main.temp_min)}{unit == "metric" ? '°C' : '°F'}</li>
                                        <li>Real feel : {Math.round(res.main.feels_like)}{unit == "metric" ? '°C' : '°F'}</li>
                                        <li>Humidity : {res.main.humidity}%</li>
                                        <li>Wind(speed) : {res.wind.speed}{unit=="metric"?'m/s':'miles/h'}</li>
                                    </ul>
                                </div>
                            }
                        </div>
                        )
                    }
                    else {
                        return null;
                    }
                })
                }

            </div>
        </Box>

    )
}
export default TodayForecast