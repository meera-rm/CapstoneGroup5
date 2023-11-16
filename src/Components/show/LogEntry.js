import React ,{useState,useEffect} from 'react';
import { Link  } from 'react-router-dom';
import axios from 'axios';
import httpService from '../httpService';

const API = process.env.REACT_APP_API_URL;

const LogEntry =({log,index})=>{
    const [comment, setComment]=useState('');
   
   
  useEffect(() => {
    //  httpService
    axios.get(`${API}/api/comments/logs/${log.log_id}`)
      .then((response) => {
        setComment(response.data.payload.teacher_comments);
        console.log(response.data.payload.teacher_comments);
      })
      .catch((err) => console.log(err));
  }, [log.log_id]);
    return(
      
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
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm '>
                <Link
                    className='font-bold text-black-700 hover:underline'
                    to={`/logs/${log.log_id}`}
                >
                    {log.books_id}
                </Link>
            </td>
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
                   {comment}
                </div>
            </td>      
        </tr> 
    )
}
export default LogEntry;