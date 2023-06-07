import { useForm } from 'react-hook-form';

import { IcontactAndLocation } from '@/store/flatStore';

import { AddLocationModal } from '@/features/my-flats/Modal/addLocationModal';

export const ContactAndLocation = () => {
  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<IcontactAndLocation>({
    defaultValues: {
      phoneNumber: '',
    },
  });

  return (
    <div className=' mt-9 flex w-full  justify-center'>
      <AddLocationModal />
    </div>
  );
};
