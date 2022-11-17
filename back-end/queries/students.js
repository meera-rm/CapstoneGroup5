const db = require('../db/dbConfig.js');

const getAllStudents = async (teacher_id) => {
  try {
    const allStudents = await db.any(
      'SELECT * FROM students where id_of_teacher=$1',
      teacher_id
    );
    return allStudents;
  } catch (error) {
    return error;
  }
};

const getStudent = async (id) => {
  try {
    const oneStudent = await db.one(
      'SELECT * FROM students WHERE student_id=$1',
      id
    );
    return oneStudent;
  } catch (error) {
    return error;
  }
};

const newStudent = async (student) => {
  try {
    const newStudent = await db.one(
      'INSERT INTO students (student_name,parent_name, parent_email, student_email, academic_year, reading_level,role,password,id_of_teacher ) VALUES($1, $2, $3, $4, $5, $6, $7,$8,$9) RETURNING *',
      [
        student.student_name,
        student.parent_name,
        student.parent_email,
        student.student_email,
        student.academic_year,
        student.reading_level,
        student,
        role,
        student.password,
        student.id_of_teacher,
      ]
    );
    return newStudent;
  } catch (error) {
    return error;
  }
};

const deleteStudent = async (id) => {
  try {
    const deletedStudent = await db.one(
      'DELETE FROM students WHERE student_id = $1 RETURNING *',
      id
    );
    return deletedStudent;
  } catch (error) {
    return error;
  }
};

const updateStudent = async (id, student) => {
  try {
    const updatedStudent = await db.one(
      'UPDATE students SET student_name=$1,parent_name=$2,parent_email=$3,student_email=$4,academic_year=$5,reading_level=$6,role=$7,password=$8,id_of_teacher  where student_id=$10 RETURNING *',
      [
        student_name,
        parent_name,
        parent_email,
        student_email,
        academic_year,
        reading_level,
        role,
        password,
        id_of_teacher,
        id,
      ]
    );
    return updatedStudent;
  } catch (error) {
    return error;
  }
};
module.exports = {
  getAllStudents,
  getStudent,
  newStudent,
  deleteStudent,
  updateStudent,
};
