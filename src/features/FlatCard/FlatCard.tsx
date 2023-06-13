import { Button, Divider, IconButton } from '@mui/material';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { FcLike } from 'react-icons/fc';
import { RiShareForwardFill } from 'react-icons/ri';

import { DATABASE_ID, databases, LISTINGS_ID } from '@/lib/client';
import { timeAgo } from '@/lib/date';

import Modal from '@/components/Modal';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import ReserveModal from '@/features/listings/ReserveModal';
import RequestForTourModal from '@/features/tour-request/RequestForTourModal';

import { Listing } from '@/types/listing';

export const FlatCardV1 = ({ item }: { item: Listing }) => {
  const { user } = useAuthStore();
  const { openSnackbar } = useSnackbarStore();
  const [inSavedList, setInSavedList] = React.useState(false);

  const [tourModal, setTourModal] = React.useState(false);
  const [reserveModal, setReserveModal] = useState(false);

  React.useEffect(() => {
    setInSavedList(item?.saved_by.includes(user?.$id));
  }, [user]);

  const handleAddtoList = async () => {
    if (!user) {
      openSnackbar('Please login to add to list!', 'info');
      return;
    }
    const savedList = inSavedList
      ? item?.saved_by.filter((a) => a !== user?.$id)
      : [...item!.saved_by, user!.$id];
    await databases.updateDocument(DATABASE_ID, LISTINGS_ID, item?.$id, {
      saved_by: savedList,
    });
    openSnackbar(`Flat ${inSavedList ? 'Removed from ' : 'Added to '} My List`);
    setInSavedList(!inSavedList);
  };

  const handleOpenTourModal = () => {
    if (!user) {
      openSnackbar('Please login to use this feature!', 'info');
      return;
    }
    setTourModal(true);
  };

  // workflow for reservation
  // allow user to choose and proceed even without any account
  // save reservation in localstorage until user has cleared /reserved
  // quick reservation without pickyflats account, only using phone number or email and verification code
  const handleReserveClick = () => {
    setReserveModal(true);
  };

  return (
    <>
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
                    {item.costs?.currency} {item.costs?.monthlyCost}
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
            <Link href={`/flats/${item.$id}`}>{item?.flatStreet1}</Link>
          </h3>
          <h4 className=' text-sm text-blue-600'>
            {timeAgo(new Date(item.$createdAt), { suffix: true })}
          </h4>
        </div>
        <div className='m-auto w-[96%]'>
          <Divider />
        </div>
        <div className='flex flex-wrap gap-2 p-1 '>
          {/* !TODO: fetch nearyby points using geo points */}

          {item?.bathroom ? (
            <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
              {item?.bathroom} Bathrooms
            </span>
          ) : (
            ''
          )}
          {item?.room ? (
            <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
              {item?.room} Large rooms
            </span>
          ) : (
            ''
          )}
          {/* <span className='hover:bg-primary-main rounded-full bg-black p-1.5 px-2 text-xs text-white'>
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
            <IconButton>
              <RiShareForwardFill />
            </IconButton>
          </div>
          <div className='space-x-2'>
            {/* <Button
              variant='contained'
              className='bg-secondary-main !text-whtie relative top-1 h-[30px]'
              onClick={handleReserveClick}
            >
              Reserve
            </Button> */}
            <Button
              variant='outlined'
              className='relative top-1 h-[30px]'
              onClick={handleOpenTourModal}
            >
              Request Tour
            </Button>
          </div>
        </div>
      </div>

      <Modal isOpen={reserveModal} onClose={() => setReserveModal(false)}>
        <ReserveModal
          listing={item}
          listingID={item?.$id}
          onClose={() => setTourModal(false)}
        />
      </Modal>
      <Modal
        isOpen={tourModal}
        className=''
        onClose={() => setTourModal(false)}
      >
        <RequestForTourModal
          listingID={item?.$id}
          onClose={() => setTourModal(false)}
        />
      </Modal>
    </>
  );
};
