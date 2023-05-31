import { Button } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useForm,
} from 'react-hook-form';
import { HiOutlineMail } from 'react-icons/hi';

import AuthLayout from '@/components/layout/AuthLayout';

type formData = {
  email: string;
};

const ForgotPasswordPage = () => {
  const methods = useForm<formData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
    },
  });
  const { handleSubmit, control } = methods;
  const onSubmit: SubmitHandler<formData> = async (data) => {
    console.log(data);
  };

  return (
    <div className='mt-20   flex max-w-[400px] flex-col rounded-lg bg-white p-4 shadow-lg'>
      <h1 className='mt-4 text-center text-2xl font-bold leading-[150%]'>
        Forgot Password
      </h1>

      <p className='mt-4 block text-center text-sm font-medium leading-[150%] text-gray-500  '>
        We will send you a link to your email to reset your password.
      </p>

      <div className='mt-4 flex '>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            <label className='mb-2 text-sm font-medium leading-[150%]'>
              Email
            </label>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className='mt-2 w-full'
                  id='email'
                  placeholder='Email'
                  type='email'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <HiOutlineMail
                          style={{
                            color: '#9CA3AF',
                            fontSize: '1.25rem',
                          }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
              )}
            />

            <Button
              className='bg-primary-main hover:bg-primary-light mx-auto my-4 block w-full py-3 text-center
            font-semibold capitalize text-white hover:text-white
            '
              type='submit'
            >
              Continue
            </Button>
          </form>
        </FormProvider>
      </div>
      <div className='my-4 flex flex-col items-center justify-center'>
        <p className='text-center text-sm text-gray-500'>
          <Link
            href='/auth/login'
            className='text-primary-main hover:text-primary-light ml-1 font-semibold leading-6'
          >
            Back to Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;

ForgotPasswordPage.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
