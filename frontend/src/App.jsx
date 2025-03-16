import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const sampleDataForPhotoListItem = {
  id: "1",
  username: "exampleUser ",
  imageSource: "/Image-1-Regular.jpeg",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  profile: "/profile-1.jpg",
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  const photo = {
    id: 1,
    urls: {
      regular: "/Image-1-Regular.jpeg",
    },
    user: {
      username: "exampleuser",
      name: "Joe Example",
      profile: "/profile-1.jpg",
    },
    location: {
      city: "Montreal",
      country: "Canada",
    },
  };

  return (
    <div className="App">
      <PhotoListItem
        photo={photo}
        // id={photo.id}
        // imageSource={photo.urls.regular}
        // username={photo.user.username}
        // city={photo.location.city}
        // country={photo.location.country}
        // profile={photo.user.profile}
        // location={photo.location}
      />
    </div>
  );
};

export default App;

/*
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  // Sample data to pass as props to PhotoListItem
  const samplePhoto = {
    id: 1,
    username: "exampleuser",
    imageSource: "/Image-1-Regular.jpeg",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    profile: "/profile-1.jpg",
  };

  return (
    <div className="App">
      <PhotoListItem
        id={samplePhoto.id}
        username={samplePhoto.username}
        imageSource={samplePhoto.imageSource}
        location={samplePhoto.location}
        profile={samplePhoto.profile}
      />
    </div>
  );
};

export default App;
*/
