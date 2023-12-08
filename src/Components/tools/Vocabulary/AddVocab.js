import { React, useState, useEffect } from 'react';
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
  const [userWord, setUserWord] = useState('');
  const [grade, setGrade] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [definition, setDefinition] = useState([]);
  const [example, setExample] = useState([]);
  const [synonym, setSynonym] = useState([]);
  const [antonym, setAntonym] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [phonetic, setPhonetic] = useState('');
  const [personalDict, setPersonalDict] = useState([]);

  const synonymArr = [];
  const definitionArr = [];
  const antonymArr = [];
  const exampleArr = [];
  const speechArr = [];

  useEffect(() => {
    const retrieveAllWords = async () => {
      try {
        const response = await httpService.get(`${API}/api/dictionary/`);
        setPersonalDict(response.payload);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveAllWords();
  }, []);

  const extractPhonetic =  (data) => {
    const phoneticAudioWithMP3 = data.map((word) => {
      return word.phonetics.find((phonetic) => phonetic.audio.endsWith('.mp3'));
    });
    return phoneticAudioWithMP3;
  };

  //get definitions from the word object
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

  //get examples from the word object
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

  //get partofspeech from the word object
  const extractPartOfSpeech = (data) => {
    data.forEach((item) => {
      item.meanings.forEach((meaning) => {
        speechArr.push(meaning.partOfSpeech);
      });
    });
    return speechArr;
  };

  //get antonyms from the word object
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

  //get synonyms from the word object
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
      setShowCards(true);
    } else {
      setShowCards(false);
    }
  };

  const fetchWordMeaning = async (inputWord, selectedGrade) => {
    try {
      const response = await httpService.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
      );

      setWords(response);
      console.log(response);
      // let data = response;
      if (response) {
        setUserWord(inputWord)
        setGrade(selectedGrade)
        setDefinition(extractDefinitions(response));
        setExample(extractExamples(response));
        setPartOfSpeech(extractPartOfSpeech(response));
        setAntonym(extractAntonyms(response));
        setSynonym(extractSynonyms(response));
        setPhonetic(extractPhonetic(response));
        // console.log('inaddvocab',extractAntonyms(response), words, speechArr,definitionArr,exampleArr,synonymArr,antonymArr);

        saveToPersonalDictionary(
          userWord,
          grade,
          speechArr,
          phonetic,
          definitionArr,
          exampleArr,
          synonymArr,
          antonymArr
        );
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

  const saveToPersonalDictionary = async (
    inputWord,
    grade,
    speechArr,
    phonetic,
    definitionArr,
    exampleArr,
    synonymArr,
    antonymArr
  ) => {


    const userWord = {
      word: inputWord,
      grade: grade,
      partsofSpeech: speechArr[0],
      phonetic: phonetic,
      definitions: definitionArr,
      example: exampleArr,
      synonyms: synonymArr,
      antonyms: antonymArr,
      users_id: 1,
    };
    console.log('userWord', userWord);

    try {
      const response = await axios.post(`${API}/api/dictionary`, userWord);
      console.log('response', response);
      // const response = await fetch(`${API}/api/dictionary/new`, {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userWord),
      // });

       if (response.status === 200) {
           console.log('The word exists in the dictionary.');
        }else {
             console.log('The word does not exist in the dictionary.');
          }
        

      setPartOfSpeech('');
      setDefinition([]);
      setExample([]);
      setSynonym([]);
      setAntonym([]);
      setPhonetic('');

      // notify()
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const checkWord = async (inputWord) => {
    let result = false;
    const wordFound = personalDict.filter(
      (element) => element.word === inputWord
    );
    const wordId = wordFound.length > 0 ? wordFound[0].dicitonary_id : -1;
    console.log('id', wordId);
    if (wordId !== -1) {
      try {
        const response = await axios.get(`${API}/api/dictionary/${inputWord}`);
        console.log('checkWord', response);
        if (response.status === 200) {
          result = true;
        }
      } catch (error) {
        console.log(error);
      }
    }
    return result;
  };

  const checkPersonalDictionary = (inputWord, selectedGrade) => {
   
    setGrade(selectedGrade);
    console.log(selectedGrade,)
    const wordExists = checkWord(inputWord);
    console.log(wordExists);
    if (wordExists) fetchWordMeaning(inputWord,selectedGrade);
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

      <DisplayCardList personalDict={personalDict} />
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
// Postgresql command
//https://www.commandprompt.com/education/understanding-postgresql-arrays-with-examples/#:~:text=PostgreSQL%20arrays%20are%20created%20by,tab_name(%20col_name%20data_type%5B%5D%2C%20)%3B
