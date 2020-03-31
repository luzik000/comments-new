import React from 'react';
import './post.css';

const Post = ({post}) => {
  
  const { title, body } = post
  const postImg = ''
  return (
    <div className="post">
      <div className="post__img">
        <img src={postImg} alt="img"/>
      </div>
      <div className="post__content">
        <h1 className="post__title">{title}</h1>
        <hr/>
        <p className="post__text">{body}</p>
      </div>
    </div>
  );
}

export default Post;

