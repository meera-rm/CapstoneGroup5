import { React, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Add, Remove } from '@mui/icons-material';
import './AddVocab.scss';

import AddVocabForm from './AddVocabForm';

const AddVocab = () => {
  const [showCards, setShowCards] = useState(false);
  // https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4
  const location = useLocation();
  console.log('locationstate=', location.state);
  const words = location.state?.vocabWords;
  console.log('inaddvocabwords=', words);

  const toggleCards = (e) => {
    if (!showCards) {
      // TODO: change plus icon to loader
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  };

  return (
    <div>
      <div className='addVocab'>
        <h1 className='addVocab__title'>Add Words</h1>
        <div className='addVocab__toggleCards'>
          {!showCards && <Add onClick={toggleCards} fontSize='inherit' />}
          {showCards && <Remove onClick={toggleCards} fontSize='inherit' />}
        </div>
      </div>

      <div
        className='addVocab__container'
        style={{ display: showCards ? 'block' : 'none' }}
      >
        <AddVocabForm
          showCards={showCards}
          setShowCards={setShowCards}
          words={words}
        />
      </div>
    </div>
  );
};
export default AddVocab;

// https://codepen.io/mattgreenberg/pen/ggOpOr
// https://github.com/BLepers/1-click-flashcards
