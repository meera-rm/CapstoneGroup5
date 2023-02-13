import { React, useState } from 'react';
// import words from './words.json';
import AddWord from './AddWord';
import { useLocation } from 'react-router-dom';
import './AddVocabForm.scss';

import { Link } from 'react-router-dom';

const grades = ['K', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const AddVocabForm = ({ words, showCards, setShowCards }) => {
  console.log('in addvocabfprn', words);

  const [searchWord, setSearchWord] = useState('');
  const [value, setValue] = useState('');

  let newWord = '';

  const onInputChange = (event) => {
    console.log(event.target.value);
    if (event.target.name === 'newWord') {
      newWord = event.target.value;
    } else {
      setValue(event.target.value);
    }
    console.log('value=', value);
  };

  const handleSubmit = () => {
    const wordFound = words.find((item) => item.word === newWord);
    console.log('found=', wordFound, value, newWord);
    if (!wordFound) {
      setSearchWord(wordFound);
      <AddWord searchWord={searchWord} value={value} />;
    }
  };

  return (
    <div>
      <form
        className='mb-4 md:flex md:flex-wrap md:justify-between'
        onSubmit={handleSubmit}
      >
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
              name='newWord'
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
              name='grade'
              id='grade'
              value={value}
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
          <button className=' my-12 px-5 py-3 rounded bg-teal-500'>
            Submit
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
      </form>
    </div>
  );
};
export default AddVocabForm;
