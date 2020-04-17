import { postsTypes } from "./posts.types";
import PostService from './../../services/posts.service';

const fetchPostsRequest = () => {
  return {
    type: postsTypes.FETCH_POSTS_REQUEST
  }
}

const fetchPostsSuccess = (posts) => {
  return {
    type: postsTypes.FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

const fetchPostsFailure = () => {
  return {
    type: postsTypes.FETCH_POSTS_FAILURE
  }
}

const postService = new PostService();

export const fetchPosts = () => (dispatch) => {
  dispatch(fetchPostsRequest());

  postService.getAllPosts()
    .then((data) => dispatch(fetchPostsSuccess(data)))
    .catch(() => dispatch(fetchPostsFailure()));
}




