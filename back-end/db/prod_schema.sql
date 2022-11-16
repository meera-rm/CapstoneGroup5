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


DROP TABLE IF EXISTS teachers;

CREATE TABLE teachers(
    teacher_id SERIAL PRIMARY KEY,
    teacher_name TEXT NOT NULL,
    school_name TEXT NOT NULL,
    school_district INTEGER,
    school_address TEXT NOT NULL,
    zipcode INTEGER,
    state_name TEXT NOT NULL,
    class_subject TEXT NOT NULL
)

DROP TABLE IF EXISTS students;

CREATE TABLE students(
    student_id SERIAL PRIMARY KEY,
    student_name  TEXT NOT NULL,
    parent_name TEXT NOT NULL,
    parent_email TEXT NOT NULL,
    student_email TEXT NOT NULL,
    academic_year TEXT NOT NULL,
    reading_level TEXT NOT NULL,
    role TEXT  NOT NULL,
    password TEXT NOT NULL,
    id_of_teacher INTEGER REFERENCES teachers(teacher_id)
    ON DELETE CASCADE
);


DROP TABLE IF EXISTS logs;

CREATE TABLE logs(
    log_id  SERIAL PRIMARY KEY, 
    reading_inference TEXT NOT NULL,
    reading_minutes TEXT NOT NULL,
    date_read timestamp DEFAULT CURRENT_TIMESTAMP,
    pages_read INTEGER NOT NULL,
    role TEXT  NOT NULL,
    id_of_book INTEGER REFERENCES books(book_id)
    ON DELETE CASCADE
    id_of_student INTEGER REFERENCES students(student_id)
    ON DELETE CASCADE
    id_of_teacher INTEGER REFERENCES teachers(teacher_id)
    ON DELETE CASCADE
);