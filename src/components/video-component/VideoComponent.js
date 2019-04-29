import React from "react";
import YouTube from "react-youtube";
import "./VideoComponent.css";

{
  /* https://www.youtube.com/watch?v=DOxVWYulV */
}
{
  /* https://youtu.be/DOxVWYulV-s */
}
{
  /* https://www.youtube.com/watch?v=DOxVWYulV-s&feature=youtu.be */
}

class VideoComponent extends React.Component {
  videoOnReady(event) {
    // access to player in all event handlers via event.target
    event.target.mute();
  }

  videoOnEnd(event) {
    event.target.playVideo();
  }
  render() {
    const videoOptions = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        rel: 0,
        showinfo: 0
      }
    };
    return (
      <div className="video-background">
        <div className="video-foreground">
          <YouTube
            videoId="DOxVWYulV-s"
            opts={videoOptions}
            className="video-iframe"
            onReady={this.videoOnReady}
            onEnd={this.videoOnEnd}
          />
        </div>
      </div>
    );
  }
}

export default VideoComponent;
