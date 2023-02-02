import React from 'react';

import {Link} from 'react-router-dom'
import './LearningTools.scss';

const LearningTools =() =>{

  return (
   <div class='learningTools'>
   <div class='learningTools__title'>
    Learning Tools for Enhanced Vocabulary
    </div>

    <div class='learningTools__container'>

    <div class='learningTools__item'>
   
       <div class= 'learningTools__image'>
          <img  src='https://i.imgur.com/L2NmYX9.png' alt='' />
      </div>
       <div class='learningTools__text'>
        <h2>Dictionary Lookup</h2>
        <h4>Find the definition of a word/pronounciation</h4>
      </div>
      
    </div> 
  

       <div class='learningTools__item'>
        <Link to='/Vocabulary'>
        <div class='learningTools__image '>
          <img   src='https://i.imgur.com/OvDjHRw.png' alt=''/>
        </div>
  
        <div class='learningTools__item-text'>
          <h2>Vocabulary Words</h2>
          <h4>Practice Vocabulary words </h4>
        </div>
       </Link>
      </div> 

     </div>
   </div>
  )

}

export default LearningTools;