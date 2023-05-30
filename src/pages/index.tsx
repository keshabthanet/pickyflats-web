import { Button } from '@mui/material';
import * as React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function HomePage() {
  const { user, logout } = useAuthStore();
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {user && (
          <>
            Hi, {user?.name} <br />
            <Button onClick={logout}>Logout</Button>
          </>
        )}
        Home page
      </main>
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
