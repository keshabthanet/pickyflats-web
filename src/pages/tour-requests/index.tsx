import React, { useEffect, useState } from 'react';

import { getTourRequestsForSeller, TourRequest } from '@/database/tourRequests';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
import TourRequestCard from '@/pageComponents/tourRequests/TourRequestCard';

export default function TourRequestPage() {
  const { user } = useAuthStore();

  const [loading, setLoading] = useState(true);
  const [requests, setRequests] = useState<TourRequest[]>([]);

  const { openSnackbar } = useSnackbarStore();

  const fetchTourRequestedListingsData = async () => {
    try {
      const requests: any = await getTourRequestsForSeller(user?.$id);
      setRequests(requests);
    } catch (error) {
      openSnackbar('Failed to fetch my listings', 'error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTourRequestedListingsData();
  }, []);

  return (
    <div>
      <div className='h-auto w-full p-5 '>
        <div className='flex-grow'>
          <h2 className=' text-primary-main text-2xl font-semibold'>
            Requests for Tour
          </h2>
        </div>

        {loading && (
          <div className='py-4'>
            <Loader />
          </div>
        )}

        <div className='flex flex-wrap gap-4 py-4'>
          {requests.map((item, i) => (
            <TourRequestCard key={i} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
TourRequestPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
