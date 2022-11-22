const db = require('../db/dbConfig.js');

const getAllStudents = async () => {
  try {
    const allStudents = await db.any('SELECT * FROM students');
    return allStudents;
  } catch (error) {
    return error;
  }
};

const getAStudent = async (id) => {
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

const createStudent = async (student) => {
  try {
    const newStudent = await db.one(
      'INSERT INTO students (student_name,parent_name, parent_email, student_email,academic_year,reading_level,teacher_id ) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [
        student.student_name,
        student.parent_name,
        student.parent_email,
        student.student_email,
        student.academic_year,
        student.reading_level,
        student.teacher_id,
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
      'UPDATE students SET student_name=$1,parent_name=$2,parent_email=$3,student_email=$4,academic_year=$5,reading_level=$6,teacher_id=$7  where student_id=$8 RETURNING *',
      [
        student_name,
        parent_name,
        parent_email,
        student_email,
        academic_year,
        reading_level,
        teacher_id,
        id,
      ]
    );
    return updatedStudent;
  } catch (error) {
    return error;
  }
};

const getStudentLog = async (id, student) => {
  try {
    const studentLog = await db.one(
      'UPDATE logs SET inference=$1,reading_minutes=$2,pages_read=$3,role_name=$4,date_read=$5,book_id=$6,student_id=$7  where log_id=$10 RETURNING *',
      [
        log.inference,
        log.reading_minutes,
        log.pages_read,
        log.role_name,
        log.date_read,
        log.book_id,
        log.student_id,
      ]
    );
    return studentLog;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllStudents,
  getAStudent,
  getStudentLog,
  createStudent,
  deleteStudent,
  updateStudent,
};
