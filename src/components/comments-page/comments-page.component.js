import React, { Component, Fragment } from "react";
import PostService from "../../services/posts.service";
import "./comments-page.component.css";
import Post from "../post/post";
import Comment from "../comment/comment";
import Spinner from './../spinner/spinner';
import ErrorIndicator from "../error-indicator/error-indicator";

const postService = new PostService();

export default class CommentsPage extends Component {
  state = {
    post: {},
    comments: [],
    loadingPost: true,
    errorPost: false,
    loading: true,
    error: false
  };

  componentDidMount() {
    const { postId } = this.props.match.params;
    postService
      .getPostById(postId)
      .then(data =>
        this.setState({
          post: data,
          loadingPost: false,
          errorPost: false
        })
      )
      .catch(() =>
        this.setState({
          loadingPost: false,
          errorPost: true
        })
      );
    postService
      .getCommentsByPostId(postId)
      .then(data =>
        this.setState({
          comments: data,
          loading: false,
          error: false
        })
      )
      .catch(() =>
        this.setState({
          loading: false,
          error: true
        })
      );
  }

  render() {
    const {
      post,
      loadingPost,
      errorPost,
      comments,
      loading,
      error
    } = this.state;
      console.log("CommentsPage -> render -> comments", comments)
    const spinner = loading && loadingPost ? <Spinner /> : null;
    const errorMessage = error || errorPost ? <ErrorIndicator /> : null;
    const content = (
      <Fragment>
        <Post post={post} />
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>
              <Comment comment={comment} />
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
