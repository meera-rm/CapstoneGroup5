import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './AutoMenuSelector.scss';

const AutoMenuSelector = () => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const navItems = ['English', 'Social Studies', 'Science','Math'];
  const timeInterval = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex(selectedIndex === navItems.length - 1 ? 0 : selectedIndex + 1);
    }, timeInterval);
    return () => clearInterval(intervalId);
  }, [selectedIndex, navItems.length, timeInterval]);

  const handlePrevClick = () => {
    setSelectedIndex(selectedIndex === 0 ? navItems.length - 1 : selectedIndex - 1);
  };

  const handleNextClick = () => {
    setSelectedIndex(selectedIndex === navItems.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <div className='menuSelector'>
    <div className='menuSelector__container'>
      <div className='menuSelector__arrow' onClick={handlePrevClick}>
        {'<'}
      </div>
      <div className='menuSelector__menuItems'>
        {navItems.map((item, index) => (
          <div
            key={item}
            className={selectedIndex === index ? 'menuSelector__selectedItem': 'menuSelector__item'}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='menuSelector__arrow' onClick={handleNextClick}>
        {'>'}
      </div>
      </div>
      <div className='menuSelector__content'>
        {/* {navItems[selectedIndex]}  */}
        <div>content goes here</div>
      </div>
    
  </div>
  );
};

// const styles = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     width: '100vw'
//   },
//   arrow: {
//     fontSize: 32,
//     cursor: 'pointer'
//   },
//   navItems: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   item: {
//     padding: 16,
//     fontSize: 24
//   },
//   selectedItem: {
//     padding: 16,
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   content: {
//     display:'block',
//      marginTop: 8,
//     fontSize: 18
//   }
// };



       

     
  
  
export default AutoMenuSelector;