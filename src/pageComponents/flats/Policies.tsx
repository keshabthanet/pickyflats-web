import { Divider, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { BsCheck2Square } from 'react-icons/bs';

import { Iamenities, useFlatStore } from '@/store/flatStore';
export const Policies = () => {
  const { flatPolicies } = useFlatStore();

  const [policies, setPolicies] = useState<Iamenities[]>([]);

  useEffect(() => {
    setPolicies(flatPolicies);
  }, [flatPolicies]);
  return (
    <div className=' h-auto w-full py-9'>
      <div>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Rules & Policies
        </h2>
        <Divider />
      </div>
      <div className='mt-9 grid grid-cols-3 gap-5'>
        {policies.map((am, index) => (
          <h3
            key={index}
            className=' text-secondary-main text-sm font-semibold'
          >
            <span className='relative top-[-3px]'>
              <IconButton>
                <BsCheck2Square />
              </IconButton>
            </span>
            {am.name}
          </h3>
        ))}
      </div>
    </div>
  );
};
