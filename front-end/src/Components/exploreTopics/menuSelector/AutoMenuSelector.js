import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './AutoMenuSelector.scss';

const AutoMenuSelector = ({topic, setTopic}) => {
 
  // const [selectedIndex, setSelectedIndex] = useState(0);
  const navItems = ['English', 'Social Studies', 'Science','Math'];
  const timeInterval = 3000;
  setTopic(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTopic(topic === navItems.length - 1 ? 0 : topic + 1);
    }, timeInterval);
    return () => clearInterval(intervalId);
  }, [topic, navItems.length, timeInterval]);

  const handlePrevClick = () => {
    setTopic(topic === 0 ? navItems.length - 1 : topic - 1);
  };

  const handleNextClick = () => {
    setTopic(topic === navItems.length - 1 ? 0 : topic + 1);
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
            className={topic === index ? 'menuSelector__selectedItem': 'menuSelector__item'}
          >
            {item}
          </div>
        ))}
      </div>
      <div className='menuSelector__arrow' onClick={handleNextClick}>
        {'>'}
      </div>
      </div>
      
    
  </div>
  );
};




       

     
  
  
export default AutoMenuSelector;