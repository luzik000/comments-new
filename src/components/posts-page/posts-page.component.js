import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./posts-page.component.css";

import PostService from "../../services/posts.service";
import Post from "../post/post";
import Spinner from "./../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
} from "../../redux/posts/posts.actions";

const postService = new PostService();

class PostsPage extends Component {
  componentDidMount() {
    const {
      fetchPostsRequest,
      fetchPostsSuccess,
      fetchPostsFailure,
    } = this.props;

    fetchPostsRequest();

    postService
      .getAllPosts()
      .then((data) => fetchPostsSuccess(data))
      .catch(() => fetchPostsFailure());
  }

  render() {
    const { posts, loading, error } = this.props;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`post/${post.id}`}>
              <Post post={post} />
            </Link>
          </li>
        ))}
      </ul>
    );

    return (
      <div className='posts-page'>
        {spinner}
        {errorMessage}
        {content}
      </div>
    );
  }
}

const mapStateToProps = ({ postsReducer }) => {
  return postsReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsRequest: () => dispatch(fetchPostsRequest()),
    fetchPostsSuccess: (posts) => dispatch(fetchPostsSuccess(posts)),
    fetchPostsFailure: () => dispatch(fetchPostsFailure()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
