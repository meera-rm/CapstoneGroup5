\c reading_log

DROP TABLE IF EXISTS books;
CREATE TABLE books(
    book_id SERIAL PRIMARY KEY,
    book_title TEXT NOT NULL,
    book_author TEXT NOT NULL,
    isbn_number TEXT NOT NULL,
    publication TEXT,
    book_picture TEXT,
    reading_level TEXT NOT NULL
)
  

-- --create the comments table
-- DROP TABLE IF EXISTS comments;
-- CREATE TABLE comments(
--     comment_id SERIAL PRIMARY KEY,
--     commentor TEXT,
--     content TEXT,
--     teachers_id INTEGER REFERENCES student(student_id)
--     ON DELETE CASCADE
-- );