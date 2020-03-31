import React from 'react';
import PostService from '../../services/posts.service';

const PostsPage = () => {
  const postService = new PostService();
  const posts = postService.getAllPosts();
  return <div className="posts-page">Posts</div>
}

export default PostsPage;