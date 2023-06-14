import React from 'react';

import useResponsive from '@/hooks/useResponsive';

import useDrawerStore from '@/store/useDrawerStore';

import DashboardSidebar from '@/features/layout/Sidebar';

import { NavBar } from '../../features/layout/NavBar';

interface IProps {
  children: React.ReactNode;
  footer?: boolean;
}

type Props = IProps;

function DashboardLayout(props: Props) {
  const { isOpen, native, setNative, open, close } = useDrawerStore();
  const { children } = props;

  const isLargeScreen = useResponsive('up', 'lg');
  const isMediumScreen = useResponsive('down', 'md');

  const sidebarOverflow = !isLargeScreen && isOpen;
  return (
    <div className='flex flex-col'>
      <div className='fixed top-0 z-[401] w-full'>
        <NavBar />
      </div>
      <DashboardSidebar />

      <div
        className='relative flex flex-col pt-[50px] md:pt-[70px]'
        style={{
          marginLeft: !isMediumScreen && isOpen && native ? 240 : 0,
          height: isMediumScreen ? '100%' : '100vh',
        }}
      >
        {children}
        {sidebarOverflow && (
          <div
            onClick={close}
            className='fixed inset-0 z-[402] bg-gray-900 bg-opacity-50'
          ></div>
        )}
      </div>
      {props.footer && <div>footer</div>}
    </div>
  );
}

export default DashboardLayout;
