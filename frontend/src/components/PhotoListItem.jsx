import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = ({ photo }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton photoId={photo.id} />
      <img
        className="photo-list__image"
        src={photo.urls.regular}
        alt={`Photo by ${photo.user.username}`}
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt={`${photo.user.username}'s profile`}
        />

        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{photo.user.username}</span>
          {photo.location && (
            <div className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
