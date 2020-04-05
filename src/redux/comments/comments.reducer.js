import { commentsTypes } from "./comments.types";

const initialState = {
  comments: [],
  loading: true,
  error: false,
  post: {},
  loadingPost: true,
  errorPost: false,
  maxCommentId: null
};

const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false,
        maxCommentId: null
      };

    case commentsTypes.FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        loading: false,
        error: false,
        maxCommentId: action.payload.length
      };

    case commentsTypes.FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        comments: [],
        loading: false,
        error: true,
        maxCommentId: null
      };

    case commentsTypes.FETCH_POST_ITEM_REQUEST:
      return {
        ...state,
        loadingPost: true,
        errorPost: false,
      };

    case commentsTypes.FETCH_POST_ITEM_SUCCESS:
      return {
        ...state,
        post: action.payload,
        loadingPost: false,
        errorPost: false,
      };

    case commentsTypes.FETCH_POST_ITEM_FAILURE:
      return {
        ...state,
        post: {},
        loadingPost: false,
        errorPost: true,
      };

    case commentsTypes.ADD_NEW_COMMENT:
      // console.log("commentsReducer -> state.comments", state.comments)
      // console.log("commentsReducer -> action.payload", action.payload)
      // console.log("commentsReducer -> [...state.comments, action.payload]", [...state.comments, action.payload])
      
      return {
        ...state,
        comments: [...state.comments, action.payload],
        maxCommentId: state.maxCommentId + 1,
      };

    default:
      return state;
  }
};

export default commentsReducer;
