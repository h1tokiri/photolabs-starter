import React, { useState } from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";

import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

const App = () => {
  const [favourites, setFavourites] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handleSelectTopic = (topicId) => {
    console.log(`Selected topic: ${topicId}`);
  };

  const toggleFavourite = (photoId) => {
    setFavourites((prev) => {
      const isFavourited = prev.includes(photoId);

      if (isFavourited) {
        return prev.filter((id) => id !== photoId);
      } else {
        return [...prev, photoId];
      }
    });
  };

  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        favourites={favourites}
        handleSelectTopic={handleSelectTopic}
        toggleFavourite={toggleFavourite}
        openModal={openModal}
      />
      {selectedPhoto && (
        <PhotoDetailsModal photo={selectedPhoto} onClose={closeModal} />
      )}
    </div>
  );
};

export default App;
