

const CurrentDate = (timezone) => {
    // const {timezone} = useContext(WeatherContext);
      // Get the current date and time
      console.log(timezone);
  const currentDate = new Date();
  const timezoneOffsetSeconds = timezone;
  const shiftedTimeMilliseconds = currentDate.getTime() + (timezoneOffsetSeconds * 1000);
  const shiftedTime = new Date(shiftedTimeMilliseconds);
  const hours = shiftedTime.getUTCHours().toString().padStart(2, "0");
  const twelveHour = hours>12 ? hours-12 : hours;
  const amPm = hours>=12 ? ' PM' : ' AM';
  const minutes = shiftedTime.getUTCMinutes().toString().padStart(2, "0");
  
  var newDateOptions = {
    weekday: "long",
    day: "2-digit",
    month:"short",
    year: "2-digit",
  }

  const newshiftedDate = shiftedTime.toLocaleString("en-US", newDateOptions);
  const newshiftedTime = twelveHour+':'+minutes+amPm;
  return(
    {date:newshiftedDate,time:newshiftedTime}
  )
}
export default CurrentDate