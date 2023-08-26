

import React, { useState } from 'react';
import './ColorPanel.css';
import ColorSwatch from './ColorSwatch';

export default function ColorPanel() {
   const [showColors, setShowColors] = useState(false);

  const handleMouseEnter = () => {
    setShowColors(true);
  };

  const handleMouseLeave = () => {
    setShowColors(false);
  };
  return (
    <main>  
      <div className="container">
         <div
            className="popup-box move"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
             
           <button className="color-button">Choose a color</button>
           {showColors && (
              <div> 
                <ColorSwatch/>
               </div>
          )} 
        </div> 
      </div>
    </main>

  )
}

