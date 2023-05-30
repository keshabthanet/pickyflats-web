import Image from 'next/image';
import React from 'react';

interface Iprops {
  children: React.ReactNode;
}

function AuthLayout(props: Iprops) {
  const { children } = props;
  return (
    <div className='min-h-screen bg-[#f3f4f6]'>
      <div className=' container  h-[50px]  pt-5'>
        <div className='relative mr-auto h-full w-[200px] object-scale-down'>
          <Image src='/logo.svg' alt='logo' fill />
        </div>
      </div>
      <div className=' mt-15 flex h-full items-center justify-center p-6  sm:p-6'>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
