import React from "react";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    handleSelectTopic,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        favourites={state.favouritePhotoIds}
        handleSelectTopic={handleSelectTopic}
        toggleFavourite={updateToFavPhotoIds}
        openModal={setPhotoSelected}
      />
      {state.selectedPhoto && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          onClose={onClosePhotoDetailsModal}
          favourites={state.favouritePhotoIds}
          toggleFavourite={updateToFavPhotoIds}
        />
      )}
    </div>
  );
};

export default App;
