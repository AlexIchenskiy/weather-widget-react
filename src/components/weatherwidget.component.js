import backgroundImageStyle from '../utils/backgroundimagestyle.util.js';

import TopSection from './topsection.component.js';
import BottomSection from './bottomsection.component.js';

import theme from '../utils/theme.util.js';

function WeatherWidget() {

  function updateWeatherWidget() {
    window.location.reload();
  }

  let city = "Zagreb";

  return (
    <div className = "weatherWidget" style = {backgroundImageStyle}>
        <div className = "weatherWidgetBlur"></div>
        <div className = "weatherWidgetUpdateButton"
           style = {theme ? {borderColor: 'black'} : {borderColor: 'white'}}
           onClick = {() => updateWeatherWidget()}>
        </div>

        <div className = "weatherWidgetInner">
            <TopSection    city = {city} />
            <BottomSection city = {city} />
        </div>
    </div>
  );
}

export default WeatherWidget;
