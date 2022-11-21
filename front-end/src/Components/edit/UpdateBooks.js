import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const UpdateBooks = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [book, setBook] = useState({
    book_id: '',
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
    console.log('data=', book);
  }, [id, book]);

  const onInputChange = (event) => {
    console.log(event.target.value);
    setBook({
      ...book,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/api/books/${id}`, book)
      .then((res) => {
        navigate(`/books`);
      })
      .catch((c) => console.warn('catch', c));
  };

  return (
    // <div className='edit-book'>
    <div className='flex flex-col text-center h-screen items-center justify-center '>
      <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'>
        <form onSubmit={handleSubmit}>
          <div>
            <label className='py-6' htmlFor='bookTitle'>
              Booktitle:
            </label>
            <input
              id='bookTitle'
              name='bookTitle'
              value={book.book_title}
              type='text'
              onChange={onInputChange}
              placeholder='Book title'
              required
            />
          </div>
          <div>
            <label className='py-6' htmlFor='author'>
              Author:
            </label>
            <input
              id='author'
              type='text'
              name='author'
              value={book.book_author}
              placeholder='author'
              onChange={onInputChange}
            />
          </div>
          <div>
            <label className='py-6' htmlFor='isbn'>
              ISBN Number:
            </label>
            <input
              id='isnbe'
              type='text'
              name='isbn'
              value={book.isbn_number}
              onChange={onInputChange}
            />
          </div>
          <div>
            <label className='py-6' htmlFor='publication'>
              Publication:
            </label>
            <input
              id='publication'
              name='publication'
              type='text'
              required
              value={book.publication}
              placeholder='publication'
              onChange={onInputChange}
            />
          </div>

          <div>
            <label className='py-6' htmlFor='picture'>
              Cover Image:{' '}
            </label>
            <input
              id='picture'
              type='text'
              name='picture'
              value={book.book_picture}
              placeholder='picture'
              onChange={onInputChange}
              required
            />
          </div>
          <div>
            <label className='py-6' htmlFor='readingLevel'>
              Reading Level:
            </label>
            <input
              id='readingLevel'
              type='text'
              name='readingLevel'
              value={book.reading_level}
              onChange={onInputChange}
            />
          </div>

          <div className='justify-center ml-6 space-x-6 '>
            {/* <div> */}
            <input className=' px-5  py-3 rounded bg-teal-500' type='submit' />
            {/* </div>
          <div> */}
            <Link to={`/books/${id}`}>
              <button className=' px-5  py-3 rounded bg-teal-500'>Back</button>
            </Link>
            {/* </div> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBooks;
