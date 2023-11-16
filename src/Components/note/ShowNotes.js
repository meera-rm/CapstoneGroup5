import {React ,useState ,useEffect } from 'react'
import {Link   , useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
// import httpService from '../httpService';
import { AiFillDelete } from 'react-icons/ai';
import { BsPencilSquare } from 'react-icons/bs';
import { BiArrowBack } from 'react-icons/bi';
import ReactHtmlParser from 'html-react-parser';
import DOMPurify from 'dompurify';

const API = process.env.REACT_APP_API_URL;

const ShowNotes = () =>{

  const [note, setNote] = useState('')
    let navigate = useNavigate();

    let { id } = useParams();

    useEffect(() => {
      // httpService
      axios.get(`${API}/api/notes/${id}`)
        .then((response) => {
          console.log('response=',response.data.payload)
          setNote(response.data.payload);
        })
        .catch(() => navigate('/not-found'));
    }, [id, navigate, note]);

  //Delete functions
  const handleDelete = () => {
    axios
      .delete(`${API}/api/notes/${id}`)
      .then(() => {
        navigate('/notes');
      })
      .catch((e) => console.error(e));
  };


  return(
    <div >
      
         <div className='  text-black shadow-2xl bg-white-500 w-8/12 mt-10 m-auto p-1 text-center h-32 ' key={note.note_id}>
   
           <div className='text-black p-10'>
             <div className='flex align-content justify-center w-30'>
                <div style={{ fontSize: "20px" }} className='grow text-left  '>Title </div> 
                <div style={{ fontSize: "20px" }}  className='text-right   w-30'>Date:  </div>
             </div>
             <div className='pt-2  border-b border-sidebar'></div>
             <div className='flex justify-evenly align-content  '>
                <div style={{ fontSize: "15px" }}  className='w-40 grow text-left'> {note?.note_title}</div> 
                <div style={{ fontSize: "15px" }} className='text-right  '> 
                {note?.created_at}</div>
             </div>
             <div className='pt-2  border-b border-sidebar'></div>
           </div>
          
           {/* <div>{ele.users_id}</div> */}
             <div className=' overflow-hidden whitespace-nowrap truncate p-4 break-words '>
             {ReactHtmlParser(DOMPurify.sanitize(note.textnotes))}
             </div>
             
            
        </div>
        
    
        
        <div className=' mt-10 flex justify-center ml-6 space-x-6'>
          <div className='bg-teal-500 px-6 py-4 rounded text-white'>
            {' '}
            <Link to={`/notes`}>
              {/* <button className='show-btns'>Back </button> */}
              <BiArrowBack  className='cursor-pointer' />
            </Link>
          </div>
          <div className='bg-teal-500 px-6 py-4 text-white rounded '>
            {' '}
            <Link to={`/notes/${id}/edit`}>
              {/* <button className='show-btns'>Edit </button> */}
              <BsPencilSquare  className='cursor-pointer' />
            </Link>
          </div>
          <div className='bg-teal-500 px-6 py-4 text-white rounded '>
            {' '}
            <Link to={'/notes'}>
            <AiFillDelete className='cursor-pointer' onClick={handleDelete} />
              {/* <button className='show-btns' onClick={handleDelete}>Delete
              </button> */}
            </Link>
          </div>
        </div>
    </div>
  )
}

export default ShowNotes;