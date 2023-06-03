import { FormLabel } from '@mui/material';
import { MuiTelInput } from 'mui-tel-input';
import React from 'react';
import { Controller } from 'react-hook-form';

interface Iprops {
  label: string;
  placeholder: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
  name: string;
  required?: boolean;
}

const PhoneInput = (props: Iprops) => {
  const { name, control, label } = props;

  return (
    <>
      <div>
        <FormLabel className=' text-text-secondary-default text-[14px] font-medium leading-[150%]'>
          {label}
        </FormLabel>
      </div>
      <div>
        <Controller
          name={name}
          control={control}
          render={({ field: { ...field } }) => (
            <MuiTelInput
              size='small'
              defaultCountry='NP'
              fullWidth
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};

export default PhoneInput;
