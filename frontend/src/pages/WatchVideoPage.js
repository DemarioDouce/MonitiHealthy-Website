import React, { useState, useEffect } from "react";
import SearchBar from "../res/components/SearchBar";
import youtube from "../res/apis/youtube";
import VideoList from "../res/components/VideoList";
import VideoDetail from "../res/components/VideoDetail";
import PatientBottomNavComponent from "../res/components/PatientBottomNavComponent";

const WatchVideo = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //this gets called when the component is loaded
  //aka data loading method
  //also assigning as default video selection
  useEffect(() => {
    onTermSubmit("motivational video");
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
    <div className="ui container">
      {/* passing setScreen to patient navigation component*/}
      <PatientBottomNavComponent index={1} />
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
  );
};

export default WatchVideo;
