import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./comments-page.component.css";

import Post from "../post/post";
import CommentContainer from "../comment-container/comment-container.component";
import Spinner from "./../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import {
  fetchComments,
  fetchPostItem
} from "../../redux/comments/comments.actions";

class CommentsPage extends Component {

  componentDidMount() {

    const { postId } = this.props.match.params;
    const {
      fetchComments,
      fetchPostItem
    } = this.props;

    fetchPostItem(postId);
    fetchComments(postId);
  }

  render() {

    const {
      comments,
      loading,
      error,
      post,
      loadingPost,
      errorPost
    } = this.props;

    const spinner = loading && loadingPost ? <Spinner /> : null;
    const errorMessage = error || errorPost ? <ErrorIndicator /> : null;
    
    const filteredComments = comments.filter(comment => comment.commentId === null);
    const subcomments = comments.filter(comment => comment.commentId !== null);

    const content = (
      <Fragment>
        <Post post={post} />
        <ul>
          {filteredComments.map(comment => (
            <li key={comment.id}>
              <CommentContainer comment={comment} subcomments={subcomments}/>
            </li>
          ))}
        </ul>
      </Fragment>
    );

    return (
      <div className='comments-page'>
        {spinner}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const mapStateToProps = ({commentsReducer}) => (commentsReducer);

const mapDispatchToProps = dispatch => {
  return {
    fetchComments: (comments) => dispatch(fetchComments(comments)),
    fetchPostItem: (post) => dispatch(fetchPostItem(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
