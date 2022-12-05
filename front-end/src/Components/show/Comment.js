import React from 'react';

 const Comment = ({ log, comments }) => {
    console.log('From Log', log, comments);
    const commentTitle = comments.filter((comment) => {
      return log.log_id === comment.logs_id;
    })[0].teacher_comments;
    return (
    <div>
        {commentTitle}
        </div>
    );
  };

  export default Comment;