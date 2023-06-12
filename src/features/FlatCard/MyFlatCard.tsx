import { Button, Divider, IconButton } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';
import { FcLike } from 'react-icons/fc';
import { RiDeleteBinLine } from 'react-icons/ri';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import { timeAgo } from '../../lib/date';

import { Listing } from '@/types/listing';

export const MyFlatCard = ({ item }: { item: Listing }) => {
  const { user } = useAuthStore();
  const { openSnackbar } = useSnackbarStore();

  const handleDeleteListing = async () => {
    openSnackbar('Delete logic need to be implemented', 'warning');
    // delete logic ..
    // confirm delete by asking in dialog & delete listing
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
                <span className=' text-primary-light font-normal'>
                  {item?.costs.currency} {item?.costs.monthlyCost}
                </span>
              </span>
            </div>
            <IconButton
              color='error'
              onClick={handleDeleteListing}
              className={clsx('bg-red-200 hover:bg-red-300')}
            >
              <RiDeleteBinLine className='relative m-auto ' />
            </IconButton>
          </div>
        </div>
      </div>
      <div className='flex w-full p-2'>
        <h3 className='flex-grow text-lg font-medium text-blue-900'>
          {item?.flatStreet1}
        </h3>
        <h4 className=' text-sm text-blue-600'>
          {timeAgo(new Date(item.$createdAt), { suffix: true })}
        </h4>
      </div>
      <div className='m-auto w-[96%]'>
        <Divider />
      </div>
      <div className='flex flex-wrap gap-2 p-1 '>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          {item?.bathroom} Bathrooms
        </span>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          {item?.room} Large rooms
        </span>
        {/* !TODO: fetch nearyby points using geo points */}
        {/* <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          Near By City Hospital
        </span>
        <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
          Near By City Hospital
        </span> */}
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
