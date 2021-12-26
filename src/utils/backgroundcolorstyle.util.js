import period from './getperiod.util';

let backgroundColorStyle = {};

switch(period) {
    case 1:
        backgroundColorStyle = {background: "linear-gradient(to top, #2f3755, #24273a)"};
        break;
    case 2:
        backgroundColorStyle = {background: "linear-gradient(to bottom, #6c517e,#fe9d59)"};
        break;
    case 3:
        backgroundColorStyle = {background: "linear-gradient(to top, #a2bdce, #54a4d9)"};
        break;
    case 4:
        backgroundColorStyle = {background: "linear-gradient(to bottom, #87626a, #f9b02a)"};
        break;
}

export default backgroundColorStyle;