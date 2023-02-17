import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import EmptyView from '../../emptyView/EmptyView';
import DigitalBookLinks from '../../digitalBookLinks/DigitalBookLinks';
import DisplayTools from '../../tools/SelectTools/DisplayTools';
import Slider from '../../slider/Slider';
import Explore from '../../exploreTopics/explore/Explore';
import BookCard from '../bookCard/BookCard';
// import './BookCardList.scss';
import { FaListOl } from 'react-icons/fa';
import BookLoader from '../../loader/BookLoader';
import BookShelf from '../../bookShelf/BookShelf';
import CardSlider from '../../cardSlider/CardSlider';
import banner from './bookbanner.png';

const API = process.env.REACT_APP_API_URL;

const BookCardList = () => {
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API}/api/books`)
      .then((response) => {
        setBookData(response.data.payload);
        setLoading(false);
      })
      .catch((error) => {
        setError(false);
      });
  }, []);

  return (
    <div>
      {error && <>{error.message}</>}
      {/* {loading &&  <div><BookLoader/></div>} */}
      {/* {!loading && <EmptyView styleKey='bold' message='Page Not Found' />} */}
     {/* <img src={banner} style={{width:'100vw',height:'300px'}} alt=''/> */}
      <CardSlider />
      <BookShelf />
      <Explore />
      <DisplayTools />
      <DigitalBookLinks />
      <Slider />
    </div>
  );
};

export default BookCardList;

// // <div className='md:col-span-2'>
// //   {/* //   <div className='text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 '> */}
// //   <p className='p-4 text-teal-800 '>DICTIONARY/PDF BOOKS LINK:</p>
// //   {/* <div className='text-center'>
// //     <Link to={`/dictionary`}>
// //       <p
// //         className='px-4 py-4 rounded text-black font-georgia  underline'
// //         onClick={() => setShow(!show)}
// //       >
// //         {' '}
// //         DICTIONARY LINK
// //       </p>

// //     </Link>
// //   </div> */}

// //     <div>
//     <p className='p-4 text-black underline'>
//     <LovingToReadLink />
//   </p>
// </div>
// <div>
//   <p className='p-4 text-black underline '>
//     <WilBooksLink/>
//   </p>
// </div>
// <div>
//   <p className='p-4 text-black underline'>
//     <GetEpicLink />
//   </p>
// </div>
// //   {/* // </div> */}
// //   <h2 className='text-center  mt-10 mb-5 text-5xl font-bold text-teal-600 '>
// //     Books
// //   </h2>

// //   <div className='text-right mr-80'>
// //     <Link to={`/books/new`}>
// //       <button className='mr-20 btn bg-indigo-500 px-4 py-4 rounded text-white  font-georgia hover:bg-indigo-400 '>
// //         Add Books{' '}
// //       </button>
// //     </Link>
// //   </div>

// //   <div className='flex justify-evenly mt-10 text-center'>
// //     <label htmlFor='search-form'>
// //       <input
// //         type='search'
// //         name='search-form'
// //         id='search-form'
// //         className='border-2 border-black outline  mr-5'
// //         placeholder='Search for..'
// //         value={query}
// //         onChange={(e) => setQuery(e.target.value)}
// //       />
// //       <span className='sr-only'>Search here</span>
// //     </label>

// //     <div className=''>
// //       <select
// //         onChange={(e) => {
// //           setFilter(e.target.value);
// //         }}
// //         className='border-2 border-black outline'
// //         aria-label='Filter Books By ReadingLevel'
// //       >
// //         <option value='choose'>-- Select Reading Level--</option>
// //         <option value=''>Filter By Reading Level</option>
// //         {/* {newAlphabet} */}
// //         {filter_items.map((item) => (
// //           <option value={item}>Filter By {item}</option>
// //         ))}
// //       </select>
// //       <span className='focus'></span>
// //     </div>
// //   </div>

//   {/* <div className='mt-14 grid text-center md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-16'> */}
//   {/* <div className='max-w-sm rounded overflow-hidden shadow-lg '> */}
//   {/* <div className='container'>*/}
