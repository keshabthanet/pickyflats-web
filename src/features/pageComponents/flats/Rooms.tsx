import { useFlatStore } from '@/store/flatStore';

import { AddRoomModal } from '@/features/my-flats/gallery/modal/AddRoomModal';
import { DisplayRoomCard } from '@/features/pageComponents/flats/cards/DisplayRoomCard';

export const Rooms = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'room';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayRoomCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
