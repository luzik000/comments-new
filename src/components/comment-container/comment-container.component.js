import React from "react";
import { connect } from "react-redux";

import Comment from "../comment/comment";
import { addNewComment } from "../../redux/comments/comments.actions";
import PostService from './../../services/posts.service';

const postService = new PostService();

const CommentContainer = ({
  comment,
  subcomments,
  addNewComment,
  maxCommentId,
}) => {
  const { postId, id } = comment;

  const generateNewComment = (text) => {
    return {
      id: maxCommentId + 1,
      postId,
      commentId: id,
      text,
    };
  };

  const addNewCommentToJSON = (text) => {
    const newComment = generateNewComment(text);
    postService.postNewComment(newComment)
    

    addNewComment(newComment);

  }

  return (
    <Comment
      comment={comment}
      subcomments={subcomments}
      addNewComment={addNewCommentToJSON}
    />
  );
};

const mapStateToProps = ({
  inputFormReducer,
  commentsReducer: { maxCommentId },
}) => ({ inputFormReducer, maxCommentId });

const mapDispatchToProps = (dispatch) => {
  return {
    addNewComment: (comment) => dispatch(addNewComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
