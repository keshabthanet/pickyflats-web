import {
  Button,
  ClickAwayListener,
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

export const NavBar = () => {
  const { isAuthenticated } = useAuthStore();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='flex h-[50px] w-full bg-white px-5 md:h-[100px]'>
        <div className='flex-grow'>
          <div className='relative h-full  w-[150px] object-scale-down md:w-[200px]'>
            <Image src='/logo.svg' alt='logo' fill />
          </div>
        </div>
        <div className='flex h-full flex-shrink justify-center  gap-5 align-middle  '>
          <div className=' hidden h-full flex-col justify-center align-middle md:flex'>
            <Link href='/login'>
              <span className=' text-[16px] font-semibold'>Log In</span>
            </Link>
          </div>
          <div className='hidden h-full flex-col justify-center  align-middle md:flex'>
            <Link href='/register'>
              <Button
                variant='contained'
                className='text-[16px] font-semibold capitalize'
              >
                Sign Up
              </Button>
            </Link>
          </div>
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
                    <Link href='/'>
                      {' '}
                      <MenuItem onClick={handleClose}>List1</MenuItem>
                    </Link>

                    <MenuItem>List11</MenuItem>
                    <MenuItem>List11</MenuItem>

                    <MenuItem>List11</MenuItem>

                    <MenuItem>List11</MenuItem>
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
