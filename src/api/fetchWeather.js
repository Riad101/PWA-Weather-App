import axios from "axios";

const url = 'https://api.openweathermap.org/data/2.5/weather';
const API_key = 'f33a484cf794d08d0148764789aaba32';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(url, {
        params: {
            q: query,
            units: 'metric',
            appId: API_key
        }
    });
    return data;
}

