import { Apikey } from "../Store/Apikey";

const CityApi = (city) => {

    const apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=10&appid=${Apikey}`;
    const fetchData = async () => {
        try {
            console.log('fetching city lists');
            const response = await fetch(apiUrl);
            if (response.ok) {
                const jsonData = await response.json();
                return  Object.values(jsonData);              
            } else {
                throw new Error("Error fetching data");
            }
        } catch (error) {
            console.log(error);
        }
    };
    return fetchData();
}


export default CityApi