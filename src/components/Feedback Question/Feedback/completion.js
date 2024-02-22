import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Completion = ({ onClick }) => {
  return (
    <motion.div
      className="completion"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span role="img">🙌</span>
      <h3>Thank you for the feedback!</h3>
      <button className="btn" onClick={onClick}>
        Close
      </button>
    </motion.div>
  );
};

Completion.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Completion;
