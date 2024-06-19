import React, { useRef, useState } from 'react';
import './VideoPlayer.css';

const VideoPlayer = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [snapshotUrl, setSnapshotUrl] = useState(null);

  const handleMouseMove = (e) => {
    const progressBar = e.target;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left; // Calculate mouse position relative to progress bar
    const percent = x / progressBar.offsetWidth;
    const currentTime = percent * videoRef.current.duration;

    // Set video current time to capture frame
    videoRef.current.currentTime = currentTime;

    // Capture frame and set as snapshot
    captureFrame();
  };

  const captureFrame = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const snapshotUrl = canvas.toDataURL('image/jpeg');
    setSnapshotUrl(snapshotUrl);
  };

  return (
    <div className="video-player">
      <video ref={videoRef} className="video" controls>
        <source src="your-video-source.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="progress-bar" onMouseMove={handleMouseMove}>
        {/* Progress bar indicator */}
        <div className="progress-indicator" style={{ width: '50%' }}></div>
      </div>
      {snapshotUrl && (
        <div className="snapshot">
          <img src={snapshotUrl} alt="Snapshot" />
        </div>
      )}
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default VideoPlayer;
