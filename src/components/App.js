import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import useVideos from "../hooks/useVideos";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search, searchTerm] = useVideos("Mobile Dev");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const resultsStyles = {
    fontVariant: "small-caps",
    color: "#fff",
  };

  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <SearchBar onSubmitForm={search} />
      <h2 style={resultsStyles}>Showing results for "{searchTerm}"</h2>
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              onSelectVideo={(video) => setSelectedVideo(video)}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
