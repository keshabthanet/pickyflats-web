import { Button, Dialog } from '@mui/material';
import { useState } from 'react';
import { BsBuildingFillAdd } from 'react-icons/bs';

import { FeaturesAndPolicies } from '@/features/my-flats/steps/Features';
import { Gallery } from '@/features/my-flats/steps/Gallery';
import { ContactAndLocation } from '@/features/my-flats/steps/Location';
import { Pricing } from '@/features/my-flats/steps/Pricing';
import { Purpose } from '@/features/my-flats/steps/Purpose';

export const AddFlatModal = () => {
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(1);

  const plusStep = () => {
    if (steps < 5) setSteps((step) => step + 1);
  };
  const minusStep = () => {
    if (steps > 1) setSteps((step) => step - 1);
  };

  return (
    <div>
      <Button
        className='capitalize'
        startIcon={<BsBuildingFillAdd />}
        onClick={() => setOpen(true)}
      >
        Add Flats
      </Button>
      <div>
        <Dialog open={open} onClose={() => setOpen(false)} fullScreen>
          <div className='flex h-full w-full flex-col '>
            <div className='h-[50px] w-full bg-red-900'></div>
            <div className='flex h-full w-full flex-grow flex-col justify-center overflow-y-scroll align-middle'>
              {steps == 1 && <Purpose />}
              {steps == 2 && <FeaturesAndPolicies />}
              {steps == 3 && <ContactAndLocation />}

              {steps == 4 && <Gallery />}
              {steps == 5 && <Pricing />}
            </div>

            {/* bottom part */}
            <div className='flex h-[100px] w-full   border-t-2  '>
              <div className='m-auto flex gap-5'>
                <Button
                  variant='contained'
                  className=' m-auto h-[40px] w-[150px] rounded-[20px]'
                  onClick={() => minusStep()}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  className=' m-auto h-[40px] w-[150px] rounded-[20px]'
                  onClick={() => plusStep()}
                >
                  Continue
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
