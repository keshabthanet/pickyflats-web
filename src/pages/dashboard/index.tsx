import React from 'react';

import MainLayout from '@/components/layout/MainLayout';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function DashboardPage() {
  const { user } = useAuthStore();
  return <div>DashboardPage</div>;
}

function LayoutWrapper(props: WithAuthProps) {
  return <MainLayout>{props.page}</MainLayout>;
}

const HomePageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
DashboardPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
