import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
const Step3 = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const { control } = useFormContext();

  const options = countries.map((item, index) => {
    return {
      value: item?.cca2,
      label: (
        <div className='flex items-center justify-between' key={item?.cca2}>
          <span className='ml-2'>{item?.name?.common}</span>
          <img src={item?.flags?.png} alt='' className='h-5 w-10' />
        </div>
      ),
    };
  });

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className=''>
      <h1
        className='text-primary-main text-3xl font-bold
    leading-[150%]'
      >
        Please say us where are you from?{' '}
      </h1>

      <div className='mt-10  flex flex-col'>
        <label
          htmlFor='country'
          className='mb-2 text-base font-semibold leading-[150%]'
        >
          Select Country
        </label>

        <Controller
          name='country'
          control={control}
          render={({ field }) => (
            <Select {...field} options={options} name='countries' />
          )}
        />

        <label
          htmlFor='city'
          className='mb-2 mt-5 text-base font-semibold leading-[150%]'
        >
          City
        </label>
        <Controller
          name='city'
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              id='city'
              variant='standard'
              className='w-full'
              placeholder='Enter your city name'
            />
          )}
        />
      </div>
    </div>
  );
};

export default Step3;
