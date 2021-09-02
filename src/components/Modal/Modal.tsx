import React, { useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { gql, useMutation } from '@apollo/client';
import './Modal.css';
import { GET_ALL_POSTS } from '../../index';

const ADD_POST = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      description
      image
      upvotes
      downvotes
      createdAt
      updatedAt
      user {
        id
        username
        avatar
      }
    }
  }
`;

interface ModalProps {
  closeModal: (event: any) => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const [images, setImages] = useState([]);
  const [postTitle, setTitle] = useState<string>('');
  const [postDescription, setDescription] = useState<string>('');
  const [imageURLS, setImageURLS] = useState<string>('');
  const [createPost, { data, loading, error }] = useMutation(ADD_POST, {
    refetchQueries: [GET_ALL_POSTS]
  });

  const addPost = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    // instead of sending imageURLs we will send an array of signed IDs
    createPost({
      variables: {
        input: {
          title: postTitle,
          description: postDescription,
          image: imageURLS,
          userId: 9
        }
      }
    });

    if (data && !error && !loading) {
      closeModal(event);
      clearState();
    }
  };

  const clearState = () => {
    setImages([]);
    setImageURLS('');
    setTitle('');
    setDescription('');
  };
  const maxNumber = 2;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
    let onlyURLs = imageList.map((image) => image.data_url);
    // onlyURLs[0].toString() is the workaround until BE allows arrays of images
    // in future we may not do onlyURLs and may send array of entire image objects to BE
    setImageURLS(onlyURLs[0].toString());
  };

  return (
    <section
      className="modal-wrapper"
      onClick={(event: any) => closeModal(event)}
      id="modalWrapper"
    >
      <section className="modal-content" id="modalContent">
        <i
          className="fas fa-times close-modal"
          id="x"
          onClick={(event: any) => closeModal(event)}
        ></i>
        <label className="post-prompt">Create Post</label>
        <input
          type="text"
          className="post-title"
          placeholder="title"
          onChange={(event) => setTitle(event.target.value)}
        ></input>
        <p className="post-prompt">Add an image:</p>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
          acceptType={['jpg', 'png']}
          maxFileSize={1000000}
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
            errors
          }) => (
            <div className="upload__image-wrapper">
              {errors && (
                <div>
                  {errors.maxNumber && (
                    <span>Number of selected images exceed maxNumber</span>
                  )}
                  {errors.acceptType && (
                    <span>Your selected file type is not allowed</span>
                  )}
                  {errors.maxFileSize && (
                    <span>Selected file size exceed maxFileSize</span>
                  )}
                </div>
              )}
              <button
                style={isDragging ? { color: 'red' } : undefined}
                className="drag-button"
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or drag image to upload
              </button>
              &nbsp;
              <button className="remove-img-btn" onClick={onImageRemoveAll}>
                Remove all images
              </button>
              {imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="100" />
                  <div className="image-item__btn-wrapper">
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <p className="post-prompt">Add a description:</p>
        <input
          type="text"
          className="post-description"
          placeholder="What's on your mind, busy bee?"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <input
          type="submit"
          id="submitButton"
          className="post-submit-btn"
          onClick={(event: React.MouseEvent<HTMLElement>) => addPost(event)}
        ></input>
      </section>
    </section>
  );
};
