import { ACTIONS } from "../constants";

export const storeAnswer = (payload) => {
  return {
    type: ACTIONS.STORE_ANSWER,
    payload,
  };
};

export const nextQuestion = () => {
  return {
    type: ACTIONS.NEXT_QUESTION,
  };
};

export const reset = () => {
  return {
    type: ACTIONS.RESET_STATE,
  };
};
