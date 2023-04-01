import { React, useState } from 'react';

import LearningTools from '../LearnTools/LearningTools';
import BadgeInfo from '../Badges/BadgeInfo';
import './DisplayTools.scss';

const DisplayTools = () => {
  const [active, setActive] = useState('learningtools');

  return (
    <div className='toolChoice'>
      <div className='toolChoice__selection'>
        <button
          className={
            active === 'learningtools'
              ? 'toolChoice__button toolChoice__button-active'
              : 'toolChoice__button'
          }
          value='learningtools'
          onClick={(e) => setActive(e.target.value)}
        >
          WordTools
        </button>
        <button
          className={
            active === 'earnbadge'
              ? 'toolChoice__button toolChoice__button-active'
              : 'toolChoice__button'
          }
          value='earnbadge'
          onClick={(e) => setActive(e.target.value)}
        >
          EarnBadge
        </button>
      </div>

      {active === 'learningtools' && <LearningTools />}
      {active === 'earnbadge' && <BadgeInfo />}
    
    </div>
  );
};

export default DisplayTools;






























// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/
// https://upmostly.com/tutorials/react-onclick-event-handling-with-examples
