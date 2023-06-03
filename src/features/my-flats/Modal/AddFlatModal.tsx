import { Button, Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

import { FeaturesAndPolicies } from '@/features/my-flats/steps/Features';
import { FlatTypes } from '@/features/my-flats/steps/FlatType';
import { Gallery } from '@/features/my-flats/steps/Gallery';
import { ContactAndLocation } from '@/features/my-flats/steps/Location';
import { Pricing } from '@/features/my-flats/steps/Pricing';
import { Purpose } from '@/features/my-flats/steps/Purpose';

export const AddFlatModal = () => {
  const [open, setOpen] = useState(false);
  const [steps, setSteps] = useState(1);

  const plusStep = () => {
    if (steps < 6) setSteps((step) => step + 1);
  };
  const minusStep = () => {
    if (steps > 1) setSteps((step) => step - 1);
  };

  const handleClose = () => {
    setOpen(false);
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
          <div className='flex h-full w-full flex-col  '>
            <div className='flex max-h-[60px] min-h-[60px] w-full border-b-2 border-b-[#fee] p-3 pr-9'>
              <div className='flex-grow'></div>
              <div>
                <IconButton onClick={() => handleClose()}>
                  <CgClose />
                </IconButton>
              </div>
            </div>
            <div className='flex  w-full  flex-grow flex-col  overflow-y-scroll  '>
              {steps == 1 && <Purpose />}
              {steps == 2 && <FlatTypes />}

              {steps == 3 && <FeaturesAndPolicies />}

              {steps == 4 && <Gallery />}
              {steps == 5 && <ContactAndLocation />}
              {steps == 6 && <Pricing />}
            </div>

            {/* bottom part */}
            <div className='flex min-h-[100px] w-full   border-t-2  '>
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
