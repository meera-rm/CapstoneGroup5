import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './AllBooks.css';

const API = process.env.REACT_APP_API_URL;

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/books`)
      //  .then((response) => console.log(response.data))
      .then((response) => setBookData(response.data.payload))
      .catch((e) => console.error('catch', e));
  }, [bookData]);

  return (
    <div className='px-10 py-6 md:col-span-2 '>
      <h2 className='text-center  mt-10 mb-5 text-5xl font-bold text-teal-600 '>
        Books
      </h2>
      <div className='text-center '>
        <Link to={`/books/new`}>
          <button className=' btn bg-indigo-500 px-4 py-4 rounded text-white  font-gerogia hover:bg-indigo-400 '>
            Add Books{' '}
          </button>
        </Link>
      </div>
      <div className='mt-14 grid md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-16'>
        {/* <div className='max-w-sm rounded overflow-hidden shadow-lg '> */}
        {bookData?.map((book) => {
          return (
            <section
              className='justify-items-center w-40 h-20'
              // rounded-sm  hover:shadow-sm'
              key={book.book_id + book.book_name}
            >
              <div>
                <Link
                  className='text-center'
                  to={`/books/` + book.book_id}
                  key={book.book_id}
                >
                  <img
                    className='text-center object-fit '
                    src={`${book.book_picture}`}
                    alt={book.book_picture}
                  />

                  {/* </div>
               <div> */}
                  <p className='align-middle'>id: {book.book_id}</p>
                  <p className='content-center'>
                    Reading Level: {book.reading_level}
                  </p>
                </Link>
              </div>
            </section>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AllBooks;
