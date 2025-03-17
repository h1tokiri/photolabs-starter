import "../styles/HomeRoute.scss";
import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = (props) => {
  const { photos, favourites, handleSelectTopic } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        onSelectTopic={handleSelectTopic}
        isFavPhotoExist={favourites.length > 0}
      />
      <div className="home-route__photo-section">
        <PhotoList photos={photos} />
      </div>
    </div>
  );
};

export default HomeRoute;
