import { Button, Divider } from '@mui/material';
import React, { useState } from 'react';

import Modal from '@/components/Modal';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import RequestForTourModal from '@/features/tour-request/RequestForTourModal';

export default function FlatSidebar({ listing }: { listing }) {
  const { user } = useAuthStore();
  const { openSnackbar } = useSnackbarStore();
  const [tourModal, setTourModal] = useState(false);
  const handleOpenTourModal = () => {
    if (!user) {
      openSnackbar('Please login to use this feature!', 'info');
      return;
    }
    setTourModal(true);
  };

  return (
    <>
      <div className='relative z-50 flex h-full w-full flex-col rounded-md bg-[#74f574] p-5'>
        <div className=' flex text-xl text-white'>
          <div className='flex-grow font-semibold'>
            {listing?.costs?.currency} {listing?.costs?.monthlyCost}
          </div>
          <div className=' rounded-[20px] border-[2px] bg-black px-4 py-1 text-center text-sm'>
            Rent
          </div>
        </div>
        <div className=' flex-grow'>
          <h2 className=' text-primary-main text-lg font-semibold'>
            Location Info:
          </h2>
          <Divider />
          <h3 className='text-lg font-medium text-blue-950'>
            {listing?.flatCity}, {listing?.flatCountry}
          </h3>
          <h4 className='text-lg font-medium text-blue-950'>
            {listing?.flatStreet1}
          </h4>

          <div className='flex flex-wrap gap-1'>
            {listing?.room ? (
              <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                {listing?.room} Rooms
              </div>
            ) : (
              ''
            )}
            {listing?.kitchen ? (
              <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                {listing?.kitchen} Kitchen
              </div>
            ) : (
              ''
            )}

            {listing?.bathroom ? (
              <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
                {listing?.bathroom} bathroom
              </div>
            ) : (
              ''
            )}

            <div className=' bg-primary-main rounded-[20px] border-[2px] px-4 py-1 text-center text-sm text-white'>
              {listing?.costs?.negotiable}
            </div>
          </div>
        </div>
        <div>
          <Button variant='contained' onClick={handleOpenTourModal}>
            Request A Tour
          </Button>
        </div>
      </div>
      <Modal
        isOpen={tourModal}
        className=''
        onClose={() => setTourModal(false)}
      >
        <RequestForTourModal
          sellerID={listing.userID}
          listingID={listing?.$id}
          onClose={() => setTourModal(false)}
        />
      </Modal>
    </>
  );
}
