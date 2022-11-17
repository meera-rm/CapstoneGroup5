\c reading_log

INSERT INTO books(book_title,book_author,isbn_number,publication,book_picture,reading_level) VALUES ('Night Owl',' Kim .C. Lee','978-0-578-71269-7','Kimberly Lee','https://images-us.bookshop.org/ingram/9780578712697.jpg?height=500&v=v2', 'C'),('Cookies Week','Cindy Ward','9780399243267','Putnam Juvenile','https://images.randomhouse.com/cover/9780698114357', 'F')



INSERT INTO teachers(teacher_id,teacher_name,school_name,school_district,school_address,zipcode,state_name,class_subject) VALUES
('Ms.Fundy', 'P.S. 152', '2', '725 East 23rd St',11210, 'NY'),
('Ms Perez', 'P.S. 152', '2', '725 East 23rd St', 11210, 'NY'),
('Mr.Edmundson','P.S. 315','4', '2310 Glenwood Rd', 11210, 'NY'),
('Ms.Blackmond', 'P.S. 075', '13', '735 West End Ave', 10025, 'NY')




 INSERT INTO students( student_name,parent_name,parent_email,
    student_email , academic_year ,reading_level ,student_password ) VALUES
    ('Celia Edward','Thomas Edward','thomas@gmail.com','celia_edward@nycschools.org','2022-2023','G','afghp345','1'),
    ('Jade Duncan','Christine Duncan','christine@msn.com','jade_duncan@nycschools.org','2022-2023','H','tybl8213','1'),
    ('Barry Lioudis','Norma Lioudis','norma@a0l.com','barry_lioudis@nycschools.org','2022-2023','I','dlspr052','1')
    
 INSERT INTO logs('I loved that the owl was so brave',30,20,'student',
    0, 1,2,)