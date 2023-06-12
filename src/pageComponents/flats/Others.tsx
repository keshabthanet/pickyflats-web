import { useFlatStore } from '@/store/flatStore';

import { DisplayOtherRoomCard } from '@/pageComponents/flats/cards/DisplayOtherRoomCard';

export const Others = () => {
  const { gallery } = useFlatStore();
  return (
    <div>
      <div className='mt-5 flex w-full flex-wrap gap-5'>
        {gallery
          .filter((g) => {
            return g.roomType == 'other';
          })
          .map((r) => {
            return (
              <div key={r.id}>
                <DisplayOtherRoomCard data={r} />
              </div>
            );
          })}
      </div>
    </div>
  );
};
