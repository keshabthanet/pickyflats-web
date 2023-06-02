import React from 'react';

import { DashNavBar } from '@/features/NavBar/DashNavBar';
import { Sidebar } from '@/features/Sidebar';

interface IProps {
  children: React.ReactNode;
}

type Props = IProps;

function DashLayout(props: Props) {
  const { children } = props;
  return (
    <div className='h-[100vh] w-[100vw] bg-red-700'>
      <div>
        <DashNavBar />
      </div>
      <div className='w-[calc(100vh - 70px)] bg-black'>
        <div>
          <Sidebar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default DashLayout;
