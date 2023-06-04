import { Button, Divider, IconButton } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { RiShareForwardFill } from 'react-icons/ri';

import { DATABASE_ID, databases, LISTINGS_ID } from '@/lib/client';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

export const FlatCardV1 = ({ item }: { item }) => {
  const { user } = useAuthStore();
  const { openSnackbar } = useSnackbarStore();
  const [inSavedList, setInSavedList] = React.useState(false);

  React.useEffect(() => {
    setInSavedList(item?.saved_by.includes(user?.$id));
  }, [user]);

  const handleAddtoList = async () => {
    const savedList = inSavedList
      ? item?.saved_by.filter((a) => a !== user?.$id)
      : [...item!.saved_by, user!.$id];
    await databases.updateDocument(DATABASE_ID, LISTINGS_ID, item?.$id, {
      saved_by: savedList,
    });
    openSnackbar(`Flat ${inSavedList ? 'Removed from ' : 'Added to '} My List`);
    setInSavedList(!inSavedList);
  };

  return (
    <div className='  z-30 flex h-[400px] min-w-[200px] cursor-pointer flex-col overflow-hidden rounded-md shadow-md hover:border'>
      <div className='relative h-[200px] w-full object-cover'>
        <div>
          <Image src='/images/1.jpg' alt='flat photo' fill />
        </div>
        <div className='relative h-[150px] w-full p-3'>
          <div className='flex w-full'>
            <div className='flex-grow '>
              <span className='text-primary-main rounded-[15px] bg-white bg-opacity-80 p-1 px-2 pt-1.5  text-lg font-medium'>
                Buy
                <span className=' text-primary-light font-normal'>
                  {' '}
                  ${item?.rate}
                </span>
              </span>
            </div>
            <div
              onClick={handleAddtoList}
              className={clsx(
                ' hover:bg-primary-light text-primary-main relative top-[-3px] flex h-[30px] w-[30px]  cursor-pointer flex-col justify-center rounded-full bg-white align-middle hover:text-white',
                inSavedList ? '!bg-primary-main text-white' : ''
              )}
            >
              <FaRegBookmark className='relative m-auto ' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex w-full p-2'>
        <h3 className='flex-grow text-lg font-medium text-blue-900'>
          {item?.address}
        </h3>
        <h4 className=' text-sm text-blue-600'>5 days ago</h4>
      </div>
      <div className='m-auto w-[96%]'>
        <Divider />
      </div>
      <div className='flex flex-wrap gap-2 p-1 '>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          Near By City Hospital
        </span>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          3 Bathrooms
        </span>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          3 Large rooms
        </span>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          Near By City Hospital
        </span>
      </div>
      <div className='flex-grow'></div>
      <div className='flex w-full p-2'>
        <div className='flex-grow'>
          {/* <IconButton>
            <BiLike />
          </IconButton> */}
          <IconButton>
            <FcLike />
          </IconButton>
          <IconButton>
            <RiShareForwardFill />
          </IconButton>
        </div>
        <div>
          <Button variant='outlined' className='relative top-1 h-[30px]'>
            Request Tour
          </Button>
        </div>
      </div>
    </div>
  );
};
