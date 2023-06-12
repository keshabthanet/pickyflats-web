import React from 'react';

import { AddFlatModal } from '@/features/my-flats/Modal/AddFlatModal';
import { FlatListCard } from '@/pageComponents/dashboard/cards/FlatListCard';

export default function MyFlats() {
  return (
    <div className='w-full p-9'>
      <div className='flex h-9 w-full p-3 pb-9'>
        <div className='flex-grow'></div>
        <div>
          <AddFlatModal />
        </div>
      </div>
      {/* flat listing */}
      <div>
        <h2 className=' text-primary-main pb-9 text-3xl font-semibold'>
          My Flats
        </h2>
      </div>
      <div className='flex flex-wrap gap-9'>
        <FlatListCard data={null} />
        <FlatListCard data={null} />

        <FlatListCard data={null} />
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
