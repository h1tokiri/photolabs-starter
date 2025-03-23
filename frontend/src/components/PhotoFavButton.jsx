import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoId, isFavourite = false, toggleFavourite }) => {
  const handleClick = (event) => {
    // Stop the click from propagating to parent elements
    event.stopPropagation();

    // Toggle the favorite status for this photo
    toggleFavourite(photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavourite} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
