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
  const [definition, setDefinition] = useState([]);
  const [example, setExample] = useState([]);
  const [synonym, setSynonym] = useState([]);
  const [antonym, setAntonym] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [personalDict, setPersonalDict] = useState([]);

  const synonymArr = [];
  const definitionArr = [];
  const antonymArr = [];
  const exampleArr = [];
  const speechArr = [];

  const extractDefinitions = (data) => {
    
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.definitions.forEach((definition) => {
          definitionArr.push(definition.definition);
        });
      });
    });
    return definitionArr;
  };

  const extractExamples = (data) => {
    
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.definitions.forEach((definition) => {
          if (definition.example) {
            exampleArr.push(definition.example);
          }
        });
      });
    });
    return exampleArr;
  };

  const extractPartOfSpeech = (data) => {
   
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        speechArr.push(meaning.partOfSpeech);
      });
    });
    return speechArr;
  };

  const extractAntonyms = (data) => {

    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.antonyms.forEach((antonym) => {
          antonymArr.push(antonym);
        });
      });
    });
    return antonymArr;
  };

  const extractSynonyms = (data) => {
    
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        meaning.synonyms.forEach((synonym) => {
          synonymArr.push(synonym);
        });
      });
    });
    return synonymArr;
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
        
        setDefinition(extractDefinitions(data));
        // setMeaning(extractMeanings(data));
        setExample(extractExamples(data));
        setPartOfSpeech(extractPartOfSpeech(data));
        setAntonym(extractAntonyms(data ));
        setSynonym(extractSynonyms(data ));
        console.log('inaddvocab',extractAntonyms(data), words, speechArr,definitionArr,exampleArr,synonymArr,antonymArr);
   
        saveToPersonalDictionary(inputWord,speechArr,definitionArr,exampleArr,synonymArr,antonymArr);
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

  const retrieveAllWords = async()=>{
    try {
      const response = await httpService.get(
        `${API}/api/dictionary/`
      );
      if (response.status === 200) {
        setPersonalDict(response)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const saveToPersonalDictionary = async (inputWord, speechArr,definitionArr, exampleArr, synonymArr, antonymArr) => {

    console.log('savedict',inputWord, speechArr, definitionArr, exampleArr, synonymArr, antonymArr)

    const userWord = {
      word: inputWord,
      grade: grade,
      partsofSpeech: speechArr,
      definitions: definitionArr,
      example: exampleArr,
      synonyms: synonymArr,
      antonyms: antonymArr,
      users_id: 4,
    };

    try {
      const response = await httpService.post(`${API}/api/dictionary/addWord`,userWord);

      // const response = await fetch(`${API}/api/dictionary/addWord`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(userWord)
      // });
    
      if (response.ok) {
        const data = response
 
        if (data.exists) {
           console.log('The word exists in the dictionary.');
         } 
        //  else {
      //     setValidationResult('The word does not exist in the dictionary.');
      //   }
      // } else {
      //   setValidationResult('Error while checking the word.');
      }

      setMeaning('Word not found.');
      setPartOfSpeech('');
      setDefinition([]);
      setExample([]);
      setSynonym([]);
      setAntonym([]);

      retrieveAllWords()
      
      // notify()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const checkWord = async (inputWord) => {
    let result = false;
    try {
      const response = await httpService.get(
        `${API}/api/dictionary/${inputWord}`
      );
      if (response.status === 200) {
        result = true;
      }
    } catch (error) {
      console.log(error);
    }
    return result;
  };


  const checkPersonalDictionary = async (inputWord, selectedGrade) => {
   
    setGrade(selectedGrade)
    const found = await checkWord(inputWord);
    // console.log('found:', found , grade,inputWord);
    if (!found) fetchWordMeaning(inputWord);
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

      {personalDict && personalDict.length > 0 && <DisplayCardList  personalDict={personalDict} />}
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
