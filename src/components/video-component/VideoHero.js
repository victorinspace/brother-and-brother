import React from "react";
import ReactPlayer from "react-player";

const VideoHero = () => (
  <div style={{ paddingTop: `115px` }}>
    <ReactPlayer
      url="https://vimeo.com/334780984"
      playing="true"
      controls="false"
      loop="true"
      width="100%"
      height="80vh"
    />
  </div>
);

export default VideoHero;
