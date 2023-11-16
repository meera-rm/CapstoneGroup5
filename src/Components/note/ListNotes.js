import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import httpService from '../httpService';
import ReactHtmlParser from 'html-react-parser';
import DOMPurify from 'dompurify';

const ListNotes = ({ note }) => {
  console.log(note);
  const maxLength = 100;

  const [truncatedText, setTruncatedText] = useState(() => {
    return note.map((item) => ({
      note_id: item.note_id,
      textnotes:
        item.textnotes.substring(0, maxLength) +
        (item.textnotes.length > maxLength ? '...' : ''),
    }));
  });

  return (
    <div className='grid grid-cols-1 gap-20  md:grid-cols-2 '>
      {note?.length === 0 && (
        <div>
          <p>You have no notes</p>
        </div>
      )}
      {/* 
        {
          note?.map((note) => (
            <Link to={`/notes/${note.id}`} className='relative todo-weekly rounded-lg shadow-md' key={note.id}>
              <p style={{ fontSize: "10px" }} className='text-right px-2'>
                {note.dateCreated}
              </p>
              <div className='pt-2 border-b border-sidebar'></div>

              {note.textnotes.length >= 257 ? <div
                style={{ wordWrap: "break-word" }} className='p-2 text-xs'
                dangerouslySetInnerHTML={{ __html: note.notes.substring(0, 257) + " . . ." }}
              /> : <div
                style={{ wordWrap: "break-word" }} className='p-2 text-xs'
                dangerouslySetInnerHTML={{ __html: note.notes }}
              />}

              <div>

              </div>
            </Link>
          ))
        }   */}

      {note?.map((ele) => {
        return (
          <div className='shadow-2xl bg-teal-500 w-10/12 h-32 p-5' key={ele.note_id}>
            <Link
              className='text-center'
              to={`/notes/` + ele.note_id}
              key={ele.note_id}
            >
              <div className=' text-black '>
                <div className='flex align-content '>
                <div style={{ fontSize: '20px' }} className='grow text-left'>
                    id{' '}
                  </div>
                  <div style={{ fontSize: '20px' }} className='grow text-left'>
                    Title{' '}
                  </div>
                  <div style={{ fontSize: '20px' }} className='text-right '>
                    Date:{' '}
                  </div>
                </div>

                <div className='pt-2  border-b border-sidebar'></div>
                <div className='flex justify-evenly align-content  '>
                <div
                    style={{ fontSize: '15px' }}
                    className='w-10 grow text-left'
                  >
                    {' '}
                    {ele.note_id}
                  </div>
                  <div
                    style={{ fontSize: '15px' }}
                    className='w-60 grow text-center'
                  >
                    {' '}
                    {ele.note_title}
                  </div>
                  <div style={{ fontSize: '15px' }} className='text-right '>
                    {' '}
                    {ele.created_at.split('T')[0]}
                  </div>
                </div>
                <div className='pt-2  border-b border-sidebar'></div>
              </div>

              {/* <div>{ele.users_id}</div> */}
              <div className='overflow-hidden whitespace-nowrap truncate p-4 break-words '>
                {ele.textnotes}
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListNotes;

//css for the above code
// .App {
//   text-align: center;
//   margin: 2rem;
// }

// .text-container {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
//   max-width: 300px; /* Adjust as needed */
// }

// .toggle-button {
//   background: none;
//   border: none;
//   color: #007bff;
//   cursor: pointer;
// }

//   const note= [
//     {
//       id: 1,
//       text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec...',
//     },
//     {
//       id: 2,
//       text: 'This is another example text that should be truncated if it exceeds a certain length.',
//     },
//     {
//       id: 3,
//       text: 'Short text',
//     },
//   ];

//   const maxLength = 100;

//   const [truncatedText, setTruncatedText] = useState(() => {
//     return note.map((item) => ({
//       id: item.note_id,
//       text: item.textnotes.substring(0, maxLength) + (item.textnotes.length > maxLength ? '...' : ''),
//     }));
//   });

//   const handleToggleText = (id) => {
//     const updatedTruncatedText = [...truncatedText];
//     const index = textArray.findIndex((item) => item.id === id);

//     if (truncatedText[index].text !== textArray[index].text) {
//       updatedTruncatedText[index] = {
//         id: id,
//         text: textArray[index].text.substring(0, maxLength) + '...',
//       };
//     } else {
//       updatedTruncatedText[index] = {
//         id: id,
//         text: textArray[index].text.substring(0, maxLength) + (textArray[index].text.length > maxLength ? '...' : ''),
//       };
//     }
//     setTruncatedText(updatedTruncatedText);
//   };

//   return (
//     <div className="App">
//       {textArray.map((item) => (
//         <div key={item.id} className="text-container">
//           {truncatedText.find((truncatedItem) => truncatedItem.id === item.id).text}
//           {item.text.length > maxLength && (
//             <button className="toggle-button" onClick={() => handleToggleText(item.id)}>
//               {truncatedText.find((truncatedItem) => truncatedItem.id === item.id).text !== item.text ? 'Show Less' : 'Show More'}
//             </button>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
