import MainDegrees from "./topsection/maindegrees.component";
import MainInfo from "./topsection/maininfo.component";

function TopSection(props) {

  return (
    <div className = "topSection">
      <MainInfo    city = {props.city} />
      <MainDegrees city = {props.city} />
    </div>
  );
}

export default TopSection;
