import * as React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import { Header } from '@/features/Header';
import { SearchResults } from '@/features/SearchResults';
import { Video } from '@/features/Video';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';
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

function LayoutWrapper(props: WithAuthProps) {
  return <MainLayout>{props.page}</MainLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'optional'
);
HomePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
