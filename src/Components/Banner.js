import { useContext } from "react";
import { Container } from "@mui/material"
import { WeatherContext } from "../Store/OpenWeatherMap";
import WeatherIcon from "./WeatherIcon";
import WeatherBg from "./WeatherBg";

const Banner = () => {
    const {name,sys,unit,main,weather,time,date} = useContext(WeatherContext);
    const style = {backgroundImage : WeatherBg(weather&&weather[0].icon)}
    return (

        <Container>
            <div className="banner"  style={style}>
                <div>
                    {weather && <WeatherIcon icon={weather[0].icon} /> }
                    <h1>{main && Math.round(main.temp)}<span className='unit'>{unit=="metric"?'°C':'°F'}</span></h1>
                    <p>{name}, {sys&&sys.country}</p>
                </div>
                <div className="text-right">
                    <p>{time}</p>
                    <p>{weather&&weather[0].description}</p>
                </div>
            </div>
        </Container>
    )
}
export default Banner