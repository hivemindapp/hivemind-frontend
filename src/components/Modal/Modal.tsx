import React, { useState } from "react";
import "./Modal.css";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Post } from "../App/App";
// import { idText } from "typescript";

interface ModalProps {
  submitPost: (newPost: Post) => void;
  closeModal: (event: any) => void;
}

export const Modal: React.FC<ModalProps> = ({ submitPost, closeModal }) => {
  const [images, setImages] = useState([]);
  const [postTitle, setTitle] = useState<string>("");
  const [postDescription, setDescription] = useState<string>("");

  const maxNumber = 2;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
  };

  const clearState = () => {
    setImages([]);
    setTitle("");
    setDescription("");
  };

  const addPost = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const newPost = {
      id: 2,
      title: postTitle,
      description: postDescription,
      // image: images,
      user: { id: 4, username: "workerBee1" },
      upvotes: 0,
      downvotes: 0,
      created_at: "August 29, 2021",
    };
    submitPost(newPost);
    clearState();
  };

  return (
    <section
      className="modal-wrapper"
      onClick={(event) => closeModal(event)}
      id="modalWrapper"
    >
      <section className="modal-content" id="modalContent">
        <i className="fas fa-times"></i>
        <label>Create Post</label>
        <input
          type="text"
          className="post-title"
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <input
          type="text"
          className="post-description"
          placeholder="What's on your mind, busy bee?"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <button
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image["data_url"]} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <input
          type="submit"
          className="post-submit-btn"
          onClick={(event: React.MouseEvent<HTMLElement>) => addPost(event)}
        ></input>
      </section>
    </section>
  );
};
