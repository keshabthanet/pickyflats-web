import DashLayout from '@/components/layout/DashLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export const Dashboard = () => {
  return <div>Dashboard</div>;
};

export default Dashboard;

function LayoutWrapper(props: WithAuthProps) {
  return <DashLayout>{props.page}</DashLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'optional'
);
Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
