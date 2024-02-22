import React, { Fragment } from "react";
import VideoPlayer from "../videoPlayer/videoPlayer";
import { playerProps } from "../../utils";
import "./grid.css";

const Grid = ({
  data,
  zoomContent,
  enablePagination = true,
  handleFetchData,
  isFetching,
  actionButtonLabel = "Load more...",
}) => {
  return (
    <Fragment>
      <div className="gridRoot">
        {data.map((gif) => (
          <VideoPlayer
            key={gif.slug}
            playerProps={playerProps}
            keyField="fixed_width"
            zoomContent={zoomContent}
            {...gif}
          />
        ))}
      </div>
      {enablePagination && (
        <button
          onClick={handleFetchData}
          className="loadMoreBtn"
          disabled={isFetching}
        >
          {`${actionButtonLabel}`}
        </button>
      )}
    </Fragment>
  );
};

export default Grid;
