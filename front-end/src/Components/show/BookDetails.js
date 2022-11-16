import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookDetails.css';

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

  const handleDelete = () => {
    axios
      .delete(`${API}/api/books/${id}`)
      .then(() => {
        navigate('/books');
      })
      .catch((e) => console.error(e));
  };

  return (
    <article>
      <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>
        Book Details
      </h2>
      <div className='cards'>
        <img src={`${book.book_picture}`} alt='cover of  a book' />
        <p>
          Book Title:<span className='items'>{book.book_title}</span>
        </p>
        <p>
          Book Author:
          <span className='items'>{book.book_author}</span>
        </p>
        <p>
          ISBN : <span className='items'>{book.isbn_number}</span>
        </p>
        <p>
          Publication: <span className='items'>{book.publication}</span>
        </p>
        <p>
          Reading Level:<span className='items'>{book.reading_level}</span>
        </p>
      </div>

      <div className='showNavigation'>
        <div>
          {' '}
          <Link to={'/books'}>
            <button className='show-btns'>Back </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={`/books/${id}/edit`}>
            <button className='show-btns'>Edit </button>
          </Link>
        </div>
        <div>
          {' '}
          <Link to={'/books'}>
            <button className='show-btns' onClick={handleDelete}>
              Delete
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BookDetails;
