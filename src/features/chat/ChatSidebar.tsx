import { formatDistanceToNow } from 'date-fns';
import React from 'react';

const messagesList = [
  {
    from: 'John',
    to: 'Arad',
    message: 'Hello how are you',
  },
  {
    from: 'John',
    to: 'Arad',
    message: 'Whatsapp',
  },
  {
    from: 'John',
    to: 'Arad',
    message: 'All clear?',
  },
];

export default function ChatSidebar() {
  return (
    <div className='h-full w-1/4 border-r border-solid p-1'>
      <div className='text-text-secondary-default px-2 text-xl font-medium'>
        Messages
      </div>

      <div className='pt-2'>
        <ul className='divide-y divide-gray-300'>
          {messagesList.map((item, i) => (
            <li key={i} className='hover:bg-slate-100'>
              <div className='flex items-start p-2'>
                <div className='flex-shrink-0'>
                  <img
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
                    alt='User Avatar'
                    className='h-8 w-8 rounded-full'
                  />
                </div>
                <div className='ml-4'>
                  <p className='font-bold'>John Doe</p>
                  <p className='text-gray-600'>Hello, how are you?</p>
                </div>
                <div className='ml-auto text-sm text-gray-500'>
                  {formatDistanceToNow(new Date(), { addSuffix: true })}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
