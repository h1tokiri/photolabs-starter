import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist = false }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;
