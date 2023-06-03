import {
  Button,
  ClickAwayListener,
  Divider,
  MenuItem,
  MenuList,
  Popper,
} from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CgMenuRightAlt } from 'react-icons/cg';
import { IoPersonCircle } from 'react-icons/io5';

import useAuthStore from '@/store/useAuthStore';

import MessagesPopover from '@/features/dashboard/messages';
import NotificationsPopover from '@/features/dashboard/notification';

export const NavBar = () => {
  const { isAuthenticated, logout } = useAuthStore();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
    handleClose();
  };

  return (
    <>
      <div className='flex h-[50px] w-full border-b border-solid bg-white px-5 shadow-sm md:h-[70px]'>
        <div className='flex-grow'>
          <Link href='/'>
            <div className='relative h-full  w-[150px] object-scale-down md:w-[200px]'>
              <Image src='/logo.svg' alt='logo' fill />
            </div>
          </Link>
        </div>
        <div className='flex h-full flex-shrink justify-center  gap-5 align-middle  '>
          {!isAuthenticated && (
            <>
              <div className='hidden h-full flex-col justify-center align-middle md:flex'>
                <Link href='/auth/login'>
                  <span className=' text-[16px] font-semibold'>Log In</span>
                </Link>
              </div>
              <div className='hidden h-full flex-col justify-center  align-middle md:flex'>
                <Link href='/auth/register'>
                  <Button
                    variant='contained'
                    className='text-[16px] font-semibold capitalize'
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </>
          )}

          {isAuthenticated && (
            <div className='flex h-full items-center justify-center space-x-2'>
              <NotificationsPopover />
              <MessagesPopover />
            </div>
          )}

          <div className='relative box-border flex h-full  flex-col justify-center  align-middle'>
            <div
              className='flex cursor-pointer rounded-[15%] border bg-slate-100 p-1 text-[21px] shadow-sm md:p-2 md:text-[25px] '
              onClick={handleOpen}
            >
              <CgMenuRightAlt />

              <IoPersonCircle />
            </div>
            <div className='relative z-50  bg-slate-300'>
              <Popper
                open={open}
                style={{
                  position: 'absolute',

                  minWidth: '150px',
                  left: '-100px',

                  top: '10px',
                }}
                transition
                placement='left-start'
                disablePortal
                className='absolute rounded-md bg-white shadow-md'
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    id='composition-menu'
                    aria-labelledby='composition-button'
                  >
                    <div className='py-2'>
                      <Link href='/dashboard/listing/new'>
                        <MenuItem onClick={handleClose}>
                          List Flat/Apartment
                        </MenuItem>
                      </Link>
                      <Link href='/saved-lists'>
                        <MenuItem>Saved Lists</MenuItem>
                      </Link>
                    </div>

                    <Divider />
                    {isAuthenticated && (
                      <div className='py-2'>
                        <MenuItem>Account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </div>
                    )}
                  </MenuList>
                </ClickAwayListener>
              </Popper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
