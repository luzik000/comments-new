import { combineReducers } from "redux";

import postsReducer from './posts/posts.reducer';
import commentsReducer from './comments/comments.reducer';

export default combineReducers({
  postsReducer,
  commentsReducer
});