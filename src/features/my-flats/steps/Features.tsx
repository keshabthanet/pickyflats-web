import { Divider, IconButton } from '@mui/material';
import { ImCheckmark } from 'react-icons/im';
import { RiCheckboxBlankLine } from 'react-icons/ri';

import { AllBuildingAmenities } from '@/datas/buildingAmenities';
import { AllFlatAmenities } from '@/datas/flatAmenities';
import { AllFlatPolicies } from '@/datas/policies';

import { Ipolicies, useFlatStore } from '@/store/flatStore';
import { Iamenities } from '@/store/flatStore';

export const FeaturesAndPolicies = () => {
  const { buildingAmenities, setBuildingAmenities, flatTypes } = useFlatStore();

  const handleBuildingCheck = (am: Iamenities) => {
    if (buildingAmenities.includes(am)) {
      const newAm = buildingAmenities.filter((f) => {
        return am != f;
      });
      setBuildingAmenities(newAm);
    } else {
      setBuildingAmenities([...buildingAmenities, am]);
    }
  };

  const { flatAmenities, setFlatAmenities } = useFlatStore();

  const handleFlatCheck = (am: Iamenities) => {
    if (flatAmenities.includes(am)) {
      const newAm = flatAmenities.filter((f) => {
        return am != f;
      });
      setFlatAmenities(newAm);
    } else {
      setFlatAmenities([...flatAmenities, am]);
    }
  };

  const { flatPolicies, setFlatPolicies } = useFlatStore();

  const handlePolicyCheck = (p: Ipolicies) => {
    if (flatPolicies.includes(p)) {
      const newP = flatPolicies.filter((f) => {
        return p != f;
      });
      setFlatPolicies(newP);
    } else {
      setFlatPolicies([...flatPolicies, p]);
    }
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
          {AllBuildingAmenities.filter((am) => {
            return am.flatType.some((e) => flatTypes.includes(e));
          }).map((a: Iamenities) => {
            const isChecked = buildingAmenities.includes(a);
            return (
              <div
                key={a.id}
                onClick={() => handleBuildingCheck(a)}
                className={`flex min-w-[330px] max-w-[350px] cursor-pointer gap-5 rounded-md bg-slate-100 ${
                  isChecked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {isChecked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
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
          {AllFlatAmenities.filter((am) => {
            return am.flatType.some((e) => flatTypes.includes(e));
          }).map((a: Iamenities) => {
            const isChecked = flatAmenities.includes(a);
            return (
              <div
                key={a.id}
                onClick={() => handleFlatCheck(a)}
                className={`flex min-w-[330px] max-w-[350px] cursor-pointer gap-5 rounded-md bg-slate-100 ${
                  isChecked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {isChecked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
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
          {AllFlatPolicies.filter((am) => {
            return am.flatType.some((e) => flatTypes.includes(e));
          }).map((a: Ipolicies) => {
            const isChecked = flatPolicies.includes(a);

            return (
              <div
                key={a.id}
                onClick={() => handlePolicyCheck(a)}
                className={`flex min-w-[330px] max-w-[350px] cursor-pointer gap-5 rounded-md bg-slate-100 ${
                  isChecked ? 'bg-slate-200' : 'bg-slate-100'
                } p-2 pt-5 `}
              >
                <span className='relative top-[-8px]'>
                  <IconButton>
                    {isChecked ? <ImCheckmark /> : <RiCheckboxBlankLine />}
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
