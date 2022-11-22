import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';


const API = process.env.REACT_APP_API_URL;

const UpdateStudent = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    student_id:"",
    student_name:"",
    parent_name:"",
    parent_email:"",
    student_email:"",
    academic_year:"",
    reading_level:"",
    role:"",
    password:"",
    id_of_teacher:""
    
  });

  useEffect(() => {
    axios
      .get(`${API}/api/students/${id}`)
      .then((res) => {
        
        setStudent(res.data.payload)
      })
      .catch((e) => console.error(e));
      console.log('data=',student)
  }, [id,student]);

 

  const onInputChange = (event) => {
    console.log(event.target.value);
    setStudent({
        ...student,
      [event.target.id]: event.target.value,
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/api/students/${id}`, student)
      .then((res) => {
        navigate(`/students${id}`);
      },
      (error) => console.error(error)
    )
      .catch((c) => console.warn('catch', c));
  };

  return (
    // <div className='edit-student'>
    <div className='flex flex-col text-center h-screen items-center justify-center '>
    <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label   className='py-6' htmlFor='studentName'>StudentName:</label>
          <input
            id='studentName'
            name='studentName'
            value={student.student_name}
            type='text'
            onChange={onInputChange}
            placeholder='Student name'
           
          />
        </div>
        <div>
          <label   className='py-6' htmlFor='parent_name'>Parent Name:</label>
          <input
            id='parent_name'
            type='text'
            name='parent_name'
            value={student.parent_name}
            placeholder='parent name'
            onChange={onInputChange}
          />
        </div>
        <div>
          <label  className='py-6' htmlFor='student_name'>Student Name:</label>
          <input
            id='student_name'
            type='text'
            name='student_name'
            value={student.student_name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label   className='py-6' htmlFor='parent_email'>Parent Email:</label>
          <input
            id='parent_email'
            name='parent_email'
            type='text'
            value={student.parent_email}
            placeholder='parent_email'
            onChange={onInputChange}
          />
        </div>

        <div>
          <label  className='py-6' htmlFor='student_email'>Student Email </label>
          <input
            id='student_email'
            type='text'
            name='student_email'
            value={student.student_email}
            placeholder='student_email'
            onChange={onInputChange}
           
          />
        </div>
     
        <div>
          <label   className='py-6' htmlFor='academic_year'>Year:</label>
          <input
            id='academic_year'
            type='academic_year'
            name='academic_year'
            value={student.academic_year}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label className='py-6' htmlFor='reading_level'>Reading Level:</label>
          <input
            id='reading_level'
            type='reading_level'
            name='reading_level'
            value={student.reading_level}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label  className='py-6' htmlFor='role'>Role:</label>
          <input
            id='role'
            type='role'
            name='role'
            value={student.role}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label  className='py-6' htmlFor='password'>Password:</label>
          <input
            id='password'
            type='password'
            name='password'
            value={student.password}
            onChange={onInputChange}
          />
        </div>

        <div
         
          className='justify-center ml-6 space-x-6'
        >
          {/* <div> */}
          <input
           
            className='px-5  py-3 rounded bg-teal-500'
            type='submit'
          />
          {/* </div>
          <div> */}
          <Link to={`/students/${id}`}>
            <button
             
              className='px-5  py-3 rounded bg-teal-500'
            >
              Back
            </button>
          </Link>
          {/* </div> */}
        </div>
      </form>
    </div>
  );
};


export default UpdateStudent;
