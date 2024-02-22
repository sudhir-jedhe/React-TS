import React from "react";
import "./tab.css";

const Tab = ({ id, label, isActive, handleTabChange }) => {
  return (
    <button
      className={`tabRoot ${isActive ? " activeTab" : ""}`}
      onClick={() => handleTabChange(id)}
    >
      {label}
    </button>
  );
};

export default Tab;
