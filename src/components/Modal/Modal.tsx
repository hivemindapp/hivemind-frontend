import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_ALL_POSTS, ADD_POST, CREATE_DIRECT_UPLOAD } from '../../index';
import { useEffect } from 'react';
import { ImageUploader } from '../ImageUploader/ImageUploader';
import { UserType, BlobType } from '../../utils/types';
import { ImageListType } from 'react-images-uploading';
import './Modal.css';

interface ModalProps {
  closeModal: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  user: UserType;
}

export const Modal: React.FC<ModalProps> = ({ closeModal, user }) => {
  const [images, setImages] = useState([]);
  const [postTitle, setTitle] = useState<string>('');
  const [postDescription, setDescription] = useState<string>('');
  const [signedIds, setSignedIds] = useState<string[]>([]);
  const [createPost] = useMutation(ADD_POST, {
    refetchQueries: [GET_ALL_POSTS]
  });
  const [createDirectUpload, { data, loading }] =
    useMutation(CREATE_DIRECT_UPLOAD);

  const newImage = (blob: ImageListType) => {
    setImages(blob as never[]);
  };

  // send the blob to the BE
  useEffect(() => {
    if (images.length) {
      const upload = async () => {
        images.forEach((blob: BlobType) => {
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
            userId: Number(user.id)
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

  return (
    <section
      className='modal-wrapper'
      id='modalWrapper'
      onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
        closeModal(event)
      }
    >
      <section className='modal-content' id='modalContent'>
        <i
          className='fas fa-times close-modal'
          id='x'
          aria-label='close modal'
          onClick={(event: React.MouseEvent<HTMLElement, MouseEvent>) =>
            closeModal(event)
          }
        ></i>
        <h3 className='create-post'>Create Post</h3>
        <textarea
          className='title-input'
          placeholder='Title'
          maxLength={100}
          onChange={event => setTitle(event.target.value)}
          required
        />
        <span className='error hidden' id='titleValidation'>
          <i className='fas fa-exclamation-triangle error'></i>
          <span>Please provide a title</span>
        </span>
        <textarea
          placeholder="What's on your mind, busy bee?"
          onChange={event => setDescription(event.target.value)}
          required
        />
        <span className='error hidden' id='descValidation'>
          <i className='fas fa-exclamation-triangle error'></i>
          <span>Please provide a description</span>
        </span>
        <p className='add-images-prompt'>
          Add up to 3 images to your post, upload the nicest one first!
        </p>
        <ImageUploader newImage={newImage} images={images} />
        <input
          type='submit'
          id='submitButton'
          className='post-submit-btn'
          onClick={(event: React.MouseEvent<HTMLElement>) => addPost(event)}
        />
      </section>
    </section>
  );
};
