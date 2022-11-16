import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AllBooks.css';
import Table from 'react-bootstrap/Table';

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
    <div className='Books'>
      <h2 style={{ textAlign: 'center', margin: '2rem auto', color: 'green' }}>
        Books
      </h2>
      <div style={{ margin: '2rem auto', textAlign: 'center' }}>
        <Link to={`/books/new`}>
          <button className='new-btns'>Add Books </button>
        </Link>
      </div>
      <div className='list-header'>
        {bookData.map((book) => {
          return (
            <section key={book.book_id + book.book_name}>
              <div className='display-cards'>
                <Link
                  style={{ margin: '0rem auto', textAlign: 'center' }}
                  to={`/books/` + book.book_id}
                  key={book.book_id}
                >
                  <img
                    className='book-pic'
                    src={`${book.book_picture}`}
                    alt=''
                  />

                  {/* </div>
               <div> */}
                  <p className='reading_level'>id: {book.book_id}</p>
                  <p className='reading_level'>
                    Reading Level: {book.reading_level}
                  </p>
                </Link>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
