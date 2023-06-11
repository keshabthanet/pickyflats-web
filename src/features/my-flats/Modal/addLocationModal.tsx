import { Button, Divider, IconButton } from '@mui/material';
import { Dialog } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaMapMarker } from 'react-icons/fa';
import { SiAddthis } from 'react-icons/si';

import { isEmptyArray } from '@/lib/helper';

import Modal from '@/components/Modal';

import { IcontactAndLocation } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';
import useAuthStore from '@/store/useAuthStore';

import PhoneInput from '@/features/HookForm/PhoneInput';
import ReactSelect from '@/features/HookForm/ReactSelect';
import TextField from '@/features/HookForm/TextField';

const GeoPickerModal = dynamic(
  () => import('@/features/my-flats/Modal/GEOPickerModal'),
  { ssr: false }
);

export const AddLocationModal = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuthStore();
  const [geoModal, setGeoModal] = useState(false);

  const { contactAndLocation, setContactAndLocation } = useFlatStore();
  const {
    handleSubmit,
    control,
    setValue,
    getValues,
    formState: { errors, isDirty },
  } = useForm<IcontactAndLocation>({
    defaultValues: {
      sellerCountry: contactAndLocation.sellerCountry,
      sellerCity: contactAndLocation.sellerCity,
      phoneNumber: contactAndLocation.phoneNumber,
      sellerEmail: user?.email || '',

      flatCountry: contactAndLocation.flatCountry,
      flatCity: contactAndLocation.flatCity,
      flatStreet1: contactAndLocation.flatStreet1,
      flatStreet2: contactAndLocation.flatStreet2,
      flatGeo: contactAndLocation.flatGeo,
    },
  });

  const onSubmit = (data: IcontactAndLocation) => {
    setContactAndLocation(data);
    setOpen(false);
  };

  return (
    <div>
      <div>
        <Button
          startIcon={<SiAddthis />}
          className=' capitalize'
          onClick={() => setOpen(true)}
        >
          Add/Update Location & Contact
        </Button>
      </div>
      <Dialog
        open={open}
        fullWidth
        maxWidth='md'
        onClose={() => setOpen(false)}
      >
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=' m-auto mt-5 h-auto w-[80%]'>
              <h3 className=' text-[18px] font-semibold '>
                Your Contact Details
              </h3>
              <div className='grid w-full grid-cols-2 gap-5'>
                <div>
                  <ReactSelect
                    name='sellerCountry'
                    options={[{ label: 'nepal', value: 'nepal' }]}
                    label='Your Country'
                    placeholder='country'
                    control={control}
                    required
                    helperText={
                      errors.sellerCountry?.type === 'required'
                        ? 'Country is Required'
                        : ''
                    }
                    error={!!errors.sellerCountry}
                  />
                </div>
                <div>
                  <TextField
                    name='sellerCity'
                    type='text'
                    placeholder=' Your City'
                    control={control}
                    label='Your city'
                    required
                    helperText={
                      errors.sellerCity?.type === 'required'
                        ? 'City Name is Required'
                        : ''
                    }
                    error={!!errors.sellerCity}
                  />
                </div>

                <div>
                  <PhoneInput
                    placeholder='phone input'
                    label='Phone Input'
                    control={control}
                    name='phoneNumber'
                  />
                </div>
                <div>
                  <TextField
                    name='sellerEmail'
                    type='text'
                    placeholder=' Your Email'
                    control={control}
                    label='Your email'
                    required
                    helperText={
                      errors.sellerEmail?.type === 'required'
                        ? 'Email is Required'
                        : ''
                    }
                    error={!!errors.sellerEmail}
                  />
                </div>
              </div>

              <div className='my-3'>
                <Divider />
              </div>

              <h3 className=' text-[18px] font-semibold '>
                Flat Location Details
              </h3>
              <div className='grid w-full grid-cols-2 gap-5'>
                <div>
                  <ReactSelect
                    name='flatCountry'
                    options={[{ label: 'nepal', value: 'nepal' }]}
                    label=' Country'
                    placeholder='country'
                    control={control}
                    required
                    helperText={
                      errors.flatCountry?.type === 'required'
                        ? 'Country is Required'
                        : ''
                    }
                    error={!!errors.flatCountry}
                  />
                </div>
                <div>
                  <TextField
                    name='flatCity'
                    type='text'
                    placeholder='City'
                    control={control}
                    label='city'
                    required
                    helperText={
                      errors.flatCity?.type === 'required'
                        ? 'City Name is Required'
                        : ''
                    }
                    error={!!errors.flatCity}
                  />
                </div>

                <div>
                  <TextField
                    name='flatStreet1'
                    type='text'
                    placeholder='Street Address Line1'
                    control={control}
                    label='street1'
                    required
                    helperText={
                      errors.flatStreet1?.type === 'required'
                        ? 'Street is Required'
                        : ''
                    }
                    error={!!errors.flatStreet1}
                  />
                </div>

                <div>
                  <TextField
                    name='flatStreet2'
                    type='text'
                    placeholder='Street Address Line2'
                    control={control}
                    label='street2'
                    error={!!errors.flatStreet2}
                  />
                </div>

                {!isEmptyArray(getValues('flatGeo')) && (
                  <div className='flex items-center'>
                    <IconButton className='my-auto'>
                      <FaMapMarker className='text-sm' />
                    </IconButton>
                    <span className='capitalizeopacity-80 relative  text-base max-md:flex max-md:flex-col '>
                      <span>{getValues('flatGeo')?.[0]},</span>
                      <span>{getValues('flatGeo')?.[1]}</span>
                    </span>
                  </div>
                )}
              </div>
              <div className='py-5'>
                <Button
                  className='text-[18px] normal-case'
                  onClick={() => setGeoModal(true)}
                  size='small'
                >
                  Pin On Map
                </Button>
              </div>
              <div className='my-5 flex flex-row-reverse gap-5'>
                <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                  Save Details
                </Button>

                <Button variant='outlined' onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>
      {geoModal && (
        <Modal
          isOpen={open}
          className='max-sm:w-screen max-sm:rounded-none'
          onClose={() => setGeoModal(false)}
        >
          <GeoPickerModal
            onClose={() => setGeoModal(false)}
            onLocationChoose={(geo) => setValue('flatGeo', geo)}
          />
        </Modal>
      )}
    </div>
  );
};
