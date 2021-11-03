import axios from "axios";

const KEY = "AIzaSyBMxfm_Ec0JInz5PBg6njRGXEUe9h_J85U";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
