import React, { useState } from 'react';
import './Tools.css';

 const Tools = () =>{
   

  return (
    <div className="toolbar">
      <button className="btn" type="button" id="pencil" data-divbtn="pencil" title="Pencil">
        <img className="write-tools" src="https://img.icons8.com/ios-filled/20/000000/pencil--v1.png" alt=''/>
      </button>
      <button className="btn" type="button" id="crayon" data-divbtn="crayon" title="Crayon">
        <img src="https://img.icons8.com/glyph-neue/20/000000/border-color.png"  alt=''/>
      </button>
      <button className="btn" type="button" id="line" data-divbtn="line" title="Line">
        <img src="https://img.icons8.com/ios-filled/20/000000/line.png" />
      </button>
      <button className="btn" type="button" id="points" data-divbtn="points" title="Points">
        <img src="https://img.icons8.com/material/24/000000/dot-logo.png" alt=''/>
      </button>
      <button className="btn" type="button" id="fill" data-divbtn="fill" title="Fill">
        <img src="https://img.icons8.com/material-sharp/20/000000/fill-color.png" alt=''/>
      </button>
      <button className="btn" type="button" id="rectangle" data-divbtn="rectangle" title="Rectangle">
        <img src="https://img.icons8.com/fluency-systems-regular/20/000000/rounded-rectangle.png" alt='' />
      </button>
      <button className="btn" type="button" id="circle" data-divbtn="circle" title="Circle">
        <img src="https://img.icons8.com/ios-filled/20/000000/circled.png"  alt=''/>
      </button>
      <button className="btn" type="button" id="ellipse" data-divbtn="ellipse" title="Ellipse">
        <img src="https://img.icons8.com/ios-filled/20/000000/ellipse-stroked--v2.png" alt='' />
      </button>
      <button className="btn" type="button" id="eraser" data-divbtn="eraser" title="Eraser">
        <img src="https://img.icons8.com/ios-glyphs/20/000000/eraser.png" />
      </button>
      <button className="btn" type="button" id="clear" data-divbtn="clear" title="Clear">
        <img src="https://img.icons8.com/ios-filled/20/000000/recurring-appointment.png" alt='' />
      </button>
      <button className="btn" type="button" id="save" data-divbtn="save" title="Save">
        <img src="https://img.icons8.com/material-rounded/25/000000/save.png"  alt=''/>
      </button>
    </div>
  );
}

export default Tools;

//     const [tool, setTool] = useState('pencil');
//     const [color, setColor] = useState('#000000');
  
//     const handleToolChange = (e) => {
//       setTool(e.target.dataset.divbtn);
//     };
  
//     const handleColorChange = (e) => {
//       setColor(e.target.id);
//     }; 

//   return (
//     <div>
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
//             data-divbtn="eraser"
//             title="Eraser"
//             onClick={handleToolChange}
//           >
//             <img src="https://img.icons8.com/ios-filled/20/000000/ellipse-stroked--v2.png" />
//             </button>
        
//           {/* </div> */}
//           <div className="panel">
//             <div className="left-panel">
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
//             <div className="right-panel">
//               <canvas
//                 ref={canvasRef}
//                 onMouseDown={startPainting}
//                 onMouseUp={finishPainting}
//                 onMouseMove={paint}
//               />
//             </div>
//         </div>
//       </div>
//     </div>
//     </div>
//    )
//  }
      
//  export default Tools;
      
      
      
   