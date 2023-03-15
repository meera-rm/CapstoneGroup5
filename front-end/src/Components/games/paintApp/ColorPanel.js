// import React, { useState } from "react";
// import "./styles.css";

// const ColorPanel = () => {
//   const [brushWidth, setBrushWidth] = useState(1);
//   const [selectedColor, setSelectedColor] = useState("black");

//   const changeColors = (event) => {
//     const selectedColor = event.target.id;
//     setSelectedColor(selectedColor);
//   };

//   const linebarWidth = () => {
//     const input = document.getElementById("myRange");
//     const width = input.value;
//     setBrushWidth(width);
//   };

//   return (
//     <div className="panel">
//       <div id="left-panel">
//         <div className="color-panel">
//           <div
//             className="palette red"
//             id="red"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette red1"
//             id="red1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette red2"
//             id="red2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette orange"
//             id="orange"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette orange1"
//             id="orange1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette orange2"
//             id="orange2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette yellow"
//             id="yellow"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette yellow1"
//             id="yellow1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette yellow2"
//             id="yellow2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette green"
//             id="green"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette green1"
//             id="green1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette green2"
//             id="green2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette blue"
//             id="blue"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette blue1"
//             id="blue1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette blue2"
//             id="blue2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette indigo"
//             id="indigo"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette indigo1"
//             id="indigo1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette indigo2"
//             id="indigo2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette purple"
//             id="purple"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette purple1"
//             id="purple1"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette purple2"
//             id="purple2"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette black"
//             id="black"
//             onClick={changeColors}
//           ></div>
//           <div
//             className="palette black1"
//             id="black1"
//             onClick={changeColors}
//           ></div>
