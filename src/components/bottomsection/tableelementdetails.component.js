import { useEffect, useState } from 'react';

import getWeather from '../../utils/getweather.util';
import windDegToText from '../../utils/winddegtotext.util';

import theme from "../../utils/theme.util";
import sun_day from "../../assets/images/sun_day.png";
import sun_night from "../../assets/images/sun_night.png";
import wind_day from "../../assets/images/wind_day.png";
import wind_night from "../../assets/images/wind_night.png";
import humidity_day from "../../assets/images/humidity_day.png";
import humidity_night from "../../assets/images/humidity_night.png";
import pressure_day from "../../assets/images/pressure_day.png";
import pressure_night from "../../assets/images/pressure_night.png";

import colors from "../../assets/colors.asset";

function TableElementDetails(props) {

  const city_name = props.city;

  const [weather, setWeather]                   = useState(null);
  const [sunset, setSunset]                     = useState(null);
  const [sunrise, setSunrise]                   = useState(null);
  const [pressurehPa, setPressurehPa]           = useState(null);
  const [pressuremmHg, setPressuremmHg]        = useState(null);
  const [humidity, setHumidity]                 = useState(null);
  const [windSpeed, setWindSpeed]               = useState(null);
  const [windDirection, setWindDirection]       = useState(null);
  const [isWeatherFetched, setIsWeatherFetched] = useState(false);

  useEffect(() => {
    getWeather(city_name)
    .then(res => res.json())
    .then(res => {
        setWeather(res);
        setIsWeatherFetched(true);
    })
  }, []);

  useEffect(() => {
    if(weather) {
      let minutes = new Date(weather["sys"]["sunset"]*1000).getMinutes();
      minutes = minutes < 10 ? '0' + minutes : minutes;
      setSunset(new Date(weather["sys"]["sunset"]*1000).getHours() + ":" + minutes);
      setSunrise(new Date(weather["sys"]["sunrise"]*1000).getHours() + ":" + minutes);
      setPressurehPa(weather["main"]["pressure"] + " hPa");
      setPressuremmHg(Math.round(weather["main"]["pressure"] * 0.750062 * 100) / 100 + " \nmmHg");
      setHumidity(weather["main"]["humidity"] + "%");
      setWindSpeed(weather["wind"]["speed"] + " m/s");
      setWindDirection(windDegToText(weather["wind"]["deg"]));
    } else {
      setSunset("O");
      setSunrise("O");
      setPressurehPa("O");
      setPressuremmHg("O");
      setHumidity("O");
      setWindSpeed("O");
      setWindDirection("O");
    }
  }, [weather]);

  let sunIcon      = theme ? sun_day : sun_night;
  let pressureIcon = theme ? pressure_day : pressure_night;
  let humidityIcon = theme ? humidity_day : humidity_night;
  let windIcon     = theme ? wind_day : wind_night;

  const textStyles = theme ? {color: colors.day_text} : {color: colors.night_text};

  return (
    <div className = "tableElementDetails">
      <div className = "tableElementDetailsSun">
        <p style = {textStyles}>{sunrise}</p>
        <div className = "tableElementDetailsIconOuter">
          <img className = "tableElementDetailsIcon" src = {sunIcon} alt = 'sun' ></img>
        </div>
        <p style = {textStyles}>{sunset}</p>
      </div>

      <div className = "tableElementDetailsPressure">
        <p style = {textStyles}>{pressurehPa}</p>
        <div className = "tableElementDetailsIconOuter">
          <img className = "tableElementDetailsIcon" src = {pressureIcon} alt = 'pressure' ></img>
        </div>
        <p className = "tableElementDetailsPressuremmHg" style = {textStyles}>{pressuremmHg}</p>
      </div>

      <div className = "tableElementDetailsHumidity">
        <p style = {textStyles}>Humidity</p>
        <div className = "tableElementDetailsIconOuter">
          <img className = "tableElementDetailsIcon" src = {humidityIcon} alt = 'humidity' ></img>
        </div>
        <p style = {textStyles}>{humidity}</p>
      </div>

      <div className = "tableElementDetailsWind">
        <p style = {textStyles}>{windSpeed}</p>
        <div className = "tableElementDetailsIconOuter">
          <img className = "tableElementDetailsIcon" src = {windIcon} alt = 'wind' ></img>
        </div>
        <p style = {textStyles}>{windDirection}</p>
      </div>
    </div>
  );
}
  
export default TableElementDetails;
  