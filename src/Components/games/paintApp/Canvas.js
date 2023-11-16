
import React, { useState, useRef, useEffect } from 'react';

// const Canvas = () => {
//   const canvasRef = useRef(null);
//   const [context, setContext] = useState(null);
//   const [tool, setTool] = useState('pencil');
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [undoStack, setUndoStack] = useState([]);
//   const [redoStack, setRedoStack] = useState([]);
//   const [strokeColor, setStrokeColor] = useState('#000000'); // Initial stroke color is black
//   const [brushWidth, setBrushWidth] = useState(2); // Initial brush width
//   const [startX, setStartX] = useState(0);
//   const [startY, setStartY] = useState(0);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
//     setContext(ctx);
//   }, []);

//   const startDrawing = (e) => {
//     setIsDrawing(true);
//     setStartX(e.clientX - canvasRef.current.offsetLeft);
//     setStartY(e.clientY - canvasRef.current.offsetTop);
//     if (context) {
//       context.beginPath();
//       context.moveTo(startX, startY);
//     }
//   };

//   const draw = (e) => {
//     if (isDrawing && context) {
//       switch (tool) {
//         case 'pencil':
//         case 'pen':
//         case 'crayon':
//           context.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
//           context.strokeStyle = strokeColor;
//           context.lineWidth = brushWidth;
//           context.stroke();
//           break;
//         case 'line':
//           context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//           context.beginPath();
//           context.moveTo(startX, startY);
//           context.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
//           context.strokeStyle = strokeColor;
//           context.lineWidth = brushWidth;
//           context.stroke();
//           break;
//         case 'square':
//           context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//           const sideLength = Math.abs(startX - (e.clientX - canvasRef.current.offsetLeft));
//           context.fillStyle = strokeColor;
//           context.fillRect(startX, startY, sideLength, sideLength);
//           break;
//         case 'rectangle':
//           context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//           const width = Math.abs(startX - (e.clientX - canvasRef.current.offsetLeft));
//           const height = Math.abs(startY - (e.clientY - canvasRef.current.offsetTop));
//           context.fillStyle = strokeColor;
//           context.fillRect(startX, startY, width, height);
//           break;
//         case 'circle':
//           context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//           const radius = Math.sqrt(
//             Math.pow(e.clientX - canvasRef.current.offsetLeft - startX, 2) +
//             Math.pow(e.clientY - canvasRef.current.offsetTop - startY, 2)
//           );
//           context.beginPath();
//           context.arc(startX, startY, radius, 0, 2 * Math.PI);
//           context.strokeStyle = strokeColor;
//           context.lineWidth = brushWidth;
//           context.stroke();
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   const endDrawing = () => {
//     setIsDrawing(false);
//     if (context) {
//       const canvasData = context.getImageData(
//         0,
//         0,
//         canvasRef.current.width,
//         canvasRef.current.height
//       );
//       setUndoStack([...undoStack, canvasData]);
//       setRedoStack([]);
//     }
//   };

//   const handleUndo = () => {
//     if (undoStack.length > 0) {
//       const lastState = undoStack[undoStack.length - 1];
//       setRedoStack([...redoStack, lastState]);
//       setUndoStack(undoStack.slice(0, -1));
//       context.putImageData(lastState, 0, 0);
//     }
//   };

//   const handleRedo = () => {
//     if (redoStack.length > 0) {
//       const nextState = redoStack[redoStack.length - 1];
//       setUndoStack([...undoStack, nextState]);
//       setRedoStack(redoStack.slice(0, -1));
//       context.putImageData(nextState, 0, 0);
//     }
//   };

//   const handleClear = () => {
//     if (context) {
//       context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
//       setUndoStack([]);
//       setRedoStack([]);
//     }
//   };

//   return (
//     <div>
//       <div className="menu-bar">
//         <input
//           type="color"
//           value={strokeColor}
//           onChange={(e) => setStrokeColor(e.target.value)}
//         />
//         <input
//           type="range"
//           min={1}
//           max={10}
//           value={brushWidth}
//           onChange={(e) => setBrushWidth(parseInt(e.target.value))}
//         />
//         <button onClick={() => setTool('pencil')}>Pencil</button>
//         <button onClick={() => setTool('pen')}>Pen</button>
//         <button onClick={() => setTool('crayon')}>Crayon</button>
//         <button onClick={() => setTool('line')}>Line</button>
//         <button onClick={() => setTool('square')}>Square</button>
//         <button onClick={() => setTool('rectangle')}>Rectangle</button>
//         <button onClick={() => setTool('circle')}>Circle</button>
//         <button onClick={handleUndo}>Undo</button>
//         <button onClick={handleRedo}>Redo</button>
//         <button onClick={handleClear}>Clear</button>

//       </div>
//       <canvas
//         ref={canvasRef}
//         width={800}
//         height={600}
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={endDrawing}
//       />
//     </div>
//   );
// };

const Canvas = () => {
  const canvasRef = useRef(null);
  const [context, setContext] = useState(null);
  const [tool, setTool] = useState('pencil');
  const [isDrawing, setIsDrawing] = useState(false);
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [strokeColor, setStrokeColor] = useState('#000000'); // Initial stroke color is black
  const [brushWidth, setBrushWidth] = useState(2); // Initial brush width
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [toolDrawings, setToolDrawings] = useState({}); // Store drawings for each tool

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    setContext(ctx);
  }, []);

  const startDrawing = (e) => {
    setIsDrawing(true);
    setStartX(e.clientX - canvasRef.current.offsetLeft);
    setStartY(e.clientY - canvasRef.current.offsetTop);
    if (context) {
      context.beginPath();
      context.moveTo(startX, startY);
    }
  };

  const draw = (e) => {
    if (isDrawing && context) {
      const toolContext = toolDrawings[tool] || context;
      
      switch (tool) {
        case 'pencil':
        case 'pen':
        case 'crayon':
          toolContext.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
          toolContext.strokeStyle = strokeColor;
          toolContext.lineWidth = brushWidth;
          toolContext.stroke();
          break;
        case 'line':
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          context.beginPath();
          context.moveTo(startX, startY);
          context.lineTo(e.clientX - canvasRef.current.offsetLeft, e.clientY - canvasRef.current.offsetTop);
          context.strokeStyle = strokeColor;
          context.lineWidth = brushWidth;
          context.stroke();
          break;
        case 'square':
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          const squareContext = toolDrawings['square'] || context;
          const sideLength = Math.abs(startX - (e.clientX - canvasRef.current.offsetLeft));
          squareContext.fillStyle = strokeColor;
          squareContext.fillRect(startX, startY, sideLength, sideLength);
          break;
        case 'dot':
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          context.beginPath();
          context.arc(startX, startY, brushWidth, 0, 2 * Math.PI);
          context.fillStyle = strokeColor;
          context.fill();
          break;
       
        case 'rectangle':
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          const rectangleContext = toolDrawings['rectangle'] || context;
          const width = Math.abs(startX - (e.clientX - canvasRef.current.offsetLeft));
          const height = Math.abs(startY - (e.clientY - canvasRef.current.offsetTop));
          rectangleContext.fillStyle = strokeColor;
          rectangleContext.fillRect(startX, startY, width, height);
          break;
        case 'circle':
          context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
          const circleContext = toolDrawings['circle'] || context;
          const radius = Math.sqrt(
            Math.pow(e.clientX - canvasRef.current.offsetLeft - startX, 2) +
            Math.pow(e.clientY - canvasRef.current.offsetTop - startY, 2)
          );
          circleContext.beginPath();
          circleContext.arc(startX, startY, radius, 0, 2 * Math.PI);
          circleContext.strokeStyle = strokeColor;
          circleContext.lineWidth = brushWidth;
          circleContext.stroke();
          break;
        default:
          break;
      }
    }
  };

  const endDrawing = () => {
    setIsDrawing(false);
    if (context) {
      const canvasData = context.getImageData(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );
      const updatedToolDrawings = { ...toolDrawings, [tool]: context };
      setToolDrawings(updatedToolDrawings);
      setUndoStack([...undoStack, canvasData]);
      setRedoStack([]);
    }
  };

  const handleUndo = () => {
      if (undoStack.length > 0) {
        const lastState = undoStack[undoStack.length - 1];
        setRedoStack([...redoStack, lastState]);
        setUndoStack(undoStack.slice(0, -1));
        context.putImageData(lastState, 0, 0);
      }
    };

    const handleRedo = () => {
      if (redoStack.length > 0) {
        const nextState = redoStack[redoStack.length - 1];
        setUndoStack([...undoStack, nextState]);
        setRedoStack(redoStack.slice(0, -1));
        context.putImageData(nextState, 0, 0);
      }
    };

    const handleClear = () => {
      if (context) {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setUndoStack([]);
        setRedoStack([]);
      }
    };


  return (
    <div>
      <div className="menu-bar">
        <input
          type="color"
          value={strokeColor}
          onChange={(e) => setStrokeColor(e.target.value)}
        />
        <input
          type="range"
          min={1}
          max={10}
          value={brushWidth}
          onChange={(e) => setBrushWidth(parseInt(e.target.value))}
        />
        <button onClick={() => setTool('pencil')}>Pencil</button>
        <button onClick={() => setTool('pen')}>Pen</button>
        <button onClick={() => setTool('crayon')}>Crayon</button>
        <button onClick={() => setTool('line')}>Line</button>
        <button onClick={() => setTool('dot')}>Dot</button>
        <button onClick={() => setTool('square')}>Square</button>
        <button onClick={() => setTool('rectangle')}>Rectangle</button>
        <button onClick={() => setTool('circle')}>Circle</button>
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
        <button onClick={handleClear}>Clear</button>
      </div>
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={endDrawing}
      />
    </div>
  );
};

export default Canvas;




