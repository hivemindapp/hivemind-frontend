import React from "react";
import "./Modal.css";
import ImageUploading from "react-images-uploading";

interface ModalProps {}

export const Modal: React.FC<ModalProps> = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 3;
  const onChange = (imageList: any, addUpdateIndex: any) => {
    setImages(imageList);
  };
  return (
    <div className="modal-wrapper">
      <section className="modal-content">
        <i className="fas fa-times"></i>
        <label>Create Post</label>
        <input
          type="text"
          className="post-text"
          placeholder="What's on your mind, busy bee?"
        ></input>
        <input
          type="submit"
          className="post-submit-btn"
          // onClick={() => }
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
      </section>
    </div>
  );
};
