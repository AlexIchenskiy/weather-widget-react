import { useEffect, useState } from 'react';

import TableCaptionElement from './tablecaptionelement.component';

import theme from "../../utils/theme.util";
import colors from "../../assets/colors.asset";

function TableCaption(props) {

  const [selected, setSelected] = useState(0);

  let handleSelected = (i) => {
    if (i != selected) {
      setSelected(i);
      props.handleSelectedElement(selected);
    }
  }

  let handleSelectedElement = (i) => {
      props.handleSelectedElement(selected);
  }

  useEffect(() => {
    handleSelectedElement();
  }, [selected])

  const textStyle   = theme ? {color: colors.day_text} : {color: colors.night_text};
  const borderStyle = theme ? {borderColor: colors.day_text} : {borderColor: colors.night_text};

  const elementsText  = ['Hourly', 'Daily', 'Details'];
  const elementsWidth = [90, 70, 90];
  const elementsLeft  = [25, 135, 225];

  const captionBorderStyle = Object.assign(
    theme ? {backgroundColor: colors.day_text} : {backgroundColor: colors.night_text},
    {width: elementsWidth[selected]},
    {left: elementsLeft[selected]},
  );

  let elements = [];

  for (let i = 0; i < elementsText.length; ++i) {
    elements.push(
      <TableCaptionElement text             = {elementsText[i]} 
                           textStyle        = {textStyle} 
                           key              = {i}
                           selected         = {i}
                           handleSelected   = {handleSelected} />
    );
  }

  return (
    <div className = "tableCaption" 
          style = {borderStyle}>
      <div className = "tableCaptionBorder" style = {captionBorderStyle}></div>
      {elements}
    </div>
  );
}
  
export default TableCaption;
  