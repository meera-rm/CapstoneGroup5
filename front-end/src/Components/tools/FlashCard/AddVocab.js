import { React, useState } from 'react';

import { Add, Remove } from '@mui/icons-material';
import './AddVocab.scss';

import AddVocabForm from './AddVocabForm';

const AddVocab = () => {
  const [showCards, setShowCards] = useState(false);

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
        <AddVocabForm showCards={showCards} setShowCards={setShowCards} />
      </div>
    </div>
  );
};
export default AddVocab;

// https://codepen.io/mattgreenberg/pen/ggOpOr
// https://github.com/BLepers/1-click-flashcards
