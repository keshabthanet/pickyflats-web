import { Button } from '@mui/material';
import React from 'react';
import { BsBuildingFillAdd } from 'react-icons/bs';

import DashboardLayout from '@/components/layout/DashboardLayout';

import { AddFlatModal } from '@/features/my-flats/Modal/AddFlatModal';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function MyFlats() {
  return (
    <div className='w-full p-5'>
      <div className='flex h-9 w-full p-3'>
        <div className='flex-grow'></div>
        <div>
          <AddFlatModal />
        </div>
      </div>
    </div>
  );
}

// function LayoutWrapper(props: WithAuthProps) {
//   return <DashboardLayout>{props.page}</DashboardLayout>;
// }

// const HomePageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
//   LayoutWrapper,
//   'all'
// );
// MyFlats.getLayout = function getLayout(page: React.ReactElement) {
//   return <HomePageWrapper page={page} />;
// };
