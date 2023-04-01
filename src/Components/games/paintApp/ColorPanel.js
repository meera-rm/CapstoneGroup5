
import React, { useState, useRef, useEffect } from "react";
// import { saveAs } from "file-saver";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEraser } from "@fortawesome/free-solid-svg-icons";
// import "./styles.css";

// const ColorPanel = ({ onColorChange, onEraserClick }) => {
const ColorPanel = () => {
    const [colors, setColors] = useState([
        // "red"{background:"red", color:"white"},
        // {"red1":"#F16161"},
        // "red2",
        // "orange",
        // "orange1",
        // "orange2",
        // "yellow",
        // "yellow1",
        // "yellow2",
        // "green",
        // "green1",
        // "green2",
        // "blue",
        // "blue1",
        // "blue2",
        // "indigo",
        // "indigo1",
        // "indigo2",
        // "purple",
        // "purple1",
        // "purple2",
        // "black",
        // "black1",
        // "black2"
    ]);

    const handleColorClick = (color) => {
          setColors(color);
    };

    return (
        <div className="color-panel">
            {colors.map((color) => (
               <div width={50} height={50} 
                className={`palette ${color}`}
                key={color}
                onClick={() => handleColorClick(color)}
                ></div>
            ))}
            {/* <div className="palette white" onClick={onEraserClick}>
                <FontAwesomeIcon icon={faEraser} />
            </div> */}
         </div> 
        

       
    )
};
export default ColorPanel;





//  {/* const BrushWidth = ({ lineWidth, onLineWidthChange }) => {
//             const handleLineWidthChange = (event) => {
//             const value = event.target.value;
//             onLineWidthChange(value);
//         }; */}

     
//        {/* <div id="brushWidth">
//             <p>Brush Width</p>
//            <form className="input-form">
//               <input
//                 type="range"
//                 id="myRange"
//                 name="amountRange"
//                 value={lineWidth}
//                 min="1"
//                 max="50"
//                 onInput={handleLineWidthChange}
//                 onClick={handleLineWidthChange}
//              />
//         <input
//         type="number"
//         name="amountInput"
//         min="1"
//         max="50"
//         value={lineWidth}
//         onInput={handleLineWidthChange}
//         />
//         </form>
//         <br />
//         </div> */}