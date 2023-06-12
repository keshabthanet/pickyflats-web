import { Alert, AlertTitle, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { fetchListingsByUserId } from '@/database/listings';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Modal from '@/components/Modal';

import useAuthStore from '@/store/useAuthStore';

import { MyFlatCard } from '@/features/FlatCard/MyFlatCard';
import { AddFlatModal } from '@/features/my-flats/Modal/AddFlatModal';
// import VerificationRequestModal from '@/features/profileVerification/VerificationModal';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

import { Listing } from '@/types/listing';
export default function MyFlats() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const { user } = useAuthStore();
  const [myFlats, setMyFlats] = useState<Listing[]>([]);

  const fetchMyListingsData = async () => {
    const myFlats = await fetchListingsByUserId(user?.$id);
    setMyFlats(myFlats);
  };
  useEffect(() => {
    fetchMyListingsData();
  }, []);
  // const
  // TODO: refresh fetched myflat data on listing created
  return (
    <div className='w-full p-5'>
      <Alert severity='info' className='kdj'>
        <div className='items-start space-y-2 md:flex md:justify-between md:space-x-2'>
          <div>
            <AlertTitle>Profile Verification Required</AlertTitle>
            Create your listing now, but please note that it will be visible to
            the public only after profile verification.
          </div>
          <div className='my-auto flex md:justify-end'>
            <Button variant='contained' onClick={() => setOpen(true)}>
              Start Verification
            </Button>
          </div>
        </div>
      </Alert>

      <Modal isOpen={open} className='' onClose={handleClose}>
        VerificationRequestModal
        {/* <VerificationRequestModal /> */}
      </Modal>

      <div className='flex h-9 w-full py-3'>
        <div className='flex-grow'>
          <h2 className=' text-primary-main text-2xl font-semibold'>
            My Flats
          </h2>
        </div>
        <div>
          <AddFlatModal
          // onListingCreated={() => }
          />
        </div>
      </div>

      <div className='mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {myFlats.map((item, i) => (
          <MyFlatCard item={item} key={i} />
        ))}
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const HomePageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
MyFlats.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
