import React, { useReducer } from "react";
import Modal from "react-modal";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import Questions from "./Questions";
import Completion from "./Feedback/completion";

import { GlobalContext } from "./Context/GlobalContext";
import { reducer, initialState } from "../../state/reducer";
import { reset } from "../../state/actions";
import { NOOP } from "../../constants";

const MODAL_STYLES = {
  content: {
    height: "fit-content",
    maxHeight: "500px",
    padding: "30px",
  },
};

const Feedback = ({ onClose, isOpen }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const resetModal = () => {
    // console.log(state);
    onClose();
    dispatch(reset());
  };

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      <Modal
        isOpen={isOpen}
        contentLabel="Feedback Modal"
        onRequestClose={onClose}
        style={MODAL_STYLES}
        closeTimeoutMS={500}
      >
        <AnimatePresence>
          {state.isComplete ? (
            <Completion onClick={resetModal} />
          ) : (
            <Questions />
          )}
        </AnimatePresence>
      </Modal>
    </GlobalContext.Provider>
  );
};

Feedback.propTypes = {
  onClose: NOOP,
  isOpen: PropTypes.bool,
};

Feedback.defaultProps = {
  isOpen: false,
};

export default Feedback;
