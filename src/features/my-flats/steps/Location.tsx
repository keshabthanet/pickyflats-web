import { Divider, IconButton } from '@mui/material';
import { useForm } from 'react-hook-form';
import { GrMapLocation } from 'react-icons/gr';
import { MdAttachEmail, MdPhonePaused } from 'react-icons/md';

import { IcontactAndLocation } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import { AddLocationModal } from '@/features/my-flats/Modal/addLocationModal';
import { FaStreetView } from 'react-icons/fa';

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

  const { contactAndLocation } = useFlatStore();

  return (
    <>
      <div className=' mt-9 flex w-full  justify-center'>
        <AddLocationModal />
      </div>
      <div className=' m-auto mt-9 grid w-[80%]  grid-cols-2 justify-center gap-5 text-center'>
        <div className='mt-5  pl-11 pr-5'>
          <h2 className=' text-primary-main text-left text-lg font-semibold'>
            Your Contact Information
          </h2>
          <div className='w-full text-left'>
            {contactAndLocation.country && (
              <div className='flex '>
                <IconButton>
                  <GrMapLocation className='' color='primary' />
                </IconButton>
                <span className='relative top-[10px] text-base font-semibold capitalize text-black opacity-80 '>
                  {contactAndLocation.city + ',' + contactAndLocation.country}
                </span>
              </div>
            )}
            <Divider />
            {contactAndLocation.email && (
              <div className='flex'>
                <IconButton>
                  <MdAttachEmail />
                </IconButton>
                <span className='relative top-[10px] text-base font-semibold capitalize text-black opacity-80  '>
                  {contactAndLocation.email}
                </span>
              </div>
            )}
            <Divider />

            {contactAndLocation.phoneNumber && (
              <div className='flex'>
                <IconButton className=' '>
                  <MdPhonePaused className='' />
                </IconButton>
                <span className='relative top-[10px] text-base font-semibold capitalize text-black opacity-80 '>
                  {contactAndLocation.phoneNumber}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className='mt-5  pl-11 pr-5'>
          <h2 className=' text-primary-main text-left text-lg font-semibold'>
            Flat Location Information
          </h2>
          <div className='w-full text-left'>
            {contactAndLocation.flatCountry && (
              <div className='flex '>
                <IconButton>
                  <GrMapLocation className='' color='primary' />
                </IconButton>
                <span className='relative top-[10px] text-base font-semibold capitalize text-black opacity-80 '>
                  {contactAndLocation.flatCity +
                    ',' +
                    contactAndLocation.flatCountry}
                </span>
              </div>
            )}
            <Divider />
            {contactAndLocation.email && (
              <div className='flex'>
                <IconButton>
                  <FaStreetView />
                </IconButton>
                <span className='relative top-[10px] text-base font-semibold capitalize text-black opacity-80  '>
                  {contactAndLocation.flatStreet1}
                </span>
              </div>
            )}
            <Divider />

            {contactAndLocation.phoneNumber && (
              <div className='flex'>
                <IconButton className=' '>
                  <FaStreetView className='' />
                </IconButton>
                <span className='relative top-[10px] text-base font-semibold capitalize text-black opacity-80 '>
                  {contactAndLocation.flatStreet2}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
