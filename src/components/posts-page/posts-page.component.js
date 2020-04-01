import React, { Component } from "react";
import { Link } from "react-router-dom";

import './posts-page.component.css';

import PostService from "../../services/posts.service";
import Post from "../post/post";
import Spinner from "./../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

const postService = new PostService();

export default class PostsPage extends Component {
  state = {
    posts: [],
    loading: true,
    error: false
  };

  componentDidMount() {
    postService
      .getAllPosts()
      .then(data =>
        this.setState({
          posts: data,
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
    const { posts, loading, error } = this.state;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorIndicator /> : null;
    const content = (
      <ul>
        {posts.map(post => (
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
