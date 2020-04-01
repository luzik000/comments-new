import React from "react";
import PostService from "../../services/posts.service";
import "./comments-page.component.css";
import Post from "../post/post";
import Comment from "../comment/comment";

const CommentsPage = ({ postId }) => {
  const postService = new PostService();
  const post = postService.getPostById(postId);
  const comments = postService.getCommentsByPostId(postId);
  return (
    <div className='comments-page'>
      <Post post={post} />
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <Comment comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentsPage;
