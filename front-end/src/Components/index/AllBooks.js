import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './AllBooks.css';

const API = process.env.REACT_APP_API_URL;

const AllBooks = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/api/books`)
      //  .then((response) => console.log(response.data))
      .then((response) => setBookData(response.data.payload))
      .catch((e) => console.error('catch', e));
  }, [bookData]);

  return (
    <div className='px-10 py-6 md:col-span-2 '>
      <h2 className='text-center text-indigo-600 '>Books</h2>
      <div className='text-center '>
        <Link to={`/books/new`}>
          <button className=' btn bg-indigo-500 px-4 py-4 rounded text-white hover:bg-indigo-400'>
            Add Books{' '}
          </button>
        </Link>
      </div>
      <div className='mt-14 grid md:grid-cols-3 lg:grid-cols-4 gap-10 lg:gap-16'>
        {/* <div className='max-w-sm rounded overflow-hidden shadow-lg '> */}
        {bookData?.map((book) => {
          return (
            <section
              className='justify-items-center'
              // rounded-sm  hover:shadow-sm'
              key={book.book_id + book.book_name}
            >
              <div>
                <Link
                  className='text-center'
                  to={`/books/` + book.book_id}
                  key={book.book_id}
                >
                  <img
                    className='text-center object-contain h-52 w-72'
                    src={`${book.book_picture}`}
                    alt={book.book_picture}
                  />

                  {/* </div>
               <div> */}
                  <p className='align-middle'>id: {book.book_id}</p>
                  <p className='content-center'>
                    Reading Level: {book.reading_level}
                  </p>
                </Link>
              </div>
            </section>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
};

export default AllBooks;

//Responsive CARd GRID
// https://codepen.io/codetimeio/pen/RYMEJe
// {/* <div class="container my-12 mx-auto px-4 md:px-12">
//     <div class="flex flex-wrap -mx-1 lg:-mx-4">

//         <!-- Column -->
//         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

//             <!-- Article -->
//             <article class="overflow-hidden rounded-lg shadow-lg">

//                 <a href="#">
//                     <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
//                 </a>

//                 <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 class="text-lg">
//                         <a class="no-underline hover:underline text-black" href="#">
//                             Article Title
//                         </a>
//                     </h1>
//                     <p class="text-grey-darker text-sm">
//                         11/1/19
//                     </p>
//                 </header>

//                 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a class="flex items-center no-underline hover:underline text-black" href="#">
//                         <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
//                         <p class="ml-2 text-sm">
//                             Author Name
//                         </p>
//                     </a>
//                     <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span class="hidden">Like</span>
//                         <i class="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>
//             <!-- END Article -->

//         </div>
//         <!-- END Column -->

//         <!-- Column -->
//         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

//             <!-- Article -->
//             <article class="overflow-hidden rounded-lg shadow-lg">

//                 <a href="#">
//                     <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
//                 </a>

//                 <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 class="text-lg">
//                         <a class="no-underline hover:underline text-black" href="#">
//                             Article Title
//                         </a>
//                     </h1>
//                     <p class="text-grey-darker text-sm">
//                         11/1/19
//                     </p>
//                 </header>

//                 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a class="flex items-center no-underline hover:underline text-black" href="#">
//                         <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
//                         <p class="ml-2 text-sm">
//                             Author Name
//                         </p>
//                     </a>
//                     <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span class="hidden">Like</span>
//                         <i class="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>
//             <!-- END Article -->

//         </div>
//         <!-- END Column -->

//         <!-- Column -->
//         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

//             <!-- Article -->
//             <article class="overflow-hidden rounded-lg shadow-lg">

//                 <a href="#">
//                     <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
//                 </a>

//                 <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 class="text-lg">
//                         <a class="no-underline hover:underline text-black" href="#">
//                             Article Title
//                         </a>
//                     </h1>
//                     <p class="text-grey-darker text-sm">
//                         11/1/19
//                     </p>
//                 </header>

//                 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a class="flex items-center no-underline hover:underline text-black" href="#">
//                         <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
//                         <p class="ml-2 text-sm">
//                             Author Name
//                         </p>
//                     </a>
//                     <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span class="hidden">Like</span>
//                         <i class="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>
//             <!-- END Article -->

//         </div>
//         <!-- END Column -->

//         <!-- Column -->
//         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

//             <!-- Article -->
//             <article class="overflow-hidden rounded-lg shadow-lg">

//                 <a href="#">
//                     <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
//                 </a>

//                 <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 class="text-lg">
//                         <a class="no-underline hover:underline text-black" href="#">
//                             Article Title
//                         </a>
//                     </h1>
//                     <p class="text-grey-darker text-sm">
//                         11/1/19
//                     </p>
//                 </header>

//                 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a class="flex items-center no-underline hover:underline text-black" href="#">
//                         <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
//                         <p class="ml-2 text-sm">
//                             Author Name
//                         </p>
//                     </a>
//                     <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span class="hidden">Like</span>
//                         <i class="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>
//             <!-- END Article -->

//         </div>
//         <!-- END Column -->

//         <!-- Column -->
//         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

//             <!-- Article -->
//             <article class="overflow-hidden rounded-lg shadow-lg">

//                 <a href="#">
//                     <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
//                 </a>

//                 <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 class="text-lg">
//                         <a class="no-underline hover:underline text-black" href="#">
//                             Article Title
//                         </a>
//                     </h1>
//                     <p class="text-grey-darker text-sm">
//                         11/1/19
//                     </p>
//                 </header>

//                 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a class="flex items-center no-underline hover:underline text-black" href="#">
//                         <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
//                         <p class="ml-2 text-sm">
//                             Author Name
//                         </p>
//                     </a>
//                     <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span class="hidden">Like</span>
//                         <i class="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>
//             <!-- END Article -->

//         </div>
//         <!-- END Column -->

//         <!-- Column -->
//         <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

//             <!-- Article -->
//             <article class="overflow-hidden rounded-lg shadow-lg">

//                 <a href="#">
//                     <img alt="Placeholder" class="block h-auto w-full" src="https://picsum.photos/600/400/?random">
//                 </a>

//                 <header class="flex items-center justify-between leading-tight p-2 md:p-4">
//                     <h1 class="text-lg">
//                         <a class="no-underline hover:underline text-black" href="#">
//                             Article Title
//                         </a>
//                     </h1>
//                     <p class="text-grey-darker text-sm">
//                         11/1/19
//                     </p>
//                 </header>

//                 <footer class="flex items-center justify-between leading-none p-2 md:p-4">
//                     <a class="flex items-center no-underline hover:underline text-black" href="#">
//                         <img alt="Placeholder" class="block rounded-full" src="https://picsum.photos/32/32/?random">
//                         <p class="ml-2 text-sm">
//                             Author Name
//                         </p>
//                     </a>
//                     <a class="no-underline text-grey-darker hover:text-red-dark" href="#">
//                         <span class="hidden">Like</span>
//                         <i class="fa fa-heart"></i>
//                     </a>
//                 </footer>

//             </article>
//             <!-- END Article -->

//         </div>
//         <!-- END Column -->

//     </div>
// </div> */}

// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// // import './AllBooks.css';
// import Table from 'react-bootstrap/Table';

// const API = process.env.REACT_APP_API_URL;

// const AllBooks = () => {
//   const [bookData, setBookData] = useState([]);

//   useEffect(() => {
//     axios.get(`${API}/api/books`)
//     //  .then((response) => console.log(response.data))
//       .then((response) => setBookData(response.data.payload))
//       .catch((e) => console.error('catch', e));

//   }, [bookData]);

//   return (
//     <div className='Books'>

//       <h2 style={{ textAlign: 'center', margin: '2rem auto' ,color:'green'}}>
//         Books
//       </h2>
//       <div className='list-header'>

//          <Table stripped='true' bordered hover responsive='sm'>
//  <thead>
//    <tr style={{ textAlign: 'center' }}>
//     <th>Id</th>
//      <th>Title</th>
//      <th>Author</th>
//      <th>ISBN</th>
//      <th>Publication</th>
//      <th>Reading Level</th>

//    </tr>
//  </thead>
//  <tbody>

//    {bookData.map((book) => {
//      return (
//        <tr  key={book.book_id}>
//          <td>
//          <Link
//              style={{ color: 'black', textDecoration: 'none' }}
//              to={`/books/${book.book_id}`}
//            >
//            {book.book_id}
//            </Link>
//          </td>
//          <td>
//          <Link
//              style={{ color: 'black', textDecoration: 'none' }}
//              to={`/books/${book.book_id}`}
//            >
//          {book.book_title}
//          </Link>
//          </td>
//             <td>
//            <Link
//              style={{ color: 'black', textDecoration: 'none' }}
//              to={`/books/${book.book_id}`}
//            >
//              {book.book_author}
//            </Link>
//          </td>

//          <td>
//          <Link
//              style={{ color: 'black', textDecoration: 'none' }}
//              to={`/books/${book.book_id}`}
//            >
//              {book.isbn_number}
//              </Link>
//          </td>
//          <td>
//          <Link
//              style={{ color: 'black', textDecoration: 'none' }}
//              to={`/books/${book.book_id}`}
//            >
//              {book.publication}
//              </Link>
//          </td>
//          <td>
//          <Link
//              style={{ color: 'black', textDecoration: 'none' }}
//              to={`/books/${book.book_id}`}
//            >
//              {book.reading_level}
//              </Link>
//          </td>

//        </tr>
//      );
//    })}
//  </tbody>
//  </Table>
//       </div>
//       {/* <ul className='display-list'>{transactionsList}</ul>  */}
//     </div>
//   );
// };

// export default AllBooks;
