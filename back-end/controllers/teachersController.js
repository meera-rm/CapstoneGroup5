const express = require('express');

const teachers = express.Router();

const db = require('../db/dbConfig');

const studentController = require('./studentController');
teachers.use('/:teacherId/students', studentController);

const {
  allTeachers,
  oneTeacher,
  deleteTeacher,
  createTeacher,
  upDateTeacher,
} = require('../queries/teachers.js');

// get all teachers
teachers.get('/', async (req, res) => {
  const getAllTeachers = await allTeachers();
  if (getAllTeachers) {
    res.status(200).json({
      success: true,
      payload: getAllTeachers,
    });
  } else {
    res.status(404).send('There are no teachers.');
  }
});

// get single teacher
teachers.get('/:id', async (req, res) => {
  const { id } = req.params;
  const singleTeacher = await oneTeacher(id);
  if (singleTeacher) {
    res.status(200).json({
      success: true,
      payload: singleTeacher,
    });
  } else {
    res.status(404).send('This particular teacher cannot be found.');
  }
});

// creating a teacher (new)
teachers.post('/new', async (req, res) => {
  const creating = await createTeacher(req.body);
  if (creating) {
    res.status(200).json({
      sucess: true,
      payload: {
        teacher_name: creating.teacher_name,
        school_name: creating.school_name,
        school_district: creating.school_district,
        school_address: creating.school_address,
        zipcode: creating.zipcode,
        state_name: creating.state_name,
        class_subject: creating.class_subject,
      },
    });
  } else {
    res.status(500).json({ error: 'Teacher account creation error!' });
  }
});

// update teacher
teachers.put('/:id/edit', async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const upDating = await upDateTeacher(id, body);
  if (upDating.id) {
    res.status(200).json({
      sucess: true,
      payload: {
        id: upDating.id,
        teacher_name: upDating.teacher_name,
        school_name: upDating.school_name,
        school_district: upDating.school_district,
        school_address: upDating.school_address,
        zipcode: upDating.zipcode,
        state_name: upDating.state_name,
        class_subject: upDating.class_subject,
      },
    });
  } else {
    res.status(500).json({ error: 'Teacher update fail!' });
  }
});

// deleting a teacher
teachers.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const deleting = await deleteTeacher(id);
  if (deleting.id) {
    res.status(200).json({ success: true, payload: deleting });
  } else {
    res.status(404).json({ success: false, payload: { id: undefined } });
  }
});

module.exports = teachers;
