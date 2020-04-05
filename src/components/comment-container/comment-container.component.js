import React from "react";
import { connect } from "react-redux";

import Comment from "../comment/comment";
import { addNewComment } from "../../redux/comments/comments.actions";

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

  return (
    <Comment
      comment={comment}
      subcomments={subcomments}
      addNewComment={(text) => addNewComment(generateNewComment(text))}
    />
  );
};

const mapStateToProps = ({
  inputFormReducer,
  commentsReducer: { maxCommentId }
}) => ({ inputFormReducer, maxCommentId });

const mapDispatchToProps = (dispatch) => {
  return {
    addNewComment: (comment) => dispatch(addNewComment(comment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentContainer);
