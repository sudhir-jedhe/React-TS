import React from 'react';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="inline-flex items-center mt-3">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-500" checked={checked} onChange={onChange} />
      <span className="ml-2">{label}</span>
    </label>
  );
};

export default Checkbox;
