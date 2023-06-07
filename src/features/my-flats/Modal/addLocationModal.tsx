import { Button, Divider } from '@mui/material';
import { Dialog } from '@mui/material';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { SiAddthis } from 'react-icons/si';

import { IcontactAndLocation } from '@/store/flatStore';
import { useFlatStore } from '@/store/flatStore';

import PhoneInput from '@/features/HookForm/PhoneInput';
import ReactSelect from '@/features/HookForm/ReactSelect';
import TextField from '@/features/HookForm/TextField';

export const AddLocationModal = () => {
  const [open, setOpen] = useState(false);

  const { contactAndLocation, setContactAndLocation } = useFlatStore();
  const {
    handleSubmit,
    control,

    formState: { errors, isDirty },
  } = useForm<IcontactAndLocation>({
    defaultValues: {
      phoneNumber: '',
    },
  });

  const onSubmit = (data: IcontactAndLocation) => {
    setContactAndLocation(data);
  };

  return (
    <div>
      <div>
        <Button
          startIcon={<SiAddthis />}
          className=' capitalize'
          onClick={() => setOpen(true)}
        >
          Add Location & Contact
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
                    name='country'
                    options={[]}
                    label='Your Country'
                    placeholder='country'
                    control={control}
                    required
                    helperText={
                      errors.country?.type === 'required'
                        ? 'Country is Required'
                        : ''
                    }
                    error={!!errors.country}
                  />
                </div>
                <div>
                  <TextField
                    name='city'
                    type='text'
                    placeholder=' Your City'
                    control={control}
                    label='Your city'
                    required
                    helperText={
                      errors.city?.type === 'required'
                        ? 'City Name is Required'
                        : ''
                    }
                    error={!!errors.city}
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
                    name='email'
                    type='text'
                    placeholder=' Your Email'
                    control={control}
                    label='Your email'
                    required
                    helperText={
                      errors.email?.type === 'required'
                        ? 'Email is Required'
                        : ''
                    }
                    error={!!errors.country}
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
                    options={[]}
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
                    name='city'
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
                    error={!!errors.country}
                  />
                </div>

                <div>
                  <TextField
                    name='flatStreet2'
                    type='text'
                    placeholder='Street Address Line2'
                    control={control}
                    label='street2'
                    required
                    helperText={
                      errors.flatStreet2?.type === 'required'
                        ? 'Street is Required'
                        : ''
                    }
                    error={!!errors.flatStreet2}
                  />
                </div>
              </div>
              <div className='py-5'>
                <h3 className=' text-[18px] font-semibold '>Pin On Map</h3>
              </div>
              <div className='my-5 flex flex-row-reverse'>
                <Button variant='contained' onClick={handleSubmit(onSubmit)}>
                  Save Details
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
};
