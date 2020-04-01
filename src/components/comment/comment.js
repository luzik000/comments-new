import React from 'react';
import './comment.css';

const Comment = ({comment}) => {
  
  const { title, body } = comment;
  const postImg = ''
  return (
    <div className="comment">
      <div className="comment__img">
        <img src={commentImg} alt="img"/>
      </div>
      <div className="comment__content">
        <h1 className="comment__title">{title}</h1>
        <hr/>
        <p className="comment__text">{body}</p>
      </div>
    </div>
  );
}

export default Comment;

