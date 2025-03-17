import React, { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";

import photos from "./mocks/photos";
import topics from "./mocks/topics";

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleSelectTopic = (topicId) => {
    console.log(`Selected topic: ${topicId}`);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        handleSelectTopic={handleSelectTopic}
      />
    </div>
  );
};

export default App;
