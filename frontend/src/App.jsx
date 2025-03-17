import React from "react";
import PhotoList from "./components/PhotoList";
// import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

const App = () => {
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
      <div className="photo-list">
        {photos.map((photo) => (
          // <PhotoListItem key={photo.id} photo={photo} />
          <PhotoList photos={photos} />
        ))}
      </div>
    </div>
  );
};

export default App;
