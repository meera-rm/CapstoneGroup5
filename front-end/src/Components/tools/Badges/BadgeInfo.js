import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './BadgeInfo.scss';
import tremble from '../LearnTools/tremble.png';

const BadgeInfo = () => {
  return (
    // <div className='badges'>
    //   <h1 className='badges__title'>Earn Badges</h1>

    //   <div className='badges__container'>
    //     <div className='badges__image'>
    //       <img src={tremble} alt='' />
    //     </div>
    //     <div className='badges__text'>
    //       <h2>lorem ipsum</h2>
    //       <h4>Lorem ipsum</h4>
    //     </div>
    //   </div>

    //   <div className='badges__container'>
    //     <div className='badges__image'>
    //       <img src={tremble} alt='' style={{ width: '80%' }} />
    //     </div>
    //     <div className='Badges__text'>
    //       <h2>Daily Tracker</h2>
    //       <h4>Reading every day will create a </h4>
    //     </div>
    //   </div>

    //   <div className='badgeInfo__container'>
    //     <div className='badgeInfo__image'>
    //       <img src={tremble} alt='' />
    //     </div>
    //     <div className='badgeInfo__text'>
    //       <h2>Reading Buddies</h2>
    //       <h4>find d buddy to Read with.</h4>
    //     </div>
    //   </div>
    // </div>
    <div className='badges'>
      <h1 className='badges__title'>Earn Badges</h1>

      <Link to=''>
        <div className='badges__container'>
          <div className='badges__image'>
            <img src={tremble} alt='' />
          </div>
          <div className='badges__text'>
            <h2>lorem ipsum</h2>
            <h4>Lorem ipsum</h4>
          </div>
        </div>
      </Link>

      <Link to=''>
        <div className='badges__container'>
          <div className='badges__image'>
            <img src={tremble} alt='' style={{ width: '80%' }} />
          </div>
          <div className='badges__text'>
            <h2>Daily Tracker</h2>
            <h4>Reading every day will create a </h4>
          </div>
        </div>
      </Link>

      <Link to=''>
        <div className='badges__container'>
          <div className='badges__image'>
            <img src={tremble} alt='' />
          </div>
          <div className='badges__text'>
            <h2>Reading Buddies</h2>
            <h4>find d buddy to Read with.</h4>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BadgeInfo;
