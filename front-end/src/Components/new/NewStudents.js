import { useState, useEffect } from 'react';
import axios from 'axios';

import { useNavigate, useParams, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const NewStudents = (props) => {
  const navigate = useNavigate();
  let { id } = useParams();

  //declare states
  const [student, setStudent] = useState({
    student_id: '',
    student_name: '',
    parent_name: '',
    parent_email: '',
    student_email: '',
    academic_year: '',
    reading_level: '',
    role: '',
    password: '',
    id_of_teacher: '',
  });

  const handleTextChange = (event) => {
    console.log(event.target.value);

    setStudent({
      ...student,
      [event.target.id]: event.target.value,
    });
    console.log('in text change', student);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inhandlesumbit', student);
    axios
      .post(`${API}/api/students`, student)
      .then(() => {
        console.log('added');
        navigate(`/students`);
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    // <div className='add-trans'>
    <div className='flex flex-col text-center h-screen items-center justify-center '>
      <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'>
        <form onSubmit={handleSubmit}>
         
          <div className='mb-4'>
            <label className='py-6' htmlFor='parent_name'>
              Parent Name:{' '}
            </label>
            <input
              id='parent_name'
              type='text'
              name='parent_name'
              value={student.parent_name}
              placeholder='parent name'
              onChange={handleTextChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='student_name'>
              Student Name:{' '}
            </label>
            <input
              id='student_name'
              type='text'
              name='student_name'
              value={student.student_name}
              placeholder='student_name'
              onChange={handleTextChange}
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='parent_email'>
              Parent Email:{' '}
            </label>
            <input
              id='parent_email'
              name='parent_email'
              type='text'
              value={student.parent_email}
              placeholder='parent_email'
              onChange={handleTextChange}
              required
            />
          </div>

          <div className='mb-4'>
            <label className='py-6' htmlFor='student_email'>
              Student Email{' '}
            </label>
            <input
              id='student_email'
              type='text'
              name='student_email'
              value={student.student_email}
              placeholder='student_email'
              onChange={handleTextChange}
              required
            />
          </div>

          <div className='mb-4'>
            <label className='py-6' htmlFor='academic_year'>
              Academic Year:{' '}
            </label>
            <input
              id='academic_year'
              type='text'
              name='academic_year'
              value={student.academic_year}
              onChange={handleTextChange}
              placeholder='academic_year'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='reading_level'>
              Reading Level:{' '}
            </label>
            <input
              id='reading_level'
              type='text'
              name='reading_level'
              value={student.reading_level}
              onChange={handleTextChange}
              placeholder='reading_level'
              required
            />
          </div>
          {/* <div>
            <label className='py-6' htmlFor='role'>
              Role:
            </label>
            <input
              id='role'
              type='text'
              name='role'
              value={student.role}
              onChange={handleTextChange}
              placeholder='role'
              required
            />
          </div> */}
          
          <br />
          {/* <div className='add-btn'> */}
          <div className='justify-center ml-6 space-x-6 '>
            <input className=' px-5  py-3 rounded bg-teal-500' type='submit' />
            {/* <button style={{ border: 'none' }} className='second'></button> */}
            <Link
            
              to={`/students`}
            >
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

export default NewStudents;
