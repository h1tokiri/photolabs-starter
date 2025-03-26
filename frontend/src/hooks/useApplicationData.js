import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS',
  CLOSE_PHOTO_DETAILS: 'CLOSE_PHOTO_DETAILS'
};

const initialState = {
  photos: [],
  topics: [],
  favouritePhotoIds: [],
  selectedPhoto: null
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FAV_PHOTO_ADDED:
      return {
        ...state,
        favouritePhotoIds: [...state.favouritePhotoIds, action.payload.photoId]
      };

    case ACTIONS.FAV_PHOTO_REMOVED:
      return {
        ...state,
        favouritePhotoIds: state.favouritePhotoIds.filter(id => id !== action.payload.photoId)
      };

    case ACTIONS.SET_PHOTO_DATA:
      return {
        ...state,
        photos: action.payload.photos
      };

    case ACTIONS.SET_TOPIC_DATA:
      return {
        ...state,
        topics: action.payload.topics
      };

    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload.photo
      };

    case ACTIONS.CLOSE_PHOTO_DETAILS:
      return {
        ...state,
        selectedPhoto: null
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
}

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    console.log("Fetching photos...");
    fetch("http://localhost:8001/api/photos")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Photos loaded:", data.length);
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: data }
        });
      })
      .catch(error => {
        console.error("Error fetching photos:", error);
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: [] }
        });
      });
  }, []);

  useEffect(() => {
    console.log("Fetching topics...");
    fetch("http://localhost:8001/api/topics")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log("Topics loaded:", data.length);
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: data }
        });
      })
      .catch(error => {
        console.error("Error fetching topics:", error);
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: [] }
        });
      });
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    const isFavourited = state.favouritePhotoIds.includes(photoId);

    if (isFavourited) {
      dispatch({
        type: ACTIONS.FAV_PHOTO_REMOVED,
        payload: { photoId }
      });
    } else {
      dispatch({
        type: ACTIONS.FAV_PHOTO_ADDED,
        payload: { photoId }
      });
    }
  };

  const setPhotoSelected = (photo) => {
    dispatch({
      type: ACTIONS.SELECT_PHOTO,
      payload: { photo }
    });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({
      type: ACTIONS.CLOSE_PHOTO_DETAILS
    });
  };

  const handleSelectTopic = (topicId) => {
    console.log(`Selected topic: ${topicId}`);
    // If you want to implement topic filtering:
    if (topicId) {
      fetch(`/api/topics/${topicId}/photos`)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: ACTIONS.SET_PHOTO_DATA,
            payload: { photos: data }
          });
        })
        .catch(error => console.error("Error fetching topic photos:", error));
    } else {
      // If no topic selected, fetch all photos again
      fetch("/api/photos")
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: ACTIONS.SET_PHOTO_DATA,
            payload: { photos: data }
          });
        })
        .catch(error => console.error("Error fetching all photos:", error));
    }
  };

  // Add this return statement if it's missing
  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onClosePhotoDetailsModal,
    handleSelectTopic
  };
};

export default useApplicationData;