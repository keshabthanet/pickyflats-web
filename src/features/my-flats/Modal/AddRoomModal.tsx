import { Button, Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { SiAddthis } from 'react-icons/si';

import Input from '@/components/Input';

import Uploader from '@/features/Uploader';

export const AddRoomsModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div onClick={() => setOpen(true)}>
        <Button startIcon={<SiAddthis />} className=' capitalize'>
          Add Room
        </Button>

        {/* <AddCard /> */}
      </div>
      <div>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth='md'
          fullWidth
        >
          <div className='flex h-[70vh] w-full flex-col p-5 text-center  '>
            <div className='flex h-auto w-full flex-row-reverse'>
              <IconButton onClick={() => setOpen(false)}>
                <IoClose />
              </IconButton>
            </div>
            <div className='m-auto h-full w-[80%]'>
              <Input label='Room Name' />
              <Uploader onSuccess={() => console.log('d')} />
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
