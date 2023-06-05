import { useContext,useEffect,useState } from 'react';
import { Wrapper } from "../Assets/wrappers/homeStyle"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Banner from "../Components/Banner"
import { Grid, Container } from "@mui/material"
import TodayForecast from "../Components/TodayForecast"
import WeekForecast from "../Components/WeekForecast"
import Hourforecast from "../Store/Forecast"
import { WeatherContext } from '../Store/OpenWeatherMap';
import { CloudHaze2, CloudRainHeavy, EyeFill, Water,CloudFill, Snow } from '@styled-icons/bootstrap';

const Home = () => {
  const { main,wind,unit,visibility,rain,snow,coord } = useContext(WeatherContext);
  const [hourState, sethourState] = useState();
  // get time of forecast
  const getTime = (dt) => {
    const date = new Date(dt);
    const hours = date.getHours();
    const Day = date.toLocaleDateString(  'en-us', { weekday: 'long' });
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const amPm = hours >= 12 ? 'PM' : 'AM';
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Add leading zero if necessary
    const formattedTime = twelveHour + ':' + minutes + ' ' + amPm;
    const formattedDate = date.getDate();
    return [formattedTime, formattedDate, Day];
  }
  useEffect(() => {
    Hourforecast(coord.lat, coord.lon, unit).then((res) => {
      sethourState(res);
    })
  }, [coord, unit]);

  return (
    <Wrapper>
      <Header />
      <Banner />
      <Container className="homeBody">
        <Grid container spacing={2} marginTop="10px">
          <Grid item md={12}>
            <div className="todayData">
              <div>
                <CloudFill size="40px" />
                <div>Real feel<br/>  <span>{main && Math.round(main.feels_like)}{unit=="metric"?'°C':'°F'}</span></div>
              </div>
              <div>
                <Water size="40px" />
                <div>Humidity<br/>  <span>{main && main.humidity}%</span></div>
              </div>
              <div>
                <EyeFill size="40px" />
                <div>Visibility<br/>  <span>{visibility && visibility}km</span></div>
              </div>
              <div>
                <CloudHaze2 size="40px" />
                <div>Wind<br/>  <span>{wind && wind.speed}{unit=="metric"?'meter/s':'miles/h'}</span></div>
              </div>
              {rain &&
              <div>
                <CloudRainHeavy size="40px" />
                <div>Rain<br/>  <span>{ rain['1h']}mm</span></div>
              </div>
              }
              {snow &&
              <div>
                <Snow size="40px" />
                <div>Snow<br/>  <span>{ rain['1h']}mm</span></div>
              </div>
              }
            </div>
          </Grid>

          <Grid item md={12}>
            <TodayForecast  data={hourState} timeFunction={getTime} />
          </Grid>
        </Grid>
        <WeekForecast data={hourState} timeFunction={getTime} />
      </Container>
      <Footer />
    </Wrapper>
  )
}
export default Home