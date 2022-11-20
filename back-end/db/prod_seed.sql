\c reading_log

INSERT INTO books(book_title,book_author,isbn_number,publication,book_picture,reading_level) VALUES ('Night Owl',' Kim .C. Lee','978-0-578-71269-7','Kimberly Lee','https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2', 'C'),('Cookie"s Week','Cindy Ward','Putnam Juvenile','9780399243267',
'https://m.media-amazon.com/images/I/514iKUH5J2L._SY464_BO1,204,203,200_.jpg','F');


INSERT INTO teachers(teacher_name,school_name,school_district,school_address,zipcode,state_name,class_subject,teaching_grade) VALUES
('Ms.Fundy', 'P.S. 152', '2', '725 East 23rd St',11210, 'NY','Reading',3),
('Ms Perez', 'P.S. 152', '2', '725 East 23rd St', 11210, 'NY','Reading',3),
('Mr.Edmundson','P.S. 315','4', '2310 Glenwood Rd', 11210, 'NY','Reading',3),
('Ms.Blackmond', 'P.S. 075', '13', '735 West End Ave', 10025, 'NY','Reading',3);



INSERT INTO students(student_name,parent_name,parent_email,
    student_email,academic_year,reading_level,teachers_id) VALUES
    ('Celia Edward','Thomas Edward','thomas@gmail.com','celia_edward@nycschools.org','2022-2023','G',1),
    ('Jade Duncan','Christine Duncan','christine@msn.com','jade_duncan@nycschools.org','2022-2023','H',1),
    ('Barry Lioudis','Norma Lioudis','norma@a0l.com','barry_lioudis@nycschools.org','2022-2023','I',1);
    
INSERT INTO logs(reading_inference,reading_minutes,pages_read,role_name,books_id,students_id)VALUES('I loved that the owl was so brave',30,20,'student',2,3);