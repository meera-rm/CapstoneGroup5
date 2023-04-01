import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const API = process.env.REACT_APP_API_URL;

const BookDetails = () => {

  const [book, setBook] = useState([]);

  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/books/${id}`)
      .then((response) => {
        setBook(response.data.payload);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate, book]);

  // const filterBooksbyReadingLevel = (letter) =>{
  //   return book.filter((bookItem) => bookItem.reading_level === letter.toUpperCase())[0];
  // }


  //Delete functions
  const handleDelete = () => {
    axios
      .delete(`${API}/api/books/${id}`)
      .then(() => {
        navigate('/books');
      })
      .catch((e) => console.error(e));
  };

  return (
    
    <div className='max-h-screen grid place-items-center '>
      <div className='bg-white h-24 w-64 rounded-md'></div>
      <h2 className='font-bold mb-5 text-teal-600 mt-10 text-5xl'>
        Book Details
      </h2>
      {/* <article className='flex justify-center items-center leading-none' > */}
      
      <article className='text-center'>
        <div>
        
          <p className='font-bold'>
            <img
              className='text-center object-contain h-52 w-96'
              src={`${book.book_picture}`}
              alt={book.book_picture}
            />
          </p>
          <p className='font-bold'>
            {' '}
            Id:
            <span className='font-semibold'>{book.book_id}</span>
          </p>
          <p className='font-bold'>
            Book Title:<span className='font-semibold'>{book.book_title}</span>
          </p>

          <p className='font-bold'>
            Book Author:
            <span className='font-semibold'>{book.book_author}</span>
          </p>
          <p className='font-bold'>
            ISBN : <span className='font-semibold'>{book.isbn_number}</span>
          </p>
          <p className='font-bold'>
            Publication:{' '}
            <span className='font-semibold'>{book.publication}</span>
          </p>
          <p className='font-bold'>
            Reading Level:
            <span className='font-semibold'>{book.reading_level}</span>
          </p>
        </div>

        <div className=' mt-10 flex justify-center ml-6 space-x-6'>
          <div className='bg-teal-500 px-6 py-4 rounded text-white'>
            {' '}
            <Link to={'/books'}>
              <button className='show-btns'>Back </button>
            </Link>
          </div>
          <div className='bg-teal-500 px-6 py-4 text-white rounded '>
            {' '}
            <Link to={`/books/${id}/edit`}>
              <button className='show-btns'>Edit </button>
            </Link>
          </div>
          <div className='bg-teal-500 px-6 py-4 text-white rounded '>
            {' '}
            <Link to={'/books'}>
              <button className='show-btns' onClick={handleDelete}>
                {/* <button style={{ border: 'none' }} className='second'></button> */}
                Delete
              </button>
            </Link>
          </div>
        </div>
        
      </article>
    </div>
  );
};

export default BookDetails;

