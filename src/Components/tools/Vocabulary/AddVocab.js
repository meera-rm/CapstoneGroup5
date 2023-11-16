import { React, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { Add, Remove } from '@mui/icons-material';
import './AddVocab.scss';
import AddVocabForm from './AddVocabForm';
import DisplayCardList from './DisplayCardList';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import httpService from '../../httpService';
import { FcSpeaker } from 'react-icons/fc';
import axios from 'axios';

const API = process.env.REACT_APP_API_URL;

const AddVocab = () => {
  const [showCards, setShowCards] = useState(false);
  const [words, setWords] = useState([]);

  const [grade, setGrade] = useState('');
  const [meaning, setMeaning] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [definitions, setDefinitions] = useState([]);
  const [examples, setExamples] = useState([]);
  const [synonyms, setSynonyms] = useState([]);
  const [antonyms, setAntonyms] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const extractDefinitions = (data) => {
    const definitions = [];
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.definitions.forEach((definition) => {
          definitions.push(definition.definition);
        });
      });
    });
    return definitions;
  };

  const extractExamples = (data) => {
    const examples = [];
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.definitions.forEach((definition) => {
          if (definition.example) {
            examples.push(definition.example);
          }
        });
      });
    });
    return examples;
  };

  // const extractMeanings = (data) => {
  //   const meanings = [];
  //   data.forEach((item) => {
  //     item.meanings.forEach((meaning) => {
  //       meanings.push(meaning.partOfSpeech);
  //     });
  //   });
  //   return meanings;
  // };

  const extractPartOfSpeech = (data) => {
    const partOfSpeech = [];
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        partOfSpeech.push(meaning.partOfSpeech);
      });
    });
    return partOfSpeech;
  };

  const extractAntonyms = (data) => {
    const antonyms = [];
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.antonyms.forEach((antonym) => {
          antonyms.push(antonym);
        });
      });
    });
    return antonyms;
  };

  const extractSynonyms = (data) => {
    const synonyms = [];
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.synonyms.forEach((synonym) => {
          synonyms.push(synonym);
        });
      });
    });
    return synonyms;
  };

  const toggleCards = (e) => {
    if (!showCards) {
      // TODO: change plus icon to loader
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  };

  const fetchWordMeaning = async (inputWord) => {
    try {
      const response = await httpService.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
      );

      setWords(response);
     
      let data = response;
      if (data) {
        setDefinitions(extractDefinitions(data));
        // setMeaning(extractMeanings(data));
        setExamples(extractExamples(data));
        setPartOfSpeech(extractPartOfSpeech(data));
        setAntonyms(extractAntonyms(data));
        setSynonyms(extractSynonyms(data));
        console.log('inaddvocab', words);
        saveToPersonalDictionary(inputWord);
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

  const saveToPersonalDictionary = async (inputWord) => {
    
    const newWord = {
      word: inputWord,
      grade: grade,
      partsofSpeech: partOfSpeech,
      definitions: definitions,
      example: examples,
      synonyms: synonyms,
      antonyms: antonyms,
      users_id: '27'
    };

    // const response= await httpService.post(`${API}/api/dictionary/addWordIfNotExists`, newWord);
    try {
      const response = await axios.post(
        `${API}/api/dictionary/addWordIfNotExists`,
        newWord
      );
       console.log(response)
      if (response.ok) {
         const data = response;
        if (data.exists) {
          setValidationResult('The word exists in the dictionary.');
        } else {
          setValidationResult('The word does not exist in the dictionary.');
        }
      } else {
        setValidationResult('Error while checking the word.');
      }
      // Handle the case where the word is not found
      setMeaning('Word not found.');
      setPartOfSpeech('');
      setDefinitions([]);
      setExamples([]);
      setSynonyms([]);
      setAntonyms([]);
      // notify()
    } catch (error) {
      console.error('Error:', error);
    }



    // .then((response) => {
    //   // Handle success response
    //   console.log('Data saved to personal_dictionary:');
    //   notify();
    // })
    // .catch((error) => {
    //   // Handle error
    //   console.error('Error saving data to personal_dictionary:', error);
    // });
  };

 const checkWord = async (inputWord) => {
    let result = false;
    try {
      const response = await axios.get(`${API}/api/dictionary/${inputWord}`);
      if (response.status === 200) {
        result = true
      }
    }
    catch (error) {
      console.log(error);
    }
   
    return result
  };

  const checkPersonalDictionary = async (inputWord) => {
  // console.log(inputWord)
   const found = await checkWord(inputWord);
  //  console.log('found:', found)
   if(!found) fetchWordMeaning(inputWord)

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
          customClickHandler={checkPersonalDictionary}
        />{' '}
      </div>

      {words && words.length > 0 && <DisplayCardList words={words} />}
    </div>
  );
};
export default AddVocab;



// https://codepen.io/mattgreenberg/pen/ggOpOr
// https://github.com/BLepers/1-click-flashcards
// https://medium.com/frontendweb/how-to-pass-state-or-data-in-react-router-v6-c366db9ee2f4
// const location = useLocation();
// console.log('locationstate=', location.state);
// const words = location.state?.vocabWords;
// console.log('inaddvocabwords=', words);

//setPartOfSpeech(data[0].meanings[0].partOfSpeech);
//   setMeaning(data.map(val => val.meanings.map(means => means.definitions.map(def => (def.definition)))));

//   setDefinitions(
//     data.meanings[0].definitions.map((def) => def.definition)
//   );

//   setExamples(data.map((val) =>
//   val.meanings.map((means) =>
//     means.definitions.map((def) => def.example ? def.example : ''))));

//   setSynonyms(data.map((val) =>
//   val.meanings.map((means) =>
//     means.definitions.map((def) => {
//       return def.synonyms?.map((syn) =>syn);
//     })
//   )
// ));
//   setAntonyms(data.map((val) =>
//   val.meanings.map((means) =>
//     means.synonyms?.map((ant) => ant)
//   )
// ));
