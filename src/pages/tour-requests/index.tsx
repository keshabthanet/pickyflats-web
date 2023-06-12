import { Button, IconButton } from '@mui/material';
import React from 'react';
import { IoTimeSharp } from 'react-icons/io5';
import { TbMessageCircle2Filled } from 'react-icons/tb';

import DashboardLayout from '@/components/layout/DashboardLayout';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function TourRequestPage() {
  const { user } = useAuthStore();
  console.log(user);
  return (
    <div>
      <div className='h-auto w-full p-5'>
        <div className=' m-auto flex min-h-[200px] w-[500px] flex-col rounded-3xl bg-slate-100 p-5 text-center shadow-lg'>
          <div className='flex-grow'>
            <h2 className=' text-xl font-semibold'>
              Ayush Thapa Has Requested For Tour
            </h2>
            <p className=' mt-3 text-sm text-[#6f7174]'>
              Hi, I am ayush thapa from Kathmandu, Nepal. I saw your flat
              listing on picky flat I am highly interested to visit and make
              tour on your apartment
            </p>
            <p className=' mt-3 text-sm text-[#6f7174]'>
              <span className='relative '>
                <IconButton>
                  <IoTimeSharp />
                </IconButton>
              </span>
              3 jan 1:30 pm
            </p>
          </div>

          <div className='my-3 h-auto w-full rounded-lg  bg-slate-900 py-3 text-black'>
            <h2 className=' py-3 font-semibold text-white'>
              3BHK Flat for Rent At Lokanthali, Kathmandu
            </h2>
            <div className=' flex px-3 text-left '>
              <div className='flex-grow'>
                <span className='rounded-xl border-[2px] bg-black px-3 py-1 text-sm text-white'>
                  1 BHK
                </span>
                <span className='rounded-xl border-[2px] bg-black px-3 py-1 text-sm text-white'>
                  luxury flat
                </span>
              </div>
              <div>
                <span className='text-lg font-bold text-white'>$45,000</span>
              </div>
            </div>
          </div>
          <div className='flex'>
            <div className='flex-grow text-left'>
              <Button
                startIcon={<TbMessageCircle2Filled className=' mt-[-4px]' />}
              >
                Message
              </Button>
            </div>
            <Button>Accept Request</Button>
          </div>
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
