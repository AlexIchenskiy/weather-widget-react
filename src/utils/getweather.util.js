export default async function getWeather(city_name) {
    const api_key = process.env.REACT_APP_API_KEY;

    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${api_key}`);
}