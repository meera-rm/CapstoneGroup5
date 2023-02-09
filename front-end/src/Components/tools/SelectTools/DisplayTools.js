import { React, useState } from 'react';

import LearningTools from '../LearnTools/LearningTools';
import BadgeInfo from '../Badges/BadgeInfo';
import './DisplayTools.scss';

const DisplayTools= () => {
  const [active, setActive] = useState('lerningtools');

  return (
    <div className='toolChoice'>
       <div className='toolChoice__selection'>
          <button  className='toolChoice__buttons' value="learningtools" onClick={e => setActive(e.target.value)}>WordTools</button>
          <button   className='toolChoice__buttons' value="earnbadge" onClick={e => setActive(e.target.value)}>EarnBadge</button>   
        </div>

         {active==='learningtools' && <LearningTools/>}
         {active==='earnbadge' && <BadgeInfo/>}
        {/* <button onClick={()=>handleVocabulary('one')}></button> */}
        {/* // <button onClick={handleDictionary}></button>
        // <button onClick={handleFlashCards}></button> */}
        {/* <button value="personal" onClick={e => tools(e.target.value)}>Personal Dictionary</button>
        <button value="api" onClick={e => tools(e.target.value)}>Personal Dictionary</button>
        <button value="flashcards" onClick={e => tools(e.target.value)}>Personal Dictionary</button> 
        <LearningTools tools={tools}/> */}

    </div>
  );
};

export default DisplayTools;















// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/
// https://upmostly.com/tutorials/react-onclick-event-handling-with-examples

