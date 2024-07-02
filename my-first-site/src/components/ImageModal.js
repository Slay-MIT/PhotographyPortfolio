import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    background: "none",
    border: "none",
    overflow: "visible",
    maxWidth: "90vw",
    maxHeight: "90vh",
  },
};

function ImageModal({ isOpen, onRequestClose, image }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
      shouldCloseOnOverlayClick={true}  // Ensure this prop is set
    >
      <div className="relative rounded-lg shadow-xl">
        <button
          onClick={onRequestClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 rounded-full p-2 z-10 shadow-md hover:bg-gray-100 transition duration-200 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {image && (
          <div className="w-full h-full flex justify-center items-center">
            <img
              src={image.src}
              alt="Full size"
              className="object-contain w-full h-full max-w-[80vw] max-h-[80vh]"
            />
          </div>
        )}
      </div>
    </Modal>
  );
}

export default ImageModal;
