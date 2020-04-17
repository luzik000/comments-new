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
      return {
        ...state,
        comments: [...state.comments, action.payload],
        maxCommentId: state.maxCommentId + 1,
      };

    case commentsTypes.DELETE_COMMENT:
      return {
        ...state,
        comments: updateComments(state.comments, action.payload)
      };

    default:
      return state;
  }
};

const updateComments = (comments, commentId = null) => {
  const commentIndex = comments.findIndex((comment) => comment.id === commentId);
  const currentComment = comments.find((comment) => comment.id === commentId)
  const updatedComment = {
    ...currentComment,
    text: "DELETED"
  }
  return [
    ...comments.slice(0, commentIndex), 
    updatedComment,
    ...comments.slice(commentIndex+1, comments.length)
  ]
}

export default commentsReducer;
