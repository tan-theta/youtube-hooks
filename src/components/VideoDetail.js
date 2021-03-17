import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const descriptionStyle = {
    fontSize: "1.1em",
    fontVariant: "small-caps",
  };
  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          title="video-player"
          allowfullscreen="allowfullscreen"
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p style={descriptionStyle}>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
