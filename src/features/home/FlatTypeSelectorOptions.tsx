import React from 'react';

import useListingsStore from '@/store/useListingsStore';

import { typeOfFlats } from '@/constant/app';

export default function FlatTypeSelectorOptions() {
  const { activeTypeFilter, setTypeFilter } = useListingsStore();
  return (
    <div className='flex w-full flex-wrap justify-center gap-4 text-center'>
      {typeOfFlats.map((type, index) => {
        return (
          <div
            onClick={() => {
              if (activeTypeFilter === type) setTypeFilter('');
              else setTypeFilter(type);
            }}
            key={index}
            className={`${
              type == activeTypeFilter ? 'bg-[#101820]' : 'bg-primary-light'
            } flex  h-[25px] w-auto cursor-pointer flex-col justify-center rounded-[20px] px-4 text-center align-middle text-xs text-white hover:bg-[#101820] md:h-[36px] md:text-sm`}
          >
            {type}
          </div>
        );
      })}
    </div>
  );
}
