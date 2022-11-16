import { useState } from 'react';
import axios from 'axios';
// import ReactCanvasConfetti from 'react-canvas-confetti';
import { useNavigate, Link, useParams } from 'react-router-dom';
import './NewBooks.css';
// import Swal from 'sweetalert2';

const API = process.env.REACT_APP_API_URL;

// const canvasStyles = {
//   position: 'fixed',
//   pointerEvents: 'none',
//   width: '100%',
//   height: '100%',
//   top: 0,
//   left: 0,
// };

const NewBooks = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  // var toastMixin = Swal.mixin({
  //   toast: true,
  //   icon: 'success',
  //   title: 'General Title',
  //   animation: false,
  //   position: 'top-right',
  //   showConfirmButton: false,
  //   timer: 3000,
  //   timerProgressBar: true,
  //   didOpen: (toast) => {
  //     toast.addEventListener('mouseenter', Swal.stopTimer);
  //     toast.addEventListener('mouseleave', Swal.resumeTimer);
  //   },
  // });

  // const refAnimationInstance = useRef(null);

  // const getInstance = useCallback((instance) => {
  //   refAnimationInstance.current = instance;
  // }, []);

  // const makeShot = useCallback((particleRatio, opts) => {
  //   refAnimationInstance.current &&
  //     refAnimationInstance.current({
  //       ...opts,
  //       origin: { y: 0.7 },
  //       particleCount: Math.floor(200 * particleRatio),
  //     });
  // }, []);

  // const fire = useCallback(() => {
  //   makeShot(0.25, {
  //     spread: 26,
  //     startVelocity: 55,
  //   });

  //   makeShot(0.2, {
  //     spread: 60,
  //   });

  //   makeShot(0.35, {
  //     spread: 100,
  //     decay: 0.91,
  //     scalar: 0.8,
  //   });

  //   makeShot(0.1, {
  //     spread: 120,
  //     startVelocity: 25,
  //     decay: 0.92,
  //     scalar: 1.2,
  //   });

  //   makeShot(0.1, {
  //     spread: 120,
  //     startVelocity: 45,
  //   });
  // }, [makeShot]);

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
    <div className='add-book'>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='book_title'>Booktitle:</label>
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
        <div>
          <label htmlFor='book_author'>Author:</label>
          <input
            id='book_author'
            type='text'
            name='book_author'
            value={newBook.book_author}
            placeholder='author'
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='isbn_number'>ISBN Number:</label>
          <input
            id='isbn_number'
            type='text'
            name='isbn_number'
            value={newBook.isbn_number}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label htmlFor='publication'>Publication:</label>
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

        <div>
          <label htmlFor='book_picture'>Cover Image: </label>
          <input
            id='book_picture'
            type='text'
            name='book_picture'
            value={newBook.book_picture}
            placeholder='picture'
            onChange={onInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor='reading_level'>Reading Level:</label>
          <input
            id='reading_level'
            type='text'
            name='reading_level'
            value={newBook.reading_level}
            onChange={onInputChange}
          />
        </div>

        <br />
        <div className='add-btn'>
          <input className='new-btns' type='submit' />
          <button style={{ border: 'none' }} className='second'></button>
          <Link style={{ margin: '0 auto', textAlign: 'center' }} to={`/books`}>
            <button className='new-btns'>Cancel </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default NewBooks;
