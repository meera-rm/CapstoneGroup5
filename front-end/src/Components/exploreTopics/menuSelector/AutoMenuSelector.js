import { React, useState, useEffect } from 'react';
import axios from 'axios';

import './AutoMenuSelector.scss';

const AutoMenuSelector = ({topic, setTopic,bookdata,gradeLevel}) => {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const navItems = ['All Topics','English', 'Social Studies', 'Science','Math'];
  const timeInterval = 3000;

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

  const filteredBooks =
  navItems[selectedIndex] === 'All Topics'
  ? bookdata.filter((book) =>
      gradeLevel !== 'All Grades' ? book.grade === gradeLevel:true  
    )
  : bookdata.filter(
      (book) =>
        (gradeLevel === 'All Grades' || book.grade === gradeLevel) &&
        book.topic === navItems[selectedIndex]
    );


  return (
    <div className='menuSelector'>
    <div className='menuSelector__container'>
      <div className='menuSelector__arrow' onClick={handlePrevClick}>
        {'<'}
      </div>
      <div className='menuSelector__menuItems'>
        {navItems.map((item,index) => (
          
          <div
            key={index}
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
      {filteredBooks.map((book) => {
            return (
              <div className='testbook' key=''>
                <div>{book.title}</div>
                <div>{book.author}</div>
              </div>
            );
          })}
      </div> */}
    
  </div>
  );
};
export default AutoMenuSelector;













// const AutoMenuSelector = ({topic, setTopic,bookdata,gradeLevel}) => {
//   const topics = ['All Topics','English', 'Social Studies', 'Science','Math'];
//   const [selectedTopic, setSelectedTopic] = useState(topics[0]);
//   const [autoTimer, setAutoTimer] = useState(null);
//   const interval = 1000;

  
//   const handleTopicSelect = (topic) => {
//     setSelectedTopic(topic);
//     clearInterval(autoTimer);
//   };
//   const handleNextTopic = () => {
//     const currentIndex = topics.indexOf(selectedTopic);
//     const nextIndex = (currentIndex + 1) % topics.length;
//     setSelectedTopic(topics[nextIndex]);
//     clearInterval(autoTimer);
//   };

//   const handlePrevTopic = () => {
//     const currentIndex = topics.indexOf(selectedTopic);
//     const prevIndex = (currentIndex - 1 + topics.length) % topics.length;
//     setSelectedTopic(topics[prevIndex]);
//     clearInterval(autoTimer);
//   };


//   useEffect(() => {
//     setAutoTimer(setInterval(() => {
//       const currentIndex = topics.indexOf(selectedTopic);
//       const nextIndex = (currentIndex + 1) % topics.length;
//       setSelectedTopic(topics[nextIndex]);
//     }, interval));
//     return () => clearInterval(autoTimer);
//   }, [selectedTopic, topics, interval]);
 
//   // const filteredBooks =
//   //   navItems[selectedIndex] === 'All Topics'
//   //     ? bookdata.filter((book) =>
//   //         gradeLevel === 'All Grades' ? true : book.grade === gradeLevel
//   //       )
//   //     : bookdata.filter(
//   //         (book) =>
//   //           (gradeLevel === 'All Grades' || book.grade === gradeLevel) &&
//   //           book.topic === navItems[selectedIndex]
//   //       );

//   return (
//     <div className='menuSelector'>
//     <div className='menuSelector__container'>
//       <div className='menuSelector__arrow' onClick={handlePrevTopic}>
//         {'<'}
//       </div>
//       <div className='menuSelector__menuItems'>
//         {topics.map((topic) => (
          
//           <div
//             key={topic}
//             className={selectedTopic=== topic ? 'menuSelector__selectedItem': 'menuSelector__item'} 
//              onClick={() => handleTopicSelect(topic)}
//           >
//             {topic}
//           </div>
//         ))}
//       </div>
//       <div className='menuSelector__arrow' onClick={handleNextTopic}>
//         {'>'}
//       </div>
//       </div>
//       {/* <div className='menuSelector__content'>
//         Selected topic: {topic}
//       </div> */}
    
//   </div>
//   );
// };

  
// export default AutoMenuSelector;












