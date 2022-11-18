//controls the routes the way it goes for
const express = require('express');

//access to being able to things like get or set, update or delete
const students = express.Router({ mergeParams: true });

const db = require('../db/dbConfig');

const logController = require('./logController.js');
students.use('/:studentId/logs', logController);

//import validation
const {
  getAllStudents,
  getAStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require('../queries/students');

const { checkPicture } = require('../validations/checkBooks');

//Index
students.get('/', async (req, res) => {
  console.log('get all /');

  const allStudents = await getAllStudents();
  try {
    if (allStudents[0]) {
      res.status(200).json(allStudents);
    } else {
      res.status(200).json([]);
    }
  } catch (error) {
    res.status(404).json({ sucess: false });
  }
});

// //Show
students.get('/:studentId', async (req, res) => {
  console.log('get one /:id');
  const { studentId } = req.params;

  const student = await getAStudent(studentId);

  if (student) {
    res.json(student);
  } else {
    res.status(404).json({ error: 'Student with given id not found' });
  }
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
    // console.log('Caught in error')
    res
      .status(404)
      .json({ success: false, message: 'Student cannot be added' });
  }
});

// //update
students.put('/:studentId', async (req, res) => {
  console.log('Put /:studentId');
  const { studentId } = req.params;

  const updatedStudent = await updateStudent(req.body, studentId);

  if (updatedStudent.id) {
    res.status(200).json({
      success: true,
      payload: updatedStudent,
    });
  } else {
    res.status(404).json({
      success: false,
      payload: 'bad request',
    });
  }
});

// //DELETE
students.delete('/:studentId', async (req, res) => {
  console.log('Delete /:studentId', req.body, req.params);
  const { studentId } = req.params;

  const deletedStudent = await deleteStudent(studentId);

  if (deletedStudent) {
    if (deletedStudent.id) {
      res.status(200).json({
        success: true,
        payload: deletedStudent,
      });
    } else {
      res.status(404).json({
        success: false,
        payload: 'not found',
      });
    }
  } else {
    res.status(500).json({
      success: false,
      payload: deletedStudent,
    });
  }
});

module.exports = students;
