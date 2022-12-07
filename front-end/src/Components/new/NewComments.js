import { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const NewComments = (props) => {
  console.log(props)
  const navigate = useNavigate();
  let { id } = useParams();

// const {log}=props
// const {log_id}=log
  // date_read,reading_inference,reading_minutes,pages_read,books_id,students_id
 
  const [newComment, setNewComment] = useState({
    // log_id: log_id,
    // date_read: date_read,
    // reading_inference: reading_inference,
    // reading_minutes:reading_minutes,
    // pages_read: pages_read,
    // books_id: books_id,
    // students_id: students_id,
    teacher_comments:''
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
    axios
      .post(`${API}/api/comments/new`, newComment)
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
            <label className='py-6' htmlFor='teacher_comments'>
              Teachers Comments
            </label>
            <input className='border-2 border-black-700 outline'
              id='teacher_comments'
              name='teacher_comments'
              value={newComment.teacher_comments}
              type='text'
              onChange={handleTextChange}
              placeholder='teacher_comments'
              required
            />
          </div>

          <br />
          {/* <div className='add-btn'> */}
          <div className='justify-center ml-6 space-x-6 '>
            <input className=' px-5  py-3 rounded bg-teal-500' type='submit' />
            {/* <button lassName=' px-5  py-3 rounded bg-teal-500' className='second'></button> */}
            <Link to={`/logs`}>
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

export default NewComments;
