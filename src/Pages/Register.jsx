import React from 'react';
import { apiFetch } from '../api';
import { useAuth } from '../auth/AuthContext';
import { homeFor } from '../auth/home';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useState } from 'react';
import logoImage from '../Components/asset/ScholarSheep.png';

const Register = ({
  register,
  setRegister,
  hasRegistered,
  setHasRegistered,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const id = useParams();
  const [user, setUser] = useState({
    user_name: '',
    user_email: '',
    user_password: '',
    user_role: 'student',
    school_name: '',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.id]: event.target.value });
  };

  const [error, setError] = useState('');

  // POST /api/auth/register  (CapstoneGroup5Backend/routes/auth.js)
  // Backend expects { user_name, user_email, user_password } (password >= 8 chars)
  // and returns { accessToken, refreshToken, user }, so the new user is logged in right away.
  const handleSignUp = async () => {
    setError('');
    try {
      const data = await apiFetch('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({
          user_name: user.user_name,
          user_email: user.user_email,
          user_password: user.user_password,
          user_role: user.user_role,
          school_name: user.school_name,
        }),
      });
      auth.login(data);
      navigate(location.state?.from || homeFor(data.user?.user_role), { replace: true });
    } catch (err) {
      setError(err.message || 'Could not create account.');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    handleSignUp();
  };
  return (
    <div>
      {/* <h1 className='text-center'>Parent Login</h1> */}
      {/* <div className='flex items-center justify-center'>
              <img className=' h-22 w-48 rounded-full' src={parentandchild} alt='' />
              </div> */}
      <div className='flex  mt-5 items-center h-screen w-full bg-teal-lighter'>
        <div className='w-full bg-white rounded shadow-lg p-8 m-2 md:max-w-sm md:mx-auto'>
          <div className='flex items-center justify-center'>
            <img className=' h-10 w-12 rounded-full' src={logoImage} alt='' />
          </div>

          <h1 className='block w-full text-center text-grey-darkest mb-6'>
            {' '}
            Register{' '}
          </h1>
          <form
            className='mb-4 md:flex md:flex-wrap md:justify-between'
            onSubmit={handleSubmit}
          >
            <div className='flex flex-col mb-4 md:w-full'>
              <label
                className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='user_name'
              >
                Name
              </label>
              <input
                className='border py-2 px-3 text-grey-darkest'
                type='text'
                name='user_name'
                id='user_name'
                required
                defaultValue={user.user_name}
                onChange={handleChange}
              />
            </div>
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
                defaultValue={user.user_email}
                onChange={handleChange}
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
                minLength={8}
                required
                defaultValue={user.user_password}
                onChange={handleChange}
              />
            </div>

            <div className='flex flex-col mb-6 md:w-full'>
              <label
                className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                htmlFor='user_role'
              >
                I am a
              </label>
              <select
                className='border py-2 px-3 text-grey-darkest'
                name='user_role'
                id='user_role'
                value={user.user_role}
                onChange={handleChange}
              >
                <option value='student'>Student</option>
                <option value='teacher'>Teacher</option>
                <option value='parent'>Parent</option>
              </select>
            </div>

            {user.user_role === 'teacher' && (
              <div className='flex flex-col mb-6 md:w-full'>
                <label
                  className='mb-2 uppercase font-bold text-lg text-grey-darkest'
                  htmlFor='school_name'
                >
                  School name
                </label>
                <input
                  className='border py-2 px-3 text-grey-darkest'
                  type='text'
                  name='school_name'
                  id='school_name'
                  value={user.school_name}
                  onChange={handleChange}
                />
              </div>
            )}

            {error && (
              <p role='alert' className='w-full text-center text-red-600 mb-4'>
                {error}
              </p>
            )}

            <button
              className='block bg-teal-600 hover:bg-teal-dark text-white uppercase text-lg mx-auto p-4 rounded'
              type='submit'
            >
              Create Account
            </button>
          </form>

          <a
            className='block w-full text-center no-underline text-sm text-grey-dark hover:text-grey-darker'
            href='/login'
          >
            Already Registered?<span className='font-bold'>Login</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
