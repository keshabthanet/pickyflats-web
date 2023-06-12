import { IconButton } from '@mui/material';
import { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { MdBathroom, MdBedroomParent, MdKitchen } from 'react-icons/md';

import { Iroom } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import Dialog from '@/features/Dialog';
import { UpdateFlatModal } from '@/features/my-flats/Modal/UpdateFlatModal';

interface Iprop {
  data: Iroom | null;
}
export const FlatListCard = (props: Iprop) => {
  const { data } = props;

  const [deleteId, setDeleteId] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const { setGallery, gallery } = useFlatStore();
  const deleteRoom = () => {
    // const newGallery = gallery.filter((r) => {
    //   return r.id != deleteId;
    // });
    // setGallery([...newGallery]);
  };

  const closeDialog = () => {
    setOpenDialog(false);
  };
  const handleDeleteDialog = (id: string) => {
    setDeleteId(id);
    setOpenDialog(true);
  };
  return (
    <div>
      <Dialog
        open={openDialog}
        type='delete'
        hideDialog={closeDialog}
        callBack={deleteRoom}
        Title='Are You Sure ?'
        SubTitle='You will not be able to revert this action.'
      />
      <div className='bg-secondary-main relative flex h-[450px]  w-[300px] flex-col items-center justify-center rounded-3xl p-3 align-middle'>
        <div className='relative z-50 h-full w-full rounded-3xl'>
          {/* <ImageCard fileID={"/images/1.jpg"} /> */}
          <img
            alt=''
            src='/images/1.jpg'
            className='h-full w-full rounded-3xl'
          />
          {/* <Image src='/images/1.jpg' alt='room ' fill className='rounded-md' /> */}
        </div>
        <div className='text-primary-main absolute right-5 top-5 z-50 m-auto  flex h-[25px]  w-[60px] justify-center rounded-md  align-middle text-lg'>
          {/* <EditRoomsModal data={data} /> */}
          <UpdateFlatModal />
          <div>
            <IconButton onClick={() => handleDeleteDialog('')}>
              <AiFillDelete />
            </IconButton>
          </div>
        </div>
        <div className='relative h-auto w-full py-5'>
          <h3 className='line-clamp-1 p-1 text-lg font-bold text-white'>
            $40,000
          </h3>
          <h3 className='line-clamp-1 p-1 text-lg font-bold text-blue-950'>
            Flat For Sale In Kathmandu
          </h3>
          <h3 className='line-clamp-1 p-1 text-sm font-bold text-black'>
            Sukhedhare-1 Lalitpur{' '}
          </h3>
          <div className='flex gap-3 text-sm text-black'>
            <IconButton className=' text-lg'>
              <MdBedroomParent />
              <span className='ml-1 mt-1 text-sm'>3</span>
            </IconButton>
            <IconButton className=' text-lg'>
              <MdKitchen />
              <span className='ml-1 mt-1 text-sm'>3</span>
            </IconButton>
            <IconButton className=' text-lg'>
              <MdBathroom />
              <span className='ml-1 mt-1 text-sm'>3</span>
            </IconButton>
          </div>
          <div className='flex gap-3'>
            <span className='rounded-full border-[2px]  bg-black px-3 py-1 text-white'>
              Duplex
            </span>
            <span className='rounded-full border-[2px]  bg-black px-3 py-1 text-white'>
              1 bhk
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
