import React from 'react';
import './comment.css';

const Comment = ({comment}) => {
  
  const { title, body, id } = comment;
  return (
    <div className="comment">
      <div className="comment__img">
        <img src={`https://robohash.org/${id}?set=set4&size=100x100`} alt="img"/>
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

