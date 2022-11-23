import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;
console.log(API);
const TeacherDetails = () => {
  const [teacher, setTeacher] = useState([]);

  let navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/api/teachers/${id}`)
      .then((response) => {
        setTeacher(response.data.payload);
      })
      .catch(() => navigate('/not-found'));
  }, [id, navigate, teacher]);

  //Delete functions
  const handleDelete = () => {
    axios
      .delete(`${API}/api/teachers/${id}`)
      .then(() => {
        navigate('/teachers');
      })
      .catch((e) => console.error(e));
  };

  return (
    <div class='max-h-screen grid place-items-center font-mono'>
      <div class='bg-white h-24 w-64 rounded-md'></div>
      <h2 className='font-bold mb-6 text-3xl'>Teacher Details</h2>
      <article className='text-center '>
        <div>
          <p className='font-bold'>
            Id:
            <span className='font-semibold'>{teacher.teacher_id}</span>
          </p>
          <p className='font-bold'>
            Teacher Name:
            <span className='font-semibold'>{teacher.teacher_name}</span>
          </p>
          <p className='font-bold'>
            School Name:
            <span className='font-semibold'>{teacher.school_name}</span>
          </p>
          <p className='font-bold'>
            School Address :{' '}
            <span className='font-semibold'>{teacher.school_address}</span>
          </p>
          <p className='font-bold'>
            School District:{' '}
            <span className='font-semibold'>{teacher.school_district}</span>
          </p>
          <p className='font-bold'>
            Zipcode :<span className='font-semibold'>{teacher.zipcode}</span>
          </p>
          <p className='font-bold'>
            State Name:
            <span className='font-semibold'>{teacher.state_name}</span>
          </p>
          <p className='font-bold'>
            Class Subject:
            <span className='font-semibold'>{teacher.class_subject}</span>
          </p>
        </div>

        <div className=' mt-10 flex justify-center ml-6 space-x-6'>
          <div>
            {' '}
            <Link to={'/teachers'}>
              <button className='bg-teal-500 px-6 py-4 rounded text-white'>
                Back{' '}
              </button>
            </Link>
          </div>
          <div>
            {' '}
            <Link to={`/teachers/${id}/edit`}>
              <button className='bg-teal-500 px-6 py-4 rounded text-white'>
                Edit{' '}
              </button>
            </Link>
          </div>
          <div>
            {' '}
            <Link to={'/teachers'}>
              <button
                className='bg-teal-500 px-6 py-4 rounded text-white'
                onClick={handleDelete}
              >
                Delete
              </button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default TeacherDetails;
