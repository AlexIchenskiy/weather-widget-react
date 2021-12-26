import TableElementDetails from "./tableelementdetails.component";
import TableElementPeriod from "./tableelementperiod.component";

function TableElements(props) {

  let styles;

  if (props.selected == 0) {
      styles = {left: '0px'};
  } else if (props.selected == 1) {
      styles = {left: '-700px'};
  } else {
      styles = {left: '-1400px'};
  }

  return (
    <div className = "tableElementsOuter">
      <div className = "tableElements" style = {styles}>
        <TableElementPeriod  city = {props.city} type = {"hourly"} />
        <TableElementPeriod  city = {props.city} type = {"daily"} />
        <TableElementDetails city = {props.city} />
      </div>
    </div>
  );
}
  
export default TableElements;
  