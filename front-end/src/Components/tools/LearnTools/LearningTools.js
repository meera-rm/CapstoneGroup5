import React from 'react';

import {Link} from 'react-router-dom'
import './LearningTools.scss';
import tremble from './tremble.png'
import dictionary from './dictionary.png'

const LearningTools =() =>{

  return (
   <div class='learningTools'>
       <h1 class='learningTools__title'>
          Learning Tools for Enhanced Vocabulary
       </h1>
       <Link to='/dictionary'>
           <div class='learningTools__container'>
            {/* <div class='learningTools__item' > */}
             <img class= 'learningTools__image' src={dictionary} alt='' />
             <div class='learningTools__text'>
                 <h2>Dictionary Lookup</h2>
                 <h4>Definition of a word/pronounciation</h4>
              </div> 
            {/* </div> */}
          </div>
      </Link>
      <Link to='./vocabulary'>
      <div class='learningTools__container'>
          {/* <div class='learningTools__item' > */}
             <img class= 'learningTools__image' src={tremble} alt='' />
             <div class='learningTools__text'>
                 <h2>Vocabulary Words</h2>
                 <h4>Practice Vocabulary words</h4>
              </div> 
          {/* </div> */}
      </div>
      </Link>
   

   </div>
  )

}

export default LearningTools;




//  {/* 

//     <div >
//       <Link className='learningTools__item' to ='/dictionary'>
//        {/* <div class= 'learningTools__image'> */}
//        <img class= 'learningTools__image' src={dictionary} alt='' />
//        {/* </div> *
//         <div class='learningTools__text'>
//          <h2>Dictionary Lookup</h2>
//          <h4>Find the definition of a word/pronounciation</h4>
//        </div>
//        </Link>
//      </div> 
   
     
//         <div >
//         <Link  class='learningTools__item' to='/vocabulary'>
//          {/* <div class='learningTools__image '> */}
//            <img   src={tremble} alt=''/>
//          {/* </div> *
         
   
//          <div class='learningTools__text'>
//            <h2>Vocabulary Words</h2>
//            <h4>Practice Vocabulary words </h4>
//          </div>
//          </Link>
//        </div> 
       
      // </div> */}