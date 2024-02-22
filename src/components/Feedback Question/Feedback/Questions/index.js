import { AnimatePresence } from "framer-motion";

import Question from "./Question";

import { useGlobalState } from "../Context/GlobalContext";

const Questions = () => {
  const { state } = useGlobalState();
  const currentActiveQuestion = state.questions[state.activeQuestion];

  return (
    <AnimatePresence initial={false}>
      <Question {...currentActiveQuestion} />
    </AnimatePresence>
  );
};

export default Questions;
