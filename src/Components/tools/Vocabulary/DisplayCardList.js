import { React, useState } from 'react';
import './DisplayCardList.scss';

import { FcSpeaker } from 'react-icons/fc';

const DisplayCardList = ({personalDict}) => {
   console.log('words',personalDict);

  //  const [flipped, setFlipped] = useState(false);
   const [showMore, setShowMore] = useState(false);

    const playAudio = (card) => {
    const audio = new Audio(card.phonetic.audio);
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
                  <p>{card.partsofspeech}</p>
                 
               </div>
               <div className="displayCard-back">
               
             {showMore && (
                 <div>
                   <h3>
            {' '}
            <span>Word:{'  '}</span>
            {card.word} <span>Phonetic:{'  '}</span>({card.phonetic})
            <span onClick={() => { playAudio(card)}} className='cursor-pointer'
            > 🕪{' '} </span>
          </h3>
                   <h3 className='text-2xl font-bold mt-4'>
                    Meaning & Definitions:
                   </h3>
                   {/* <Meanings mean={personalDict} /> */}
                   {card.definitions.map((definition, idx) => (
                    <div key={idx}>
                      <p>{definition}</p>
                      <hr />
                    </div>
                  ))}
                    <h3 className='text-2xl font-bold mt-4'>Example:</h3>
                 
                  {/* <Example mean={personalDict} /> */}
                  {card.example.map((ex, idx) => (
                    <div key={idx}>
                      <p>{ex}</p>
                      <hr />
                    </div>
                  ))}
                    <h3 className='text-2xl font-bold mt-4'>Synonym:</h3>
                    {/* <Synonym mean={personalDict} /> */}
                    {card.synonyms.map((syn, idx) => (
                    <div key={idx}>
                      <p>{syn}</p>
                      <hr />
                    </div>
                  ))}
                    <h3 className='text-2xl font-bold mt-4'>Antonym:</h3>
                  {/* <Antonym mean={personalDict} /> */}
                  {card.antonyms.map((ant, idx) => (
                    <div key={idx}>
                      <p>{ant}</p>
                      <hr />
                    </div>
                  ))}
                  </div>
                )}
                 <div className="read-more" onClick={handleReadMoreClick} >
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




