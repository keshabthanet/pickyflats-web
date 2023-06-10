import React, { useState } from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function MyBookings() {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className='w-full p-5'>
      <h3 className='text-3xl font-semibold'>My Bookings</h3>

      <div className='flex'>booked flat lists ..</div>
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
MyBookings.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
