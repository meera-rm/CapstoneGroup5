import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;
console.log(API);
const StudentDetails = () => {
  const [student, setStudent] = useState([]);

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/students/${id}`)
      .then((response) => {
        setStudent(response.data);
        console.log(response.data)
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate]);

  //Delete functions
  const handleDelete = () => {
    axios
      .delete(`${API}/api/students/${id}`)
      .then(() => {
        navigate('/students');
      })
      .catch((e) => console.error(e));
  };

  return (
    <div class='max-h-screen grid place-items-center font-mono'>
      <div class='bg-white h-24 w-64 rounded-md'></div>
      <h2 className='font-bold mb-6 text-3xl'>Student Details</h2>
      <article className='text-center '>
        <div>
          <p className='font-bold'>
            Id:
            <span className='font-semibold'>{student.student_id}</span>
          </p>
          <p className='font-bold'>
            Student Name:
            <span className='font-semibold'>{student.student_name}</span>
          </p>
          <p className='font-bold'>
            Parent Name:
            <span className='font-semibold'>{student.parent_name}</span>
          </p>
          <p className='font-bold'>
            Stucent_email :{' '}
            <span className='font-semibold'>{student.student_email}</span>
          </p>
          <p className='font-bold'>
            Parent Email:{' '}
            <span className='font-semibold'>{student.parent_email}</span>
          </p>
          {/* <p className='font-bold'>
            Subject:<span className='font-semibold'>{student.class_subject}</span>
          </p> */}
          <p className='font-bold'>
            Year:<span className='font-semibold'>{student.academic_year}</span>
          </p>
          <p className='font-bold'>
            Reading_level:
            <span className='font-semibold'>{student.reading_level}</span>
          </p>
          <p className='font-bold'>
            Class Subject:
            <span className='font-semibold'>{student.class_subject}</span>
          </p>
        </div>
   
   
  
        <div className=' mt-10 flex justify-center ml-6 space-x-6'>
          <div >
            {' '}
            <Link to={'/students'}>
              <button className='bg-teal-500 px-6 py-4 text-white rounded  '>Back </button>
            </Link>
          </div>
          <div>
            {' '}
            <Link to={`/students/${id}/edit`}>
              <button className=' bg-teal-500 px-6 py-4 text-white rounded ' >Edit </button>
            </Link>
          </div>
          <div>
            {' '}
            <Link to={'/students'}>
              <button
                className=' bg-teal-500 px-6 py-4 text-white rounded '
                onClick={handleDelete}
              >
                Delete
              </button>
            </Link>
          </div>
          </div>
      </article>
      </div>
  )
};

export default StudentDetails;
