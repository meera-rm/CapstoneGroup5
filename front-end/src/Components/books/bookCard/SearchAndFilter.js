import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';



 import BookCard from '../bookCard/BookCard';
//import './BookCard.scss';
const API = process.env.REACT_APP_API_URL;

const alphabets = [
    'All',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'Y',
  'Z',
];

const SearchAndFilter = () => {

  const [show, setShow] = useState(false);
  const [bookData, setBookData] = useState([]);
  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState(['']);
  const [paginate, setpaginate] = useState(8);

  const [searchParam] = useState([
    'book_title',
    'book_author',
    'reading_level',
  ]);

 

  useEffect(() => {
    axios
      .get(`${API}/api/books`)
      //  .then((response) => console.log(response.data))
      .then((response) => {
        setBookData(response.data.payload);
        setLoaded(true);
      })
      .catch((error) => {
        console.error('catch', error);
        setLoaded(true);
        setError(error);
      });
  }, []);

  const data = Object.values(bookData);

  const search_parameters = Object.keys(Object.assign({}, ...data));
  const filter_items = [...new Set(data.map((item) => item.reading_level))];

  function search(bookData) {
      return bookData.filter(
          (book) =>
              book.reading_level.includes(filter) &&
              search_parameters.some((parameter) =>
                  book[parameter].toString().toLowerCase().includes(query)
              )
      );
  }

  const load_more = (event) => {
      setpaginate((prevValue) => prevValue + 8);
  };



  if (error) {
      return <>{error.message}</>;
  } else if (!loaded) {
      return <>loading...</>;
  } else {
      return (
          <div className="wrapper">
            <div className='flex justify-center mt-10 text-center'>
          <label htmlFor='search-form'>
            <input
              type='search'
              name='search-form'
              id='search-form'
              className='border-2 border-black outline  mr-5'
              placeholder='Search for a book by title'
              onChange={(e) => setQuery(e.target.value)}
            />
            <span className='sr-only'>Search here</span>
          </label>
  
          <div className=''>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              className='border-2 border-black outline'
              aria-label='Filter Books By ReadingLevel'
            >
              <option value='choose'>-- Select Reading Level--</option>
              {filter_items.map((item) => (
                                <option value={item}>Filter By {item}</option>
                            ))}
              {}
            </select>
            <span className='focus'></span>
          </div>
        </div>
        
        <div  className='grid grid-cols-1 space-evenly md:grid-cols-2 lg:grid-cols-3'>  
          {search(data)
            .slice(0, paginate)
            ?.map((book) => {
              return (  
                <div>
                  {' '}
                  <BookCard book={book} />{' '}
                </div>

               
              );
            })}
        </div>    

        {/* <button onClick={load_more}>Load More</button> */}
      </div>
    );
  }
};

export default SearchAndFilter;


