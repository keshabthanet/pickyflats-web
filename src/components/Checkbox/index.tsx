import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

interface Iprops {
  name: string;
  control: any;
  label: React.ReactElement | string;
}

const Checkbox = (props: Iprops) => {
  const { name, control, label } = props;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControlLabel
            control={<MuiCheckbox {...field} />}
            label={label}
          />
        )}
      />
    </div>
  );
};

export default Checkbox;
