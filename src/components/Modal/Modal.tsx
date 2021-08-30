import React, { useState } from 'react';
import './Modal.css';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Post } from '../App/App';
// import { idText } from "typescript";

interface ModalProps {
  submitPost: (newPost: Post) => void;
  closeModal: (event: any) => void;
}

export const Modal: React.FC<ModalProps> = ({ submitPost, closeModal }) => {
  const [images, setImages] = useState([]);
  const [postTitle, setTitle] = useState<string>('');
  const [postDescription, setDescription] = useState<string>('');
  const [imageURLS, setImageURLS] = useState<string[]>([]);

  const maxNumber = 2;
  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList as never[]);
    let onlyURLs = imageList.map(image => image.data_url);
    setImageURLS(onlyURLs);
  };

  const clearState = () => {
    setImages([]);
    setTitle('');
    setDescription('');
  };

  const addPost = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    const newPost = {
      __typename: 'post',
      id: '2',
      title: postTitle,
      description: postDescription,
      image: imageURLS,
      user: {
        __typename: 'user',
        id: 4,
        username: 'workerBee1',
        avatar:
          'https://www.rd.com/wp-content/uploads/2021/04/GettyImages-988013222-scaled-e1618857975729.jpg'
      },
      upvotes: 0,
      downvotes: 0,
      createdAt: 'August 29, 2021'
    };
    submitPost(newPost);
    clearState();
  };

  return (
    <section
      className='modal-wrapper'
      onClick={(event: any) => closeModal(event)}
      id='modalWrapper'
    >
      <section className='modal-content' id='modalContent'>
        <i
          className='fas fa-times close-modal'
          id='x'
          onClick={(event: any) => closeModal(event)}
        ></i>
        <label>Create Post</label>
        <input
          type='text'
          className='post-title'
          placeholder='title'
          onChange={event => setTitle(event.target.value)}
        ></input>
        <p>Add an image:</p>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey='data_url'
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            // write your building UI
            <div className='upload__image-wrapper'>
              <button
                style={isDragging ? { color: 'red' } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or Drop here
              </button>
              &nbsp;
              <button onClick={onImageRemoveAll}>Remove all images</button>
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <img src={image['data_url']} alt='' width='100' />
                  <div className='image-item__btn-wrapper'>
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <p>Add a description:</p>
        <input
          type='text'
          className='post-description'
          placeholder="What's on your mind, busy bee?"
          onChange={event => setDescription(event.target.value)}
        ></input>
        <input
          type='submit'
          className='post-submit-btn'
          onClick={(event: React.MouseEvent<HTMLElement>) => addPost(event)}
        ></input>
      </section>
    </section>
  );
};
