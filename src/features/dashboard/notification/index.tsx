import { IconButton, Popover } from '@mui/material';
import React from 'react';
import { RiNotification2Fill } from 'react-icons/ri';

export default function NotificationsPopover() {
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
        <RiNotification2Fill />
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
          <div className='text-text-secondary-default px-2 text-sm font-medium'>
            Notifications
          </div>
        </div>
      </Popover>
    </div>
  );
}
