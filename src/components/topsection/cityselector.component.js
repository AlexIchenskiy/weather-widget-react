import { useEffect, useState } from 'react';

import theme from '../../utils/theme.util';
import colors from '../../assets/colors.asset';

function CitySelector(props) {

    const [city, setCity] = useState(props.city);

    return (
        <div className = "citySelector">
            <p className = "mainInfoTitle" style = {theme ? {color: colors.day_text} : {color: colors.night_text}}>
                {city}
            </p>
        </div>
    );
}

export default CitySelector;
  