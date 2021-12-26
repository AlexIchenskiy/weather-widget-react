import sky_00_06 from '../assets/images/sky_00_06.jpg';
import sky_06_12 from '../assets/images/sky_06_12.jpeg';
import sky_12_18 from '../assets/images/sky_12_18.jpg';
import sky_18_00 from '../assets/images/sky_18_00.jpg';

import period from './getperiod.util';

let backgroundImageStyle = {};

switch(period) {
  case 1:
    backgroundImageStyle = {backgroundImage: `url(${sky_00_06})`};
    break;
  case 2:
    backgroundImageStyle = {backgroundImage: `url(${sky_06_12})`};
    break;
  case 3:
    backgroundImageStyle = {backgroundImage: `url(${sky_12_18})`};
    break;
  case 4:
    backgroundImageStyle = {backgroundImage: `url(${sky_18_00})`};
    break;
}

export default backgroundImageStyle;