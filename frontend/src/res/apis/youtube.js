import axios from "axios";
const KEY = "AIzaSyAnb_A_7pkGbEB9vAXof-00dxqnKRNFIVs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
