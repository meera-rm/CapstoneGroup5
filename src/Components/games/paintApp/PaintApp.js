import React, {useState} from 'react';
import  Tools from './Tools';
import  ToolBox from './ToolBox';
import  ColorPanel from './ColorPanel';

const PaintApp=()=>{

    return(
         <div className=' '>
            <h1 className=''>PaintApp</h1>
       
            {/* <div style>={{textAlign:'center'}}Paint App</div> */}
           <Tools/>
          
           <ColorPanel/>
        </div>
    )
}
export default PaintApp;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [tool, setTool] = useState('pencil');
//   const [color, setColor] = useState('#000000');

//   const handleToolChange = (e) => {
//     setTool(e.target.dataset.divbtn);
//   };

//   const handleColorChange = (e) => {
//     setColor(e.target.id);
//   };

//   return (
//     <div className="App">
//       <h1>CANVAS PAINT APP</h1>
//       <div className="container">
//         <div className="toolbar">
//           <button
//             className="btn"
//             type="button"
//             id="pencil"
//             data-divbtn="pencil"
//             title="Pencil"
//             onClick={handleToolChange}
//           >
//             <img
//               className="write-tools"
//               src="https://img.icons8.com/ios-filled/20/000000/pencil--v1.png"
//             />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="crayon"
//             data-divbtn="crayon"
//             title="Crayon"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/glyph-neue/20/000000/border-color.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="line"
//             data-divbtn="line"
//             title="Line"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/ios-filled/20/000000/line.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="points"
//             data-divbtn="points"
//             title="Points"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/material/24/000000/dot-logo.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="fill"
//             data-divbtn="fill"
//             title="Fill"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/material-sharp/20/000000/fill-color.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="rectangle"
//             data-divbtn="rectangle"
//             title="Rectangle"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/fluency-systems-regular/20/000000/rounded-rectangle.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="circle"
//             data-divbtn="circle"
//             title="Circle"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/ios-filled/20/000000/circled.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="ellipse"
//             data-divbtn="ellipse"
//             title="Ellipse"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/ios-filled/20/000000/ellipse-stroked--v2.png" />
//           </button>
//           <button
//             className="btn"
//             type="button"
//             id="eraser"
//             data-divbtn="eraser
//             </button>
//             ))}
//           </div>
//           <div className="panel">
//             <div id="left-panel">
//               <div className="color-panel">
//                 {colors.map((color, index) => (
//                   <div
//                     className={`palette ${color}`}
//                     id={color}
//                     key={index}
//                     onClick={() => changeColors(color)}
//                   ></div>
//                 ))}
//               </div>
//               <div id="size">
//                 <div className="size-heading">Brush Size:</div>
//                 <input
//                   type="range"
//                   min="1"
//                   max="100"
//                   className="slider"
//                   value={size}
//                   onChange={(e) => setSize(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div id="right-panel">
//               <canvas
//                 ref={canvasRef}
//                 onMouseDown={startPainting}
//                 onMouseUp={finishPainting}
//                 onMouseMove={paint}
//               />
//             </div>
//           </div>
//         </div>
//       );
      