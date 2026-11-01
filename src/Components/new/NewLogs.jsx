import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import httpService from '../httpService';
import { apiFetch } from '../../api';
const API = import.meta.env.VITE_API_URL;

const NewLogs = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();
  // After saving: back to that student's page, or the student dashboard when there's no student in the URL
  const afterSave = id ? `/students/${id}` : '/student-dashboard';

  //declare states
  const [newLog, setNewLog] = useState({
    reading_inference: '',
    book_title: '',
    reading_minutes: '',
    pages_read: '',
    books_id: '',
    students_id: id,
  });

  const handleTextChange = (event) => {
    console.log(event.target.value);

    setNewLog({
      ...newLog,
      [event.target.id]: event.target.value,
    });
    console.log('in text change', newLog);
  };

  // apiFetch sends the login token; the numbers and optional book id are sent in the types the database expects
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await apiFetch('/api/logs/new', {
        method: 'POST',
        body: JSON.stringify({
          reading_inference: newLog.reading_inference.trim(),
          book_title: newLog.book_title.trim(),
          reading_minutes: Number(newLog.reading_minutes) || 0,
          pages_read: Number(newLog.pages_read) || 0,
          books_id: null, // books are typed by title; a book id must match an existing book
          students_id: id ? Number(id) : undefined, // students are set by the server from their login
        }),
      });
      notify();
    } catch (err) {
      toast.error(err.message || 'Could not save the log');
    }
  };

  const notify = () => {
    toast.success('🦄 , You added a new log', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setTimeout(() => {
      navigate(afterSave);
    }, 2000);
  };

  return (
    <div className='flex items-center h-screen w-full bg-teal-lighter'>
      <div className='w-full bg-white rounded shadow-lg p-2 m-2 md:max-w-sm md:mx-auto'>
        <form
          className='mb-4 md:flex md:flex-wrap md:justify-between'
          onSubmit={handleSubmit}
        >
          <div className='flex flex-col mb-4 md:w-full'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='book_title'
            >
              Book Title
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='book_title'
              name='book_title'
              value={newLog.book_title}
              type='text'
              autoComplete='off'
              onChange={handleTextChange}
              placeholder='Book Title'
            />
          </div>

          <div className='flex flex-col mb-4 md:w-half'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='reading_inference'
            >
              Reading Inference
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='reading_inference'
              name='reading_inference'
              value={newLog.reading_inference}
              type='text'
              onChange={handleTextChange}
              autoComplete='off'
              placeholder='Reading Inference'
              required
            />
          </div>

          <div className='flex flex-col mb-4 md:w-half'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='pages_read'
            >
              Pages Read
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='pages_read'
              type='number'
              name='pages_read'
              value={newLog.pages_read}
              placeholder='Pages read'
              autoComplete='off'
              onChange={handleTextChange}
              required
            />
          </div>

          <div className='flex flex-col mb-4 md:w-half'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='reading_minutes'
            >
              Minutes Read
            </label>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='reading_minutes'
              type='number'
              name='reading_minutes'
              autoComplete='off'
              value={newLog.reading_minutes}
              placeholder='Reading minutes'
              onChange={handleTextChange}
              required
            />
          </div>


          <div className='md:justify-center ml-6 space-x-6 '>
            <input className=' px-5 py-3 rounded bg-teal-500' type='submit' />
            {/* <button lassName=' px-5  py-3 rounded bg-teal-500' className='second'></button> */}

            <button type='button' onClick={() => navigate(-1)} className=' px-5 py-3 rounded bg-teal-500'>
              Cancel
            </button>
          </div>
        </form>
        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default NewLogs;
