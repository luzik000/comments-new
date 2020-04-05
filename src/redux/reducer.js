import { combineReducers } from "redux";

import postsReducer from './posts/posts.reducer';
import commentsReducer from './comments/comments.reducer';
import inputFormReducer from './comments/input-form.reducer';

export default combineReducers({
  postsReducer,
  commentsReducer,
  inputFormReducer
});