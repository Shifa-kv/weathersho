import { useContext, useEffect, useState } from 'react'
import { Box } from "@mui/material"
import { WeatherContext } from "../Store/OpenWeatherMap";
import WeatherIcon from './WeatherIcon';


const WeekForecast = (props) => {
  const { timezone, unit, dt } = useContext(WeatherContext);
  const [state, setstate] = useState({});
  const today = new Date((dt + timezone) * 1000).getUTCDate();

  // group data according to date
  useEffect(() => {
    const dateGroup = {};
    props.data && props.data[3].forEach((result) => {
      
      const newdate = new Date(result.dt_txt);
      const dateValue = newdate.getDate();
      const date = newdate.toLocaleDateString('en-us');

      if (dateValue !== today) {
        if (dateGroup[date]) {
          dateGroup[date].push(result);
        }
        else {
          dateGroup[date] = [result];
        }
      }
    });
    setstate(dateGroup);
  }, [props.data]);


  return (
    <Box className="forecastbox" marginTop="30px">
      <h3>Weekly forecast</h3>


      {Object.entries(state) && Object.entries(state).map((res, index) => {
        return (
          <div className="WeekForecast" key={index}>
            <div className='weekDay'>{props.timeFunction(res[0])[2]}</div>
            {res[1].map((hourData, i) => (
              <div key={i}>
                <p className="time">{props.timeFunction(hourData.dt_txt)[0]}</p>
                {hourData.weather && <WeatherIcon icon={hourData.weather[0].icon} />}
                <p className="weatherDegree">
                  {hourData.main && Math.round(hourData.main.temp)}
                  <span className=''>{unit == "metric" ? '°C' : '°F'}</span>
                </p>
              </div>
            )
            )}
          </div>

        )
      })}

    </Box>

  )
}
export default WeekForecast