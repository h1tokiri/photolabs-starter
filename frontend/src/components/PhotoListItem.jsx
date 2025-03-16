import "../styles/PhotoListItem.scss";

// const sampleDataForPhotoListItem = {
//   id: 1,
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   urls: {
//     full: "/Image-1-Full.jpeg",
//     regular: "/Image-1-Regular.jpeg",
//   },
//   user: {
//     username: "exampleuser",
//     name: "Joe Example",
//     profile: "/profile-1.jpg",
//   },
// };

const PhotoListItem = ({ username, imageSource, id, location, profile }) => {
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={imageSource}
        alt={`Photo by ${username}`}
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={profile}
          alt={`${username}'s profile`}
        />

        <div className="photo-list__user-info">
          <span className="photo-list__user-name">{username}</span>
          {location && (
            <div className="photo-list__user-location">
              {location.city}, {location.country}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
