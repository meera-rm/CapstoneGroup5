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

  const [grade, setGrade] = useState('');
  const [partOfSpeech, setPartOfSpeech] = useState('');
  const [definition, setDefinition] = useState([]);
  const [example, setExample] = useState([]);
  const [synonym, setSynonym] = useState([]);
  const [antonym, setAntonym] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [validationResult, setValidationResult] = useState('');
  const [phonetic, setPhonetic] = useState('')
  const [personalDict, setPersonalDict] = useState([]);

  const synonymArr = [];
  const definitionArr = [];
  const antonymArr = [];
  const exampleArr = [];
  const speechArr = [];


  useEffect(()=>{

    const retrieveAllWords = async()=>{
      try {
        const response = await httpService.get(
          `${API}/api/dictionary/`
        );
          setPersonalDict(response.payload)
        
      } catch (error) {
        console.log(error);
      }
    }
    retrieveAllWords();
  },[])


  const extractPhonetic = async (data)=>{ 
    const phoneticAudioWithMP3= data.map((word) => {
      return word.phonetics.find((phonetic) =>
        phonetic.audio.endsWith('.mp3')
      );
    })
    return phoneticAudioWithMP3;
  }

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

  const fetchWordMeaning = async (inputWord) => {
   
    try {
      const response = await httpService.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`
      );

      setWords(response);
     console.log(response)
      // let data = response;
      if (response) {
     
        setDefinition(extractDefinitions(response));
        setExample(extractExamples(response));
        setPartOfSpeech(extractPartOfSpeech(response));
        setAntonym(extractAntonyms(response ));
        setSynonym(extractSynonyms(response ));
        const phoneticAudio = extractPhonetic(response)
        console.log(phoneticAudio)
        if (phoneticAudio) {
          setPhonetic(phoneticAudio)
        
        }
        // console.log('inaddvocab',extractAntonyms(response), words, speechArr,definitionArr,exampleArr,synonymArr,antonymArr);
   
        saveToPersonalDictionary(inputWord , speechArr,definitionArr,exampleArr,synonymArr,antonymArr,phoneticAudio);
      }
    } catch (error) {
      console.error('Error fetching word meaning:', error);
    }
  };

 

  const saveToPersonalDictionary = async (inputWord , speechArr,definitionArr, exampleArr, synonymArr, antonymArr,phoneticAudio) => {

    // console.log('savedict',inputWord, speechArr, definitionArr, exampleArr, synonymArr, antonymArr)

    const userWord = {
      word: inputWord,
      grade: grade,
      partsofSpeech: speechArr,
      phonetic:phoneticAudio,
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
    try {
      const response = await httpService.get(
        `${API}/api/dictionary/${inputWord}`
      );
      console.log('checkWord',response)
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
    
      <DisplayCardList  personalDict={personalDict} />
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
