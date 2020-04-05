import React, { useState } from "react";

import "./comment-add-form.css";

const CommentAddForm = ({ onCommentAdded }) => {
  const [label, setLabel] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    onCommentAdded(label);
    setLabel("");
  };

  return (
    <form className='comment-add-form d-flex' onSubmit={onSubmit}>
      <input
        type='text'
        className='form-control'
        onChange={(e) => setLabel(e.target.value)}
        placeholder='What needs to comment'
        value={label}
      />
      <button type='submit' className='btn btn-outline-secondary'>
        Add
      </button>
    </form>
  );
};

export default CommentAddForm;
