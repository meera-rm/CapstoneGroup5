import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import httpService from '../httpService';
import { AiFillDelete } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import { FaPaperPlane } from 'react-icons/fa';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const API = process.env.REACT_APP_API_URL;

const UpdateNotes = () => {
  let { id } = useParams();

  const navigate = useNavigate();

  const [note, setNote] = useState({
    note_title :'',
    textnotes:'',
    users_id :''
  });
 
  const [notes, setNotes] = useState([]);
  const [error, setError] = useState('');
  const [editorData, setEditorData] = useState('');

  useEffect(() => {
    // httpService
    axios
      .get(`${API}/api/notes/${id}`)
      .then((res) => {
        setNotes(res.data.payload);
      })
      .catch((e) => console.error(e));
  }, [id,notes]);

  const onInputChange = (event) => {
    console.log(event.target.value,event.target.id);
    setNotes({
      ...notes,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (notes.textnotes.trim() === '') {
      setError('Notes cannot be empty.');
      return;
    }

    const postData = {
      note_title: notes.note_title,
      textnotes: editorData.replace(/(<([^>]+)>)/gi, ''),
      users_id: notes.users_id, // Assuming user holds the user ID
      // date_created: moment().format('MMM Do YY'),
    };
    // httpService==
console.log('postData', postData);
    axios
      .put(`${API}/api/notes/${id}`, postData)
      .then((res) => {
        navigate(`/notes`);
      })
      .catch((c) => console.warn('catch', c));
  };

  return (
    <div className='rounded-md  py-4 px-6 text-black lg:w-2/5 md:w-3/5 w-4/5'>
      <form onSubmit={handleSubmit}>
        <div className='pb-4'>
          <label className='py-6' htmlFor='note_title'>
            NoteTitle:{' '}
          </label>
          <input
            className='border-2 border-black-700 outline'
            id='notetitle'
            name='notetitle'
            value={notes.note_title}
            type='text'
            autoComplete='off'
            onChange={onInputChange}
            placeholder='Notetitle'
          />
        </div>

        {/* <div className='pb-4'>
          <label className='py-6' htmlFor='users_id'>
            usersId:{' '}
          </label>
          <input
            className='border-2 border-black-700 outline'
            id='user_id'
            type='text'
            name='user_id'
            value={notes.users_id}
            autoComplete='off'
            onChange={onInputChange}
          />
        </div> */}

        <div className='pb-4'>
          <label className='py-6' htmlFor='textnotes'>
            Textnote:{' '}
          </label>
          <CKEditor
            editor={ClassicEditor}
            data={notes.textnotes}
            className='w-full bg-sidebar text-sm'
            onReady={(editor) => {
              // You can store the "editor" and use when it is needed.
            }}
            onChange={(event, editor) => {
              const data = editor.getData();
              console.log({ event, editor, data });
              setEditorData(data);
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </div>

        <div className='flex justify-center ml-6 space-x-6 '>
          <button className='px-5 py-3 rounded bg-teal-500'>
            <FaPaperPlane />
          </button>

          <Link to={`/notes/${id}`}>
            <button className='px-5 py-3 rounded bg-teal-500'>
              {/* Back</button> */}
              <BiArrowBack />
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UpdateNotes;
