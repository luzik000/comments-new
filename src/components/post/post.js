import React from 'react';
import './post.css';

const Post = ({post}) => {
  
  const { title, text, id } = post;
  return (
    <div className="post">
      <div className="post__img">
        <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="img"/>
      </div>
      <div className="post__content">
        <h1 className="post__title">{title}</h1>
        <p className="post__text">post_id: {id}</p>
        <hr/>
        <p className="post__text">{text}</p>
      </div>
    </div>
  );
}

export default Post;

