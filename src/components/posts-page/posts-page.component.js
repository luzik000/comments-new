import React, { Component } from "react";
import PostService from "../../services/posts.service";
import Post from "../post/post";

const postService = new PostService();

export default class PostsPage extends Component {
  state = {
    posts: [],
    loading: true,
    error: ''
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
      .catch(error =>
        this.setState({
          loading: false,
          error: error
        })
      );
  }

  render() {
    const { posts, loading, error } = this.state;
    if (loading) {
      return <div>Loading........</div>
    }
    if (error) {
      return <div>FATAL ERROR!!!!!!!</div>
    }
    return (
      <div className='posts-page'>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
