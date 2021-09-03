import React, { useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { useMutation } from '@apollo/client';
import './Modal.css';
import { GET_ALL_POSTS, ADD_POST, CREATE_DIRECT_UPLOAD } from '../../index';
import { useEffect } from 'react';

interface ModalProps {
  closeModal: (event: any) => void;
}

export const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  const maxNumber = 3;
  const [images, setImages] = useState<any>([]);
  const [postTitle, setTitle] = useState<string>('');
  const [postDescription, setDescription] = useState<string>('');
  const [signedIds, setSignedIds] = useState<string[]>([]);
  const [createPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_ALL_POSTS]
  });
  const [createDirectUpload, { data, loading, error }] =
    useMutation(CREATE_DIRECT_UPLOAD);

  const addPost = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    if (!postTitle || !postDescription) {
      validateForm();
    } else {
      createPost({
        variables: {
          input: {
            title: postTitle,
            description: postDescription,
            imageIds: signedIds,
            userId: 17
          }
        }
      });

      closeModal(event);
      clearState();
    }
  };

  const validateForm = () => {
    let element;
    if (!postTitle) {
      element = document.getElementById('titleValidation');
      element?.classList.remove('hidden');
    }
    if (!postDescription) {
      element = document.getElementById('descValidation');
      element?.classList.remove('hidden');
    }
  };

  const clearState = () => {
    setImages([]);
    setSignedIds([]);
    setTitle('');
    setDescription('');
  };

  const onChange = (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    setImages(imageList);
  };

  // send the blob to the BE
  useEffect(() => {
    if (images.length) {
      const upload = async () => {
        images.forEach((blob: any) => {
          createDirectUpload({
            variables: {
              input: {
                attributes: {
                  filename: blob.file.name,
                  contentType: blob.file.type,
                  checksum: blob.data_url,
                  byteSize: blob.file.size
                }
              }
            }
          });
        });
      };
      upload();
    }
  }, [images, createDirectUpload]);

  // get successful response from the BE and set signedId(s) in state
  useEffect(() => {
    if (data && !loading) {
      let newId = data.createDirectUpload.directUpload.signedBlobId;
      setSignedIds(signedIds => [...signedIds, newId]);
    }
  }, [data, loading]);

  return (
    <section className='modal-wrapper' id='modalWrapper'>
      <section className='modal-content' id='modalContent'>
        <i
          className='fas fa-times close-modal'
          id='x'
          onClick={(event: any) => closeModal(event)}
        ></i>
        <label className='post-prompt'>Create Post</label>
        <textarea
          className='post-title'
          placeholder='title'
          maxLength={100}
          onChange={event => setTitle(event.target.value)}
          required
        ></textarea>

        <span className='error hidden' id='titleValidation'>
          <i className='fas fa-exclamation-triangle error'></i>
          <span>Please provide a title</span>
        </span>

        <p className='post-prompt'>
          Add up to 3 images to your post, upload the nicest one first!
        </p>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey='data_url'
          acceptType={['jpg', 'png', 'jpeg']}
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
            <div className='upload__image-wrapper'>
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
                className='drag-button'
                onClick={onImageUpload}
                {...dragProps}
              >
                Click or drag image to upload
              </button>
              &nbsp;
              {/* <button className='remove-img-btn' onClick={onImageRemoveAll}>
                Remove all images
              </button> */}
              {imageList.map((image, index) => (
                <div key={index} className='image-item'>
                  <img src={image['data_url']} alt='' width='100' />
                  {/* <div className='image-item__btn-wrapper'>
                    <button onClick={() => onImageUpdate(index)}>Update</button>
                    <button onClick={() => onImageRemove(index)}>Remove</button>
                  </div> */}
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
        <p className='post-prompt'>Add a description:</p>
        <textarea
          className='post-description'
          placeholder="What's on your mind, busy bee?"
          onChange={event => setDescription(event.target.value)}
          required
        ></textarea>

        <span className='error hidden' id='descValidation'>
          <i className='fas fa-exclamation-triangle error'></i>
          <span>Please provide a description</span>
        </span>

        <input
          type='submit'
          id='submitButton'
          className='post-submit-btn'
          onClick={(event: React.MouseEvent<HTMLElement>) => addPost(event)}
        ></input>
      </section>
    </section>
  );
};
