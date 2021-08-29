import React, { useState } from "react";
import "./Modal.css";
import ImageUploading from "react-images-uploading";
import { idText } from "typescript";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = ({ submitPost }) => {
  const [images, setImages] = useState([]);
  const [postTitle, setTitle] = useState<string>("");
  const [postDescription, setDescription] = useState<string>("");

  const maxNumber = 2;
  const onChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };

  const clearState = () => {
    setImages([]);
    setTitle("");
    setDescription("");
  };

  const addPost = (event: any) => {
    event.preventDefault();
    const newPost = {
      title: postTitle,
      description: postDescription,
      image: images,
    };
    submitPost(newPost);
    clearState();
  };

  return (
    <div className="modal-wrapper">
      <section className="modal-content">
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
          onClick={() => addPost()}
        ></input>
      </section>
    </div>
  );
};
