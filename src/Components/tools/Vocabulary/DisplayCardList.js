import { React, useState } from 'react';
import './DisplayCardList.scss';
import Meanings from '.././Dictionary/Meanings.js';
import Example from '.././Dictionary/Example.js';
import Synonym from '.././Dictionary/Synonym.js';
import Antonym from '.././Dictionary/Antonym.js';

const DisplayCardList = ({personalDict}) => {
   console.log('words',personalDict);

  //  const [flipped, setFlipped] = useState(false);
   const [showMore, setShowMore] = useState(false);

   const playAudio = (card) => {
   const audio = new Audio(card.phonetics[0].audio);
    audio.play();
   };

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };

  return (

    <div className="displayCards">
          {personalDict.map((card) => (
            <div  className="displayCard" key={card.dictionary_id}>
               <div className="displayCard-body">
                <div className="displayCard-front">
                  <h2>{card.word.toUpperCase()}</h2>
                  <h2>PARTS OF SPEECH:</h2>
                  <p>{personalDict[0].meanings[0].partOfSpeech}</p>
                 
               </div>
               <div className="displayCard-back">
               <h3>
           
            <span>Word:{'  '}</span>
             {card[0].word}<span>Phonetic:{'  '}</span>({card[0].phonetics})
            <span
              onClick={() => {
                playAudio();
              }}
              className='cursor-pointer'
            >
              {' '}
              🕪{' '}
            </span>
             </h3>
             {showMore && (
                 <div>
                   <h3 className='text-2xl font-bold mt-4'>
                    Meaning & Definitions:
                   </h3>
                   <Meanings mean={personalDict} />
                    <h3 className='text-2xl font-bold mt-4'>Example:</h3>

                  <Example mean={personalDict} />
                    <h3 className='text-2xl font-bold mt-4'>Synonym:</h3>
                    <Synonym mean={personalDict} />
                    <h3 className='text-2xl font-bold mt-4'>Antonym:</h3>
                  <Antonym mean={personalDict} />
                            {/* <h3><strong>Meaning:</strong></h3>
                  <h2>{card.definitions}</h2>
                  {!card.example ?'No Example found in the Dictionary':(<>
                  <h3><strong>Example:</strong></h3>
                  <h2>{card.example}</h2> */}
                  </div>
                )}
                 <div className="read-more" onClick={handleReadMoreClick}>
            {showMore ? 'Show Less' : 'Read more...'}
          </div>
                </div>
                </div> 
              </div>
          ))}

        </div>
   
   
  );
};
export default DisplayCardList;




