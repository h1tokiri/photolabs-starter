import "../styles/HomeRoute.scss";
import React from "react";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({ photos, topics, favourites, handleSelectTopic }) => {
  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
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
