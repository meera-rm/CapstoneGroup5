import axios from 'axios';
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import BookLoader from '../../loader/BookLoader';
import SearchAndFilter from './SearchAndFilter.js';
import EmptyView from '../../emptyView/EmptyView';
const API = process.env.REACT_APP_API_URL;

const ReadingLevelBooks = () => {
   const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/api/books`)
      .then((response) => {
        console.log(response.data)
        setBookData(response.data.payload);
        setLoading(false);
      })
      .catch((error) => {
        setError(false);
      });
  }, []);

if (error) {
    return <>{error.message}</>;
} else if (loading) {
    return <div ><BookLoader/></div>;
} else {
  return (
   <div>
      {/* {error && <>{error.message}</>}
      {loading &&  <div><BookLoader/></div>}  */}
      
      <div className='text-center text-teal-600 text-2xl mb-10 mt-10'>ReadingLevelBooks
    
      <div className='text-right'>
        <Link to={`/books/new`}>
          <button className='mr-20 btn bg-indigo-500 px-4 py-4 rounded text-white  font-georgia hover:bg-indigo-400 '>
            Add Books{' '}
          </button>
        </Link>
      </div>
     </div>
      <SearchAndFilter/>
      {!loading && bookData.length===0 &&<EmptyView styleKey='bold' message='Page Not Found' />}
  </div>
      
  );
   }
};
export default ReadingLevelBooks;
