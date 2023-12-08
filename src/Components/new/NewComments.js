import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import httpService from '../httpService';
// import httpService from '../httpService';

const API = process.env.REACT_APP_API_URL;

const NewComments = (props) => {
  console.log(props);
  const navigate = useNavigate();
  let { id } = useParams();

  const [newComment, setNewComment] = useState({
  
    teacher_comments: '',
    // logs_id:
    // teachers_id:
  });

  const handleTextChange = (event) => {
    console.log(event.target.value);

    setNewComment({
      ...newComment,
      [event.target.id]: event.target.value,
    });
    console.log('in text change', newComment);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inhandlesumbit', newComment);
    // httpService
    httpService.post(`${API}/api/comments/new`, newComment)
      .then(() => {
        console.log('added');
        notify();
        navigate(`/student/${id}`);
        
      })
      .catch((c) => console.error('catch', c));
  };

  const notify = () => {
    toast.success(
      '🦄 , You added a new book',
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    )
    setTimeout(() => {
      navigate('/logs')
    }, 2000)
  }

  return (
    
    // <div className='flex flex-col text-center h-screen items-center justify-center  '>
      // <div className='rounded-md  text-black lg:w-2/5 md:w-3/5 w-4/5'>
      //   <form onSubmit={handleSubmit}>
      <div className='flex items-center h-screen w-full bg-teal-lighter'>
      <div className='w-full bg-white rounded shadow-lg p-6 m-4 md:max-w-sm md:mx-auto'>
        <form
          className='mb-4 md:flex md:flex-wrap md:justify-between'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col mb-0 md:w-full'>
            <label
              className='mb-0 uppercase font-bold text-lg text-grey-darkest '
              htmlFor='teacher_comments'
            >
              Teacher Comments
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='teacher_comments'
              type='text'
              name='teacher_comments'
              value={newComment.teacher_comments}
              autoComplete='off'
              placeholder='Teacher comments'
              onChange={handleTextChange}
              required
            />
          </div>
          <div className='md:justify-center ml-6 space-x-6 mt-10'>
            <input className=' px-5 py-3 rounded bg-teal-500' type='submit' />
            {/* <button lassName=' px-5  py-3 rounded bg-teal-500' className='second'></button> */}

            <Link to={`/students`}>
              <button className=' px-5 py-3 rounded bg-teal-500'>
                Cancel{' '}
              </button>
            </Link>
          </div>
        </form>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default NewComments;
