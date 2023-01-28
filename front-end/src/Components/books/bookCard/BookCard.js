import React, { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';

import './BookCard.scss';

const BookCard = ({book}) => {
  const {book_id,book_picture,book_title,book_author,isbn_number,publication,reading_level} = book;
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='container'>
       <li key={book.book_title+book.book_id}>
        <article className="card">
      <div className={`card ${expanded ? 'expanded' : ''}`}>
        <img
          src='https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2'
          alt='Card '
          className='card__image'
        />
        <div className='card__text'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <button className='card__toggle' onClick={() => setExpanded(!expanded)}>
        <svg  className={`fa fa-chevron-${expanded ? 'up' : 'down'}`}
            aria-hidden='true' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30">              <path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" />
            </svg>
          {/* <i
            className={`fa fa-chevron-${expanded ? 'up' : 'down'}`}
            aria-hidden='true'
          ></i> */}
        </button>
      </div>
      </article>
       </li>
                        
    </div>

  );
};

export default BookCard;

// const BookCard = () => {
//   const [showText, setShowText] = useState(false);

//   return (
//     <div className='container'>
//     <div className={`card ${showText ? 'expanded' : ''}`}>
//       <img src='https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2' alt="" className={`${showText ? 'hide' : ''}`} />
//       <div className={`text ${showText ? 'show' : ''}`}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//       </div>
//       <button className="chevron-button" onClick={() => setShowText(!showText)}>
//       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30">
//              <path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" />
//            </svg>
//         <i className={`fas fa-chevron-${showText ? 'up' : 'down'}`}></i>
//       </button>
//     </div>
//     </div>
//   );
// };

// export default BookCard;

//  const BookCard = ({book}) =>{

//      const {book_id,book_picture,book_title,book_author,isbn_number,publication,reading_level} = book;

//     console.log(book_id,book_picture)

//   const [showText, setShowText] = useState(false)

//   const toggleText = ()  => {
//     setShowText(!showText)
//   }

//   return(
//       <div className="container"
//             key={book_id + book_title}>
//         <div className='bookCards'>
//           <div className='bookCard'>
//       {/* <!--   <div className='bookCard__image'> --> */}
//       <img className='bookCard__image' src='https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2' alt=''/>

//       <div className='bookCard__info'>
//         <div className='bookCard__content ' >
//           <h2 className='bookCard__title'>{`${book_title}`}</h2>
//           <h3 className='bookCard__level'>{`${reading_level}`}</h3>

//           <div className='bookCard__details'>
//             <div className='bookCard-author'> Book Author:{`${book_author}`}</div>
//             <div>Id:{`${book_id}`} </div>
//             <div>ISBN :{`${isbn_number}`}</div>
//             <div> Publication:{`${publication}`} </div>
//           </div>
//         </div>

//         <div className="bookCard__toggleText">
//            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30">
//             <path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" />
//            </svg>
//         </div>
//     </div>
//     </div>
//     </div>
//     </div>

//   );
// }
// export default BookCard;

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

//   const [expanded, setExpanded] = useState(false);

//   return (
//     <div className='container'>
//       <div className='bookCards'>
//         <div
//           className={`bookCard ${expanded ? 'expanded' : ''}`}
//           onClick={() => setExpanded(!expanded)}
//         >
//           <img
//             className='bookCard__image'
//             src='https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2'
//             alt='book cover'
//           />
//           <div className='bookCard__info'>
//             <div className='bookCard__content'>
//               {/* <h3 className='bookCard__title'>The Night Owl</h3>
//               <h4 className='bookCard__level'>B</h4> */}
//               {/* <div className='bookCard__details'>
//                 <div className='bookCard__author'> Book Author:Cindyward</div>
//                 <div>Id:123 </div>
//                 <div>ISBN :kb123poq</div>
//                 <div> Publication:Cindyward publications </div>
//               </div> */}
//             </div>
//           </div>

//           <div class="bookCard__chevron">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30">
//           <path d="M5 30L50 5l45 25" fill="none" stroke="#000" stroke-width="5" />
//         </svg>
//       </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookCard;

// // https://codepen.io/Spruce_khalifa/pen/NWyBKxb(countries api)
// // <!--  Load more button   https://adebola-niran.medium.com/how-to-build-a-load-more-button-in-react-d928822b38a7 -->
// //https://codepen.io/vanderzak/pen/zYxXzmd
