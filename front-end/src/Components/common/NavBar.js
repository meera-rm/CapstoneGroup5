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

        <nav className='w-full h-32 px-4 pt-4 pb-4 flex items-center justify-between md:w-4/5 md:mx-auto'>
          <div className='relative flex-grow'>

            <Link to='/'>
              <img
                src={logoImage}
                alt='logo'
                className='absolute -left-40 -top-8 w-14 h-12'
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
          <nav className='hidden md:block md:container pl-90'>
            <div className='flex justify-between text-xl'>
              <div className='flex text-black space-x-8'>
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
              <div className='flex space-x-6 pl-90'>
                <Link to='/signUp'>
                  <p className=' bg-green-400 w-20 text-center rounded-md'>
                    SIGN UP
                  </p>
                </Link>
                <Link to='/login'>
                  <p
                    className='bg-green-400 w-20 text-center rounded-md'
                    onClick={handleNavLinkDisappear}
                  >
                    LOG IN
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
