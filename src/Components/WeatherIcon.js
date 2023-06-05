const WeatherIcon = ({icon}) => {
  const  iconUrl = `http://openweathermap.org/img/w/${icon}.png`
  return (
    <img src={iconUrl} alt="weathericon" className="wicon" />
  )
}
export default WeatherIcon