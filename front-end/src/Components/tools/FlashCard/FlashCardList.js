import { React, useState } from 'react';
import './FlashCardList.scss';

const FlashCardList = ({ filteredData }) => {

  console.log(filteredData)
  //  const playAudio = () => {
  //  const audio = new Audio(card.phonetics[0].audio);
  //   audio.play();
  //  };


  const [flipped, setFlipped] = useState(false);

  return (
    <div className='cards'>
      {filteredData.map((card,idx) => (
        <div className='card' key={card.id}>
          {/* <div
            className={`card-body ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
          > */}
          <div className='card-body'>
            <div className='card-front'>
            {/* {data && (*/}
        {/* <div>
          <h3>
            {' '}
            <span>Phonetic:{'  '}</span>{card.phonetic}
            <span
              onClick={() => {
                const audio = new Audio(card.phonetics.audio);
                 audio.play();
              }}
              className='cursor-pointer'
            >
              {' '}
              🕪{' '}
            </span>
          </h3>
        </div> */}
      {/* )} */}
              <h2>{card.word.toUpperCase()}</h2>
              <h2>PARTS OF SPEECH:</h2>
              <h4>{card.partsofspeech[0].toUpperCase()+card.partsofspeech.slice(1)}</h4>
           
            </div>
            <div className='card-back'>
              <h3><strong>Meaning:</strong></h3>
              <ol>
                {card.meaning.map((meaning) => (
                  <li key={meaning}>{meaning}</li>
                ))}
              </ol>
              {!card.example ?'No Example found in the Dictionary':(<>
              <h3><strong>Example:</strong></h3>
              <ol>
                { card.example.map((example) => (
                  <li key={example}>{example}</li>
                ))}
              </ol>
              </>
              ) 
                } 
            </div>
          </div>
        </div>
        // </div>
      ))}
    </div>
   
  );
};
export default FlashCardList;


// https://bvgsoftware.com/blog/how-to-build-a-flip-card-component-with-react/