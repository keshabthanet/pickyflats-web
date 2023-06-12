import { Drawer, useMediaQuery, useTheme } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { BsBuildingCheck, BsBuildings } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import { RxActivityLog, RxDashboard } from 'react-icons/rx';
import { TbBuildingCarousel } from 'react-icons/tb';

import useDrawerStore from '@/store/useDrawerStore';

const drawerWidth = 240;

export default function DashboardSidebar() {
  const { close, isOpen, open } = useDrawerStore();
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const updateSidebarView = () => {
      !isMediumScreen && open();
      isMediumScreen && close();
    };
    updateSidebarView();
  }, [close, isMediumScreen, open]);

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          position: 'absolute',
          // marginTop: '60px',
          marginTop: '72px',
          // height: `calc(100vh - ${isMediumScreen ? '50' : '100'}px)`,
          height: `calc(100vh - 100px)`,
        },
      }}
      variant='persistent'
      anchor='left'
      open={isOpen}
      onClose={close}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <SidebarDrawerContainer />
    </Drawer>
  );
}

function SidebarDrawerContainer() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const isActiveRoute = (route) => route === currentRoute;
  return (
    <div className='w-full bg-white px-4 py-2'>
      <ul className='w-full list-none space-y-2 p-0'>
        <li>
          <Link
            href='/dashboard'
            className={`flex items-center rounded-lg p-2 text-sm font-normal text-gray-500 no-underline hover:bg-[#F2F2FE] 
                ${
                  isActiveRoute('/dashboard')
                    ? 'bg-[#F2F2FF] !font-medium text-[#6D67E4]'
                    : ''
                }
            `}
          >
            <RxDashboard className='h-5 w-5' />
            <span className='ml-3'>Dashboard</span>
          </Link>
        </li>{' '}
        <li>
          <Link
            href='/my-flats'
            className={`flex items-center rounded-lg p-2 text-sm font-normal text-gray-500 no-underline hover:bg-[#F2F2FE] 
                ${
                  isActiveRoute('/my-flats')
                    ? 'bg-[#F2F2FF] !font-medium text-[#6D67E4]'
                    : ''
                }
            `}
          >
            <BsBuildings className='h-5 w-5' />
            <span className='ml-3'>My Flats</span>
          </Link>
        </li>
        <li>
          <Link
            href='/activity'
            className={`flex items-center rounded-lg p-2 text-sm font-normal text-gray-500 no-underline hover:bg-[#F2F2FE] 
                ${
                  isActiveRoute('/activity')
                    ? 'bg-[#F2F2FF] !font-medium text-[#6D67E4]'
                    : ''
                }
            `}
          >
            <RxActivityLog className='h-5 w-5' />
            <span className='ml-3'>Activities</span>
          </Link>
        </li>
        <li>
          <Link
            href='/saved-lists'
            className={`flex items-center rounded-lg p-2 text-sm font-normal text-gray-500 no-underline hover:bg-[#F2F2FE] 
                ${
                  isActiveRoute('/saved-lists')
                    ? 'bg-[#F2F2FF] !font-medium text-[#6D67E4]'
                    : ''
                }
            `}
          >
            <BsBuildingCheck className='h-5 w-5' />
            <span className='ml-3'>Saved List</span>
          </Link>
        </li>
        <li>
          <Link
            href='/tour-requests'
            className={`flex items-center rounded-lg p-2 text-sm font-normal text-gray-500 no-underline hover:bg-[#F2F2FE] 
                ${
                  isActiveRoute('/tour-requests')
                    ? 'bg-[#F2F2FF] !font-medium text-[#6D67E4]'
                    : ''
                }
            `}
          >
            <TbBuildingCarousel className='h-5 w-5' />
            <span className='ml-3'>Tour Request</span>
          </Link>
        </li>
        <li>
          <Link
            href='/messages'
            className={`flex items-center rounded-lg p-2 text-sm font-normal text-gray-500 no-underline hover:bg-[#F2F2FE] 
                ${
                  isActiveRoute('/messages')
                    ? 'bg-[#F2F2FF] !font-medium text-[#6D67E4]'
                    : ''
                }
            `}
          >
            <FiMessageCircle className='h-5 w-5' />
            <span className='ml-3'>Messages</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
