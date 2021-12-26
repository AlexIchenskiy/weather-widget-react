import { useEffect, useState } from 'react';

import CitySelector from "./cityselector.component";

import monthName from "../../utils/monthname.component";
import theme from "../../utils/theme.util";
import colors from '../../assets/colors.asset';
import getWeather from "../../utils/getweather.util";

import loading_day from '../../assets/images/loading_day.gif';
import loading_night from '../../assets/images/loading_night.gif';

function MainInfo(props) {
    let date = new Date();

    let city_name = props.city;

    const [weather, setWeather]         = useState(null);
    const [mainWeather, setMainWeather] = useState(null);
    const [mainIcon, setMainIcon]       = useState(null);
    const [isFetched, setIsFetched]     = useState(false);

    const textStyle = theme ? {color: colors.day_text} : {color: colors.night_text};

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
            setMainWeather(weather["weather"][0].main);
            setMainIcon(
                `http://openweathermap.org/img/wn/${weather["weather"][0].icon.slice(0,2)}${theme ? 'd' : 'n'}@2x.png`
            );
        } else {
            setMainWeather("Loading");
            theme ? setMainIcon(loading_day) : setMainIcon(loading_night);
        }
    }, [weather]);

    return (
        <div className = "mainInfo">
            <CitySelector city = {props.city} />
            <p className = "mainInfoSubtitle" 
               style = {textStyle}>
                {monthName + " " + date.getDate() + ', ' + date.getFullYear()}
            </p>

            <div className = "mainInfoIconOuter" 
                 style = {textStyle}>
                <img className = "mainInfoIcon" src = {mainIcon} alt = "O"></img>
            </div>
            
            <p className = "mainInfoText" 
               style = {textStyle}>
                {mainWeather}
            </p>
        </div>
    );
}
  
export default MainInfo;
  