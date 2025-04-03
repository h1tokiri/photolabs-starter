import { useReducer, useEffect } from "react";
import { API_URL } from "../config";

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
    fetch(`${API_URL}/photos`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: data }
        });
      })
      .catch(error => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photos: [] }
        });
      });
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/topics`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topics: data }
        });
      })
      .catch(error => {
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

    if (topicId) {
      fetch(`${API_URL}/topics/${topicId}/photos`)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: ACTIONS.SET_PHOTO_DATA,
            payload: { photos: data }
          });
        })
    } else {
      fetch(`${API_URL}/photos`)
        .then(response => response.json())
        .then(data => {
          dispatch({
            type: ACTIONS.SET_PHOTO_DATA,
            payload: { photos: data }
          });
        })
    }
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