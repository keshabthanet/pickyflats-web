import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function MessagesPage() {
  return <div>MessagesPage</div>;
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
MessagesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
