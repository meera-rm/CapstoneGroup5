import React from 'react';

const Comment = ({ log, comments }) => {
  console.log('From comments', log, comments);
  const commentTitle = comments.filter((comment) => {
    return log.log_id === comment.logs_id;
  });
  return <div>{commentTitle[0]?.teacher_comments}</div>;
};

export default Comment;
