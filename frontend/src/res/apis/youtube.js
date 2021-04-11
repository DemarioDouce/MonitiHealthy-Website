import axios from "axios";
const KEY = "AIzaSyC_pk2a4vccUIXpjK9n0TVVGNDpIKo_15Q";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
