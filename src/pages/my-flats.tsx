import { Alert, AlertTitle, Button } from '@mui/material';
import React, { useState } from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Modal from '@/components/Modal';

import { AddFlatModal } from '@/features/my-flats/Modal/AddFlatModal';
// import VerificationRequestModal from '@/features/profileVerification/VerificationModal';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function MyFlats() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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

      <div className='flex h-9 w-full p-3'>
        <div className='flex-grow'></div>
        <div>
          <AddFlatModal
          // onListingCreated={() => }
          />
        </div>
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
