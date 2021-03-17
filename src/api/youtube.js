import axios from "axios";

const KEY = "AIzaSyCtmZLXOgR1XuvxVT4S_kPc9rYchZD-T18";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
