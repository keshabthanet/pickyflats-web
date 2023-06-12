import { Divider, IconButton } from '@mui/material';
import { useEffect, useState } from 'react';
import { BsCheck2Square } from 'react-icons/bs';

import { Iamenities, useFlatStore } from '@/store/flatStore';
export const AllAmenities = () => {
  const { buildingAmenities, flatAmenities, flatPolicies } = useFlatStore();

  const [buildingAms, setBuildingAms] = useState<Iamenities[]>([]);
  const [flatAms, setFlatAms] = useState<Iamenities[]>([]);

  useEffect(() => {
    setBuildingAms(buildingAmenities);
    setFlatAms(flatAmenities);
  }, [buildingAmenities, flatAmenities]);
  return (
    <div className=' h-auto w-full py-9'>
      <div>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Building Amenities
        </h2>
        <Divider />
      </div>
      <div className='mt-9 grid grid-cols-3 gap-5'>
        {buildingAms.map((am, index) => (
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

      <div className='my-5'>
        <h2 className=' text-primary-main text-2xl font-semibold'>
          Flat Amenities
        </h2>
        <Divider />
      </div>
      <div className='mt-9 grid grid-cols-3 gap-5'>
        {flatAms.map((am, index) => (
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
