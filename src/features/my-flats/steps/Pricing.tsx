import { useForm } from 'react-hook-form';

import { Icosts } from '@/store/flatStore';

import { AddPricing } from '@/features/my-flats/Modal/addPriceModal';

export const Pricing = () => {
  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<Icosts>({
    defaultValues: {},
  });

  return (
    <>
      <div className='mt-9 flex justify-center'>
        <AddPricing />
      </div>
    </>
  );
};
