import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './AutoMenuSelector.scss';

const AutoMenuSelector = ({topic, setTopic}) => {

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

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    setTopic(navItems[index]);
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
            onClick={() => handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='menuSelector__arrow' onClick={handleNextClick}>
        {'>'}
      </div>
      </div>
      {/* <div className='menuSelector__content'>
        Selected topic: {topic}
      </div> */}
    
  </div>
  );
};




       

     
  
  
export default AutoMenuSelector;