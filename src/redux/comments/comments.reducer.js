import { commentsTypes } from "./comments.types";

const initialState = {
  comments: [],
  loading: true,
  error: false,
  post: {},
  loadingPost: true,
  errorPost: false
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      };

    case commentsTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: false
      };

    case commentsTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        comments: [],
        loading: false,
        error: true
      };

    case commentsTypes.FETCH_POST_ITEM_REQUEST:
      return {
        ...state,
        loadingPost: true,
        errorPost: false
      };

    case commentsTypes.FETCH_POST_ITEM_SUCCESS:
      return {
        ...state,
        post: action.payload,
        loadingPost: false,
        errorPost: false
      };

    case commentsTypes.FETCH_POST_ITEM_FAILURE:
      return {
        ...state,
        post: {},
        loadingPost: false,
        errorPost: true
      };

    default:
      return state;
  }
};

export default commentsReducer;
