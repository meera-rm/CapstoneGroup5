import { useState } from 'react';
import axios from 'axios';

import { useNavigate, useParams, Link } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const NewTeachers = () => {
  const navigate = useNavigate();
  let { id } = useParams();

  //declare states
  const [teacher, setTeacher] = useState({
    teacher_id: '',
    teacher_name: '',
    school_name: '',
    school_district: '',
    school_address: '',
    zipcode: '',
    state_name: '',
    class_subject: '',
  });

  const handleTextChange = (event) => {
    console.log(event.target.value);

    setTeacher({
      ...teacher,
      [event.target.id]: event.target.value,
    });
    console.log('in text change', teacher);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('inhandlesumbit', teacher);
    axios
      .post(`${API}/api/teachers`, teacher)
      .then(() => {
        console.log('added');
        navigate(`/teachers`);
      })
      .catch((c) => console.error('catch', c));
  };

  return (
    // <div className='add-trans'>
    <div className='flex flex-col text-center h-screen items-center justify-center '>
      <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label className='py-6' htmlFor='teacher_name'>
              TeacherName:
            </label>
            <input
              id='teacher_name'
              name='teacher_name'
              value={teacher.teacher_name}
              type='text'
              onChange={handleTextChange}
              placeholder='Teacher name'
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='school_name'>
              School Name:
            </label>
            <input
              id='school_name'
              type='text'
              name='school_name'
              value={teacher.school_name}
              placeholder='school_name'
              onChange={handleTextChange}
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='school_district'>
              School Disctrict:
            </label>
            <input
              id='school_district'
              type='text'
              name='school_district'
              placeholder='school_district'
              value={teacher.school_district}
              onChange={handleTextChange}
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='school_address'>
              School Address:
            </label>
            <input
              id='school_address'
              name='school_address'
              type='text'
              value={teacher.school_address}
              placeholder='school_address'
              onChange={handleTextChange}
            />
          </div>

          <div className='mb-4'>
            <label className='py-6' htmlFor='zipcode'>
              ZipCode:{' '}
            </label>
            <input
              id='zipcode'
              type='text'
              name='zipcode'
              value={teacher.zipcode}
              placeholder='zipcode'
              onChange={handleTextChange}
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='state_name'>
              State Name:
            </label>
            <input
              id='state_name'
              type='text'
              name='state_name'
              value={teacher.state_name}
              placeholder='state_name'
              onChange={handleTextChange}
            />
          </div>
          <div className='mb-4'>
            <label className='py-6' htmlFor='class_subject'>
              Subject:
            </label>
            <input
              id='class_subject'
              type='text'
              name='class_subject'
              value={teacher.class_subject}
              placeholder='class_subject'
              onChange={handleTextChange}
            />
          </div>
          <br />
          {/* <div className='add-btn'> */}
          <div className='justify-center ml-6 space-x-6 '>
            <input
              className=' px-5 py-3 rounded bg-teal-500'
              type='submit'
              value='submit'
            />

            <Link to={`/teachers`}>
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

export default NewTeachers;
