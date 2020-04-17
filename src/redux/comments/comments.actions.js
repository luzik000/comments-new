import { commentsTypes } from './comments.types';
import PostService from '../../services/posts.service';

const postService = new PostService();

const fetchCommentsRequest = () => {
  return {
    type: commentsTypes.FETCH_COMMENTS_REQUEST
  }
}

const fetchCommentsSuccess = (comments) => {
  return {
    type: commentsTypes.FETCH_COMMENTS_SUCCESS,
    payload: comments
  }
}

const fetchCommentsFailure = () => {
  return {
    type: commentsTypes.FETCH_COMMENTS_FAILURE
  }
}

export const fetchComments = (postId) => (dispatch) => {
  dispatch(fetchCommentsRequest());

  postService.getCommentsByPostId(postId)
    .then((data) => dispatch(fetchCommentsSuccess(data)))
    .catch(() => dispatch(fetchCommentsFailure()))
}

const fetchPostItemRequest = () => {
  return {
    type: commentsTypes.FETCH_POST_ITEM_REQUEST
  }
}

const fetchPostItemSuccess = (post) => {
  return {
    type: commentsTypes.FETCH_POST_ITEM_SUCCESS,
    payload: post
  }
}

const fetchPostItemFailure = () => {
  return {
    type: commentsTypes.FETCH_POST_ITEM_FAILURE
  }
}

export const fetchPostItem = (postId) => (dispatch) => {
  dispatch(fetchPostItemRequest());
  
  postService.getPostById(postId)
    .then((data) => dispatch(fetchPostItemSuccess(data)))
    .catch(() => dispatch(fetchPostItemFailure()))
}

export const addNewComment = (comment) => {
  return {
    type: commentsTypes.ADD_NEW_COMMENT,
    payload: comment
  }
}


export const deleteComment = (commentId, comment) => {
  console.log('You try delete comment with ID: ', commentId, comment)
  const updComment = {
    ...comment,
    text: "DELETED"
  }
  postService.updateCurrentComment(commentId, updComment)
  return {
    type: commentsTypes.DELETE_COMMENT,
    payload: commentId
  }
}
