import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import {ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const API = process.env.REACT_APP_API_URL;

const NewLogs = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();

  //declare states
  const [newLog, setNewLog] = useState({
    log_id: '',
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inhandlesumbit', newLog);
    axios
      .post(`${API}/api/logs/new`, newLog)
      .then(() => {
        console.log('added');
        navigate(`/logs`);
        toast.success("You have added a new log");
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    // <div className='add-trans'>
    // <div className='flex flex-col text-center h-screen items-center justify-center  '>
    // <div className='rounded-md  text-black lg:w-2/5 md:w-3/5 w-4/5'>
    <div className='flex items-center h-screen w-full bg-teal-lighter'>
      <div className='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
        <form
          // className='bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full'
          className='mb-4 md:flex md:flex-wrap md:justify-between'
          onSubmit={handleSubmit}
        >
          {/* <div className='mb-4'>
          <label htmlFor='book_title'>Book Title</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-1 text-black border-2 border-black-700 outline'
            id='book_title'
            name='book_title'
            value={newLog.book_title}
            type='text'
            autoComplete='off'
            onChange={handleTextChange}
            placeholder='Book Title'
          />
        </div> */}
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
          {/* <div className='mb-4'>
          <label htmlFor='reading_inference'>Reading Inference:</label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-1 text-black border-2 border-black-700 outline'
            id='reading_inference'
            name='reading_inference'
            value={newLog.reading_inference}
            type='text'
            onChange={handleTextChange}
            autoComplete='off'
            placeholder='Reading Inference'
            required
          />
        </div> */}
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
          {/* <div className='mb-4'>
          <label
            className='block text-black text-sm font-bold mb-1'
            htmlFor='pages_read'
          >
            Pages Read:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-1 text-black border-2 border-black-700 outline'
            id='pages_read'
            type='number'
            name='pages_read'
            value={newLog.pages_read}
            placeholder='Pages read'
            autoComplete='off'
            onChange={handleTextChange}
            required
          />
        </div> */}
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
          {/* <div className='mb-4'>
          <label
            className='block text-black text-sm font-bold mb-1'
            htmlFor='reading_minutes'
          >
            Minutes Read:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-1 text-black border-2 border-black-700 outline'
            id='reading_minutes'
            type='number'
            name='reading_minutes'
            autoComplete='off'
            value={newLog.reading_minutes}
            placeholder='Reading minutes'
            onChange={handleTextChange}
            required
          />
        </div> */}
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

          {/* <div className='mb-4'>

          <label
            className='block text-black text-sm font-bold mb-1'
            htmlFor='books_id'
          >
            Book Id:
          </label>
          <input
            className='select-none shadow appearance-none border rounded w-full py-2 px-1 text-black border-2 border-black-700 outline'
            id='books_id'
            type='text'
            name='books_id'
            value={newLog.books_id}
            placeholder='books_id'
            onChange={handleTextChange}
            required
          />
        </div> */}

          {/* <div className='add-btn'> */}
          <div className='md:justify-center ml-6 space-x-6 '>
            <input className=' px-5 py-3 rounded bg-teal-500' type='submit' />
            {/* <button lassName=' px-5  py-3 rounded bg-teal-500' className='second'></button> */}

            <Link to={`/students`}>
              <button className=' px-5 py-3 rounded bg-teal-500'>
                Cancel{' '}
              </button>
            </Link>
          </div>
        </form>
        <ToastContainer 
            position="top-center"
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
    // // </div>*/}
  );
};

export default NewLogs;
