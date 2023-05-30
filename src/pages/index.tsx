import { Button } from '@mui/material';
import * as React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
import { Video } from '@/features/Video';
import { Header } from '@/features/Header';
import { SearchResults } from '@/features/SearchResults';
export default function HomePage() {
  const { user, logout } = useAuthStore();
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      {/* main header part */}
      <main className=' relative h-[85vh] w-full'>
        <div className='absolute h-full w-full'>
          <Video url='/videos/bg.mp4' />
        </div>
        <div className='-h-full relative z-10 w-full'>
          <Header />
        </div>
      </main>
      <div>
        <SearchResults />
      </div>
    </>
  );
}

function Hello(props: WithAuthProps) {
  return <MainLayout>{props.page}</MainLayout>;
}

const HomePageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  Hello,
  'optional'
);
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
