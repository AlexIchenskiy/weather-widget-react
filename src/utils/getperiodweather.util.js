export default async function getPeriodWeather(lat, lon, type) {
    const api_key = process.env.REACT_APP_API_KEY;

    if (type == "hourly") {
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&appid=${api_key}`);
    } else {
        return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${api_key}`);
    }
}