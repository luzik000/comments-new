import React, { Fragment, useState } from "react";
import Tippy from "@tippyjs/react";


import "./comment.css";
import "tippy.js/dist/tippy.css"

import CommentContainer from "../comment-container/comment-container.component";
import CommentAddForm from "../comment-add-form/comment-add-form";

const Comment = ({ comment, subcomments, addNewComment, deleteComment }) => {
  const [isOpenInputThis, setIsOpenInputThis] = useState(false);

  const { text, id, postId, commentId, deleted } = comment;

  const filteredComments = subcomments.filter(
    (comment) => comment.commentId === id
  );
  const subSubcomments = subcomments.filter(
    (comment) => comment.commentId !== id
  );

  const addNewCommentForm = (text) => {
    addNewComment(text);
    setIsOpenInputThis((isOpenInputThis) => !isOpenInputThis);
  };

  const inputRow = isOpenInputThis ? (
    <CommentAddForm onCommentAdded={addNewCommentForm} />
  ) : null;

  return (
    <Fragment>
      <div className='comment'>
        <div className='comment__content'>
          <h6 className='comment__title'>
            Comment ID: {commentId ? commentId : "NULL"} --- Post ID: {postId}{" "}
            --- This ID: {id}
          </h6>
          <hr />
          <p className='comment__text'>{deleted ? "DELETED" : text}</p>
          <div className="comment__btn-block">
            <Tippy 
            content={ 
              !isOpenInputThis ? "Добавить комментарий" : "Закрыть"
            }
            delay={800}
              >
              <button
                className='btn btn-success'
                onClick={() =>
                  setIsOpenInputThis((isOpenInputThis) => !isOpenInputThis)
                }
              >
                {isOpenInputThis ? (
                  <i className='fa fa-minus'></i>
                ) : (
                  <i className='fa fa-comment'></i>
                )}
              </button>
            </Tippy>
            <Tippy 
              content="Удалить комментарий"
              delay={800}>
              <button 
                disabled={deleted}
                className='btn btn-danger' 
                onClick={() => {
                  deleteComment(id);
                  setIsOpenInputThis(false)
                  }}>
                <i className='fa fa-times-circle'></i>
              </button>
            </Tippy>

            
          </div>
          {inputRow}
        </div>
      </div>
      <ul>
        {subcomments
          ? filteredComments.map((comment) => (
              <li key={comment.id}>
                <CommentContainer
                  comment={comment}
                  subcomments={subSubcomments}
                />
              </li>
            ))
          : null}
      </ul>
    </Fragment>
  );
};

export default Comment;
