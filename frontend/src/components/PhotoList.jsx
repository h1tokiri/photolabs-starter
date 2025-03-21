import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favourites = [], toggleFavourite }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => {
        const isFavourite = favourites.includes(photo.id);

        return (
          <li key={photo.id} className="photo-list__item-container">
            <PhotoListItem
              photo={photo}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default PhotoList;
