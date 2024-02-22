import { QUESTIONS, ACTIONS } from "../constants";

export const initialState = {
  questions: QUESTIONS,
  activeQuestion: 0,
  userAnswers: {},
  isComplete: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.NEXT_QUESTION: {
      const { activeQuestion } = state;

      if (activeQuestion < state.questions.length - 1) {
        return {
          ...state,
          activeQuestion: activeQuestion + 1,
        };
      }

      return {
        ...state,
        activeQuestion: null,
        isComplete: false,
      };
    }

    case ACTIONS.RESET_STATE: {
      return initialState;
    }

    case ACTIONS.STORE_ANSWER: {
      const { userAnswers, activeQuestion } = state;

      if (action.payload.questionId === 3) {
        return {
          ...state,
          activeQuestion: activeQuestion + 1,
          userAnswers: {
            ...userAnswers,
            [action.payload.questionId]: action.payload.answer,
          },
          isComplete: true,
        };
      } else if (
        activeQuestion < state.questions.length - 1 &&
        action.payload.questionId !== 3
      ) {
        return {
          ...state,
          activeQuestion: activeQuestion + 1,
          userAnswers: {
            ...userAnswers,
            [action.payload.questionId]: action.payload.answer,
          },
        };
      }
    }

    default:
      return state;
  }
};
