import { React, useState, useEffect } from 'react';
import axios from 'axios';
import GradeSelector from '../gradeSelector/GradeSelector';
import AutoMenuSelector from '../menuSelector/AutoMenuSelector';
import './Explore.scss';

const options = ['All Grades','Kindergarten', '1st Grade', '2nd Grade', '3rd Grade', '4th Grade', '5th Grade'];

const Explore = () => {

  return (
    <div>
      <h1 className='explore'> Explore By Grade</h1>
    
     
      <div className='explore__container'> 
        <GradeSelector/>
        <AutoMenuSelector/>
      </div>

     
    </div>
    
  );
};
export default Explore;
