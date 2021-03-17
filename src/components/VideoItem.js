import React from "react";
import "./videoItem.css";

const VideoItem = ({ video, onSelectVideo }) => {
  return (
    <div onClick={() => onSelectVideo(video)} className="item video-item">
      <img
        className="ui image"
        alt={video.snippet.title}
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header video-title">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
