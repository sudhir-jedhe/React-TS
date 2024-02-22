import PropTypes from "prop-types";
import classnames from "classnames";

import { NOOP } from "../../constants";

const Button = ({ label, classNames, onClick, ...props }) => {
  return (
    <button
      onClick={onClick}
      className={classnames("btn", classNames)}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  classNames: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  label: "",
  classNames: "",
  onClick: NOOP,
};

export default Button;
