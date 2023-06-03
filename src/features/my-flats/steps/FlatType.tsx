import { useState } from 'react';

import { flatTypes } from '@/datas/flatTypes';

import { FlatTypeCard } from '@/features/my-flats/cards/FlatTypeCard';

export const FlatTypes = () => {
  const [allFlatTypes, setAllFlatTypes] = useState(flatTypes);

  const handleCheck = (id: number) => {
    const f = [...allFlatTypes];
    f.forEach((d) => {
      if (d.id == id) {
        Object.assign(d, { checked: d.checked ? false : true });
        return { ...d };
      } else {
        return d;
      }
    });

    setAllFlatTypes(f);
  };

  return (
    <div className='m-auto  h-full  w-[80%]'>
      <div className='h-auto w-full pb-9 '>
        <h2 className=' text-primary-main text-[30px] font-bold'>Flat Type</h2>
        <h3 className=' text-[18px] font-semibold '>
          You Can Select Multiple Flat Types That Best Describe Your Flat
        </h3>
      </div>
      <div className='flex h-auto w-full  flex-wrap justify-center gap-5 align-middle   '>
        {allFlatTypes.map((flat) => {
          // const isSelected = flat.checked;
          return (
            <div
              key={flat.id}
              // className={`${isSelected ? 'bg-slate-400' : ' bg-slate-100'} rounded-md`}
              onClick={() => handleCheck(flat.id)}
            >
              <FlatTypeCard
                label={flat.label}
                checked={flat.checked}
                features={flat.features}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
