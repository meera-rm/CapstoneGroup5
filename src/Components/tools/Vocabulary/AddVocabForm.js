import { React, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import words from './../db/words.json';
import AddWord from './AddWord';
import './AddVocabForm.scss';

import { Link } from 'react-router-dom';

const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const AddVocabForm = ({  showCards, setShowCards }) => {
  // console.log('in addvocabfprn', words);

  const [inputWord, setInputWord] = useState('');
  const [inputGrade, setInputGrade] = useState('');
  const [meaning, setMeaning] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  

  let newWord = '';
  ;

  const onInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'word') {
      setInputWord(value);
    } else if (name === 'grade') {
      setInputGrade(value);
    }
    
  };

  const handleSearch = async() => {

    setErrorMessage('');
    const response = await axios.get('/db/words.json');
    const wordsData = response.data;
    setMeaning(wordsData);
    console.log(wordsData)

    if (wordsData[inputWord]) {
      try {
        // Replace 'YOUR_DICTIONARY_API_KEY' with your actual DictionaryAPI API key
        
        const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`;

        const  {apiResponse} = 
        await axios.get(apiUrl);
        const wordData = apiResponse.data[0];
        console.log(wordData)
        setMeaning(wordData)
        
        const wordMeaning = wordData.meanings.map((meaning) => meaning.definitions[0]?.definition || []);
        const partOfSpeechValues = wordData.meanings.map((meaning) => meaning.partOfSpeech);
        const exampleValues = wordData.meanings.map((meaning) =>
        meaning.definitions[0]?.examples || [] );
        const antonymValues = wordData.meanings.flatMap((meaning) => meaning.definitions[0]?.antonyms || []);
        setMeaning(wordMeaning);
        const synonymValues = wordData.meanings.flatMap((meaning) =>
        meaning.definitions[0]?.synonyms || []
      );

        const updatedWordData = {
          grade: inputGrade,
          partOfSpeech :partOfSpeechValues,
          meaning:wordMeaning,
          example:exampleValues,
          synonym:synonymValues,
          antonym:antonymValues,
          id:Object.keys(words).length,
        };
        setMeaning(updatedWordData)
        
        await axios.post('/update-word', { word: inputWord, data: updatedWordData });
        console.log('updated=',words)
        toast.success('added word')
      } catch (error) {
     
        setErrorMessage('Error fetching word meaning.');
      }
    } else {
      setMeaning('Word not found in the JSON file.');
    }
   
     
    }


  return (
    <div>
        <div className='flex flex-col mb-4 md:w-full'>
          <label
            className='mb-2 uppercase  font-normal text-lg  text-left'
            htmlFor='newWord'
          >
            Word:
            <input
              className='border py-2 px-3 '
              id='newWord'
              type='text'
              name='word'
              value={inputWord}
              autoComplete='off'
              onChange={onInputChange}
              placeholder='Add a word ...'
              required
            />
          </label>
        </div>

        <div className='flex flex-col mb-4 md:w-full'>
          <label
            className='mb-2 uppercase  text-left font-normal text-lg '
            htmlFor='grade'
          >
            Grade:
            {/* </label> */}
            <select
              // className='border py-2 px-3'
              className='selectGrade'
              size='1'
              type='text'
              name='grade'
              id='grade'
              value={inputGrade}
              onChange={onInputChange}
              required
            >
              <option key='none' value='none'>
                --Select child's grade--
              </option>
              {grades.map((grade) => (
                <option key={grade} value={grade}>
                  {grade}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='flex justify-center ml-10 space-x-10'>
          <button className=' my-12 px-5 py-3 rounded bg-teal-500' 
          onClick={handleSearch}>
            Search
          </button>

          <Link to={`/vocabulary`}>
            <button
              className='mr-10 px-5  py-3 rounded my-12 bg-teal-500 '
              style={{ display: showCards ? 'block' : 'none' }}
            >
              Cancel{' '}
            </button>
          </Link>
        </div>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />
     
      {/* <AddWord setMeaning={setMeaning} meaning={meaning} inputWord={inputWord} inputGrade={inputGrade} wordsData={wordsData} />; */}
    </div>
  );
};
export default AddVocabForm;





// toast.success('🦄 Wow so easy!', {
//   position: "top-right",
//   autoClose: 5000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
//   draggable: true,
//   progress: undefined,
//   theme: "light",
//   });

// add npm package quick-erd