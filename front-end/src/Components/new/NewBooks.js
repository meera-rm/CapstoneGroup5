import { useState } from 'react';
import axios from 'axios';

import { useNavigate, Link, useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const NewBooks = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  //declare states
  const [newBook, setNewBook] = useState({
    book_title: '',
    book_author: '',
    isbn_number: '',
    publication: '',
    book_picture: '',
    reading_level: '',
  });

  const onInputChange = (event) => {
    console.log(event.target.value);
    setNewBook({
      ...newBook,
      [event.target.id]: event.target.value,
    });
    console.log('in text change', newBook);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inhandlesumbit', newBook);

    axios
      .post(`${API}/api/books/new`, newBook)
      .then(() => {
        console.log('added');
        navigate(`/books`);
      })
      .catch((err) => console.error('catch', err));
  };

  return (
    <div className='flex flex-col text-center h-screen items-center justify-center '>
      <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='py-6' htmlFor='book_title'>
              Title:{''}
            </label>
            <input
              id='book_title'
              name='book_title'
              value={newBook.book_title}
              type='text'
              onChange={onInputChange}
              placeholder='Book title'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='book_author'>
              Author:{' '}
            </label>
            <input
              id='book_author'
              type='text'
              name='book_author'
              value={newBook.book_author}
              placeholder='author'
              onChange={onInputChange}
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='isbn_number'>
              ISBN :{' '}
            </label>
            <input
              id='isbn_number'
              type='text'
              name='isbn_number'
              placeholder='isbn number'
              value={newBook.isbn_number}
              onChange={onInputChange}
            />
          </div>
          <div className='mb-4'>
            <label className='py-6 ' htmlFor='publication'>
              Publication:{' '}
            </label>
            <input
              id='publication'
              name='publication'
              type='text'
              required
              value={newBook.publication}
              placeholder='publication'
              onChange={onInputChange}
            />
          </div>

          <div className='mb-4'>
            <label className='py-6 ' htmlFor='book_picture'>
              Image:{' '}
            </label>
            <input
              id='book_picture'
              type='text'
              name='book_picture'
              value={newBook.book_picture}
              placeholder='cover image of book'
              onChange={onInputChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='reading_level'>
              {' '}
              Level:{'  '}{' '}
            </label>
            <input
              id='reading_level'
              type='text'
              name='reading_level'
              placeholder='reading level'
              value={newBook.reading_level}
              onChange={onInputChange}
              required
            />
          </div>
          <div className='justify-center ml-6 space-x-6 '>
            <input className=' px-5  py-3 rounded bg-teal-500' type='submit' />
            <button style={{ border: 'none' }} className='second'></button>
            <Link
              style={{ margin: '0 auto', textAlign: 'center' }}
              to={`/books`}
            >
              <button className=' px-5  py-3 rounded bg-teal-500'>
                Cancel{' '}
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewBooks;

// https://stackoverflow.com/questions/64495308/cascade-dropdown-using-react-hooks
// https://codesandbox.io/s/react-cascading-select-c3hji
// https://www.cluemediator.com/cascading-dropdown-in-react
// https://stackoverflow.com/questions/54032379/call-two-functions-within-onchange-event-in-react
