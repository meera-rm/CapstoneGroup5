import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import logoImage from '../Components/asset/ScholarSheep.png';
import teacher from '../Components/asset/teacherlogin.jpeg';
const API = process.env.REACT_APP_API_URL;

const TeacherLogin = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [teachers, setTeachers] = useState({
    email: '',
    teacher_password: '',
  });

  const teachLogin = (event) => {
    setTeachers({ ...teachers, [event.target.id]: event.target.value });
  };

  //  not sure if I need axios for this not sure how to add functionality
  const handleLogIn = (teachers) => {
    console.log('Login successful');
    // axios
    //     .post(`${API}/teacher-login`, teachers)
    //     .then(() => {
    //         navigate(`/teacher-page`);
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     });

  };

  const handleForm = (event) => {
    event.preventDefault();
    handleLogIn(teachers, id);
  };

  return (
    <div>
      {/* <h1 class='text-center'>Parent Login</h1> */}
      <div class='flex items-center justify-center'>
        <img class='  mt-10 h-22 w-48 rounded-full' src={teacher} alt='' />
      </div>
      <div class='flex  -mt-24 items-center h-screen w-full bg-teal-lighter'>
        <div class='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
          <div class='flex items-center justify-center'>
            <img class=' h-12 w-18 rounded-full' src={logoImage} alt='' />
          </div>

          <h1 class='block w-full text-center text-grey-darkest '>
            {' '}
            Teacher Login{' '}
          </h1>
          <form
            class='md:flex md:flex-wrap md:justify-between'
            onSubmit={handleForm}
          >
            <div class='flex flex-col mb-4 md:w-full'>
              <label
                class='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='email'
              >
                Email
              </label>
              <input
                class='border py-2 px-3 text-grey-darkest'
                type='email'
                name='teacher_email'
                id='teacher_email'
                defaultValue={teachers.teacher_email}
                onChange={teachLogin}
              />
            </div>

            <div class='flex flex-col mb-6 md:w-full'>
              <label
                class='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='teacher-password'
              >
                Password
              </label>
              <input
                class='border py-2 px-3 text-grey-darkest'
                type='password'
                name='teacher-passwordp'
                id='teacher-password'
                onChange={teachLogin}
                defaultValue={teachers.teacher_password}
              />
            </div>

            <button
              class='block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded'
              type='submit'
            >
              Login
            </button>
          </form>

          <a
            class='block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker'
            href='/login'
          >
            Not Registered yet?<span class='font-bold'>Sign Up</span>
          </a>
        </div>
      </div>

    </div>
  );
};

export default TeacherLogin;
