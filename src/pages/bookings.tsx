import React, { useEffect, useState } from 'react';

import { getReservedListingsForUser } from '@/database/booking';

import DashboardLayout from '@/components/layout/DashboardLayout';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function MyBookings() {
  const { user } = useAuthStore();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [bookedFlats, setBookedFlats] = useState<any[]>([]);

  const fetchReservedListings = async () => {
    const listings = await getReservedListingsForUser(user?.$id);
    setBookedFlats(listings);
    console.log('listings ? ', listings);
  };

  useEffect(() => {
    fetchReservedListings();
  }, []);

  return (
    <div className='w-full p-5'>
      <h3 className='text-primary-main text-3xl font-semibold'>My Bookings</h3>

      <div className='flex'>
        list out booked flats with payment status, booking status ..
      </div>
      <div className='text-2xl font-semibold '>
        totla booked count : {bookedFlats?.length}
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
MyBookings.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
