function TableCaptionElement(props) {
    let handleSelected = () => {
        props.handleSelected(props.selected);
    }
    
    return (
        <div onClick = {handleSelected}>
            <p style = {props.textStyle}>{props.text}</p>
        </div>
    );
}
  
export default TableCaptionElement;
  