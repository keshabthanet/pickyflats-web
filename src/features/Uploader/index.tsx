import React, { useState } from 'react';
import { FiUpload } from 'react-icons/fi';
import { uuid } from 'uuidv4';

import useFileUploader from './useFileUploader';
import { Viewer } from './Viewer';

interface IFileUploader {
  onSuccess: (keys: string[] | null) => void;
}

function Uploader({ onSuccess }: IFileUploader) {
  const [image, setImage] = useState<FileList | null | any>(null);

  //this needs to be shifted to the page where we want out Uploader
  const [myKeys, setMyKeys] = useState<string[]>([]);

  const addMyKeys = (keys: string[]) => {
    setMyKeys(keys);
  };

  const { keys } = useFileUploader();

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const toUploadImage = e.target.files;
      // setImage(toUploadImage);
      setImage((prev) => [[...(prev ? prev : [])], toUploadImage]);

      const ff = Array.from(toUploadImage);
      // !TODO: upload image to appwrite storage and call onSucess with image IDs
    }
  };

  const handleDragOver = (event: any) => {
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setImage(event.dataTransfer.files[0]);
  };

  const newId = uuid();

  return (
    <div className='mt-5 w-full'>
      <label htmlFor={newId}>
        <div
          className='flex h-[130px] w-full flex-col justify-center divide-dotted rounded-lg border-[2px]  p-5 text-center align-middle opacity-80'
          onDrop={(e) => handleDrop(e)}
          onDragOver={(e) => handleDragOver(e)}
        >
          <div className=' border-primary-main h-full cursor-pointer rounded-lg border border-dashed p-5'>
            <p>
              <FiUpload />
            </p>
            <p className='text-sm text-gray-500'>
              Drag and Drop or
              <span className=' cursor-pointer font-medium text-[#6941C6] '>
                Choose file
              </span>{' '}
              to Upload
            </p>
            <p className=' text-xs leading-[150%] text-gray-500'>PNG/SVG/JPG</p>
          </div>
        </div>
      </label>
      <input
        type='file'
        id={newId}
        onChange={(e) => handleUpload(e)}
        className='hidden'
        multiple
      />
      <div className='flex flex-wrap '>
        {keys &&
          keys?.map((keyy, index) => {
            // if (!key) return null;
            return (
              <div className='basis-[300px]' key={index}>
                {/* <UploadIndicator
                // keyy={keyy}
                // fileName={image[index].name} //this needs to be dynamic, image means images here
                // fileSize={image[index].size}
                // progress={progress.get(keyy)}
                // status={status.get(keyy)}
                /> */}
              </div>
            );
          })}
      </div>
      {myKeys && (
        <div className='mt-3 flex w-full flex-wrap gap-3'>
          {myKeys.map((keyy) => {
            if (keyy)
              return (
                <>
                  <Viewer url='' />
                </>
              );
          })}
        </div>
      )}
    </div>
  );
}

export default Uploader;
