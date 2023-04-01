import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import parentandchild from '../Components/asset/parentandchild.jpeg';
import logoImage from '../Components/asset/ScholarSheep.png';

const API = process.env.REACT_APP_API_URL;

const ParentLogin = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [students, setStudents] = useState({
    email: '',
    parent_password: '',
  });

  const parentLogin = (event) => {
    setStudents({ ...students, [event.target.id]: event.target.value });
  };

  //  not sure if I need axios for this not sure how to add functionality
  const handleLogIn = (students) => {
    console.log('Login successful');
    // axios
    //     .post(`${API}/parent-login`, students)
    //     .then(() => {
    //         navigate(`/parent-dashboard`);
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     });
  };

  const handleForm = (event) => {
    event.preventDefault();
    handleLogIn(students, id);
  };

  return (
   

    <div>
      {/* <h1 class='text-center'>Parent Login</h1> */}
      <div class='flex items-center justify-center'>
        <img class=' h-22 w-48 rounded-full' src={parentandchild} alt='' />
      </div>
      <div class='flex  -mt-24 items-center h-screen w-full bg-teal-lighter'>
        <div class='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
          <div class='flex items-center justify-center'>
            <img class=' h-12 w-18 rounded-full' src={logoImage} alt='' />
          </div>

          <h1 class='block w-full text-center text-grey-darkest mb-6'>
            {' '}
            Parent Login{' '}
          </h1>
          <form
            class='mb-4 md:flex md:flex-wrap md:justify-between'
            onSubmit={handleForm}
          >
            <div class='flex flex-col mb-4 md:w-full'>
              <label
                class='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='parent_email'
              >
                Email
              </label>
              <input
                class='border py-2 px-3 text-grey-darkest'
                type='email'
                name='parent_email'
                id='parent_email'
                defaultValue={students.parent_email}
                onChange={parentLogin}
              />
            </div>

            <div class='flex flex-col mb-6 md:w-full'>
              <label
                class='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='parent-password'
              >
                Password
              </label>
              <input
                class='border py-2 px-3 text-grey-darkest'
                type='password'
                name='parent-password'
                id='parent-password'
                defaultValue={students.parent_password}
                onChange={parentLogin}
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

export default ParentLogin;
