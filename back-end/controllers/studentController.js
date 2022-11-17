//controls the routes the way it goes for
const express = require('express');
//access to being able to things like get or set, update or delete
const students = express.Router();
// const commentsController = require('./commentsController');
//import db
const db = require('../db/dbConfig');
//import validation
const {
  getAllStudents,
  getAStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../queries/students');

const { checkPicture } = require('../validations/checkStudents');

//any() coming from the pg promise, first argument is sql command,
//.any can be used when it is returning all or none

//Index
students.get('/', async (req, res) => {
  console.log('get all /');
  try {
    const allStudents = await getAllStudents();
    res.status(200).json({ success: true, payload: allStudents });
  } catch (error) {
    res.status(404).json({ sucess: false, message: 'no Students found' });
  }
  // const allStudents = await getAllStudents();
  // if (allStudents[0]) {
  //   res.status(200).json({
  //     success: true,
  //     payload: allStudents,
  //   });
  // } else {
  //   res.status(500).json({
  //     error: 'server error',
  //   });
  // }
});

// //Show
students.get('/:studentId', async (req, res) => {
  console.log('get one /:id');
  const { studentId } = req.params;
  try {
    const studentFound = await getAStudent(studentId);
    res.status(200).json({ success: true, payload: studentFound });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Cannot find the student with the given id',
    });
  }
  // const student = await getAStudent(studentId);
  // if (student.studentId) {
  //   res.status(200).json({
  //     success: true,
  //     payload: student,
  //   });
  // } else {
  //   res.status(404).json({
  //     success: false,
  //     studentId: studentId,
  //     payload: 'not found',
  //   });
  // }
});

// //CREATE
students.post('/new', checkPicture, async (req, res) => {
  const newStudent = req.body;
  try {
    const addStudent = await createStudent(newStudent);
    res.status(200).json({
      success: true,
      payload: addStudent[0],
    });
  } catch (error) {
    // console.log('Caught in error');
    console.log(error.message);
    res.status(404).json({ success: false, message: 'Student cannot be added' });
  }
});

// //update
students.put('/:studentId', async (req, res) => {
  console.log('Put /:studentId');
  const { studentId } = req.params;
  // const { body } = req;
  // body.name = checkCapitalization(body);
  // req.body.is_healthy = confirmHealth(req.body);
  try {
    const updatedStudent = await updateStudent(req.body, studentId);
    res.status(200).json({ success: true, payload: updatedStudent });
  } catch (error) {
    //console.log(error);
    res
      .status(404)
      .json({ success: false, message: 'Student info cannot be updated' });
  }
  // if (updatedStudent.id) {
  //   res.status(200).json({
  //     success: true,
  //     payload: updatedStudent,
  //   });
  // } else {
  //   res.status(404).json({
  //     success: false,
  //     payload: 'bad request',
  //   });
  // }
});

// //DELETE
students.delete('/:studentId', async (req, res) => {
  console.log('Delete /:studentId', req.body, req.params);
  const { studentId } = req.params;
  try {
    const deletedStudent = await deleteStudent(studentId);
    res.status(200).json({ success: true, payload: deletedStudent });
  } catch (error) {
    res.status(404).json({ success: false, message: 'Student not found' });
  }
  // if (deletedStudent) {
  //   if (deletedStudent.id) {
  //     res.status(200).json({
  //       success: true,
  //       payload: deletedStudent,
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
  //     payload: deletedStudent,
  //   });
  // }
});

//nested reviews route

students.use('/:logId/logs', logsController);

module.exports = students;

