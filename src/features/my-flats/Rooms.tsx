import { DisplayRoomCard } from '@/features/my-flats/cards/DisplayRoomCard';
import { AddRoomsModal } from '@/features/my-flats/Modal/AddRoomModal';

export const Rooms = () => {
  return (
    <div>
      <div className=' flex h-auto w-full justify-center py-5 '>
        <AddRoomsModal />
      </div>

      <div className='mt-5 w-full'>
        <DisplayRoomCard />
      </div>
    </div>
  );
};
