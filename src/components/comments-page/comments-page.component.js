import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import "./comments-page.component.css";

import PostService from "../../services/posts.service";
import Post from "../post/post";
import CommentContainer from "../comment-container/comment-container.component";
import Spinner from "./../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

import {
  fetchCommentsRequest,
  fetchCommentsSuccess,
  fetchCommentsFailure,
  fetchPostItemRequest,
  fetchPostItemSuccess,
  fetchPostItemFailure
} from "../../redux/comments/comments.actions";

const postService = new PostService();

class CommentsPage extends Component {

  componentDidMount() {

    const { postId } = this.props.match.params;
    const {
      fetchCommentsRequest,
      fetchCommentsSuccess,
      fetchCommentsFailure,
      fetchPostItemRequest,
      fetchPostItemSuccess,
      fetchPostItemFailure
    } = this.props;

    fetchPostItemRequest();
    fetchCommentsRequest();

    postService
      .getPostById(postId)
      .then(data => fetchPostItemSuccess(data))
      .catch(() => fetchPostItemFailure());

    postService
      .getCommentsByPostId(postId)
      .then(data => fetchCommentsSuccess(data))
      .catch(() => fetchCommentsFailure());
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
    
    // console.log("CommentsPage -> render -> comments", comments)

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
    fetchCommentsRequest: () => dispatch(fetchCommentsRequest()),
    fetchCommentsSuccess: comments => dispatch(fetchCommentsSuccess(comments)),
    fetchCommentsFailure: () => dispatch(fetchCommentsFailure()),
    fetchPostItemRequest: () => dispatch(fetchPostItemRequest()),
    fetchPostItemSuccess: post => dispatch(fetchPostItemSuccess(post)),
    fetchPostItemFailure: () => dispatch(fetchPostItemFailure())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsPage);
