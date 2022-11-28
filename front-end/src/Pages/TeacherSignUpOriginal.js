import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const API = process.env.REACT_APP_API_URL;

const TeacherSignUp = () => {

  const navigate = useNavigate();
  const id = useParams();
  const [teachers, setTeachers] = useState({
    id: '',
    teacher_name: '',
    teacher_email: '',
    school_name: '',
    school_district: '',
    school_address: '',
    zipcode: '',
    class_subject: '',
    password: '',
  });

  const newSignUp = (event) => {
    setTeachers({ ...teachers, [event.target.id]: event.target.value });
  };

  const handleSignUp = (teachers) => {
    axios
      .get(`${API}/teacher-signup`, teachers)
      .then(() => {
        navigate(`/teacher-login`);
      })
      .catch((error) => {
        console.warn(error);
      });
  };

  const handleForm = (event) => {
    event.preventDefault();
    handleSignUp(teachers, id);
  };

  return (
    // need to center this div
    <div className='text-center'>
      <h1>Teacher Sign Up</h1>
      <div className='flex items-center justify-center'>
        <img
          className=' h-40 w-56 '
          src='https://t4.ftcdn.net/jpg/03/28/10/15/360_F_328101522_ezzWWm1FylxgfdUj6tnVskLgszJBUWsz.jpg'
          alt=''
        />
      </div>
      <div className='mt-6 mb-4 '>
        <form
          onSubmit={handleForm}
          className='"p-10 bg-white rounded-lg drop-shadow-lg space-y-4'
        >
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='teacher-name'>
              Teacher Name
            </label>
            <input
              className='outline '
              id='teacher_name'
              type='text'
              defaultValue={teachers.teacher_name}
              onChange={newSignUp}
              required
            />
          </div>
          {/* think we need to add email to database? */}
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='teacher-email'>
              Teacher Email
            </label>
            <input
              className='outline '
              id='teacher_name'
              type='email'
              defaultValue={teachers.teacher_name}
              onChange={newSignUp}
              required
            />
          </div>
          {/* //  className='peer border border-slate-400' */}

          {/* <p className="invisible peer-invalid:visible text-red-700 font-light">
                Please enter your name
            </p> */}
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='school-name'>
              School Name
            </label>
            <input
              className='outline '
              id='school_name'
              type='text'
              defaultValue={teachers.school_name}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='school-district'>
              School District
            </label>
            <input
              className='outline '
              id='school-district'
              type='text'
              defaultValue={teachers.school_district}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='teacher-name'>
              Class Subject
            </label>
            <input
              className='outline '
              id='teacher_name'
              type='text'
              defaultValue={teachers.class_subject}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='school-address'>
              School Address
            </label>
            <input
              className='outline '
              id='school-address'
              type='text'
              defaultValue={teachers.school_address}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='zipcode'>
              Zipcode
            </label>
            <input
              className='outline '
              id='zipcode'
              type='text'
              defaultValue={teachers.zipcode}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='grade'>
              Grade
            </label>
            <input
              className='outline '
              id='grade'
              type='text'
              // need to add grade into teacher database
              defaultValue={teachers.grade}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <label className='text-left px-4' htmlFor='password'>
              Password
            </label>
            <input
              className='outline '
              id='password'
              type='text'
              defaultValue={teachers.password}
              onChange={newSignUp}
              required
            />
          </div>
          <div className='mt-6'>
            <button className=' px-5 py-3 rounded bg-teal-600'>
              Create Account
            </button>

            <p className='font-semibold mb-8'>
              Already Registered? Goto{' '}
              <a href='/login/teacher-login'>
                <span className='text-teal-700'>Login</span>
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignUp;
