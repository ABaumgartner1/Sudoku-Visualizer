import React, {useState} from "react";
import GridItem from "./GridItem";

function App() {
    const board = [     [0,0,7,0,3,0,2,9,1],
                        [0,0,9,7,1,2,8,0,0],
                        [0,2,0,0,0,9,7,5,6],
                        [6,0,5,0,0,0,0,7,0],
                        [3,1,0,0,0,0,0,0,0],
                        [0,0,0,4,0,0,0,0,0],
                        [0,0,0,0,6,1,4,0,0],
                        [0,0,6,5,0,0,1,3,9],
                        [0,0,0,0,0,0,0,0,0]
    ];

    const [selectedCells, setSelectedCells] = useState(board.map((row, rowIndex) => row.map((cell, colIndex) => false)));
    const [cellSelected, setCellSelected] = useState();

    function selectCell(id) {
        // setSelectedCells(board.map((row, rowIndex) => row.map((cell, colIndex) => false)));
        // var tempArray = selectedCells;
        // tempArray[row][col] = true;
        // setSelectedCells(tempArray);
        if (cellSelected){
            document.getElementById(cellSelected).removeAttribute("selected");
            document.getElementById(cellSelected).style.backgroundColor="";

            document.getElementById(id).setAttribute("selected","true");
            document.getElementById(id).style.backgroundColor="#ADD8E6";
            setCellSelected(id);
        } else {
            document.getElementById(id).setAttribute("selected","true");
            document.getElementById(id).style.backgroundColor="#ADD8E6";
            setCellSelected(id);
        }
    }

    return (
        <div className="grid-container">{board.map((row, rowIndex) => row.map((cell, colIndex) => <GridItem selectCell={selectCell} selectedCells={selectedCells} id={rowIndex+""+colIndex} row={rowIndex} col={colIndex} value={cell} />))}</div>
    );
}

export default App;