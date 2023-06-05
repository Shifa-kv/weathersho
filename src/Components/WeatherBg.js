import clearsky from '../Assets/images/bg/clearsky.jpg';
import scatteredcloud from '../Assets/images/bg/scattered-clouds.jpg'
import brokencloud from '../Assets/images/bg/broken-clouds.jpg'
import sky from '../Assets/images/bg/sky.jpg'
import fewclouds from '../Assets/images/bg/fewclouds.jpg'
import mist from '../Assets/images/bg/mist.jpg'
import showerrain from '../Assets/images/bg/shower-rain.jpg'
import rain from '../Assets/images/bg/rain.jpg'
import snow from '../Assets/images/bg/snow.jpg'
import thunderstorm from '../Assets/images/bg/thunderstorm.jpg'
const WeatherBg = (code) => {
    const gradient = '90deg, rgba(57,77,96,1) 0%, rgba(148,187,233,0.2377684350107231) 100%';
    var bg;
    switch (code) {
        case '01d':
        case '01n':
            bg = `url(${clearsky})`
            break;
        case '02d':
        case '02n':
            bg = `url(${fewclouds})`
            break;
        case '03d':
        case '03n':
            bg = `url(${scatteredcloud})`
            break;
        case '04d':
        case '04n':
            bg = `url(${brokencloud})`
            break;
        case '09d':
        case '09n':
            bg = `url(${showerrain})`
            break;
        case '10d':
        case '10n':
            bg = `url(${rain})`
            break;
        case '11d':
        case '11n':
            bg = `url(${thunderstorm})`
            break;
        case '13d':
        case '13n':
            bg = `url(${snow})`
            break; 
        case '50d':
        case '50n':
            bg = `url(${mist})`
            break;
        default:
            bg = `url(${sky})`
            break;
    }
    const background = `linear-gradient(${gradient}),${bg}`;

    return background
}
export default WeatherBg