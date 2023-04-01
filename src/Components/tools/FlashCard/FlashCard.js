import { React, useState, useEffect } from 'react';
import axios from 'axios';
import words from '../db/words.json';
import './FlashCard.scss';
import FlashCardList from './FlashCardList';
const API = process.env.REACT_APP_API_URL;
const options = ['All Grades','Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];

const FlashCard = () => {
  
  const [wordData, setWordData] = useState(words);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGrade, setSelectedGrade] = useState(null);
 


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log('option',option)
    setSelectedGrade(option);
    setIsOpen(false);
  };

  const filteredData = wordData.filter((word) =>
      //  word.grade.toLowerCase().includes(selectedGrade.toLowerCase())
      word.grade === selectedGrade
  );

 

  return (
    <div>
      <div className='flashCard'>
        <h1 className='flashCard__title'>FlashCards</h1>
      </div>
      <div className='flashCard__container'> 
      {/* <div className='flashCard__toggleGradeSelector'>All Grades  
        */}
        <p>Select Grade:</p>
        <div className="flashCard__gradeSelector">
      <div onClick={toggleDropdown}> 
        {selectedGrade ? selectedGrade : 'All Grades'}
      </div>
      {isOpen && (
        <ul className="flashCard__gradeSelector-options">
          {options.map((option) => (
            <li onClick={() => handleOptionClick(option)} key={option}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
    {/* </div> */}
       
      </div>

      {filteredData && filteredData.length > 0 && (
        <FlashCardList filteredData={filteredData} />
      )}
    </div>
    // </div>
  );
};
export default FlashCard;












// https://codepen.io/mattgreenberg/pen/ggOpOr
// https://github.com/BLepers/1-click-flashcards
