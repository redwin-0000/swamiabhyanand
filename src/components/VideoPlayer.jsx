import YouTube from "react-youtube";

function VideoPlayer() {
  const options = {
    height: "370",
    width: "600",
    playerVars: {
      autoplay: 1, 
    },
  };

  return <YouTube videoId="https://www.youtube.com/watch?v=AjP8FtHExlA" opts={options} />;
}

export default VideoPlayer;
