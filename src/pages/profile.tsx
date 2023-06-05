import * as React from 'react';

import MainLayout from '@/components/layout/MainLayout';
import Seo from '@/components/Seo';

import useAuthStore from '@/store/useAuthStore';

import ProfileImage from '@/features/Profile/ProfileImage';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';
export default function ProfilePage() {
  const { user, logout } = useAuthStore();
  return (
    <>
      <Seo templateTitle='Profile' />
      <div>
        <div className='flex flex-col border-b border-gray-200 px-4 py-2'>
          <h2 className='text-2xl font-semibold'>Profile Settings</h2>
          <div className='text-secondary-main'>
            Update your photo and personal details here.{' '}
          </div>
        </div>
        {/* profile upload area */}
        <div className='flex items-center space-x-2 border-b border-gray-200  px-4 py-2 pb-4'>
          <ProfileImage />
        </div>
        <div>profile data update form ... </div>
      </div>
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
