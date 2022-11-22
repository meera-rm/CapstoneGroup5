import { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const NewLogs = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();

  //declare states
  const [newLog, setNewLog] = useState({
    log_id: '',
    date_read: '',
    reading_inference: '',
    reading_minutes: '',
    pages_read: '',
    role_name: '',
    books_id: '',
    students_id: '',
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
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    // <div className='add-trans'>
    <div className='flex flex-col text-center h-screen items-center justify-center  '>
      <div className='rounded-md  text-black lg:w-2/5 md:w-3/5 w-4/5'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='py-6' htmlFor='reading_inference'>
              Reading Inference:
            </label>
            <input
              id='reading_inference'
              name='reading_inference'
              value={newLog.reading_inference}
              type='text'
              onChange={handleTextChange}
              placeholder='Reading Inference'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='pages_read'>
              Pages Read:
            </label>
            <input
              id='pages_read'
              type='text'
              name='pages_read'
              value={newLog.pages_read}
              placeholder='pages read'
              onChange={handleTextChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='reading_minutes'>
              Minutes Read:
            </label>
            <input
              id='reading_minutes'
              type='text'
              name='reading_minutes'
              value={newLog.pages_read}
              placeholder='reading_minutes'
              onChange={handleTextChange}
              required
            />
          </div>
          {/* <div>
            <label className='py-6' htmlFor='role_name'>
              Role Name:
            </label>
            <input
              id='role_name'
              type='text'
              name='role_name'
              value={newLog.role_name}
              onChange={handleTextChange}
              required
            />
          </div> */}

          <br />
          {/* <div className='add-btn'> */}
          <div className='justify-center ml-6 space-x-6 '>
            <input className=' px-5  py-3 rounded bg-teal-500' type='submit' />
            {/* <button lassName=' px-5  py-3 rounded bg-teal-500' className='second'></button> */}
            <Link to={`/students`}>
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

export default NewLogs;
