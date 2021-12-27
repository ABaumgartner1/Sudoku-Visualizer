import React, {useState} from "react";

function GridItem(props) {
    const [value, setValue] = useState(props.value);
    function checkCorner() {
        switch (props.id) {
            case ("00"):
                return "15% 0 0 0";
            case ("08"):
                return "0 15% 0 0";
            case ("80"):
                return "0 0 0 15%";
            case ("88"):
                return "0 0 15% 0";
            default:
                return "0 0 0 0";
        }
    }

    function checkEdge() {
        var border=["1px", " 1px", " 1px", " 1px"];

        if (props.row === 0) {
            border[0] = "4px";
        } else if (props.row === 2 || props.row === 5 || props.row === 8) {
            border[2] = " 4px";
        }

        if (props.col === 0) {
            border[3] = " 4px";
        } else if (props.col === 2 || props.col === 5 || props.col === 8) {
            border[1] = " 4px";
        }

        return border[0]+border[1]+border[2]+border[3];
    }

    function updateValue(event) {
        if (isFinite(event.key) && event.key !== "0") {
            setValue(event.key);
        } else if (event.key === "Backspace") {
            setValue(null);
        }
    }

    const borderRad = checkCorner();
    const borderW = checkEdge();

    return <div onKeyDown={updateValue} tabIndex="0" onClick={() => {return props.selectCell(props.id);}} id={props.id} style={ {'--animation-order': props.row+props.col, borderRadius: borderRad, borderWidth: borderW} } className="grid-item"><p>{value === 0 ? null : value}</p></div>
}

export default GridItem;