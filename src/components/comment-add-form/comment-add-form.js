import React, { useState } from "react";
import Tippy from "@tippyjs/react";


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
        placeholder='Печатайте сюда пожалуйста'
        value={label}
      />
      <Tippy content="Отправить"
        delay={1000}>
        <button type='submit' className='btn btn-outline-primary'>
          Add
        </button>
      </Tippy>
    </form>
  );
};

export default CommentAddForm;
