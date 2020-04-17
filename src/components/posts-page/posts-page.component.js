import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Tippy from "@tippyjs/react";


import "./posts-page.component.css";

import Post from "../post/post";
import Spinner from "./../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";
import { fetchPosts } from "../../redux/posts/posts.actions";

class PostsPage extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props;

    fetchPosts();
  }

  render() {
    const { posts, loading, error } = this.props;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = (
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Tippy content="Открыть" placement="right" delay={1300}>
              <Link to={`post/${post.id}`}>
                <Post post={post} />
              </Link>
            </Tippy>
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
    fetchPosts: (posts) => dispatch(fetchPosts(posts))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsPage);
