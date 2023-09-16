import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact';
import BookCardList from '../books/booksCardList/BookCardList';
// import IndexBooks from '../../Pages/Books/IndexBooks';
import NewBooks from '../../Pages/Books/NewBook';
// import ShowBooks from '../../Pages/Books/ShowBooks';
// import EditBooks from '../../Pages/Books/EditBooks';
import Dictionary from '../tools/Dictionary/Dictionary';
import FlashCard from '../tools/FlashCard/FlashCard';
import AddVocab from '../tools/Vocabulary/AddVocab';
import Timer from '../pomodoro/MyTimer';

import Games from '../games/AllGames/Games';
import RockpaperScissor from '../games/rps/RockpaperScissor';
import EtchSketch from '../temp/EtchSketch';
import MemoryGame from '../games/memorygame/MemoryGame';
import PaintApp from '../games/paintApp/PaintApp';
import GuessWord from '../games/guessword/GuessWord';
import TicTacToe from '../temp/TicTacToe';
import CasualReading from '../books/bookCard/CasualReading';
import ReadingLevelBooks from '../books/bookCard/ReadingLevelBooks';

import TeacherIndex from '../../Pages/Teacher/TeacherIndex';
import TeacherNew from '../../Pages/Teacher/TeacherNew';
import TeacherShow from '../../Pages/Teacher/TeacherShow';
import TeacherEdit from '../../Pages/Teacher/TeacherEdit';

import StudentIndex from '../../Pages/Student/StudentIndex';
import StudentNew from '../../Pages/Student/StudentNew';
import StudentShow from '../../Pages/Student/StudentShow';
import StudentEdit from '../../Pages/Student/StudentEdit';
// import StudentView from '../../Pages/Student/StudentView';

// import IndexLogs from '../../Pages/Logs/IndexLogs';
// import NewLog from '../../Pages/Logs/NewLog';
// import ShowLogs from '../../Pages/Logs/ShowLogs';
// import EditLogs from '../../Pages/Logs/EditLogs';
import Profile from '../index/Profile';
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
            <Route path='/profile' element={<Profile />} />
            <Route path='/info' element={<Information />} />
            <Route path='/policy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/flashcard' element={<FlashCard />} />
            <Route path='/vocabulary' element={<AddVocab />} />
            <Route path='/timer' element={<Timer />} />

            <Route path='/books'>
              <Route index element={<BookCardList />} />
              <Route path='new' element={<NewBooks />} />
              <Route path='level' element={<ReadingLevelBooks />} />
              <Route path='casual' element={<CasualReading />} />
            </Route>

            <Route path='/games'>
              <Route index element={<Games />} />
              <Route path='rps' element={<RockpaperScissor />} />
              <Route path='memorygame' element={<MemoryGame />} />
              <Route path='paint' element={<PaintApp />} />
              <Route path='guessword' element={<GuessWord />} />
              <Route path='etchsketch' element={<EtchSketch />} />
              <Route path='tictactoe' element={<TicTacToe />} />
            </Route>

            <Route path='/teachers'>
              <Route index element={<TeacherIndex />} />
              <Route path='new' element={<TeacherNew />} />
              <Route path=':id' element={<TeacherShow />} />
              <Route path=':id/edit' element={<TeacherEdit />} />
            </Route>

            <Route path='/students'>
              <Route index element={<StudentIndex />} />
              <Route path='new' element={<StudentNew />} />
              <Route path=':id' element={<StudentShow />} />
              <Route path=':id/edit' element={<StudentEdit />} />
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
