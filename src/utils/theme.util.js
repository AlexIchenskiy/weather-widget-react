import period from './getperiod.util';

//1 = day, 0 = night

let theme;

switch(period) {
    case 3:
        theme = 1;
        break;
    default:
        theme = 0;
        break;
}

export default theme;