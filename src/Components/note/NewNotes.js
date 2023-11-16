import React, { useState, useEffect } from 'react';
import ListNotes from './ListNotes';
// import httpService from '../httpService';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BsPlusLg } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import moment from 'moment';

const API = process.env.REACT_APP_API_URL;

const NewNotes = () => {
  // const [newNote, setNewNote] = useState({
  //   notetitle:'',
  //   textnote:''

  // });
  const [notetitle, setNotetitle] = useState('');
  const [textnote, setTextnote] = useState('');
  const [userId, setUserId] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [searchNotes, setSearchNotes] = useState(false);

  useEffect(() => {
    // httpService
    axios
      .get(`${API}/api/notes`)
      //  .then((response) => console.log(response.data))
      .then((response) => setData(response.data.payload))
      .catch((e) => console.log('catch', e));
  }, []);

  const handleSearch = () => {
    setSearchNotes((prevState) => !prevState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (textnote.trim() === '') {
      setError('Notes cannot be empty.');
      return;
    }

    const postData = {
      note_title: notetitle,
      textnotes: textnote.replace(/(<([^>]+)>)/gi, ''),
      users_id: userId, // Assuming user holds the user ID
      // date_created: moment().format('MMM Do YY'),
    };

    // console.log('postData=', postData);

    setLoading(true);

    try {
      // Make the POST request
      // axios
      //   .post(`${API}/api/notes/new`, postData)
      // .then(() => {
      //   console.log('Data sent successfully:');
      // })
      // .catch((error) => {
      //   console.error('Error sending data:', error);
      // });

      const response = await axios.post(`${API}/api/notes/new`, postData);
      const data = response.data;
      console.log(data);
      setLoading(false);
      setNotetitle('');
      setTextnote('');
    } catch (error) {
      console.error('Error adding document:', error.response.data);
      setError('Error adding the note.');
    }
  };

  return (
    <div>
      <div className='text-center m-10'>New Notes</div>
      {/* <div className='text-left m-10'>
        {searchNotes && (
          <form className='mb-6 w-full relative  '>
            <input
              type='search'
              placeholder='Search ...'
              className='text-secondary w-1/2 text-sm border-blue-500' 
            />
          </form>
        )}
      </div> */}

      <div className='m-32 '>
        {error && (
          <div
            style={{ color: 'red' }}
            className='text-red-600 text-sm text-center my-4'
          >
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className='block'>
          <div className='w-9/12 m-auto bg-slate-500 p-4'>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='note_title'
            >
              Title
            </label>
            <span>{'  '}</span>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='note_title'
              name='note_title'
              value={notetitle}
              type='text'
              autoComplete='off'
              onChange={(e) => setNotetitle(e.target.value)}
              placeholder='Note Title'
            />
            <span>{'  '}</span>
            <label
              className='mb-2 uppercase font-bold text-lg text-grey-darkest'
              htmlFor='user_id'
            >
              UserID
            </label>
            <span>{'  '}</span>
            <input
              className='border py-2 px-3 text-grey-darkest'
              id='user_id'
              name='user_id'
              value={userId}
              type='text'
              autoComplete='off'
              onChange={(e) => setUserId(e.target.value)}
              placeholder='UserId'
            />
            <CKEditor
              editor={ClassicEditor}
              data={textnote}
              className='w-full bg-sidebar text-sm'
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                // const dataremove = data.replace(/(<p[^>]*>|<\/p>)/g ,"")
                // console.log(dataremove);
                setTextnote(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </div>
          <button
            className='w-auto mt-10 h-auto p-4  top-80 right-60 bg-teal-500 '
            // onClick={handleSubmit}
            type='submit'
          >
            Add Note
          </button>
        </form>
      </div>
      <div className='bg-sidebar px-4 py-2 flex justify-center items-center'>
        <BsPlusLg className='text-black border-red' />

        <FiSearch
          className='text-black border-red-500'
          onClick={handleSearch}
        />
      </div>
      {/* <ListNotes newNote={newNote}  data={data}/> */}
    </div>
  );
};

export default NewNotes;

// import React, { useState, useEffect } from 'react';
// import ListNotes from './ListNotes';
// // import httpService from '../httpService';
// import axios from 'axios';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

// const API = process.env.REACT_APP_API_URL;

// const handleSubmit = () => {};
// const NewNotes = () => {
//   const [note, setNote] = useState({
//     notetitle: '',
//     textnote: '',
//     users_id: '',
//   });
//   const [error, setError] = useState("");
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // httpService
//     axios
//       .get(`${API}/api/notes`)
//       //  .then((response) => console.log(response.data))
//       .then((response) => setNote(response.data).payload)
//       .catch((e) => console.log('catch', e));
//   }, []);

//   return (
//     <div>

//       <div className='text-center m-10'>New Notes</div>

//       <div
//         className='w-auto h-auto p-4 fixed top-45 right-40 bg-teal-500 '
//         onClick={handleSubmit}
//       >
//         Add Note
//       </div>
//       <div className='m-32 '>
//         {error && <p style={{ color: "red" }} className='text-red-600 text-sm'>{error}</p>}

//       <form>
//       <div className='w-9/12 m-auto bg-slate-500 p-4'>

//       <CKEditor
//         editor={ClassicEditor}
//         onInit={(editor) => {}}
//         data={note}
//         className='bg-sidebar text-sm'
//         onReady={(editor) => {
//           // You can store the "editor" and use when it is needed.
//           console.log('Editor is ready to use!', editor);

//         }}
//         onChange={(event, editor) => {
//           const data = editor.getData();
//           console.log({ event, editor, data });
//           setNote({textnote:data});
//         }}
//         onBlur={(event, editor) => {
//           console.log('Blur.', editor);
//         }}
//         onFocus={(event, editor) => {
//           console.log('Focus.', editor);
//         }}
//       />
//       </div>
//      </form>
//      </div>

//       <ListNotes />
//     </div>
//   );
// };

// export default NewNotes;
