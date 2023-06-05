import { Wrapper } from '../Assets/wrappers/start'
import { ChevronDoubleUp } from '@styled-icons/bootstrap/ChevronDoubleUp'
import { Link } from 'react-router-dom';
import { Grid, Container } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from '../Store/OpenWeatherMap';
import WeatherIcon from '../Components/WeatherIcon';
import WeatherBg from '../Components/WeatherBg';

const Start = () => {
  const { unit, name, main, timezone, weather,time,date} = useContext(WeatherContext);
  const bgImage = weather && WeatherBg(weather[0].icon)
  
  const bgstyle = {
    backgroundImage: bgImage
  }
  return (
    <Wrapper style={bgstyle}>
      <Container className='h-100' >
        <Grid container spacing={2} className='h-100' alignItems="flex-end" marginTop='0'>
          <Grid item md={7} className='start-data '>
            <h1>{main && Math.round(main.temp)}<span className='unit'>{unit=="metric"?'°C':'°F'}</span></h1>
            <div className='start-dateplace mt-2'>
              <h3>{name}</h3>
              <span>{time} - {date}</span>
            </div>
            <div className='start-cloud '>
              {weather && <WeatherIcon icon={weather[0].icon} /> }
              <span>{weather && weather[0].description}</span> 
            </div>    
          </Grid>     
          <Grid item md={4} xs={12} className='start-btn' textAlign='right' paddingBottom='2rem'>
            <div><ChevronDoubleUp size={100} /></div>
            <Link to='/home'>
              <button>Start</button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  )
}
export default Start