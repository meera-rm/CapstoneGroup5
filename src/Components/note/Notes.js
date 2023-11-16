import React,{useState, useEffect} from 'react';
import NoteSideBar from './NoteSideBar'
import MyTimer from  '../pomodoro/MyTimer';
import ListNotes from './ListNotes';
import {Link} from 'react-router-dom';
import axios from 'axios'
// import httpService from '../httpService';


const API = process.env.REACT_APP_API_URL;

const Notes = () => {
 
  const [note, setNote]= useState([])
  const [textnote, setTextNote]= useState('')
  const [id,setId]= useState('');

  // const [showComponent, setShowComponent] = useState(false);

  // // Function to toggle the visibility of the component
  // const toggleComponent = () => {
  //   setShowComponent(!showComponent);
  // };

  useEffect(() => {
    //httpService
    axios.get(`${API}/api/notes`)
      .then((response) => setNote(response.data.payload))
      .catch((e) => console.log('catch', e));
  }, []);

  return (
    <div>
      <div className='text-xl font-bold ml-2 md:ml-12'>Dashboard</div>
      <div className='flex '>
         <NoteSideBar/>
         <MyTimer/>
      </div>
      <div className='flow-root my-12 mx-auto  p-10 shadow-2xl md:w-9/12 '>
       <div className='flex flex-row justify-between '>
          <div className='text-3xl'>NOTES</div>
          <Link to={`/notes/new`}>
          <div className='text-3xl'>+ </div>
          </Link>
      </div>
      <div className='text-center m-10'>
         <Link to={`/notes/new`}>
          <button className='btn bg-teal-500 px-4 py-4 rounded text-black  font-georgia hover:bg-indigo-400 '>
            Add Notes {' '}
          </button>
        </Link>
      </div>
      <div className='container mx-auto mt-12 text-center sm:text-left'>
        <ListNotes note={note}/>

        {/* <div className='grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3'>
           {/* {note.map((ele) =>{
             return ( *
               <div className='shadow-2xl bg-teal-500 w-60 break-words'>
                 <div>kfjlkfjkdjfkdfkdjkklfgjjsklklsjklsdkghgkhj</div>
               </div>
               <div className='shadow-2xl bg-teal-500 break-words '>
                 <div>kfjlkfjkdjfkdfkdjkklfgjjsklklsjklsdk</div>
               </div>
               <div className='shadow-2xl bg-teal-500 break-words'>
                 <div>kfjlkfjkdjfkdfkdjkklfgjjsklklsjklsdk</div>
               </div>
          {/* )}
          )}  *
        
          {/* <div className='w-full px-4 py-5 bg-white rounded-lg shadow'>
            Main content
            <div className='text-sm font-medium text-gray-500 truncate'>
              Total users
            </div>
            <div className='mt-1 text-3xl font-semibold text-gray-900'>
              12,00
            </div>
            {/* <ListNotes/> 
          </div> */}
          {/* <div className='w-full px-4 py-5 bg-white rounded-lg shadow'>
            <div className='text-sm font-medium text-gray-500 truncate'>
              Total Profit
            </div>
            <div className='mt-1 text-3xl font-semibold text-gray-900'>
              $ 450k
            </div>
          </div>
          <div className='w-full px-4 py-5 bg-white rounded-lg shadow'>
            <div className='text-sm font-medium text-gray-500 truncate'>
              Total Orders
            </div>
            <div className='mt-1 text-3xl font-semibold text-gray-900'>20k</div>
          </div> */}
        {/* </div> */} 
      </div>
      </div>
      {/* <div className='notemain'>
        Main Content
      </div> */}
      {/* <aside
        className={`w-64 bg-gray-800 text-white p-4 fixed h-full ease-in-out transform transition-transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-64'
        }`}
      >
        <h1 className='text-2xl mb-4'>Sidebar</h1>
        <ul>
          <li className='mb-2'>
            <a href='/notes'>Home</a>
          </li>
          <li className='mb-2'>
            <a href='/new'>Notes</a>
          </li>
          {/* <li className="mb-2">
              <a href="#">Link 3</a>
            </li> *
        </ul>
      </aside>

      {/* Main Content *
      <main className='flex-1 p-4'>
        <h1 className='text-2xl mb-4'>Main Content</h1>
        {/* <button
          onClick={toggleSidebar}
          className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2'
        >
          Toggle Sidebar
        </button> *
      </main> */}
    </div>
  );
};

export default Notes;
