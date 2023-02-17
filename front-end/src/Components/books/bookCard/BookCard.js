import React, { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

import './BookCard.scss';

const BookCard = ({ book }) => {
  const {
    book_id,
    book_picture,
    book_title,
    book_author,
    isbn_number,
    publication,
    reading_level,
  } = book;

  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='container' >
      <div
        className={`bookCard ${expanded ? 'expanded' : 'bookCard'}`}
        onClick={handleExpand}
      >
        <img
          className='bookCard__image'
          width='150px'
          height='150px'
           src={book_picture}
          // src='https://dummyimage.com/150x150/c2c2c2/00'
          alt=''
        />

        <div
          className={`bookCard__text ${expanded ? 'expanded' : ''}`}
          onClick={handleExpand}
        >
          <div className='bookCard__textcontent'>
            <h2 className='bookCard__title'>{`${book_title.toUpperCase()}`}</h2>
            {/* <h2 className='bookCard__title'>Cookie Week</h2> */}
            <ol className='bookCard__summary'>
            {/* <li className='bookCard__summary-list'>
                Id: <span>{`${book_id}`} </span>
              </li> */}
              <li className='bookCard__summary-list'>
                Reading Level: 
                <span>{`${reading_level}`}
                    </span> 
              </li>
              <li className='bookCard__summary-list'>
                {' '}
                Book Author: 
                <span>{`${book_author}`}
                    </span>
              </li>
             
              <li className='bookCard__summary-list'>
                ISBN : 
                <span>{`${isbn_number}`}</span>
              </li>
              <li className='bookCard__summary-list'>
                {' '}
                Publication: 
                <span>{`${publication}`}</span> 
              </li>
            </ol>
          </div>

          <svg
            className={`bookCard__chevron ${expanded ? 'expanded' : ''}`}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 100 35'
            width='30'
          >
            <path
              d='M5 30L50 5l45 25'
              fill='none'
              stroke='#000'
              stroke-width='5'
            />
          </svg>
        </div>
      </div>
     
    </div>
  );
};
export default BookCard;

// const BookCard = () => {
//   // const {
//   //   book_id,
//   //   book_picture,
//   //   book_title,
//   //   book_author,
//   //   isbn_number,
//   //   publication,
//   //   reading_level,
//   // } = book;

//  const [expanded, setExpanded] = useState(false);

// const handleExpand = () => {
//   setExpanded(!expanded);

//   return (
//     <div className='container'>
//       <div className='bookCards'>
//          <div className={`card ${expanded ? "expanded" : ""}`} onClick={handleExpand}>
//            <img
//              className='bookCard__image'
//              src='https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2'
//             alt='book cover'
//           />
// //           <div className='bookCard__info'>
// //             <div className='bookCard__content'>
// //               {/* <h3 className='bookCard__title'>The Night Owl</h3>
// //               <h4 className='bookCard__level'>B</h4> */}
// //               {/* <div className='bookCard__details'>
// //                 <div className='bookCard__author'> Book Author:Cindyward</div>
// //                 <div>Id:123 </div>
// //                 <div>ISBN :kb123poq</div>
// //                 <div> Publication:Cindyward publications </div>
// //               </div> */}
// //             </div>
// //           </div>

// //           <div class="bookCard__chevron">
// //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30">
// //           <path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" />
// //         </svg>
// //       </div>

// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// export default BookCard;

// // https://codepen.io/Spruce_khalifa/pen/NWyBKxb(countries api)
// // <!--  Load more button   https://adebola-niran.medium.com/how-to-build-a-load-more-button-in-react-d928822b38a7 -->
// //https://codepen.io/vanderzak/pen/zYxXzmd

{
  /* <div class="card" onclick="this.classList.toggle('expanded')">
<img class='image' src='https://dummyimage.com/150x150/c2c2c2/00' alt='books' /> 
   <div class="text1">
    <div class="text-content">
      <h1 class="title">OUR GOODS</h1>
      <div class="body-text">are delivered with the same high quality as decades ago</div>
    </div>
  </div>
   <svg class="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5"/></svg>
</div>  */
}
