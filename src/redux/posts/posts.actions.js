import { postsTypes } from "./posts.types";

export const fetchPostsRequest = () => {
  return {
    type: postsTypes.FETCH_POSTS_REQUEST
  }
}

export const fetchPostsSuccess = (posts) => {
  return {
    type: postsTypes.FETCH_POSTS_SUCCESS,
    payload: posts
  }
}

export const fetchPostsFailure = () => {
  return {
    type: postsTypes.FETCH_POSTS_FAILURE
  }
}




