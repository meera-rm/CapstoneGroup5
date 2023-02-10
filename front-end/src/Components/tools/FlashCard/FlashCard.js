import { React, useState, useEffect } from 'react';
import axios from 'axios';
import words from '../db/words.json';
import './FlashCard.scss';
import FlashCardList from './FlashCardList';
const API = process.env.REACT_APP_API_URL;
const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const FlashCard = () => {
  const [showCards, setShowCards] = useState(false);
  const [wordData, setWordData] = useState(words);
  const [selectedGrade, setSelectedGrade] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // const getData = () => {
  //   try {
  //     setLoading(true);
  //     axios
  //       .get(`words.json`)
  //       .then((res) => {
  //         setWordData(res.data);
  //         console.log(res.data);
  //       })
  //       .catch((err) => {
  //         setError(err);
  //         console.log(err);
  //       });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   getData();
  // }, [wordData]);

  const filteredData = wordData.filter(
    (word) =>
      //  word.grade.toLowerCase().includes(selectedGrade.toLowerCase())
      word.grade.toLowerCase() === selectedGrade
  );

  const word = wordData.filter((word) => word.grade === selectedGrade);

  return (
    <div>
      <div className='flashCard'>
        <h1 className='flashCard__title'>FlashCards</h1>
      </div>
      <div className='flashCard__container'>
        <div className='flashCard__toggleGradeSelector'>All Grades  </div>
        <div className='flashCard__gradeSelector'>
           <div>All Levels</div>
           <div> Kindergarten</div>
           <div>ist Grade</div>
           <div>2nd Grade</div>
           <div>3rd Grade</div>
           <div>4th Grade</div>
           <div>5th Grade</div>
           <div>6th Grade</div>
        </div>
        {/* <label htmlFor='grade'>Grade: </label>
        <select
          className='flashCard__select'
          value={selectedGrade}
          onChange={(e) => setSelectedGrade(e.target.value)}
          required
          size='1'
        >
          <option key='none' value='none'>
            --Select child's grade--
          </option>
          {grades.map((grade) => (
            <option key={grade} value={grade}>
              {grade}
            </option>
          ))}
        </select> */}
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
