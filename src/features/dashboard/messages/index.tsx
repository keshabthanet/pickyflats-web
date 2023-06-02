import { IconButton, Popover } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { FiMessageCircle } from 'react-icons/fi';

export default function MessagesPopover() {
  const [panelPopover, setPanelPopover] = React.useState<HTMLElement | null>(
    null
  );
  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setPanelPopover(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setPanelPopover(null);
  };
  return (
    <div>
      <IconButton onClick={handlePopoverOpen}>
        <FiMessageCircle />
      </IconButton>

      <Popover
        anchorEl={panelPopover}
        open={Boolean(panelPopover)}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <div className='flex h-[400px] w-[350px] flex-col overflow-hidden py-2'>
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
        </div>
      </Popover>
    </div>
  );
}
