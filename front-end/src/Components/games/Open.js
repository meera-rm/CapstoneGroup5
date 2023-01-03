import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OpenHangman from './OpenHangman';

const Open = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='mt-10 text-xl'>
      <div className='mt-10 text-center'>
        <h1>Welcome to Hangman</h1>
        {/* <div className='grid grid-cols-1 space-evenly md:grid-cols-2'> */}
        <button
          onClick={() => setOpen((prevOpen) => !prevOpen)}
          className='mt-20 bg-teal-500 w-40 h-25 p-6 rounded-lg disabled={!open}'
        >
          Hangman
        </button>
        {open ? <OpenHangman /> : null}
      </div>
    </div>
  );
};
export default Open;
