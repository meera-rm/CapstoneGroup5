import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const UpdateTeacher = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [teacher, setTeacher] = useState({
    teacher_id: '',
    teacher_name: '',
    school_name: '',
    school_district: '',
    school_address: '',
    zipcode: 0,
    state_name: '',
    class_subject: '',
  });

  useEffect(() => {
    axios
      .get(`${API}/api/teachers/${id}`)
      .then((res) => {
        setTeacher(res.data.payload);
      })
      .catch((e) => console.error(e));
    console.log('data=', teacher);
  }, [id, teacher]);

  const onInputChange = (event) => {
    console.log(event.target.value);
    setTeacher({
      ...teacher,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`${API}/api/teachers/${id}`, teacher)
      .then(
        (res) => {
          navigate(`/teachers${id}`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn('catch', c));
  };

  return (
    // <div className='edit-teacher'>
    <div className='flex flex-col text-center h-screen items-center justify-center '>
    <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'></div>
      <form onSubmit={handleSubmit}>
        <div>
          <label  className='py-6' htmlFor='teacherName'>TeacherName:</label>
          <input
            id='teacherName'
            name='teacherName'
            value={teacher.teacher_name}
            type='text'
            onChange={onInputChange}
            placeholder='Teacher name'
          />
        </div>
        <div>
          <label   className='py-6' htmlFor='schoolname'>School Name:</label>
          <input
            id='schoolname'
            type='text'
            name='schoolname'
            value={teacher.school_name}
            placeholder='schoolname'
            onChange={onInputChange}
          />
        </div>
        <div>
          <label   className='py-6' htmlFor='school_district'>School Disctrict:</label>
          <input
            id='school_district'
            type='text'
            name='school_district'
            value={teacher.school_district}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label  className='py-6' htmlFor='school_address'>School Address:</label>
          <input
            id='school_address'
            name='school_address'
            type='text'
            value={teacher.school_address}
            placeholder='school_address'
            onChange={onInputChange}
          />
        </div>

        <div>
          <label  className='py-6' htmlFor='zipcode'>Cover Image: </label>
          <input
            id='zipcode'
            type='text'
            name='zipcode'
            value={teacher.zipcode}
            placeholder='zipcode'
            onChange={onInputChange}
          />
        </div>
        <div>
          <label  className='py-6' htmlFor='state_name'>Reading Level:</label>
          <input
            id='state_name'
            type='state_name'
            name='state_name'
            value={teacher.state_name}
            onChange={onInputChange}
          />
        </div>
        <div>
          <label  className='py-6' htmlFor='class_subject'>Reading Level:</label>
          <input
            id='class_subject'
            type='class_subject'
            name='class_subject'
            value={teacher.class_subject}
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
            value='submit'
          />
          {/* </div>
          <div> */}
          <Link to={`/teachers/${id}`}>
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

export default UpdateTeacher;
