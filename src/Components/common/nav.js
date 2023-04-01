import React, { useState } from 'react';
import './NavBar.css';
import logoImage from '../asset/sheeplogo.png';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { NavLink as Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdInfoOutline } from 'react-icons/md';

import { FaGamepad } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

import { FaChild } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { IoIosLogIn } from 'react-icons/io';
// import { SiTheregister } from 'react-icons/si';
import { GiArchiveRegister } from 'react-icons/gi';
// import CircleType from 'circletype';

const Navbar = ({ darkModeButton }) => {
  const [menu, setMenu] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  // const [booksMenuOpen, setBooksMenuOpen] = useState(false);
  // const [gamesMenuOpen, setGamesMenuOpen] = useState(false);

  const [gamesMenuMobile, setGamesMenuMobile] = useState(false);
  const [booksMenuMobile, setBooksMenuMobile] = useState(false);

  // const handleBooksMenu = () => {
  //   setBooksMenuOpen(!booksMenuOpen);
  //   setMenu(false);
  // };
  // const handleGamesMenu = () => {
  //   setGamesMenuOpen(!gamesMenuOpen);
  // };
  // const handleGamesClick = () => {
  //   setIsGamesOpen(!isGamesOpen);
  // };

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  // function to display menu
  const handleMenu = () => {
    setMenu(!menu);
  };

  // function to display games menu
  const handleGamesMenuMobile = () => {
    setGamesMenuMobile(!gamesMenuMobile);
  };

  // function to display books menu
  const handleBooksMenuMobile = () => {
    setBooksMenuMobile(!booksMenuMobile);
  };

  // function to make the navLinks disappear when clicked on the small screen
  const handleNavLinkDisappear = () => {
    setMenu(false);
  };
  // const circleInstance = useRef();

  // useEffect(() => {
  //   new CircleType(circleInstance.current).dir(-1).radius(250);
  // }, []);

  return (
    <React.Fragment>
      <section className='bg-teal-500'>
        <nav className='w-full h-12 px-5 pt-4 pb-4 flex items-center justify-between md:w-4/5 md:mx-auto'>
          <div className='flex-grow'>
            <Link to='/'>
              {/* <picture>
                <source 
                 type="asset/webp"
                 scrset="
                 /asset.webp?width=100 100w,
                 /asset.webp?width=200 200w
                 /asset.webp?width=400 400w
                 /asset.webp?width=800 800w"/> */}
              <img
                loading='lazy'
                width={130}
                height={10}
                effect='blur'
                // scrset="
                // /mylogo.png?width=100 100w,
                // /mylogo.png?width=200 200w
                // /mylogo.png?width=400 400w
                // /mylogo.png?width=800 800w"
                src={logoImage}
                sizes='(max-width:800px) 100vw, 50vw'
                alt='logo'
                decoding='async'
                fetchpriority='high'
                className='hidden md:block absolute left-2 top-1 w-24 h-8'
                // className='absolute -left-40 -top-8 w-14 h-12'
              />
              {/* </picture> */}
            </Link>
          </div>

          <div className='text-2xl text-black md:hidden '>
            {menu === false ? (
              <div className=' flex gap-10 left-5 '>
                {darkModeButton}
                <AiOutlineMenu onClick={handleMenu} />
              </div>
            ) : (
              <div className=' flex  gap-10 left-5 -top-4'>
                {darkModeButton}
                <AiOutlineClose onClick={handleMenu} />
              </div>
            )}
          </div>

          {/* large screen */}
          <nav className='hidden md:block md:container pl-2 '>
            <div className='flex justify-between text-xl'>
              <div className='flex text-black space-x-10'>
                {/* <Link to='/info' activeclassname='active'>
                  <button>
                    <div
                      className=' w-18 h-28 p-2 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500 hover:text-white'
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40 }}
                      >
                        <MdInfoOutline />
                      </IconContext.Provider>
                      
                    </div>
                    <div>
                      {isHovering && (
                        <p className='text-teal font-fonts text-sm'>INFO</p>
                      )}
                    </div>
                  </button>
                </Link>  */}

                <Link to='/profile' activeclassname='active'>
                  <button>
                    <div
                      className=' w-18 h-28 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500 hover:text-white'
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40 }}
                      >
                        <CgProfile />
                      </IconContext.Provider>
                      
                    </div>
                    <div>
                      {/* {isHovering && ( */}
                        <p className='text-teal font-fonts text-sm'>PROFILE</p>
                      {/* )} */}
                    </div> 
                  </button>
                </Link>
                <Link to='/books' activeclassname='active'>
                  <div className='relative group h-0 '>
                    <button>
                      <div
                        className='w-18 h-28 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      >
                        <IconContext.Provider
                          value={{ color: 'white', size: 40 }}
                        >
                          <ImBooks />
                        </IconContext.Provider>
                      </div>
                      <div>
                        {/* {isHovering && ( */}
                          <p className='text-tealfont-fonts text-sm'>BOOKS</p>
                        {/* )} */}
                      </div>
                    </button>

                    {/* <div
                      className='z-10 absolute w-full hidden 
                     group-hover:block  shadow-md bg-teal-400 rounded w-40 
                    py-2'
                    >
                      <Link to='/books/level'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          ReadingLevel
                        </button>
                      </Link>
                      <Link to='/books/casual'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Casual Reading
                        </button>
                      </Link>
                    </div> */}
                  </div>
                </Link>

                {/* <Link to='/dictionary' activeclassname='active'>
                  <button>
                    <div
                      className=' w-18 h-28 p-2 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40 }}
                      >
                        <MdLanguage />
                      </IconContext.Provider>
                    </div>
                    <div>
                      {isHovering && (
                        <p className='text-teal font-fonts text-sm'>
                          DICTIONARY
                        </p>
                      )}
                    </div>
                  </button>
                </Link> */}

                <Link to='/games'>
                  <div className='relative group h-0'>
                    <button>
                      {/* onClick={handleGamesMenu}> */}
                      <div
                        className='w-18 h-28 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                      >
                        <IconContext.Provider
                          value={{ color: 'white', size: 40 }}
                        >
                          <FaGamepad />
                        </IconContext.Provider>
                      </div>
                      <div>
                        {/* {isHovering && ( */}
                          <p className='text-teal font-fonts text-sm'>GAMES</p>
                        {/* )} */}
                      </div>
                    </button>
                    {/* {gamesMenuOpen && ( */}
                    {/* <div
                      className='z-10 absolute bg-teal-400 w-50 hidden group-hover:block  shadow-md rounded py-2 '
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <Link to='/games/rps'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          RockPaperScissor
                        </button>
                      </Link>
                      <Link to='/games/paint'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Paint app
                        </button>
                      </Link>
                      <Link to='/games/etchsketch'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Etch A Sketch
                        </button>
                      </Link>
                      <Link to='/games/memorygames'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Memory games
                        </button>
                      </Link>
                    </div> */}
                    {/* )} */}
                  </div>
                </Link>

                <Link to='/teachers' activeclassname='active'>
                  <button>
                    <div
                      className=' w-16 h-28 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500 '
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40 }}
                      >
                        <GiTeacher />
                      </IconContext.Provider>
                    </div>
                    <div>
                      {/* {isHovering && ( */}
                        <p className='text-teal font-fonts text-sm'>TEACHERS</p>
                      {/* )} */}
                    </div>
                  </button>
                </Link>

                <Link to='/students' activeclassname='active'>
                  <button>
                    <div
                      className=' w-16 h-24 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40 }}
                      >
                        <FaChild />
                      </IconContext.Provider>
                    </div>
                    <div>
                      {/* {isHovering && ( */}
                        <p className='text-tealfont-fonts text-sm'>STUDENTS</p>
                      {/* )} */}
                    </div>
                  </button>
                </Link>
              </div>
              <div className='flex pl-2 space-x-4'>
                <Link to='/signup' activeclassname='active'>
                  <button>
                    <div
                      className=' w-18 h-28 p-3 rounded-full border  border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40 }}
                      >
                        <p
                          className='w-18 text-center rounded-md'
                          onClick={handleNavLinkDisappear}
                        >
                          <GiArchiveRegister />
                        </p>
                      </IconContext.Provider>
                    </div>
                    <div>
                      {/* {isHovering && ( */}
                        <p className='text-teal font-fonts text-sm'>SIGNUP</p>
                      {/* )} */}
                    </div>
                  </button>
                </Link>
                <Link to='/login' activeclassname='active'>
                  <button>
                    <div
                      className=' w-18 h-28 p-3 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <IconContext.Provider
                        value={{ color: 'white', size: 40}}
                      >
                        <p
                          className='w-18 text-center rounded-md'
                          onClick={handleNavLinkDisappear}
                        >
                          <IoIosLogIn />
                        </p>
                      </IconContext.Provider>
                    </div>
                    <div className='block'>
                      {/* {isHovering && ( */}
                        <p className='text-teal font-fonts text-sm'>LOGIN</p>
                      {/* )} */}
                    </div>
                  </button>
                </Link>
                {/* <a href='w'> */}
                <div>
                  {/* <button> */}
                  <div
                    className=' w-16 h-28 p-3 -mt-0 rounded-full border border-teal-800 border-2 bg-teal-600 hover:bg-teal-500'
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                  >
                    <IconContext.Provider value={{ color: 'white' }}>
                      <p
                        className='w-18 text-center rounded-md'
                        onClick={handleNavLinkDisappear}
                      >
                        {darkModeButton}
                      </p>
                    </IconContext.Provider>
                  </div>
                  <div>
                    {/* {isHovering && ( */}
                      <p className='text-teal font-fonts text-sm'>
                        {darkModeButton === 'dark' ? 'LIGHT MODE' : 'DARK MODE'}
                      </p>
                    {/* )} */}
                  </div>
                  {/* </button> */}
                </div>
                {/* </a> */}
              </div>
            </div>
          </nav>
        </nav>

        {/* mobile screen */}
        <nav className='md:hidden'>
          <Link to='/'>
            <img
              loading='lazy'
              height={0}
              effect='blur'
              width={70}
              src={logoImage}
              alt='logo'
              sizes='(max-width:800px) 100vw, 50vw'
              decoding='async'
              fetchpriority='high'
              className='absolute left-4 top-1 w-14 h-8'
            />
          </Link>

          {menu && (
            <div className='text-xl border-t text-black mx-5'>
              <div className='space-y-6 py-4 '>
                <Link to='/about'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    ABOUT
                  </p>
                </Link>

                <Link to='/books'>
                  <div className='relative group h-0'>
                    <button>
                      <div
                        className='w-18 h-28 hover:bg-grey-500'
                        onMouseOver={handleBooksMenuMobile}
                        onMouseOut={handleBooksMenuMobile}
                      >
                        <p className='mt-2'>BOOKS</p>
                      </div>
                    </button>
                    {/* <div
                      className='z-10 absolute  w-50 hidden group-hover:block bg-gray-300 shadow-md rounded py-2 '
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <Link to='/books/level'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          ReadingLevel
                        </button>
                      </Link>
                      <Link to='/books/casual'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Casual Reading
                        </button>
                      </Link>
                    </div> */}
                  </div>
                </Link>
                <Link to='/info'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    INFO
                  </p>
                </Link>
                {/* <Link to='/dictionary'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    DICTIONARY
                  </p>
                </Link> */}

                <Link to='/games'>
                  <div className='relative group h-0'>
                    <button>
                      <div
                        className='w-18 h-28 hover:bg-grey-500'
                        onMouseOver={handleGamesMenuMobile}
                        onMouseOut={handleGamesMenuMobile}
                      >
                        <p className='mt-2'>GAMES</p>
                      </div>
                    </button>
                    {/* <div
                      className='z-10 absolute  w-50 hidden group-hover:block bg-gray-300 shadow-md rounded py-2 '
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    > */}
                    {/* <Link to='/games/rsp'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          RockPaperScissor
                        </button>
                      </Link> */}
                    {/* <Link to='/games/memorygames'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Memory Games
                        </button>
                      </Link> */}
                    {/* <Link to='/games/paint'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Paint app
                        </button>
                      </Link> */}
                    {/* <Link to='/games/etchsketch'>
                        <button
                          className='block px-4 py-2 text-black-800 hover:bg-teal-400'
                          onClick={handleNavLinkDisappear}
                        >
                          Etch A Sketch
                        </button>
                      </Link> 
                    </div>*/}
                  </div>
                </Link>

                <Link to='/teachers'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    TEACHERS
                  </p>
                </Link>
                <Link to='/students'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    STUDENTS
                  </p>
                </Link>

                <Link to='/signup'>
                  <p className='mt-2' onClick={handleNavLinkDisappear}>
                    {' '}
                    SIGNUP
                  </p>
                </Link>
                <Link to='/login'>
                  <p className='mt-2 ' onClick={handleNavLinkDisappear}>
                    LOGIN
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
// {/* https://dev.to/ebereplenty/react-icons-tutorial-all-you-need-to-know-524 */}
// https://blog.reactplay.io/create-a-super-cool-navbar-using-react-and-tailwindcss(for sidebar)
