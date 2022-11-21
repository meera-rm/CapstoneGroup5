import React from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
// import './Footer.css';

const Footer = () => {
  return (
    <footer className='bg-teal-500 text-white fixed inset-x-0 bottom-0  pt-2 pb-4'>
      {/* <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    text-center pt-2 text-black-400 text-sm pb-8"
    >  */}
      <div className='flex justify-center'>
        <div className='text-center'>
          <div>Copyright &copy; {new Date().getFullYear()}</div>
        </div>
      </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
