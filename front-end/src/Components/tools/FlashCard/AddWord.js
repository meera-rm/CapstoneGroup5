import { React, useState, useEffect } from 'react';
import axios from 'axios';
import words from './words.json';

const AddWord = ({ searchWord, value }) => {
  console.log(searchWord);

  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(0);
  const [word, setWord] = useState(searchWord);
  const [grade, setGraded] = useState(value);
  const [partsOfSpeech, setPartsOfSpeech] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [examples, setExamples] = useState([]);

  const fetchData = async (word) => {
    try {
      setLoading(true);
      const res = await axios(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setData(res.data);
      console.log(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchWord.length) {
      fetchData(searchWord);
    }
  }, [searchWord]);

  if (loading) {
    return (
      <div className='flex flex-col space-y-3 animate-pulse p-4 container mx-auto max-w-2xl'>
        <div className='h-6 bg-gray-300 mt-5 rounded-md'></div>
        <div className='h-40 bg-gray-300 mt-5 rounded-md'></div>
        <div className='h-8 bg-gray-300 mt-5 rounded-md'></div>
        <div className='h-40 bg-gray-300 mt-5 rounded-md'></div>
      </div>
    );
  }

  if (error) {
    return (
      <h3 className='text-center mt-10 font-semibold text-gray-500'>
        No Definitions Found 😥
      </h3>
    );
  }

  const definition = data[0].definitions.definition;
  const wordMeanings = definition.map((item) => item.definition);
  const wordExamples = definition.map((item) => item.example);

  // const playAudio = () => {
  //   const audio = new Audio(data[0].phonetics[0].audio);
  //   audio.play();
  // };

  const addWords = {
    id: words.length + 1,
    word: data[0].word,
    phonetic: data[0].phonetic,
    grade: grade,
    partsOfSpeech: data[0].meanings[0].partOfSpeech,
    meaning: wordMeanings,
    example: wordExamples,
  };

 words.push(addWords);

  return (
    <div className='container mx-auto p-4 max-w-2xl'>
      {/* {data && (
        <div>
          <h3>
            {' '}
            <span>Word:{'  '}</span>
            {data[0].word} <span>Phonetic:{'  '}</span>({data[0].phonetic})
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
        </div>
      )} */}
    </div>
  );
};

export default AddWord;

// // loading gif
// {
//   /* <div class="tenor-gif-embed" data-postid="17733403" data-share-method="host" data-aspect-ratio="1.33333" data-width="100%"><a href="https://tenor.com/view/gb-notebook-laptop-gif-17733403">Gb Notebook Sticker</a>from <a href="https://tenor.com/search/gb-stickers">Gb Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script> */
// }
// // https://tenor.com/view/gb-notebook-laptop-gif-17733403
