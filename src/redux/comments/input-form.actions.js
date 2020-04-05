import { commentsTypes } from './comments.types';

export const toggleInput = (isOpenInput) => {
  return {
    type: commentsTypes.TOGGLE_INPUT,
    payload: isOpenInput
  }
}
