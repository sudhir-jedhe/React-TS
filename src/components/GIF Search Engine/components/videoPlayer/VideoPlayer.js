import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  FaSearchPlus,
  FaPlay,
  FaPause,
  FaDownload,
  FaSpinner,
} from "react-icons/fa";

import "./videoPlayer.css";

const controls = [
  {
    id: "m",
    label: "Expand",
    icon: ({ isPlaying, contentLoading, ...props }) => (
      <FaSearchPlus {...props} />
    ),
  },
  {
    id: "p",
    label: "Play / Pause",
    icon: ({ isPlaying, contentLoading, ...props }) =>
      contentLoading ? (
        <FaSpinner {...props} title="Loading content..." />
      ) : isPlaying ? (
        <FaPause {...props} />
      ) : (
        <FaPlay {...props} />
      ),
  },
  {
    id: "d",
    label: "Download",
    icon: ({ isPlaying, contentLoading, ...props }) => (
      <FaDownload {...props} />
    ),
  },
];

const VideoControls = ({ handleClick, isPlaying, contentLoading }) => {
  return (
    <Fragment>
      {controls.map((control) =>
        control.icon({
          key: control.id,
          onClick: () => handleClick(control.id),
          onKeyUp: (e) => e.key === "Enter" && handleClick(control.id),
          className: "controlButton",
          title: control.label,
          isPlaying,
          tabIndex: 0,
          contentLoading,
        })
      )}
    </Fragment>
  );
};

const downloadFile = (fileUrl, fileName = "funGif", extension = "gif") => {
  fetch(fileUrl)
    .then((res) => res.blob())
    .then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `${fileName}.${extension}`);

      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    });
};

const VideoPlayer = ({
  images,
  title,
  playerProps,
  keyField = "original",
  zoomContent,
  enableControls = true,
  ...props
}) => {
  const [loading, setLoading] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);

  useEffect(() => {
    setLoading(true);
  }, []);

  const handleClick = (action) => {
    // console.log('button clicked', action);
    switch (action) {
      case "m": {
        zoomContent({
          images,
          title,
          ...props,
        });
        break;
      }
      case "p": {
        if (loading) return;

        if (playing) {
          playerRef.current.pause();
        } else {
          playerRef.current.play();
        }
        setPlaying((prevPlaying) => !prevPlaying);

        break;
      }
      case "d": {
        downloadFile(images?.original?.url, title);
        break;
      }
      default:
        break;
    }
  };

  const data = images[keyField];
  return (
    <div
      className="videoPlayerRoot"
      onMouseEnter={(e) => {
        enableControls && setShowControls(true);
      }}
      onMouseLeave={(e) => {
        enableControls && setShowControls(false);
      }}
    >
      {showControls && (
        <div className="playerControlsRoot">
          <VideoControls
            handleClick={handleClick}
            isPlaying={playing}
            contentLoading={loading}
          />
        </div>
      )}
      {loading && <div className="videoPlayerLoading">Loading...</div>}
      <video
        src={data.mp4}
        width={data.width}
        height={data.height}
        className="videoPlayer"
        alt={title}
        poster={data.url}
        ref={playerRef}
        onLoadedData={() => setLoading(false)}
        {...playerProps}
      />
    </div>
  );
};

export default VideoPlayer;
