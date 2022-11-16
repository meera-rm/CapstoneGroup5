// const db = require('../db/dbConfig');

// // GET ALL
// const getAllBooks = async () => {
//   try {
//     const allBooks = await db.any('SELECT * FROM books');
//     return allBooks;
//   } catch (error) {
//     return error;
//   }
// };

// // CREATE
// const createBook = async ({
//   book_title,
//   book_author,
//   isbn_number,
//   publication,
//   book_picture,
//   reading_level,
//   ...otherStuff
// }) => {
//   console.log(otherStuff);
//   try {
//     const newBookmark = await db.one(
//       'INSERT INTO books (book_title,book_author,isbn_number,publication,book_picture,reading_level) VALUES($1, $2, $3, $4,$5,$6) RETURNING *',
//       [
//         book_title,
//         book_author,
//         isbn_number,
//         publication,
//         book_picture,
//         reading_level,
//       ]
//     );
//     return newBookmark;
//   } catch (error) {
//     return error;
//   }
// };

// const getSingleBook = async (id) => {
//   try {
//     const singleBook = await db.one('SELECT * FROM books WHERE id=$1', id);
//     return singleBook;
//   } catch (error) {
//     return error;
//   }
// };

// const deleteSingleBook = async (id) => {
//   try {
//     const singleBook = await db.one(
//       'DELETE FROM books WHERE id=$1 RETURNING *',
//       id
//     );
//     return singleBook;
//   } catch (error) {
//     console.log(error.message || error);
//     return error;
//   }
// };

// const updateSingleBook = async (
//   id,
//   {
//     book_title,
//     book_author,
//     isbn_number,
//     publication,
//     book_picture,
//     reading_level,
//     ...otherStuff
//   }
// ) => {
//   console.log(
//     book_title,
//     book_author,
//     isbn_number,
//     publication,
//     book_picture,
//     reading_level
//   );
//   try {
//     const singleBook = await db.one(
//       'UPDATE books SET book_title=$1,book_author=$2, isbn_number=$3, publication=$4 book_picture=$5 reading_level=$6 where id=$7 RETURNING *',
//       [
//         book_title,
//         book_author,
//         isbn_number,
//         publication,
//         book_picture,
//         reading_level,
//       ]
//     );
//     return singleBook;
//   } catch (error) {
//     console.log(error.message || error);
//     return error;
//   }
// };

// module.exports = {
//   getAllBooks,
//   getSingleBook,
//   createBook,
//   updateSingleBook,
//   deleteSingleBook,
// };

const db = require('../db/dbConfig.js');

const getAllBooks = async () => {
  try {
    const allBooks = await db.any('SELECT * FROM books');
    return allBooks;
  } catch (error) {
    return error;
  }
};

const getABook = async (bookId) => {
  try {
    const book = await db.one('SELECT * FROM books WHERE book_id=$1', bookId);
    return book;
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `Cannot find the book with the given id"`,
    });
    // return error;
  }
};

const createBook = async (book) => {
  let {
    book_title,
    book_author,
    isbn_number,
    publication,
    book_picture,
    reading_level,
  } = book;

  try {
    return await db.any(
      'INSERT INTO books (book_title, book_author, isbn_number, publication, book_picture,reading_level) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        book_title,
        book_author,
        isbn_number,
        publication,
        book_picture,
        reading_level,
      ]
    );
  } catch (error) {
    console.log(error.message);
    // throw new Error(error.message);
    res.status(404).json({ success: false, message: 'Book cannot be added' });
  }
};

const updateBook = async (book, bookId) => {
  let {
    book_title,
    book_author,
    isbn_number,
    publication,
    book_picture,
    reading_level,
  } = book;
  try {
    return await db.one(
      'UPDATE books SET book_title=$1, book_author=$2, isbn_number=$3, publication=$4, book_picture=$5,reading_level=$6 where book_id=$7 RETURNING *',
      [
        book_title,
        book_author,
        isbn_number,
        publication,
        book_picture,
        reading_level,
        bookId,
      ]
    );
  } catch (error) {
    //console.log(error.message || error);
    // return error;
    res
      .status(404)
      .json({ success: false, message: 'Book Info cannot be edited' });
  }
};

const deleteBook = async (bookId) => {
  try {
    return await db.one(
      'DELETE FROM books WHERE book_id=$1 RETURNING *',
      bookId
    );
  } catch (error) {
    console.log(error.message || error);
    return error;
  }
};

module.exports = {
  getAllBooks,
  getABook,
  createBook,
  updateBook,
  deleteBook,
};
