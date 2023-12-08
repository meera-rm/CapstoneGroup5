import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import httpService from '../httpService';
import { MdAddComment } from 'react-icons/md';
const API = process.env.REACT_APP_API_URL;

const LogEntry = ({ log, index }) => {
  const [comment, setComment] = useState('');
  const [message, setMessage] = useState(true);
  const onClick = () => setMessage(false);

  useEffect(() => {
    //  httpService
    axios
      .get(`${API}/api/comments/logs/${log.log_id}`)
      .then((response) => {
        setComment(response.data.payload.teacher_comments);
        // console.log(response.data.payload.teacher_comments);
      })
      .catch((err) => console.log(err));
  }, [log.log_id]);

 
  const renderAddCommentButton = () => {
    if (!comment) {
      return (
        <Link to={`/comments/new`}>
          <button
            className=' bg-teal-500 px-6 py-4 text-black rounded '
            onClick={onClick}
            //   onClick={addComment}
          >
            <MdAddComment />{' '}
          </button>
        </Link>
      );
    }
    return null;
  };

  return (
    <tr key={log.log_id}>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <Link
          className='font-bold text-black-700 hover:underline'
          to={`/logs/${log.log_id}`}
        >
          {index + 1}
        </Link>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <Link
          className='font-bold text-black-700 hover:underline'
          to={`/logs/${log.log_id}`}
        >
          {log.date_read.slice(0, 10)}
        </Link>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
        <Link
          className='font-bold text-black-700 hover:underline'
          to={`/logs/${log.log_id}`}
        >
          {log.book_title}
        </Link>
      </td>
      {/* <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
                <Link
                    className='font-bold text-black-700 hover:underline'
                    to={`/logs/${log.log_id}`}
                >
                    {log.books_id}
                </Link>
            </td> */}
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <Link
          className='font-bold text-black-700 hover:underline'
          to={`/logs/${log.log_id}`}
        >
          {log.reading_minutes}
        </Link>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
        <Link
          className='font-bold text-black-700 hover:underline'
          to={`/logs/${log.log_id}`}
        >
          {log.pages_read}
        </Link>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
        <Link
          className='font-bold text-black-700 hover:underline'
          to={`/logs/${log.log_id}`}
        >
          {log.reading_inference}
        </Link>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
        <div className='ml-3 p-3 text-sm text-indigo-900'>
          {/* {comment} */}
          {comment || renderAddCommentButton()}
        </div>
      </td>
    </tr>
  );
};
export default LogEntry;
