import { Button, Dialog, IconButton } from '@mui/material';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { BsBuildingFillAdd } from 'react-icons/bs';
import { CgClose } from 'react-icons/cg';

import { FeaturesAndPolicies } from '@/features/my-flats/steps/Features';
import { FlatTypesPage } from '@/features/my-flats/steps/FlatType';
import { Gallery } from '@/features/my-flats/steps/Gallery';
import { ContactAndLocation } from '@/features/my-flats/steps/Location';
import { Pricing } from '@/features/my-flats/steps/Pricing';
import { Purpose } from '@/features/my-flats/steps/Purpose';

import { useFlatStore } from '@/store/flatStore';

type Step = { key: string; title: string; component: React.ReactNode };

const steps: Step[] = [
  { key: 'choose', title: '', component: <Purpose /> },
  { key: 'type', title: 'Flat Type', component: <FlatTypesPage /> },
  {
    key: 'feature-policies',
    title: 'Features & Policies',
    component: <FeaturesAndPolicies />,
  },
  { key: 'galleries', title: 'Galleries', component: <Gallery /> },
  {
    key: 'contact-location',
    title: 'Contact & Location',
    component: <ContactAndLocation />,
  },
  { key: 'pricing', title: 'Pricing', component: <Pricing /> },
];

type FormData = {
  type: string;
  rate: number;
};

export const AddFlatModal = () => {
  const [open, setOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const { flatTypes, purpose } = useFlatStore();

  const plusStep = () => {
    if (activeStep < 5) {
      if (activeStep == 0 && purpose != 'rent' && purpose != 'sell') {
        alert('select the purpose');
        return;
      } else if (activeStep == 1 && flatTypes.length == 0) {
        alert('select at least one flat type');
        return;
      }

      setActiveStep((step) => step + 1);
    }
  };
  const minusStep = () => {
    if (activeStep > 0) setActiveStep((step) => step - 1);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const step = () => steps.find((item, i) => i === activeStep);
  const isLastStep = activeStep + 1 === steps.length;

  const methods = useForm<FormData>({
    mode: 'onTouched',
    defaultValues: {},
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    alert('submit');
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
                <h2 className=' text-primary-main text-[30px] font-bold'>
                  {step()?.title}
                </h2>
              </div>
              <div>
                <IconButton onClick={() => handleClose()}>
                  <CgClose />
                </IconButton>
              </div>
            </div>
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex  w-full flex-grow flex-col  overflow-y-scroll  '
              >
                {step()?.component}
              </form>
            </FormProvider>
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
                  className={` m-auto h-[40px] w-[150px] rounded-[20px] ${
                    isLastStep ? 'bg-blue-700' : ''
                  }`}
                  onClick={isLastStep ? handleSubmit(onSubmit) : plusStep}
                  type={`${isLastStep ? 'submit' : 'button'}`}
                >
                  {isLastStep ? 'Save' : 'Continue'}
                </Button>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    </div>
  );
};
