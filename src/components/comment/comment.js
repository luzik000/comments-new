import React, { Fragment, useState } from "react";

import "./comment.css";

import CommentContainer from "../comment-container/comment-container.component";
import CommentAddForm from "../comment-add-form/comment-add-form";

const Comment = ({ comment, subcomments, addNewComment }) => {

  const [isOpenInputThis, setIsOpenInputThis] = useState(false);

  const { 
    text, 
    id, 
    postId, 
    commentId 
  } = comment;

  const filteredComments = subcomments.filter(
    (comment) => comment.commentId === id
  );
  const subSubcomments = subcomments.filter(
    (comment) => comment.commentId !== id
  );

  const addNewCommentForm = (text) => {
    addNewComment(text);
    setIsOpenInputThis(isOpenInputThis => !isOpenInputThis);
  };

  const inputRow = isOpenInputThis ? (
    <CommentAddForm onCommentAdded={addNewCommentForm} />
  ) : null;

  return (
    <Fragment>
      <div className='comment'>
        <div className='comment__img'>
          <img
            src={`https://robohash.org/${id}?set=set4&size=100x100`}
            alt='img'
          />
        </div>
        <div className='comment__content'>
          <h6 className='comment__title'>
            Comment ID: {commentId ? commentId : "NULL"} --- Post ID: {postId}{" "}
            --- This ID: {id}
          </h6>
          <hr />
          <p className='comment__text'>{text}</p>
          <div>
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
            <button className='btn btn-danger'>
              <i className='fa fa-times-circle'></i>
            </button>

            {inputRow}
          </div>
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
