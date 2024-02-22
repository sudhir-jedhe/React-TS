import React from "react";

import "./noResult.css";
import { noResultGif } from "../../utils";

const NoResult = ({
  label = "Keep looking for GIFs...",
  src = noResultGif,
  width = "300",
  height = "200",
  alt = "No Results",
  ...props
}) => {
  return (
    <div className="noResultRoot">
      <img
        src={src}
        width={width}
        height={height}
        frameBorder="0"
        className="searchNoResult"
        alt={alt}
        {...props}
      />
      <div className="noResultLabel">{label}</div>
    </div>
  );
};

export default NoResult;
