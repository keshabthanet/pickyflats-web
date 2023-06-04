import { IconButton } from '@mui/material';
import Image from 'next/image';
import { AiFillDelete } from 'react-icons/ai';

import { EditRoomsModal } from '@/features/my-flats/Modal/EditRoomModal';

export const DisplayRoomCard = () => {
  return (
    <div>
      <div className='relative flex h-[250px] w-[200px]  flex-col items-center justify-center rounded-md bg-slate-100 p-3 align-middle'>
        <div className='relative z-50 h-full w-full rounded-lg'>
          <Image src='/images/1.jpg' alt='room ' fill className='rounded-md' />
        </div>
        <div className='text-primary-main absolute right-5 top-5 z-50 m-auto  flex h-[25px]  w-[60px] justify-center rounded-md  align-middle text-lg'>
          <EditRoomsModal />
          <div>
            <IconButton>
              <AiFillDelete />
            </IconButton>
          </div>
        </div>
        <div className='relative h-8 w-full'>
          <h3 className='text-primary-main line-clamp-1 p-1 text-lg font-bold'>
            Hall Room
          </h3>
        </div>
      </div>
    </div>
  );
};
