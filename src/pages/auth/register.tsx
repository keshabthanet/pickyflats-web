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
import { BiShow } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlinePersonOutline } from 'react-icons/md';

import AuthLayout from '@/components/layout/AuthLayout';

type formData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  confirmPassword: string;
};

const Register = () => {
  const methods = useForm<formData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      address: '',
      confirmPassword: '',
    },
  });
  const { handleSubmit, control } = methods;
  const onSubmit: SubmitHandler<formData> = async (data) => {
    console.log(data);
  };

  return (
    <div className='flex  max-w-[375px] flex-col  p-4 '>
      <h1 className='text-primary-main mt-4 text-center text-2xl font-bold leading-[150%]'>
        Register
      </h1>

      <div className='flex  '>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className='w-full'>
            {/* <label className='mb-2 text-sm font-medium leading-[150%]'>
              Email
            </label> */}
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  variant='standard'
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
            <div className='my-4 flex flex-col gap-4 sm:flex-row'>
              <div className='flex w-full flex-col'>
                {/* <label className='mb-2 text-sm font-medium leading-[150%]'>
                  First Name
                </label> */}
                <Controller
                  name='firstName'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant='standard'
                      {...field}
                      className='mt-2 '
                      id='firstName'
                      placeholder='First Name'
                      type='text'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='start'>
                            <MdOutlinePersonOutline
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
              </div>
              <div className='flex w-full flex-col'>
                {/* <label className='mb-2 text-sm font-medium leading-[150%]'>
                  Last Name
                </label> */}
                <Controller
                  name='lastName'
                  control={control}
                  render={({ field }) => (
                    <TextField
                      variant='standard'
                      {...field}
                      className='mt-2 '
                      id='lastName'
                      placeholder='Last Name'
                      type='text'
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position='start'>
                            <MdOutlinePersonOutline
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
              </div>
            </div>

            {/* <label className='my-2 text-sm font-medium leading-[150%]'>
              Password
            </label> */}

            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <TextField
                  variant='standard'
                  {...field}
                  className='mt-2 w-full'
                  id='password'
                  placeholder='Password'
                  type='password'
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='start'>
                        <BiShow
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

            <div className='mt-4'>
              {/* <label className=' text-sm font-medium leading-[150%]'>
                Confirm Password
              </label> */}
              <Controller
                name='confirmPassword'
                control={control}
                render={({ field }) => (
                  <TextField
                    variant='standard'
                    {...field}
                    className='w-full'
                    id='confirmPassword'
                    placeholder='Confirm Password'
                    type='password'
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position='start'>
                          <BiShow
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
            </div>

            <Button
              className='bg-primary-main hover:bg-primary-light mx-auto my-4 block w-full py-3 text-center
            font-semibold capitalize text-white hover:text-white
            '
              type='submit'
            >
              Sign Up
            </Button>
          </form>
        </FormProvider>
      </div>
      <div className='my-4 flex flex-col items-center justify-center'>
        <p className='text-center text-sm text-gray-500'>
          Already have an account?
          <Link
            href='/auth/login'
            className='text-primary-main hover:text-primary-light ml-1 font-semibold leading-6'
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

Register.getLayout = function getLayout(page: ReactElement) {
  return <AuthLayout>{page}</AuthLayout>;
};
