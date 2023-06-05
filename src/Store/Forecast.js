import { useContext, useEffect } from "react";
import { Apikey } from "./Apikey";

const Hourforecast = (lat,lon,unit) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${unit}&appid=${Apikey}`;

    const fetchData = async () => {
        try {
            console.log('fetching');
            const response = await fetch(apiUrl);
            if (response.ok) {
                const jsonData = await response.json();
                return Object.values(jsonData);
            } else {
                throw new Error("Error fetching data");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return fetchData();
}

export default Hourforecast;
