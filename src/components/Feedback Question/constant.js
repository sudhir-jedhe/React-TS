export const NOOP = () => {};

export const QUESTIONS = [
  {
    id: 1,
    type: "rating",
    title: "How satisfied are you about using the product?",
    required: true,
    config: {
      min: 1,
      max: 5,
      numbers: true,
    },
  },
  {
    id: 2,
    type: "selection",
    title: "What are your reasons for cancelling the service?",
    required: true,
    options: [
      {
        id: 1,
        label: "Don't need it right now",
      },
      {
        id: 2,
        label: "Wasn't useful to me",
      },
      {
        id: 3,
        label: "Too expensive",
      },
    ],
  },
  {
    id: 3,
    type: "rating",
    title: "How would your rate this product?",
    required: true,
    config: {
      min: 1,
      max: 5,
      emoji: true,
    },
  },
];

export const ACTIONS = {
  STORE_ANSWER: "STORE_ANSWER",
  NEXT_QUESTION: "NEXT_QUESTION",
  RESET_STATE: "RESET_STATE",
};

export const EMOJIS_MAP = {
  1: "😔",
  2: "😟",
  3: "😐",
  4: "🙂",
  5: "😊",
};
