import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "../components/PhotoFavButton";
import topics from "../mocks/topics";

const PhotoDetailsModal = ({
  photo,
  onClose,
  favourites = [],
  toggleFavourite,
}) => {
  // Get similar photos based on the current photo's topic
  const getSimilarPhotos = (selectedPhoto) => {
    try {
      const allPhotos = require("../mocks/photos").default;
      const photoTopic = selectedPhoto.topic;
      if (!photoTopic) return [];

      return allPhotos
        .filter((p) => p.id !== selectedPhoto.id && p.topic === photoTopic)
        .slice(0, 4);
    } catch (error) {
      console.error("Error finding similar photos:", error);
      return [];
    }
  };

  const isFavourite = favourites.includes(photo.id);
  const similarPhotos = getSimilarPhotos(photo);

  const getTopicTitle = (topicId) => {
    if (!topicId) return "Other";
    const topic = topics.find((t) => t.id === topicId);
    return topic ? topic.title : "Other";
  };

  return (
    <div className="photo-details-modal">
      <div className="photo-details-modal__content">
        <button className="photo-details-modal__close-button" onClick={onClose}>
          <img src={closeSymbol} alt="Close" />
        </button>

        {/* Main photo with favorite button */}
        <div className="photo-details-modal__main-photo">
          <div className="photo-details-modal__fav-button">
            <PhotoFavButton
              photoId={photo.id}
              isFavourite={isFavourite}
              toggleFavourite={toggleFavourite}
            />
          </div>
          <img
            className="photo-details-modal__image"
            src={photo.urls.regular}
            alt={`Photo by ${photo.user?.username || "unknown"}`}
          />
        </div>

        {/* Photographer info */}
        <div className="photo-details-modal__header">
          <div className="photo-details-modal__photographer">
            {photo.user?.profile && (
              <img
                className="photo-details-modal__photographer-profile"
                src={photo.user.profile}
                alt={`${photo.user.username || "unknown"}'s profile`}
              />
            )}
            <div className="photo-details-modal__photographer-info">
              <span className="photo-details-modal__photographer-name">
                {photo.user?.username || "Unknown user"}
              </span>
              {photo.location && (
                <span className="photo-details-modal__photographer-location">
                  {photo.location.city}, {photo.location.country}
                </span>
              )}
            </div>
          </div>

          {photo.topic && (
            <div className="photo-details-modal__topic">
              <span>Topic: {getTopicTitle(photo.topic)}</span>
            </div>
          )}
        </div>

        {/* Similar photos section */}
        {similarPhotos.length > 0 && (
          <div className="photo-details-modal__similar">
            <h2 className="photo-details-modal__similar-title">
              Similar {photo.topic ? getTopicTitle(photo.topic) : ""} Photos
            </h2>

            <div className="photo-details-modal__similar-grid">
              {similarPhotos.map((similarPhoto) => (
                <div
                  key={similarPhoto.id}
                  className="photo-details-modal__similar-photo"
                >
                  <div className="photo-details-modal__similar-fav-button">
                    <PhotoFavButton
                      photoId={similarPhoto.id}
                      isFavourite={favourites.includes(similarPhoto.id)}
                      toggleFavourite={toggleFavourite}
                    />
                  </div>
                  <img
                    src={similarPhoto.urls.regular}
                    alt={`Similar photo by ${
                      similarPhoto.user?.username || "unknown"
                    }`}
                  />
                  <div className="photo-details-modal__similar-photo-info">
                    <span>{similarPhoto.user?.username || "Unknown"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
