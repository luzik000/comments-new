import React from "react";

import "./post.css";

const Post = ({ post: {title, text, id} }) => {
  // const { title, text, id } = post;
  return (
    <div className='post'>
      <div className='post__img'>
        <img
          src="http://via.placeholder.com/300"
          alt='img'
        />
      </div>
      <div className='post__content'>
        <h1 className='post__title'>{title}</h1>
        <p className='post__text'>post_id: {id}</p>
        <hr />
        <p className='post__text'>{text}</p>
      </div>
    </div>
  );
};

export default Post;
