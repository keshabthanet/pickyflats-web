import React from 'react';

import { PROFILES_BUCKET, storage } from '@/lib/client';

export default function ChatActiveHeader({ user }: { user? }) {
  const chatUserAvatar = storage.getFilePreview(
    PROFILES_BUCKET,
    user?.profile_img
  );
  return (
    <div className='flex items-center border-b border-gray-200 p-4'>
      <div className='bg-primary-light relative inline-flex h-10 w-10 items-center justify-center rounded-full'>
        {user?.profile_img ? (
          <img
            src={chatUserAvatar.href}
            alt='Avatar'
            className='inline-flex h-10 w-10 items-center justify-center rounded-full'
          />
        ) : (
          <span className='text-md font-bold uppercase text-white'>
            {user?.name.substring(0, 2).toUpperCase()}
          </span>
        )}
      </div>
      <h2 className='ml-4 font-bold'>{user?.name}</h2>
    </div>
  );
}
