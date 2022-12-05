const db = require('../db/dbConfig.js');

const getAllComments = async (commentId) => {
  try {
    const allComments = await db.any(
      'SELECT * FROM comments where logs_id=$1',
      commentId
    );
    return allComments;
  } catch (error) {
    return error;
  }
};

const getComment = async (id) => {
  try {
    const oneComment = await db.one(
      'SELECT * FROM comments WHERE comment_id=$1',
      id
    );
    return oneComment;
  } catch (error) {
    return error;
  }
};

const newComment = async (comment) => {
  try {
    const newComment = await db.one(
      'INSERT INTO comments (teacher_comments, logs_id) VALUES($1, $2 ) RETURNING *',
      [comment.teacher_comments, comment.logs_id]
    );
    return newComment;
  } catch (error) {
    return error;
  }
};

const deleteComment = async (id) => {
  try {
    const deletedComment = await db.one(
      'DELETE FROM comments WHERE comment_id=$1 RETURNING *',
      id
    );
    return deletedComment;
  } catch (error) {
    return error;
  }
};

const updateComment = async (id, comment) => {
  try {
    const updatedComment = await db.one(
      'UPDATE comments SET teacher_comments=$1,log_id=$2 where comment_id=$3 RETURNING *',
      [comment.teacher_comments, comment.logs_id, id]
    );
    return updatedComment;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllComments,
  getComment,
  newComment,
  deleteComment,
  updateComment,
};
