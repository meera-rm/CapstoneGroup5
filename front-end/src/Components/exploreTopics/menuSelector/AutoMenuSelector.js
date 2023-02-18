import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './AutoMenuSelector.scss';

const AutoMenuSelector = ({topic, setTopic,bookdata,gradeLevel}) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const navItems = ['All Topics','English', 'Social Studies', 'Science','Math'];
  const timeInterval = 8000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedIndex((prevIndex) =>
      prevIndex=== navItems.length - 1 ? 0 : prevIndex + 1);
    }, timeInterval);
    return () => clearInterval(intervalId);
  }, [ navItems.length, timeInterval]);

  const handlePrevClick = () => {
  //  setSelectedIndex(selectedIndex === 0 ? navItems.length - 1 : selectedIndex - 1); 
  setSelectedIndex((prevIndex) =>
  prevIndex === 0 ? navItems.length - 1 : prevIndex - 1
);
  };

  const handleNextClick = () => {
    // setSelectedIndex(selectedIndex === navItems.length - 1 ? 0 : selectedIndex + 1);
    setSelectedIndex((prevIndex) =>
    prevIndex === navItems.length - 1 ? 0 : prevIndex + 1
  );

  };

  const handleItemClick = (item) => {
    console.log(item)
    setSelectedIndex(item);
  };

  // const filteredBooks =
  //   navItems[selectedIndex] === 'All Topics'
  //     ? bookdata.filter((book) =>
  //         gradeLevel === 'All Grades' ? true : book.grade === gradeLevel
  //       )
  //     : bookdata.filter(
  //         (book) =>
  //           (gradeLevel === 'All Grades' || book.grade === gradeLevel) &&
  //           book.topic === navItems[selectedIndex]
  //       );

  return (
    <div className='menuSelector'>
    <div className='menuSelector__container'>
      <div className='menuSelector__arrow' onClick={handlePrevClick}>
        {'<'}
      </div>
      <div className='menuSelector__menuItems'>
        {navItems.map((item) => (
          
          <div
            key={item}
            className={selectedIndex === item ? 'menuSelector__selectedItem': 'menuSelector__item'} 
             onClick={() => handleItemClick(item)}
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