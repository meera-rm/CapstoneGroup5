import React, { useState } from 'react';
import logoImage from '../asset/ScholarSheep.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  // function to display menu
  const handleMenu = () => {
    setMenu(!menu);
  };

  // function to make the navLinks disappear when clicked on the small screen
  const handleNavLinkDisappear = () => {
    setMenu(false);
  };

  return (
    <React.Fragment>
      <section className='bg-teal-500'>
        <nav className='w-full h-12 px-5 flex items-center justify-between md:w-4/5 md:mx-auto'>
          <div className='realtive flex-grow'>
            <img
              src={logoImage}
              alt='logo'
              className='absolute -left-1 -top-0 w-12 h-12'
            />
          </div>

          <div className='text-2xl text-white md:hidden'>
            {menu === false ? (
              <AiOutlineMenu onClick={handleMenu} />
            ) : (
              <AiOutlineClose onClick={handleMenu} />
            )}
          </div>

          {/* large screen */}
          <nav className='hidden md:block md:container pl-10'>
            <div className='flex justify-between text-xl'>
              <div className='flex text-white space-x-4'>
                <Link to='/'>
                  <p className=''>Home</p>
                </Link>
                <Link to='/books'>
                  <p className=''>Books</p>
                </Link>
                <Link to='/students'>
                  <p className='' onClick={handleNavLinkDisappear}>
                    Students
                  </p>
                </Link>
                <Link to='/teachers'>
                  <p className='' onClick={handleNavLinkDisappear}>
                    Teachers
                  </p>
                </Link>
                <Link to='/logs'>
                  <p className='' onClick={handleNavLinkDisappear}>
                    Logs
                  </p>
                </Link>
                <Link to='/about'>
                  <p className=''>About</p>
                </Link>
              </div>
              <div className='flex space-x-4'>
                <Link to='/signUp'>
                  <p className=' capitalize bg-green-400 w-20  text-center rounded-md'>
                    Sign up
                  </p>
                </Link>
                <Link to='/Login'>
                  <p
                    className='capitalize bg-green-400 w-20 text-center rounded-md'
                    onClick={handleNavLinkDisappear}
                  >
                    Log In
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </nav>

        {/* mobile screen */}
        <nav className='md:hidden'>
          {menu && (
            <div className='text-xl border-t text-white mx-5'>
              <div className='space-y-6 py-4 '>
                <Link to='/'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Home
                  </p>
                </Link>
                <Link to='/books'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Books
                  </p>
                </Link>
                <Link to='/students'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Students
                  </p>
                </Link>
                <Link to='/teachers'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Teachers
                  </p>
                </Link>
                <Link to='/logs'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Logs
                  </p>
                </Link>
                <Link to='/about'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    About
                  </p>
                </Link>
                <Link to='/signUp'>
                  <p
                    className='mt-4 capitalize bg-green-400 w-32 text-center rounded-md'
                    onClick={handleNavLinkDisappear}
                  >
                    {' '}
                    Sign Up
                  </p>
                </Link>
                <Link to='/login'>
                  <p
                    className='mt-4 capitalize bg-green-400 w-32 text-center rounded-md'
                    onClick={handleNavLinkDisappear}
                  >
                    Log In
                  </p>
                </Link>
              </div>
            </div>
          )}
        </nav>
      </section>
    </React.Fragment>
  );
};

export default Navbar;
