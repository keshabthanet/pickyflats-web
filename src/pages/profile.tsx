import * as React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function ProfilePage() {
  const { user, logout } = useAuthStore();
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div>profile page</div>
    </>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <MainLayout>{props.page}</MainLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
ProfilePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
