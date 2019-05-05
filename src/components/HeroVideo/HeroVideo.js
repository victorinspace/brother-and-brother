import React from "react";
import YouTube from "react-youtube";
import styled from "styled-components";
// import "./HeroVideo.css";

const VideoContainer = styled.div`
  overflow: hidden;
  padding-top: 200px;
  border: 2px solid red;
  pointer-events: none;
  width: 100%;
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

        <HeroVideo
          videoSrc="https://www.youtube.com/embed/W0LHTWG-UmQ?autoplay=1&loop=1&playlist=W0LHTWG-UmQ"
          // https://www.youtube.com/embed/W0LHTWG-UmQ?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=W0LHTWG-UmQ
          videoSubtitle="Instantly make people think you are a 10x coder with this one secret trick!"
          videoTitle="Easy Hero Video in React"
        >
          <p>This is from a child element</p>
        </HeroVideo>
      </VideoContainer>
    );
  }
}

export default HeroVideo;
