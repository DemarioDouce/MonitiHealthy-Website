import React, { useState, useEffect } from "react";
import SearchBar from "../res/components/SearchBar";
import youtube from "../res/apis/youtube";
import VideoList from "../res/components/VideoList";
import VideoDetail from "../res/components/VideoDetail";
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";
import App from "../App";
import axios from "axios";

const WatchVideo = () => {
  //this screen variable allows us to set the state whether if we want to render this page, or the home page
  const screen = localStorage.getItem("screen");
  const [thisScreen, setThisScreen] = useState(screen);
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const readCookie = async () => {
    try {
      console.log("--- in readCookie function ---");

      //
      const res = await axios.get("/read_cookie");
      //
      if (res.data.screen !== undefined) {
        setThisScreen(res.data.screen);
        console.log(res.data.screen);
      }
    } catch (e) {
      setThisScreen("auth");
      console.log(e);
    }
  };

  //this gets called when the component is loaded
  //aka data loading method
  //also assigning as default video selection
  useEffect(() => {
    onTermSubmit("motivational video");
    readCookie();
  }, []);

  //this function runs if the user submits a term in the search bar
  //it records a response from the api and sets the state of the list of videos
  //and selected video
  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  };

  //this function runs when a video is selected
  //it sets the current state of selected video
  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div>
      {thisScreen !== "auth" ? (
        <div className="ui container">
          {/* passing setScreen to patient navigation component*/}
          <PatientBottomNavComponent index={1} setScreen={setThisScreen} />
          <SearchBar SearchFormSubmit={onTermSubmit} />
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={selectedVideo} />
              </div>
              <div className="five wide column">
                <VideoList onVideoSelect={onVideoSelect} videos={videos} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <App />
      )}
    </div>
  );
};

export default WatchVideo;
