import { Divider, IconButton } from '@mui/material';
import { useState } from 'react';
import { ImCheckmark } from 'react-icons/im';
import { RiCheckboxBlankLine } from 'react-icons/ri';

import { buildingAmenities } from '@/datas/buildingAmenities';
import { flatAmenities } from '@/datas/flatAmenities';
import { flatPolicies } from '@/datas/policies';

export const FeaturesAndPolicies = () => {
  const [allBuildingAmenities, setAllBuildingAmenities] =
    useState(buildingAmenities);

  const handleBuildingCheck = (id: number) => {
    const f = [...allBuildingAmenities];
    f.forEach((d) => {
      if (d.id == id) {
        Object.assign(d, { checked: d.checked ? false : true });
        return { ...d };
      } else {
        return d;
      }
    });

    setAllBuildingAmenities(f);
  };

  const [allFlatAmenities, setAllFlatAmenities] = useState(flatAmenities);

  const handleFlatCheck = (id: number) => {
    const f = [...allFlatAmenities];
    f.forEach((d) => {
      if (d.id == id) {
        Object.assign(d, { checked: d.checked ? false : true });
        return { ...d };
      } else {
        return d;
      }
    });

    setAllFlatAmenities(f);
  };

  const [allPolicies, setAllPolicies] = useState(flatPolicies);

  const handlePoliciesCheck = (id: number) => {
    const f = [...allPolicies];
    f.forEach((d) => {
      if (d.id == id) {
        Object.assign(d, { checked: d.checked ? false : true });
        return { ...d };
      } else {
        return d;
      }
    });

    setAllPolicies(f);
  };

  return (
    <div className='m-auto  h-full  w-[80%] '>
      <div>
        {/* <h2 className=' text-primary-main text-[30px] font-bold'>
          Features & Policies
        </h2> */}
      </div>
      <div>
        <h3 className='  text-[18px] font-semibold '>Building Amenities</h3>
        <div className='mt-5 flex flex-wrap gap-5'>
          {allBuildingAmenities.map((a) => {
            return (
              <div
                key={a.id}
                onClick={() => handleBuildingCheck(a.id)}
                className={`flex min-w-[330px] max-w-[350px] cursor-pointer gap-5 rounded-md bg-slate-100 ${
                  a.checked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {a.checked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
                  </IconButton>
                </span>
                {a.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className='my-9'>
        <Divider />
        <h3 className='  mt-5 text-[18px] font-semibold '>Flat Amenities</h3>
        <div className='mt-5 flex flex-wrap gap-5'>
          {allFlatAmenities.map((a) => {
            return (
              <div
                key={a.id}
                onClick={() => handleFlatCheck(a.id)}
                className={`flex min-w-[330px] max-w-[350px] cursor-pointer gap-5 rounded-md bg-slate-100 ${
                  a.checked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {a.checked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
                  </IconButton>
                </span>
                {a.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className='my-9'>
        <Divider />
        <h3 className='  mt-5 text-[18px] font-semibold '>Flat Policies</h3>
        <div className='mt-5 flex flex-wrap gap-5'>
          {allPolicies.map((a) => {
            return (
              <div
                key={a.id}
                onClick={() => handlePoliciesCheck(a.id)}
                className={`flex min-w-[330px] max-w-[350px] cursor-pointer gap-5 rounded-md bg-slate-100 ${
                  a.checked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {a.checked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
                  </IconButton>
                </span>
                {a.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
