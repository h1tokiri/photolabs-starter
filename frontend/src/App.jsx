import React from "react";
import PhotoListItem from "./components/PhotoListItem";
import "./App.scss";

// const sampleDataForPhotoListItem = {
//   id: "1",
//   username: "exampleUser ",
//   imageSource: "/Image-1-Regular.jpeg",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   profile: "/profile-1.jpg",
// };

const App = () => {
  // const photo = {
  //   id: 1,
  //   urls: {
  //     regular: "/Image-1-Regular.jpeg",
  //   },
  //   user: {
  //     username: "exampleuser1",
  //     name: "Joe Example",
  //     profile: "/profile-1.jpg",
  //   },
  //   location: {
  //     city: "Montreal",
  //     country: "Canada",
  //   },
  // };

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
          <PhotoListItem key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};

export default App;
