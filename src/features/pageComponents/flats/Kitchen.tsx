import { useFlatStore } from '@/store/flatStore';

import { AddKitchenModal } from '@/features/my-flats/gallery/modal/AddKitchenModal';
import { DisplayKitchenCard } from '@/features/pageComponents/flats/cards/DisplayKitchenCard';

export const Kitchen = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'kitchen';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayKitchenCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
