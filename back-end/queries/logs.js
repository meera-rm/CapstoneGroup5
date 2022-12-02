const db = require('../db/dbConfig.js');

const getAllLogs = async () => {
  try {
    const allLogs = await db.any('SELECT * FROM logs');
    return allLogs;
  } catch (error) {
    return error;
  }
};

const getALog = async (id) => {
  try {
    const oneLog = await db.one('SELECT * FROM logs WHERE log_id=$1', id);
    return oneLog;
  } catch (error) {
    return error;
  }
};

const createLog = async (log) => {
  try {
    const newLog = await db.one(
      'INSERT INTO logs (reading_inference,reading_minutes,pages_read,date_read,role_name,books_id,students_id ) VALUES($1, $2, $3, $4, $5, $6, $7,$8) RETURNING *',
      [
        log.reading_inference,
        log.reading_minutes,
        log.pages_read,
        log.role_name,
        log.date_read,
        log.books_id,
        log.students_id,
      ]
    );
    return newLog;
  } catch (error) {
    return error;
  }
};

const deleteLog = async (id) => {
  try {
    const deletedLog = await db.one(
      'DELETE FROM logs WHERE log_id = $1 RETURNING *',
      id
    );
    return deletedLog;
  } catch (error) {
    return error;
  }
};

const updateLog = async (id, student) => {
  try {
    const updatedLog = await db.one(
      'UPDATE logs SET reading_inference=$1,reading_minutes=$2,pages_read=$3,role_name=$4,date_read=$5,books_id=$6,students_id=$7  where log_id=$10 RETURNING *',
      [
        log.reading_inference,
        log.reading_minutes,
        log.pages_read,
        log.role_name,
        log.date_read,
        log.books_id,
        log.students_id,
      ]
    );
    return updatedLog;
  } catch (error) {
    return error;
  }
};



module.exports = {
  getAllLogs,
  getALog,
  createLog,
  deleteLog,
  updateLog,
};
