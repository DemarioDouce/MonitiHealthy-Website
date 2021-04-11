import axios from "axios";
const KEY = "AIzaSyAOnjrbk7BtfjfOTKGaS-RKMeU4HRu1szY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
