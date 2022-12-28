import { useState } from 'react';
import Toggle from './Toggle.js';
const ReadingLevelBooks = () => {
  return (
    <div className='grid grid-cols-1 space-evenly md:grid-cols-2 '>
      <p>ReadingLevelBooks</p>
      <Toggle/>
    </div>
  );
};
export default ReadingLevelBooks;
