
import React, {useState} from 'react';
import './ColorPanel.css';


const ColorSwatch = () => {
     const [showColors, setShowColors] = useState(["#ffb089",
      "#FF8142",
      "#ff691e",
      "#d64700",
      "#6b2300",
      // #green
      "#90f8eb",
      "#0decd0",
      "#1dc90a",
      "#75af4c",
      "#088979",
    
      //pink
      "#f283b9",
      "#f55da7",
      "#ff1fa6",
      "#d90f5f",
      "#a60042",
    
      //red
       
      "#f19798",
      "#e85859",
      "#e4393a",
      "#bc191a",
      "#5e0c0d",
      //blue
      "#7cb7d9",
      "#668cd4",
      "#535dd4",
      "#2a37d1",
      "#0413c2",
      //yellow
      "#FFF9c4",
      "#FCE883",
      "#CCCC00",
      "#fffc00",
      "#ffd000",
      //purple
      // "#a689e1",
      "#e0b0ff",
      "#b24bf3",
      "#a06ccb",
      "#51087e",
      "#7921b1",
      
       // #gray
      "#DCDCDC",
       "#adadc9",
       "#787276",
      "#6D7B8D",
      "#343434",
      
       //brown
      "#D2b48c",
       "#c19a68",
       "#cd7f32",
       "#783f00",
       "#483c32"]);
  
    // const handleMouseEnter = () => {
    //   setShowColors(true);
    // };
  
    // const handleMouseLeave = () => {
    //   setShowColors(false);
    // };
  
 
  
    return (
        
        <div className="color-swatch" >
          <div className="color-list">
            {showColors.map((color, index) => (
              <button key={index} className="color-item" style={{ backgroundColor: color }}></button>
            )
          )}
          </div>
      </div>
   
    );
   };
  
  export default ColorSwatch;
  