import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

// import AllStudents from './../index/AllStudents'

const API = process.env.REACT_APP_API_URL;
console.log(API);
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
    <div className='max-h-screen grid place-items-center font-mono'>
      <div className='bg-white h-24 w-64 rounded-md'></div>
      <h2 className='font-bold mb-6 text-3xl'>Book Details</h2>
      {/* <article className='flex justify-center items-center leading-none' > */}
      <article className='text-center'>
        <div>
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
            Publication: <span className='font-semibold'>{book.publication}</span>
          </p>
          <p className='font-bold'>
            Picture :<span className='font-semibold'>{book.book_picture}</span>
          </p>
          <p className='font-bold'>
            Reading Level:<span className='font-semibold'>{book.reading_level}</span>
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
        {/* <AllStudents/> */}
      </article>
    </div>
  );
};

export default BookDetails;

// https://codepen.io/vsanku01/pen/GRjNzmP
// <div class="min-h-screen grid place-items-center bg-indigo-400 font-mono">
// <div class="bg-white h-80 w-64 rounded-md">
//   <div class="flex justify-center items-center leading-none">
//     <img
//       src="https://images.unsplash.com/photo-1585554414787-09b821c321c0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
//       alt="pic"
//       class="h-40 w-56 rounded-md shadow-2xl mt-6 transform -translate-y-10 hover:-translate-y-4 transition duration-700"
//     />
//   </div>
//   <div class="p-3">
//     <p class="block mb-1 font-extralight">Modelling</p>
//     <p class="text-xs tracking-tighter text-gray-600">
//       When it is your time, it’s your time. There is no point in worrying
//       about what you can’t control.
//     </p>
//   </div>
//   <div class="flex justify-between items-center p-2">
//     <img
//       src="https://i.pravatar.cc/150?img=58"
//       alt=""
//       class="rounded-full h-7"
//     />
//     <div class="flex">
//       <i class="material-icons" style="color: #522cad">favorite_border</i>
//       <span class="text-sm ml-1">100</span>
//       <i class="material-icons ml-1" style="color: #522cad">message</i>
//       <span class="text-sm ml-1">60</span>
//     </div>
//   </div>
// </div>
// </div>
