import { useState } from "react";
import photos from "../mocks/photos";
import topics from "../mocks/topics";

const useApplicationData = () => {
  const [state, setState] = useState({
    photos: photos,
    topics: topics,
    favouritePhotoIds: [],
    selectedPhotos: null,
  });


  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => {
      const isFavourited = prev.favouritePhotoIds.includes(photoId);

      return {
        ...prev,
        favouritePhotoIds: isFavourited
          ? prev.favouritePhotoIds.filter((id) => id !== photoId)
          : [...prev.favouritePhotoIds, photoId],
      };
    });
  };

  const setPhotoSelected = (photo) => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: photo,
    }));
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({
      ...prev,
      selectedPhoto: null,
    }));
  };

  const handleSelectTopic = (topicId) => {
    console.log(`Selected topic: ${topicId}`);
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    handleSelectTopic
  };
};

export default useApplicationData;