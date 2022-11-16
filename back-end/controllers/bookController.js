//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const books = express.Router();
// const commentsController = require('./commentsController');
//import db
const db = require('../db/dbConfig');
//import validation
const {
  getAllBooks,
  getABook,
  createBook,
  updateBook,
  deleteBook,
} = require('../queries/books');

const { checkPicture } = require('../validations/checkBooks');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//Index
books.get('/', async (req, res) => {
  console.log('get all /');
  try {
    const allBooks = await getAllBooks();
    res.status(200).json({ success: true, payload: allBooks });
  } catch (error) {
    res.status(404).json({ sucess: false, message: 'no Books found' });
  }
  // const allBooks = await getAllBooks();
  // if (allBooks[0]) {
  //   res.status(200).json({
  //     success: true,
  //     payload: allBooks,
  //   });
  // } else {
  //   res.status(500).json({
  //     error: 'server error',
  //   });
  // }
});

// //Show
books.get('/:bookId', async (req, res) => {
  console.log('get one /:id');
  const { bookId } = req.params;
  try {
    const bookFound = await getABook(bookId);
    res.status(200).json({ success: true, payload: bookFound });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Cannot find the book with the given id',
    });
  }
  // const book = await getABook(bookId);
  // if (book.bookId) {
  //   res.status(200).json({
  //     success: true,
  //     payload: book,
  //   });
  // } else {
  //   res.status(404).json({
  //     success: false,
  //     bookId: bookId,
  //     payload: 'not found',
  //   });
  // }
});

// //CREATE
books.post('/new', checkPicture, async (req, res) => {
  const newBook = req.body;
  try {
    const addBook = await createBook(newBook);
    res.status(200).json({
      success: true,
      payload: addBook[0],
    });
  } catch (error) {
    // console.log('Caught in error');
    console.log(error.message);
    res.status(404).json({ success: false, message: 'Book cannot be added' });
  }
});

// //update
books.put('/:bookId', async (req, res) => {
  console.log('Put /:bookId');
  const { bookId } = req.params;
  // const { body } = req;
  // body.name = checkCapitalization(body);
  // req.body.is_healthy = confirmHealth(req.body);
  try {
    const updatedBook = await updateBook(req.body, bookId);
    res.status(200).json({ success: true, payload: updatedBook });
  } catch (error) {
    //console.log(error);
    res
      .status(404)
      .json({ success: false, message: 'Book info cannot be updated' });
  }
  // if (updatedBook.id) {
  //   res.status(200).json({
  //     success: true,
  //     payload: updatedBook,
  //   });
  // } else {
  //   res.status(404).json({
  //     success: false,
  //     payload: 'bad request',
  //   });
  // }
});

// //DELETE
books.delete('/:bookId', async (req, res) => {
  console.log('Delete /:bookId', req.body, req.params);
  const { bookId } = req.params;
  try {
    const deletedBook = await deleteBook(bookId);
    res.status(200).json({ success: true, payload: deletedBook });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Book not found' });
  }
  // if (deletedBook) {
  //   if (deletedBook.id) {
  //     res.status(200).json({
  //       success: true,
  //       payload: deletedBook,
  //     });
  //   } else {
  //     res.status(404).json({
  //       success: false,
  //       payload: 'not found',
  //     });
  //   }
  // } else {
  //   res.status(500).json({
  //     success: false,
  //     payload: deletedBook,
  //   });
  // }
});

//nested reviews route
// books.use("/:teacherId/reviews", commentsController);

module.exports = books;
