import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';

// PAGES
import FourOFour from '../../Pages/FourOFour';
import Home from '../../Pages/Home';
import About from '../../Pages/About/About';
import Contact from '../../Pages/Contact';
import BookCardList from '../books/booksCardList/BookCardList';

import NewBooks from '../../Pages/Books/NewBook';
import ShowBooks from '../../Pages/Books/ShowBooks';
import EditBooks from '../../Pages/Books/EditBooks';
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

import AddSubscription from '../subscriptions/AddSubscription';
import ListSubscription from '../subscriptions/ListSubscription';
import EditEmailModal from '../subscriptions/EditEmailModal';

import Profile from '../index/Profile';
import Login from '../../Pages/Login';
import Register from '../../Pages/Register';
import ProtectedRoute from '../../auth/ProtectedRoute';
import PrivacyPolicy from '../../Pages/PrivacyPolicy';
import ParentDashboard from '../../Pages/ParentDashboard';
import TeacherDashboard from '../../Pages/TeacherDashboard';
import StudentDashboard from '../../Pages/StudentDashboard';
import AdminLinks from '../../Pages/AdminLinks';

import Note from '../../Pages/Notes/Note';
import Notes from '../note/Notes';
import NewNotes from '../note/NewNotes';
import UpdateNotes from '../note/UpdateNotes';
import ListNotes from '../note/ListNotes';
import ShowNotes from '../note/ShowNotes';
import NoteSideBar from '../note/NoteSideBar';
import NotesHome from '../note/NotesHome';


import IndexComments from '../../Pages/Comment/IndexComments';
import NewComment from '../../Pages/Comment/NewComment';
import ShowComments from '../../Pages/Comment/ShowComments';
import EditComments from '../../Pages/Comment/EditComments';



//This component to define navbar animate tranisitons
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <div>
      <main>
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            {/* ---------- PUBLIC: anyone can see these ---------- */}
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/profile' element={<Profile />} /> */}
            {/* <Route path='/info' element={<Information />} /> */}
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Register />} />
            <Route path='/policy' element={<PrivacyPolicy />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/timer' element={<Timer />} />
            {/* Words + flashcards: anyone can view; adding a word needs login (checked in AddVocab) */}
            <Route path='/flashcard' element={<FlashCard />} />
            <Route path='/vocabulary' element={<AddVocab />} />

            <Route path='/games'>
              <Route index element={<Games />} />
              <Route path='rps' element={<RockpaperScissor />} />
              <Route path='memorygame' element={<MemoryGame />} />
              <Route path='paint' element={<PaintApp />} />
              <Route path='guessword' element={<GuessWord />} />
              <Route path='etchsketch' element={<EtchSketch />} />
              <Route path='tictactoe' element={<TicTacToe />} />
            </Route>

            {/* Books: browsing is public, adding needs login, editing is teacher/admin */}
            <Route path='/books'>
              <Route index element={<BookCardList />} />
              <Route path='level' element={<ReadingLevelBooks />} />
              <Route path='casual' element={<CasualReading />} />
              <Route path=':id' element={<ShowBooks />} />
              <Route element={<ProtectedRoute />}>
                <Route path='new' element={<NewBooks />} />
              </Route>
              <Route element={<ProtectedRoute roles={['teacher', 'admin']} />}>
                <Route path=':id/edit' element={<EditBooks />} />
              </Route>
            </Route>

            {/* Subscriptions: anyone can subscribe, only admin sees the list */}
            <Route path='/subscriptions'>
              <Route path='new' element={<AddSubscription />} />
              <Route element={<ProtectedRoute />}>
                <Route path=':id/edit' element={<EditEmailModal />} />
              </Route>
              <Route element={<ProtectedRoute roles={['admin']} />}>
                <Route index element={<ListSubscription />} />
              </Route>
            </Route>

            {/* ---------- LOGGED IN: any role ---------- */}
            <Route element={<ProtectedRoute />}>

              <Route path='/notes'>
                <Route index element={<Notes />} />
                {/* <Route path='sidebar' element={<NoteSideBar />} /> */}
                <Route index element={<ListNotes />} />
                <Route path='home' element={<NotesHome />} />
                <Route path='new' element={<NewNotes />} />
                <Route path=':id' element={<ShowNotes />} />
                <Route path=':id/edit' element={<UpdateNotes />} />
              </Route>
            </Route>

            {/* Teachers: logged in can view, admin manages */}
            <Route path='/teachers'>
              <Route element={<ProtectedRoute  roles={['teacher', 'admin']}/>}>
                <Route index element={<TeacherIndex />} />
                <Route path=':id' element={<TeacherShow />} />
              </Route>
              <Route element={<ProtectedRoute roles={['admin']} />}>
                <Route path='new' element={<TeacherNew />} />
                <Route path=':id/edit' element={<TeacherEdit />} />
              </Route>
            </Route>

            {/* Students: logged in can view, teacher/admin manage */}
            <Route path='/students'>
              {/* The full student list is admin only; teachers use their own dashboard */}
              <Route element={<ProtectedRoute roles={['admin']} />}>
                <Route index element={<StudentIndex />} />
              </Route>
              <Route element={<ProtectedRoute />}>
                <Route path=':id' element={<StudentShow />} />
              </Route>
              <Route element={<ProtectedRoute roles={['teacher', 'admin']} />}>
                <Route path='new' element={<StudentNew />} />
                <Route path=':id/edit' element={<StudentEdit />} />
              </Route>
            </Route>

            {/* Comments: logged in can read, teacher/admin write */}
            <Route path='/comments'>
              <Route element={<ProtectedRoute />}>
                <Route index element={<IndexComments />} />
                <Route path=':id' element={<ShowComments />} />
              </Route>
              <Route element={<ProtectedRoute roles={['teacher', 'admin']} />}>
                <Route path='new' element={<NewComment />} />
                <Route path=':id/edit' element={<EditComments />} />
              </Route>
            </Route>

            {/* ---------- PARENTS ---------- */}
            <Route element={<ProtectedRoute roles={['student']} />}>
              <Route path='/student-dashboard' element={<StudentDashboard />} />
            </Route>

            <Route element={<ProtectedRoute roles={['teacher', 'admin']} />}>
              <Route path='/teacher-dashboard' element={<TeacherDashboard />} />
            </Route>

            <Route element={<ProtectedRoute roles={['parent', 'admin']} />}>
              <Route path='/parent-dashboard' element={<ParentDashboard />} />
            </Route>

            <Route element={<ProtectedRoute roles={['admin']} />}>

              <Route path='/admin/links' element={<AdminLinks />} />

            </Route>

            <Route path='*' element={<FourOFour />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default AnimatedRoutes;
