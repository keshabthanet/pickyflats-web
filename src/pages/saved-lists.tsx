import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import useAuthStore from '@/store/useAuthStore';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function SavedListPage() {
  const { user } = useAuthStore();
  return <div>Saved Lists ... </div>;
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const HomePageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
SavedListPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HomePageWrapper page={page} />;
};
