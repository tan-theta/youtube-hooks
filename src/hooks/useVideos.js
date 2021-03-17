import { useState, useEffect } from "react";

import youtube from "../api/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (searchString) => {
    const response = await youtube.get("/search", {
      params: {
        q: searchString,
      },
    });

    setVideos(response.data.items);
    setSearchTerm(searchString);
  };

  return [videos, search, searchTerm];
};

export default useVideos;
