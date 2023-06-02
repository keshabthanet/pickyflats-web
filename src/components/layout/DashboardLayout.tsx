import { useMediaQuery, useTheme } from '@mui/material';
import React from 'react';

import useDrawerStore from '@/store/useDrawerStore';

import DashboardSidebar from '@/features/dashboard/Sidebar';

import { NavBar } from '../../features/NavBar';

interface IProps {
  children: React.ReactNode;
}

type Props = IProps;

function DashboardLayout(props: Props) {
  const { isOpen, native, setNative, open, close } = useDrawerStore();

  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  const { children } = props;

  const sidebarOverflow = !isLargeScreen && isOpen;
  return (
    <div className='flex flex-col'>
      <div>
        <div className='border border-b'>
          <NavBar />
        </div>
        <DashboardSidebar />
      </div>

      <div
        className='relative flex flex-col'
        style={{
          marginLeft: !isMediumScreen && isOpen && native ? 240 : 0,
          height: isMediumScreen ? '100%' : 'calc(100vh - 60px)',
        }}
      >
        {children}
        {sidebarOverflow && (
          <div
            onClick={close}
            className='fixed inset-0 z-[1] bg-gray-900 bg-opacity-50'
          ></div>
        )}
      </div>
      <div>footer</div>
    </div>
  );
}

export default DashboardLayout;
