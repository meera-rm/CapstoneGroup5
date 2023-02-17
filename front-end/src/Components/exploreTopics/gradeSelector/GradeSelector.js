import { React, useState, useEffect } from 'react';
import axios from 'axios';
import './GradeSelector.scss';

const options = [
  'All Grades',
  'Kindergarten',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
];

const GradeSelector = ({ gradeLevel, setGradeLevel }) => {
  // const [wordData, setWordData] = useState(words);
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedGrade, setSelectedGrade] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    // console.log('option', option);
    setGradeLevel(option);
    setIsOpen(false);
  };

  //   const filteredData = wordData.filter((word) =>
  //       //  word.grade.toLowerCase().includes(selectedGrade.toLowerCase())
  //       word.grade === selectedGrade
  //   );

  return (
    // <div>
    <div className='gradeSelector'>
      {/* <h1 className='gradeSelector__title'>FlashCards</h1>
      </div> */}
      <div className='gradeSelector__container'>
        {/* <div className='flashCard__toggleGradeSelector'>All Grades
         */}
        <p>Select Grade:</p>
        <div className='gradeSelector__option'>
          <div onClick={toggleDropdown}>{gradeLevel}</div>
          {isOpen && (
            <ul className='gradeSelector__option-select'>
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
    </div>
    // </div>
  );
};
export default GradeSelector;
