import { Button } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import StepsCard from '@/features/StepsCard';

const Step1Component = dynamic(() => import('@/pages/onboarding/Step1'));

const Step2Component = dynamic(() => import('@/pages/onboarding/Step2'));

const Step3Component = dynamic(() => import('@/pages/onboarding/Step3'));

const steps = [
  {
    title: 'What are you looking for?',
    step: 1,
  },
  {
    title: 'Who are you?',
    step: 2,
  },
  {
    title: 'Where are you from?',
    step: 3,
  },
  {
    title: 'What are you looking for?',
    step: 4,
  },
];

type FormData = {
  buyFlat: boolean;
  sellFlat: boolean;
  findRomMate: boolean;
  rentFlates: boolean;
};

const Onboarding = () => {
  const [step, setStep] = useState(1);

  const method = useForm<FormData>({
    defaultValues: {
      buyFlat: false,
      sellFlat: false,
      findRomMate: false,
      rentFlates: false,
    },
  });

  const SubmitForm = (data: FormData) => {
    console.log(data);
  };

  const { control, handleSubmit } = method;
  return (
    <div className='bg-flex  h-screen flex-col   p-8'>
      <div className='mt-4 flex w-full items-center  justify-evenly'>
        {steps.map((item, index) => {
          return (
            <StepsCard
              key={index}
              title={item.title}
              isActive={item.step === step}
            />
          );
        })}
      </div>
      <div className='flex items-center justify-between'>
        <FormProvider {...method}>
          <form
            onSubmit={handleSubmit(SubmitForm)}
            className=' mx-auto mt-10  flex max-w-[800px] flex-col items-center justify-center   py-6 '
          >
            <div className='m-8 flex items-center justify-center '>
              {step === 1 && <Step1Component />}
              {step === 2 && <Step2Component />}
              {step === 3 && <Step3Component />}
            </div>
            <div className=' flex w-full items-center justify-end gap-4'>
              <Button
                variant='outlined'
                className='w-[150px]'
                onClick={() => setStep(step - 1)}
                disabled={step === 1 ? true : false}
              >
                Back
              </Button>
              <Button
                variant='contained'
                className='w-[150px]'
                onClick={() => setStep(step + 1)}
                type='submit'
              >
                {step == 4 ? 'Go to Feed' : 'Next'}
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Onboarding;
