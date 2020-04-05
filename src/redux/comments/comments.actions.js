import { commentsTypes } from './comments.types';

export const fetchCommentsRequest = () => {
  return {
    type: commentsTypes.FETCH_COMMENTS_REQUEST
  }
}

export const fetchCommentsSuccess = (comments) => {
  return {
    type: commentsTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments
  }
}

export const fetchCommentsFailure = () => {
  return {
    type: commentsTypes.FETCH_COMMENTS_FAILURE
  }
}

export const fetchPostItemRequest = () => {
  return {
    type: commentsTypes.FETCH_POST_ITEM_REQUEST
  }
}

export const fetchPostItemSuccess = (post) => {
  return {
    type: commentsTypes.FETCH_POST_ITEM_SUCCESS,
    payload: post
  }
}

export const fetchPostItemFailure = () => {
  return {
    type: commentsTypes.FETCH_POST_ITEM_FAILURE
  }
}

export const addNewComment = (comment) => {
  return {
    type: commentsTypes.ADD_NEW_COMMENT,
    payload: comment
  }
}
