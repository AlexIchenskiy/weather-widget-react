import theme from "../../utils/theme.util";
import colors from '../../assets/colors.asset';

function PeriodElement(props) {

  const textStyle = theme ? {color: colors.day_text} : {color: colors.night_text};

  let time;

  if (props.type == "hourly") {
    if (props.mainTime == new Date().getHours()) {
      time = "NOW";
    } else {
      if (props.mainTime > 23) {
        time = props.mainTime - 24 + ":00";
      } else {
        time = props.mainTime + ":00";
      }
    }
  } else {
    if (new Date(props.mainTime).getDate() == new Date().getDate()) {
      time = "TODAY";
    } else {
      time = new Date(props.mainTime).getDate() + '.' + (new Date(props.mainTime).getMonth() + 1);
    }
  }

  let temp = props.mainTemp;

  return (
    <div className = "periodElement">
        <p style={textStyle}>{time}</p>
        <div className = "periodElementIconOuter">
          <img className = "periodElementIcon" src = {props.mainIcon}></img>
        </div>
        <p style={textStyle}>{temp}</p>
    </div>
  );
}
  
export default PeriodElement;
  