import React from 'react';

import {Link} from 'react-router-dom'
import './LearningTools.scss';
import tremble from './tremble.png'
import dictionary from './dictionary.png'

const LearningTools =() =>{

  return (
   <div className='learningTools'>
       <h1 className='learningTools__title'>
          Learning Tools for Enhanced Vocabulary
       </h1>
       <Link to='/dictionary'>
           <div className='learningTools__container'>
               <div className='learningTools__image' >
                 <img src={dictionary} alt='' />
              </div>
              <div className='learningTools__text'>
                 <h2>Dictionary Lookup</h2>
                 <h4>Definition of a word/pronounciation</h4>
              </div> 
           
          </div>
      </Link>
      <Link to='./vocabulary'>
      <div className='learningTools__container'>
              <div className='learningTools__image' >
             <img  src={tremble} alt='' />
               </div>
             <div className='learningTools__text'>
                 <h2>Vocabulary Words</h2>
                 <h4>Practice Vocabulary words</h4>
              </div> 
        
      </div>
      </Link>
   

   </div>
  )

}

export default LearningTools;




//  {/* 

//     <div >
//       <Link classNam='learningTools__item' to ='/dictionary'>
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