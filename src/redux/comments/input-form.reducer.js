import { commentsTypes } from "./comments.types";

const initialState = {
  isOpenInput: false
};

const inputFormReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentsTypes.TOGGLE_INPUT:
      return {
        ...state,
        isOpenInput: action.payload
      };

    default:
      return state;
  }
};

export default inputFormReducer; 
