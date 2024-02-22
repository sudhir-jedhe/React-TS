const RequiredTag = ({ show }) => {
  if (!show) {
    return null;
  }

  return <span className="required">*</span>;
};

export default RequiredTag;
