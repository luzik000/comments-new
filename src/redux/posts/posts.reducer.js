import { postsTypes } from "./posts.types";

const postsReducer = (state, action) => {
  if (state === undefined) {
    return {
      posts: [],
      loading: true,
      error: false
    };
  }

  switch (action.type) {
    case postsTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };
    case postsTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false
      };
    case postsTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        posts: [],
        loading: false,
        error: true
      };

    default:
      return state;
  }
};

export default postsReducer;