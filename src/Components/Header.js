import { Link } from "react-router-dom";
import { AppBar, Container, Grid, Drawer, TextField } from "@mui/material";
import { Wrapper } from "../Assets/wrappers/headerStyle"
import { Geo, Search } from "@styled-icons/bootstrap";
import { useContext, useState } from "react";
import CityApi from "../Store/CityApi";
import { WeatherContext } from "../Store/OpenWeatherMap";

const Header = () => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [citylist, setcitylist] = useState();
    const [showData, setshowData] = useState(false);
    const { setCoord, coord, setunit } = useContext(WeatherContext);

    const toggleDrawer = () => {
        setOpenDrawer(!openDrawer);
    };

    const handleChange = (e) => {
        if (e.target.value.length > 2) {
            CityApi(e.target.value).then((res) => {
                setcitylist(res);
            })
        }
        else {
            setcitylist(null);
        }

    }
    const handleSelect = (e) => {
        e.preventDefault();
        setCoord({ ...coord, lat: e.target.getAttribute('lat'), lon: e.target.getAttribute('lon') })
        setshowData(false)
    }
    const handleUnitchange = (e)=>{
        setunit && setunit(e.target.value);
        const btn = document.getElementsByName('unitbtn');
        btn.forEach(element => {
            element.classList.remove('active');
        });
        
        e.target.classList.add('active');
    }
    const handleLocate = ()=>{
        navigator.geolocation.getCurrentPosition((position) => {
            const current_lat = position.coords.latitude;
            const current_lon = position.coords.longitude;
            setCoord({ ...coord, lat: current_lat, lon: current_lon });
    
          });
    }



    return (
        <Wrapper>
            <Container>
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item md={6}>
                        <Link to="/"><h4 className="logo">WeatherSho</h4></Link>
                    </Grid>
                    <Grid item md={6} className="headerRight" position="relative">
                        <button name='mylocation' onClick={handleLocate}><Geo size="30px" /></button>
                        <div className="unitSelector">
                            <button name="unitbtn" className="active" value="metric" onClick={handleUnitchange}>°C</button>
                            <button name="unitbtn" value="imperial" onClick={handleUnitchange}>°F</button>
                        </div>
                        <TextField className="searchbar" variant="outlined" placeholder="Search"
                            InputProps={{ endAdornment: <Search />, }}
                            onChange={handleChange}
                            onFocus={() => { setshowData(true) }}
                            onAbort={() => { setshowData(false) }}
                        />
                        {citylist && showData &&
                            <ul className="searchData">
                                {citylist.map((city) => (
                                    <li key={city.lat} lat={city.lat} lon={city.lon} onClick={handleSelect}>
                                        {city.name},{city.state},{city.country}
                                    </li>
                                ))}
                            </ul>
                        }
                        {/* <AppBar position="" className="sidebar">
                            <Menu onClick={toggleDrawer} size="50px" color="#000" />
                        </AppBar>
                        <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer}>
                            <ul>
                                <li><Link to="/home">Home</Link></li>
                                <li><Link to="/">Quit</Link></li>
                            </ul>
                        </Drawer> */}
                    </Grid>
                </Grid>
            </Container>
        </Wrapper>
    )
}
export default Header