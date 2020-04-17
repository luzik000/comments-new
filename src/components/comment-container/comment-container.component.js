import React from "react";
import { connect } from "react-redux";

import Comment from "../comment/comment";
import { addNewComment, deleteComment } from "../../redux/comments/comments.actions";
import PostService from './../../services/posts.service';

const postService = new PostService();

const CommentContainer = ({
  comment,
  subcomments,
  addNewComment,
  deleteComment,
  maxCommentId,
}) => {
  const { postId, id } = comment;

  const generateNewComment = (text) => {
    
    return {
      id: `${postId}-${maxCommentId + 1}`,
      postId,
      commentId: id,
      text,
    };
  };

  const addNewCommentToJSON = async (text) => {
    const newComment = generateNewComment(text);
    postService.postNewComment(newComment)
      .then(() => addNewComment(newComment))
      .catch(() => alert("SERVER ERROR"));
  }

  return (
    <Comment
      comment={comment}
      subcomments={subcomments}
      addNewComment={addNewCommentToJSON}
      deleteComment={() => deleteComment(id,comment)}
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
    deleteComment: (commentId,comment) => dispatch(deleteComment(commentId,comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
