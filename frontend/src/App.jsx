import React, { useState } from "react";
// import PhotoList from "./components/PhotoList";
// import TopNavigationBar from "./components/TopNavigationBar";
import HomeRoute from "./routes/HomeRoute";
import "./App.scss";

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleSelectTopic = (topicId) => {
    console.log(`Selected topic: ${topicId}`);
  };

  const photos = [
    {
      id: 1,
      location: {
        city: "Montreal",
        country: "Canada",
      },
      urls: {
        full: "/Image-1-Full.jpeg",
        regular: "/Image-1-Regular.jpeg",
      },
      user: {
        username: "exampleuser",
        name: "Joe Example",
        profile: "/profile-1.jpg",
      },
    },

    {
      id: 2,
      location: {
        city: "Toronto",
        country: "Canada",
      },
      urls: {
        full: "/Image-2-Full.jpeg",
        regular: "/Image-2-Regular.jpeg",
      },
      user: {
        username: "exampleuser",
        name: "Joe Example",
        profile: "/profile-1.jpg",
      },
    },

    {
      id: 3,
      location: {
        city: "Ottawa",
        country: "Canada",
      },
      urls: {
        full: "/Image-3-Full.jpeg",
        regular: "/Image-3-Regular.jpeg",
      },
      user: {
        username: "exampleuser",
        name: "Joe Example",
        profile: "/profile-1.jpg",
      },
    },
  ];

  return (
    <div className="App">
      {/* <TopNavigationBar
        onSelectTopic={handleSelectTopic}
        isFavPhotoExist={favourites.length > 0}
      />
      <div className="photo-list">
        <PhotoList photos={photos} />
      </div> */}
      <HomeRoute
        photos={photos}
        favourites={favourites}
        handleSelectTopic={handleSelectTopic}
      />
    </div>
  );
};

export default App;
