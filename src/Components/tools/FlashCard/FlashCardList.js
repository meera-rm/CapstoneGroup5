import { React, useState } from 'react';
import './FlashCardList.scss';
import Meanings from '.././Dictionary/Meanings.js';
import Example from '.././Dictionary/Example.js';
import Synonym from '.././Dictionary/Synonym.js';
import Antonym from '.././Dictionary/Antonym.js';

const FlashCardList = ({ wordData, selectedGrade }) => {
  console.log('word', wordData);


  const [flipped, setFlipped] = useState(false);
   const [showMore, setShowMore] = useState(false);

   const playAudio = (card) => {
   const audio = new Audio(card.phonetics[0].audio);
    audio.play();
   };

  const handleReadMoreClick = () => {
    setShowMore(!showMore);
  };


  const filteredData =
    selectedGrade === 'AllGrades'
      ? wordData
      : wordData.filter((word) => word.grade === selectedGrade);

  console.log('filteredData', filteredData);



  return (
    <div className='listCards'>
      {filteredData.length === 0 && (
        <div className='listCards-message'>
          You have no cards for this grade
        </div>
      )}
      {filteredData.map((card) => (
            <div  className="listCard" key={card.dictionary_id}>
               <div className="listCard-body">
                <div className="listCard-front">
                  <h2>{card.word.toUpperCase()}</h2>
                  <h2>PARTS OF SPEECH:</h2>
                  <p>{filteredData[0].meanings[0].partOfSpeech}</p>
                 
               </div>
               <div className="listCard-back">
               {/* <h3>
           
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
             </h3> */}
             {showMore && (
                 <div>
                   <h3 className='text-2xl font-bold mt-4'>
                    Meaning & Definitions:
                   </h3>
                   <Meanings mean={filteredData} />
                    <h3 className='text-2xl font-bold mt-4'>Example:</h3>

                  <Example mean={filteredData} />
                    <h3 className='text-2xl font-bold mt-4'>Synonym:</h3>
                    <Synonym mean={filteredData} />
                    <h3 className='text-2xl font-bold mt-4'>Antonym:</h3>
                  <Antonym mean={filteredData} />
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
export default FlashCardList;


// https://bvgsoftware.com/blog/how-to-build-a-flip-card-component-with-react/
// https://codewithsammy.hashnode.dev/create-a-rotatingflip-card-effect-using-sass



// {filteredData?.map((card, idx) => (
//   <div className='listCard' key={card.id}>
//     {/* <div
//       // className={`flashCardList__body ${flipped ? 'flipped' : ''}`}
//       // onClick={() => setFlipped(!flipped)}
//       // className={`flashCardList-body ${
//       //   flipped === card.id ? 'flipped' : ''
//       // }`}
//       // onClick={() => setFlipped(card.id)}
//      >  */}
//     <div className='listCard-body'>
//       <div className='listCard-front'>
//         {/* <div>
//     <h3>
//       {' '}
//       <span>Phonetic:{'  '}</span>{card.phonetic}
//       <span
//         onClick={() => {
//           playAudio()
//           // const audio = new Audio(card.phonetics.audio);
//           //  audio.play();
//         }}
//         className='cursor-pointer'
//       >
//         {' '}
//         🕪{' '}
//       </span>
//     </h3>
//   </div> */}
//         {/* )} */}
//         <h2>{card.word.toUpperCase()}</h2>
//         <h2>PARTS OF SPEECH:</h2>
//         <h4>
//           {card.partsofspeech[0].toUpperCase() +
//             card.partsofspeech.slice(1)}
//         </h4>
//       </div>

//       <div className='listCard-back'>
//         <h3>
//           <strong>Meaning:</strong>
//         </h3>
//         <ol>
//           {card.meaning}
//           {/* {card.meaning.map((meaning) => (
//             <li key={meaning}>{meaning}</li>
//           ))} */}
//         </ol>
//         {!card.example ? (
//           'No Example found in the Dictionary'
//         ) : (
//           <>
//             <h3>
//               <strong>Example:</strong>
//             </h3>
//             <ol>
//               {card.example}
//               {/* { card.example.map((example) => (
//             <li key={example}>{example}</li>
//           ))} */}
//             </ol>
//           </>
//         )}
//       </div>
//     </div>
//    </div>
// ))}