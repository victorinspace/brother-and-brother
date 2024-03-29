import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
// import "./HeroVideo.css";

const VideoContainer = styled.div`
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  padding-top: 300px;
  border: 2px solid red;
  pointer-events: none;
  width: 100%;
  height: 100%;

  ${"" /* @media (min-aspect-ratio: 16/9) {
    height: 100%;
    top: -100%;
  }

  @media (max-aspect-ratio: 16/9) {
    width: 100%;
    left: -100%;
  } */};
`;

class HeroVideo extends React.Component {
  videoOnReady(event) {
    event.target.mute();
  }

  videoOnEnd(event) {
    event.target.playVideo();
  }

  render() {
    const videoOptions = {
      width: "100%",
      // height: "300",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };
    return (
      <VideoContainer className="video-foreground">
        <YouTube
          videoId="mVJc9RtqPRY"
          opts={videoOptions}
          className="video-iframe"
          onReady={this.videoOnReady}
          onEnd={this.videoOnEnd}
        />
      </VideoContainer>
    );
  }
}

export default HeroVideo;
