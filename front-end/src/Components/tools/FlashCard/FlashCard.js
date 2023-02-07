import { React, useState, useEffect} from 'react';
import axios from 'axios';
import words from './words.json';
import './FlashCard.scss';
import FlashCardList from './FlashCardList';
const API = process.env.REACT_APP_API_URL;
const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const FlashCard = () => {
  const [showCards, setShowCards] = useState(false);
  const [wordData, setWordData] = useState();
 
  const [selectedGrade, setSelectedGrade] = useState('');
  // const [error, setError] = useState('');
   //const [loading, setLoading] = useState(false);


  // const getData = () => {
  //   try {
  //     setLoading(true);
  //     axios
  //       .get(`${API}/words.json`)
  //       .then((res) => {
  //         setData(res.data);
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

  useEffect(() => {
    // getData();
    setWordData(words)
  }, [wordData]);

   const filteredData = words.filter((word ) =>
  //  word.grade.toLowerCase().includes(selectedGrade.toLowerCase())
      word.grade.toLowerCase()===selectedGrade
);
 
   

// const word= wordData.filter((word)=>word.grade===selectedGrade)

  return (
    <div>
      <div className='flashCard'>
        <h1 className='flashCard__title'>FlashCards</h1>
      </div>
       <div className='flashCard__container'>
         <label htmlFor='grade'>Grade: </label>
              <select value={selectedGrade}    
              onChange={(e) => setSelectedGrade(e.target.value)}
              required>
                 <option key='none' value='none'>
                --Select child's grade--
              </option>
                {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
                
              </select>
             
       </div>
           
       
         
         
           
         { filteredData && filteredData.length > 0 && <FlashCardList  filteredData={filteredData}/>
        } 
      
       
      </div>
    // </div>
  );
};
export default FlashCard;

// https://codepen.io/mattgreenberg/pen/ggOpOr
// https://github.com/BLepers/1-click-flashcards
