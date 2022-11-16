import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';

const API = process.env.REACT_APP_API_URL;

const UpdateBooks = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({
    book_title: '',
    book_author: '',
    isbn_number: '',
    publication: '',
    book_picture: '',
    reading_level: '',
  });

  useEffect(() => {
    axios
      .get(`${API}/api/books/${id}`)
      .then((res) => {
        setBook(res.data.payload);
      })
      .catch((e) => console.error(e));
  }, [id]);

  const updatedBook = (book) => {
    axios
      .put(`${API}/api/books/${id}`, book)
      .then((res) => {
        navigate(`/books`);
      })
      // .error((error)=>console.error(error))
      .catch((c) => console.warn('catch', c));
  };
  const handleTextChange = (event) => {
    console.log(event.target.value);
    setBook({
      ...book,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updatedBook(book, id);
  };

  return (
    <div className='edit-book'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='book_title'>Booktitle:</label>
          <input
            id='book_title'
            name='book_title'
            value={book.book_title}
            type='text'
            onChange={handleTextChange}
            placeholder='Book title'
          />
        </div>
        <div>
          <label htmlFor='book_author'>Author:</label>
          <input
            id='book_author'
            type='text'
            name='book_author'
            value={book.book_author}
            placeholder='author'
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor='isbn_number'>ISBN Number:</label>
          <input
            id='isbn_number'
            type='text'
            name='isbn_number'
            value={book.isbn_number}
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor='publication'>Publication:</label>
          <input
            id='publication'
            name='publication'
            type='text'
            value={book.publication}
            placeholder='publication'
            onChange={handleTextChange}
          />
        </div>
        <div>
          <label htmlFor='book_picture'>Cover Image: </label>
          <input
            id='book_picture'
            type='text'
            name='book_picture'
            value={book.book_picture}
            placeholder='picture'
            onChange={handleTextChange}
          />
        </div>

        <div>
          <label htmlFor='readinglevel'>Reading Level:</label>
          <input
            id='reading_level'
            type='text'
            name='reading_level'
            value={book.reading_level}
            onChange={handleTextChange}
          />
        </div>

        <div
          className='edit-btn'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: '100%',
          }}
        >
          {/* <div> */}
          <input
            style={{
              padding: '1rem 1.5rem',
              borderRadius: '1rem',
              background: 'transparent',
            }}
            className='update-btns second'
            type='submit'
          />
          {/* </div>
          <div> */}
          <Link to={`/books/${id}`}>
            <button
              style={{
                padding: '1rem 1.5rem',
                borderRadius: '1rem',
                background: 'transparent',
              }}
              className='update-btns'
            >
              Back
            </button>
          </Link>
          {/* </div> */}
        </div>
      </form>
    </div>
  );
};

export default UpdateBooks;
