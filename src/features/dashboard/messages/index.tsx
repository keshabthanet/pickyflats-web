import { Box, ClickAwayListener, IconButton, Popper } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function MessagesPopover() {
  const [panelOpen, setPanelOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const toggleOpen = () => setPanelOpen(!panelOpen);
  const handleClose = (event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target) &&
      event.target !== anchorRef.current
    ) {
      return;
    }

    setPanelOpen(false);
  };

  return (
    <div className='relative'>
      <IconButton ref={anchorRef} onClick={toggleOpen}>
        <FiMessageCircle />
      </IconButton>

      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          anchorEl={anchorRef.current}
          open={panelOpen}
          className='z-[402] rounded bg-white'
        >
          <Box
            boxShadow={3}
            className='flex h-[400px] w-[350px] flex-col overflow-hidden py-2'
          >
            <div className='text-text-secondary-default px-2 text-xl font-medium'>
              Messages
            </div>
            <div className='flex-1'></div>
            <Link
              href='/messages'
              className='text-primary-main hover:text-primary-lightExtra px-2 text-center hover:underline'
            >
              See all
            </Link>
          </Box>
        </Popper>
      </ClickAwayListener>
    </div>
  );
}
