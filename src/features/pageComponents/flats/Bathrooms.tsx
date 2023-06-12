import { useFlatStore } from '@/store/flatStore';

import { AddBathroomModal } from '@/features/my-flats/gallery/modal/AddBathroomModal';
import { DisplayBathRoomCard } from '@/features/pageComponents/flats/cards/DisplayBathroomCard';

export const Bathrooms = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'bathroom';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayBathRoomCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
