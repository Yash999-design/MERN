import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get("/v2/posts");
      setVideos(response.data);
      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    // BEM naming convention
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              song={song}
              likes={likes}
              messages={messages}
              description={description}
              shares={shares}
            />
          )
        )}
        {/* <Video
          url={process.env.PUBLIC_URL + "/tanyasingh.mp4"}
          channel={"@tanyasinghbhatnagar"}
          description={"karvachauth special"}
          song={"Saj Dhaj ke"}
          likes={998}
          messages={100}
          shares={50}
        />
        <Video
          url={process.env.PUBLIC_URL + "/heylady.mp4"}
          channel={"@PayalGaming"}
          description={"2 million special montage"}
          song={"Hey Lady Drop It Down"}
          likes={800}
          messages={93}
          shares={47}
        />
        <Video
          url={process.env.PUBLIC_URL + "/revive.mp4"}
          channel={"@KrutikaPlays"}
          description={"Christmas Special"}
          song={"Mujhe Revive Dedo"}
          likes={600}
          messages={75}
          shares={28}
        />
        <Video
          url={process.env.PUBLIC_URL + "/newYear.mp4"}
          channel={"@PayalGaming"}
          description={"2021 Rewind"}
          song={"Lofi memory song"}
          likes={900}
          messages={91}
          shares={50}
        /> */}
      </div>
    </div>
  );
}

export default App;
