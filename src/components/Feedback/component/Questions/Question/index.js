import { motion } from "framer-motion";

import Rating from "./Rating";
import Selection from "./Selection";
import RequiredTag from "./requiredTag";

const Question = ({ id, title, required, type, config, options }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={id}
      className="question"
    >
      <div className="id">Question {id}</div>
      <div className="title">
        {title}
        <RequiredTag show={required} />
      </div>
      {type === "rating" ? (
        <Rating questionId={id} config={config} />
      ) : (
        <Selection questionId={id} options={options} />
      )}
    </motion.div>
  );
};

export default Question;
