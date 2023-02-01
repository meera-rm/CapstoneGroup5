import { React, useState } from 'react';
// import axios from 'axios';
import SearchBar from './SearchBar';
import SearchResult from './SearchResult';
// import { FaSearch } from 'react-icons/fa';
// import { FcSpeaker } from 'react-icons/fc';

const Dictionary = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <div>
      <h1 className='text-center'>Dictionary</h1>
      <p className='text-center'>Word to search Dictionary</p>
      <SearchBar searchWord={searchWord} setSearchWord={setSearchWord} />
      <p className='text-center'>Searching meaning of {`${searchWord}`}</p>
      <SearchResult searchWord={searchWord} setSearchWord={setSearchWord} />
    </div>
  );
};
export default Dictionary;
