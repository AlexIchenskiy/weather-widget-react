import { useState } from 'react';

import TableCaption from "./bottomsection/tablecaption.component";
import TableElements from "./bottomsection/tableelements.component";

function BottomSection(props) {

  const [selectedElement, setSelectedElement] = useState(0);

  let handleSelectedElement = (i) => {
    if (i != selectedElement) {
      setSelectedElement(i);
    }
  }

    return (
      <div className = "bottomSection">
        <TableCaption  handleSelectedElement = {handleSelectedElement} />
        <TableElements selected = {selectedElement} city = {props.city} />
      </div>
    );
}
  
export default BottomSection;
  