import React from "react";
import "./Modal.css";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  return (
    <div className="modal">
      <label>Create Post</label>
      <input
        type="text"
        className="post-text"
        placeholder="What's on your mind, busy bee?"
      ></input>
      {/* consider "formaction" for submitting post */}
      <input type="submit" className="post-submit-btn"></input>
      {/* add image uploader */}
    </div>
  );
};
