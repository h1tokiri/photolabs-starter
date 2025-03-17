// import FavIcon from './FavIcon';

import { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = ({ photoId, isFavourite = false }) => {
  const [selected, setSelected] = useState(isFavourite);

  const handleFavClick = (event) => {
    event.stopPropagation();
    setSelected((prev) => !prev);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
