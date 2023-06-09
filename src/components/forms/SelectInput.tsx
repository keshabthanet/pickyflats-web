import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import { SelectProps } from '@mui/material';
import React from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps extends Omit<SelectProps, 'name'> {
  name: string;
  label: string;
  options: Option[];
  control: Control<any>;
}

const SelectInput: React.FC<SelectInputProps> = ({
  name,
  label,
  options,
  control,
  ...rest
}) => {
  const {
    formState: { errors },
  } = useFormContext<{ key: string }>();

  return (
    <FormControl fullWidth margin='normal'>
      <InputLabel>{label}</InputLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            {...rest}
            error={!!errors[name]}
            renderValue={(selected) => {
              const selectedOption = options.find(
                (option) => option.value === selected
              );
              return selectedOption ? selectedOption.label : '';
            }}
          >
            {options.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
      {errors[name] && <FormHelperText>{errors[name].message}</FormHelperText>}
    </FormControl>
  );
};

export default SelectInput;
