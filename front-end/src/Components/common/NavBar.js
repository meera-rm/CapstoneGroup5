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
        <nav className='w-full h-12 px-5 pt-4 pb-4 flex items-center justify-between md:w-4/5 md:mx-auto'>
          <div className='flex-grow'>
            <Link to='/'>
              <img
                src={logoImage}
                alt='logo'
                className='absolute -left-1 -top-0 w-12 h-12'
                // className='absolute -left-40 -top-8 w-14 h-12'
              />
            </Link>
          </div>

          <div className='text-2xl text-black md:hidden'>
            {menu === false ? (
              <AiOutlineMenu onClick={handleMenu} />
            ) : (
              <AiOutlineClose onClick={handleMenu} />
            )}
          </div>

          {/* large screen */}
          <nav className='hidden md:block md:container pl-6'>
            <div className='flex justify-between text-xl'>
              <div className='flex text-black space-x-4'>
                {/* <Link to='/'>
                  <p className=''>Home</p>
                </Link> */}
                <Link to='/about'>
                  <p className=''>ABOUT</p>
                </Link>
                <Link to='/info'>
                  <p className=''>INFO</p>
                </Link>
               
                <Link to='/books'>
                  <p className=''>BOOKS</p>
                </Link>
                <Link to='/teachers'>
                  <p className='' onClick={handleNavLinkDisappear}>
                    TEACHERS
                  </p>
                </Link>

                <Link to='/students'>
                  <p className='' onClick={handleNavLinkDisappear}>
                    STUDENTS
                  </p>
                </Link>

                {/* <Link to='/logs'>
                  <p className='' onClick={handleNavLinkDisappear}>
                    Logs
                  </p>

                </Link>  */}
              </div>
              <div className='flex pl-2 space-x-4'>
                <Link to='/signUp'>
                  <p className='w-18 text-center rounded-md'>SIGNUP</p>
                </Link>
                <Link to='/login'>
                  <p
                    className='w-18 text-center rounded-md'
                    onClick={handleNavLinkDisappear}
                  >
                    LOGIN
                  </p>
                </Link>
              </div>
            </div>
          </nav>
        </nav>

        {/* mobile screen */}
        <nav className='md:hidden'>

          <Link to='/'>

            <img
              src={logoImage}
              alt='logo'
              className='absolute -left-1 -top-1 w-14 h-12'
            />
          </Link>
          {menu && (
            
            <div className='text-xl border-t text-black mx-5'>
              <div className='space-y-6 py-4 '>
                <Link to='/'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Home
                  </p>
                </Link>
                <Link to='/about'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    About
                  </p>
                </Link>
                <Link to='/books'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Books
                  </p>
                </Link>
                <Link to='/teachers'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Teachers
                  </p>
                </Link>
                <Link to='/students'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Students
                  </p>
                </Link>
                {/* 
                <Link to='/logs'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    Logs
                  </p>
                </Link> */}

                <Link to='/signup'>
                  <p
                    className='mt-4 capitalize w-32 text-center rounded-md'
                    onClick={handleNavLinkDisappear}
                  >
                    {' '}
                    Sign Up
                  </p>
                </Link>
                <Link to='/login'>
                  <p
                    className='mt-4 capitalize  w-32 text-center rounded-md'
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
