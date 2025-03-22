import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ photo, onClose }) => {
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClose}>
        {/* We'll add more content in future activities*/}
        <img src={closeSymbol} alt="close symbol" />
        <h2>Photo Details</h2>
        <p>Photo ID: {photo.id}</p>
      </button>
    </div>
  );
};

export default PhotoDetailsModal;
