import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import parentandchild from '../Components/asset/parentandchild.jpeg';
import logoImage from '../Components/asset/ScholarSheep.png';

const API = process.env.REACT_APP_API_URL;

const Login = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [user, setUser] = useState({
    user_email: '',
    user_password: '',
  });

  const userLogin = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  //  not sure if I need axios for this not sure how to add functionality
  const handleLogIn = (user) => {
    console.log('Login successful');
    // axios
    //     .post(`${API}/parent-login`, students)
    //     .then(() => {
    //         navigate(`/parent-page`);
    //     })
    //     .catch((error) => {
    //         console.warn(error);
    //     });
  };

  const handleForm = (event) => {
    event.preventDefault();
    handleLogIn(user, id);
  };

  return (
    <div>
      {/* <h1 class='text-center'>Parent Login</h1> */}
      {/* <div class='flex items-center justify-center'>
      <img class=' h-22 w-48 rounded-full' src={parentandchild} alt='' />
      </div> */}
      <div className='flex  items-center h-screen w-full bg-teal-lighter'>
        <div className='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
          <div className='flex items-center justify-center'>
            <img className=' h-12 w-18 rounded-full' src={logoImage} alt='' />
          </div>

          <h1 className='block w-full text-center text-grey-darkest mb-6'>
            {' '}
            Login{' '}
          </h1>
          <form
            className='mb-4 md:flex md:flex-wrap md:justify-between'
            onSubmit={handleForm}
          >
            <div className='flex flex-col mb-4 md:w-full'>
              <label
                className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='user_email'
              >
                Email
              </label>
              <input
                className='border py-2 px-3 text-grey-darkest'
                type='email'
                name='user_email'
                id='user_email'
                autoComplete='off'
                defaultValue={user.user_email}
                onChange={userLogin}
              />
            </div>

            <div className='flex flex-col mb-6 md:w-full'>
              <label
                className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='user_password'
              >
                Password
              </label>
              <input
                className='border py-2 px-3 text-grey-darkest'
                type='password'
                name='user_password'
                id='user_password'
                autoComplete='off'
                defaultValue={user.user_password}
                onChange={userLogin}
              />
            </div>

            <button
              className='block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded'
              type='submit'
            >
              Login
            </button>
          </form>

          <a
            className='block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker'
            href='/signup'
          >
            Not Registered yet?<span className='font-bold'>Sign Up</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
