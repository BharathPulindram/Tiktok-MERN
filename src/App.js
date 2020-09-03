import React from "react";
import "./App.css";
import Video from "./Components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          song="Yummy Yummy ..."
          channel="Bharath Pulindram"
          description="Simply superb song !"
          likes={999}
          shares={333}
          messages={499}
        />
        <Video />
      </div>
    </div>
  );
}

export default App;
