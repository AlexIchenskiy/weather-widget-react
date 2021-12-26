import { useEffect, useState } from "react";

import getWeather from "../../utils/getweather.util";
import theme from "../../utils/theme.util";
import colors from "../../assets/colors.asset";

function MainDegrees(props) {

    let city_name = props.city;

    const [weather, setWeather]                     = useState(null);
    const [mainDegrees, setMainDegrees]             = useState(null);
    const [feelsLikeDegrees, setFeelsLikeDegrees]   = useState(null);
    const [minDegrees, setMinDegrees]               = useState(null);
    const [isFetched, setIsFetched]                 = useState(false);

    useEffect(() => {
        getWeather(city_name)
        .then(res => res.json())
        .then(res => {
            setWeather(res);
            setIsFetched(true);
        })
    }, []);

    useEffect(() => {
        if (weather) {
            setMainDegrees(Math.round(weather["main"].temp - 273.15) + "°");
            setFeelsLikeDegrees(Math.round(weather["main"].feels_like - 273.15) + "°")
            setMinDegrees(Math.round(weather["main"].temp_min - 273.15) + "°")
        } else {
            setMainDegrees('O')
            setFeelsLikeDegrees('O')
            setMinDegrees('O')
        }
    }, [weather]);

    return (
      <div className = "mainDegrees">
          <div className = "mainDegreesUp">
              <p style = {theme ? {color: colors.day_text} : {color: colors.night_text}}>{mainDegrees}</p>
          </div>
          <div className = "mainDegreesBottom">
              <p style = {theme ? {color: colors.day_text} : {color: colors.night_text}}>
                  {feelsLikeDegrees}
              </p>
              <p style = {theme ? {color: colors.day_text} : {color: colors.night_text}}>
                  {"/"}
              </p>
              <p style = {theme ? {color: colors.day_text_cold} : {color: colors.night_text_cold}}>
                  {minDegrees}
              </p>
          </div>
      </div>
    );
}
  
export default MainDegrees;
  