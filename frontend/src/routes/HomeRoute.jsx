import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";
import "../styles/HomeRoute.scss";

const HomeRoute = ({
  photos,
  topics,
  favourites,
  handleSelectTopic,
  toggleFavourite,
  openModal,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        onSelectTopic={handleSelectTopic}
        isFavPhotoExist={favourites.length > 0}
      />
      <div className="home-route__photo-section">
        <PhotoList
          photos={photos}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
          openModal={openModal}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
