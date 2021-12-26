import { useEffect, useState } from 'react';

import PeriodElement from "./periodelement.component";
import getPeriodWeather from "../../utils/getperiodweather.util";
import getWeather from '../../utils/getweather.util';
import theme from "../../utils/theme.util";
import loading_day from '../../assets/images/loading_day.gif';
import loading_night from '../../assets/images/loading_night.gif';

function TableElementPeriod(props) {

    const [periodWeather, setPeriodWeather]       = useState(null);
    const [lat, setLat]                           = useState(null);
    const [lon, setLon]                           = useState(null);
    const [isWeatherFetched, setIsWeatherFetched] = useState(false);
    const [isPeriodFetched, setIsPeriodFetched]   = useState(false);
    const [elements, setElements]                 = useState([]);

    const city_name = props.city;

    useEffect(() => {
        if (elements != elementsPeriod) {
            for (let i = 0; i < 6; i++) {
                let d = new Date();
                elementsPeriod.push(
                    <PeriodElement 
                        key         = {i}
                        type        = {props.type}
                        mainTime    = {props.type == "hourly" ? d.getHours() + i : d.getTime() + i * 86_400_000}
                        mainTemp    = {"O"}
                        mainIcon    = {theme ? loading_day : loading_night} />
                );
                setElements(elementsPeriod);
            }
        }
    }, []);

    useEffect(() => {
        getWeather(city_name)
        .then(res => res.json())
        .then(res => {
            setLat(Math.round(res["coord"].lat * 100) / 100);
            setLon(Math.round(res["coord"].lon * 100) / 100);
            setIsWeatherFetched(true);
        })
    }, []);

    useEffect(() => {
        if(lat && lon) {
            getPeriodWeather(lat, lon, props.type)
            .then(res => res.json())
            .then(res => {
                setPeriodWeather(res);
                setIsPeriodFetched(true);
        })
        }
    }, [lat, lon]);

    let elementsPeriod = [];
    let i = 0;

    useEffect(() => {
        if(periodWeather) {
            let d = new Date();
            elementsPeriod = [];

            periodWeather[props.type].slice(0, 6).map((element) => {
                elementsPeriod  = [...elementsPeriod, <PeriodElement 
                    key         = {i}
                    type        = {props.type}
                    mainTime    = {props.type == "hourly" ? d.getHours() + i : d.getTime() + i * 86_400_000}
                    mainTemp    = {props.type == "hourly" ? Math.round(element["temp"] - 273.15) + "°" : Math.round(element["temp"]["eve"] - 273.15) + "°" }
                    mainIcon    = {`http://openweathermap.org/img/wn/${element["weather"][0].icon.slice(0, 2)}${theme ? 'd' : 'n'}@2x.png`} />];
                i++;
            })
            setElements(elementsPeriod);
        }
    }, [periodWeather]);

    return (
      <div className = "tableElementPeriod">
          {elements}
      </div>
    );
}
  
export default TableElementPeriod;
  