import { Button as MUIButton } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { ImSpinner2 } from 'react-icons/im';

import { account } from '@/lib/client';
import clsxm from '@/lib/clsxm';

import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';

import useAuthStore from '@/store/useAuthStore';

import withAuth from '@/hoc/withAuth';

type LoginData = {
  email: string;
  password: string;
};

export default withAuth(LoginPage, 'auth');
function LoginPage() {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = React.useState(false);
  const [loginError, setLoginError] = React.useState('');
  const methods = useForm<LoginData>({
    mode: 'onTouched',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { handleSubmit } = methods;
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      setLoginError('');
      setIsLoading(true);
      await account.createEmailSession(data.email, data.password);
      const user = await account.get();
      const tokenRes = await account.createJWT();
      login(user as any, tokenRes.jwt);
    } catch (error: any) {
      setLoginError(error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-[#f3f4f6]'>
      <div className='d-flex container mx-auto h-[50px] pt-5'>
        <div className='relative mx-auto h-full w-[200px] object-scale-down'>
          <Image src='/logo.svg' alt='logo' fill />
        </div>
      </div>

      <main className='mt-10 sm:px-4 sm:pb-4'>
        <div className='flex'>
          <div className='mx-auto border border-gray-200 bg-white px-6 py-10 shadow-sm sm:w-full md:w-[400px]'>
            <div>
              <h2 className='mt-6 text-2xl font-extrabold text-gray-900'>
                Login
              </h2>
            </div>
            {loginError && (
              <div
                className='my-4 rounded-lg bg-red-50 p-4 text-sm text-red-800'
                role='alert'
              >
                {loginError}
              </div>
            )}

            <div className='mt-8'>
              <div className='mt-6'>
                <FormProvider {...methods}>
                  <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                    <Input
                      id='email'
                      label='Email'
                      validation={{ required: 'Email is required' }}
                    />

                    <PasswordInput
                      id='password'
                      label='Password'
                      validation={{ required: 'Password is required' }}
                    />

                    <div>
                      <MUIButton
                        type='submit'
                        variant='contained'
                        className={clsxm(
                          'w-full text-[16px] font-semibold capitalize',
                          isLoading
                            ? 'relative text-transparent transition-none hover:text-transparent disabled:cursor-wait'
                            : ''
                        )}
                        disabled={isLoading}
                      >
                        {isLoading && (
                          <div className='absolute left-0 right-0 text-white'>
                            <ImSpinner2 className='animate-spin' />
                          </div>
                        )}
                        Login
                      </MUIButton>
                    </div>
                  </form>
                </FormProvider>
              </div>
              <p className='mt-10 text-center text-sm text-gray-500'>
                Don't have an account?
                <a
                  href='#'
                  className='text-primary-main hover:text-primary-light ml-1 font-semibold leading-6'
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
