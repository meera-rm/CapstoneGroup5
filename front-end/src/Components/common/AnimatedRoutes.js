import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import BookCardList from '../books/booksCardList/BookCardList';
// import IndexBooks from '../../Pages/Books/IndexBooks';
import NewBooks from '../../Pages/Books/NewBook';
// import ShowBooks from '../../Pages/Books/ShowBooks';
// import EditBooks from '../../Pages/Books/EditBooks';
import Dictionary from '../tools/Dictionary/Dictionary';
import FlashCard from '../tools/FlashCard/FlashCard';
import AddVocab from '../tools/FlashCard/AddVocab';

import Games from '../games/Games';
import RockpaperScissor from '../games/RockpaperScissor';
import EtchSketch from '../games/EtchSketch';
import MemoryGames from '../games/MemoryGames';
import PaintApp from '../games/PaintApp';
import HangmanGame from '../games/HangmanGame';
import CasualReading from '../books/CasualReading';
import ReadingLevelBooks from '../books/ReadingLevelBooks';

// import TeacherIndex from '../../Pages/Teacher/TeacherIndex';
// import TeacherNew from '../../Pages/Teacher/TeacherNew';
// import TeacherShow from '../../Pages/Teacher/TeacherShow';
// import TeacherEdit from '../../Pages/Teacher/TeacherEdit';

// import StudentIndex from '../../Pages/Student/StudentIndex';
// import StudentNew from '../../Pages/Student/StudentNew';
// import StudentShow from '../../Pages/Student/StudentShow';
// import StudentEdit from '../../Pages/Student/StudentEdit';
// import StudentView from '../../Pages/Student/StudentView';

// import IndexLogs from '../../Pages/Logs/IndexLogs';
// import NewLog from '../../Pages/Logs/NewLog';
// import ShowLogs from '../../Pages/Logs/ShowLogs';
// import EditLogs from '../../Pages/Logs/EditLogs';

// import IndexComments from '../../Pages/Comment/IndexComments';
// import NewComment from '../../Pages/Comment/NewComment';
// import ShowComments from '../../Pages/Comment/ShowComments';
// import EditComments from '../../Pages/Comment/EditComments';
import Information from '../../Pages/Information';
import PrivacyPolicy from '../../Pages/PrivacyPolicy';
import ParentDashboard from '../../Pages/ParentDashboard';

// import SignUp from  '../../Pages/SignUp';
// import TeacherSignUp from '../../Pages/TeacherSignUp';
// import TeacherLogin from '../../Pages/TeacherLogin';
// import ParentLogin from '../../Pages/ParentLogin';
// import ParentSignUp from '../../Pages/ParentSignUp';

//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();

  // logging in
  // const [signedIn, setSignedIn] = useState(false);

  // const [signedInUser, setSignedInUser] = useState({});

  // signing up /register

  // const [register, setRegister] = useState(false);

  // const [hasRegistered, setHasRegistered] = useState({});

  return (
    <div>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/info' element={<Information />} />
            <Route path='/policy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/vocabulary' element={<FlashCard />} />
            <Route path='/addVocab' element={<AddVocab />} />
            <Route path='/books'>
              <Route index element={<BookCardList />} />
              <Route path='new' element={<NewBooks />} />
              <Route path='level' element={<ReadingLevelBooks />} />
              <Route path='casual' element={<CasualReading />} />
            </Route>

            <Route path='/games'>
              <Route index element={<Games />} />
              <Route path='rsp' element={<RockpaperScissor />} />
              <Route path='memorygames' element={<MemoryGames />} />
              <Route path='paint' element={<PaintApp />} />
              <Route path='hangman' element={<HangmanGame />} />
              <Route path='etchsketch' element={<EtchSketch />} />
            </Route>

            <Route path='/parent-dashboard' element={<ParentDashboard />} />
            <Route path='*' element={<FourOFour />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
