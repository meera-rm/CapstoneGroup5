import { React, useState } from 'react';
import { Link } from 'react-router-dom';

const BadgeInfo = () => {
  return (
    <div className='badgeInfo'>
      <h1 className='BadgeInfo__title'>Reading</h1>

      <div className='badgeInfo__container'>
        <div className='badgeInfo__image'>
          {/* <img src={tremble} alt='' /> */}
        </div>
        <div className='badgeInfo__text'>
          <h2>lorem ipsum</h2>
          <h4>Lorem ipsum</h4>
        </div>
      </div>

      <div className='badgeInfo__container'>
        <div className='badgeInfo__image'>
          {/* <img src={dictionary} alt='' style={{ width: '80%' }} /> */}
        </div>
        <div className='BadgeInfo__text'>
          <h2>Daily Tracker</h2>
          <h4>Reading every day will create a </h4>
        </div>
      </div>

      <div className='badgeInfo__container'>
        <div className='badgeInfo__image'>
          {/* <img src={tremble} alt='' /> */}
        </div>
        <div className='badgeInfo__text'>
          <h2>Reading Buddies</h2>
          <h4>find d buddy to Read with.</h4>
        </div>
      </div>
    </div>
  );
};

export default BadgeInfo;
