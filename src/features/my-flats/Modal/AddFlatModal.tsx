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
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          fullScreen
          sx={{ marginTop: '40px' }}
          className=''
        >
          <div className='flex h-full w-full flex-col   '>
            <div className='m-auto flex  max-h-[70px] min-h-[70px] w-[80%] border-b-2 border-b-[#fee] py-3'>
              <div className='flex-grow'>
                {steps == 1 && <></>}
                {steps == 2 && (
                  <h2 className=' text-primary-main text-[30px] font-bold'>
                    Flat Type
                  </h2>
                )}
                {steps == 3 && (
                  <h2 className=' text-primary-main text-[30px] font-bold'>
                    Features & Policies
                  </h2>
                )}

                {steps == 4 && (
                  <h2 className=' text-primary-main text-[30px] font-bold'>
                    Galleries
                  </h2>
                )}
                {steps == 5 && (
                  <h2 className=' text-primary-main text-[30px] font-bold'>
                    Contact & Location
                  </h2>
                )}

                {steps == 6 && (
                  <h2 className=' text-primary-main text-[30px] font-bold'>
                    Pricing
                  </h2>
                )}
              </div>
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
