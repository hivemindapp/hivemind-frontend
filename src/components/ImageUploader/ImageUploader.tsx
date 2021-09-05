import React, { useState, useEffect } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import './ImageUploader.css';

interface ImageUploaderProps {
  createDirectUpload: ({}) => void;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({
  createDirectUpload
}) => {
  const [images, setImages] = useState<any>([]);
  const maxNumber = 3;

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

  return (
    <div className="ImageUploader">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
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
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
