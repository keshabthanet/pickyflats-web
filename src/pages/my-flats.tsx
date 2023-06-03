import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function MyFlatsPage() {
  return <div>MyFlatsPage</div>;
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
MyFlatsPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
