import { formatDistanceToNow } from 'date-fns';
import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import withAuth, { WithAuthProps } from '@/hoc/withAuth';

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
export default function MessagesPage() {
  const [messages, setMessages] = React.useState<string[]>([]);
  const [inputText, setInputText] = React.useState('');

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
    <div className='flex h-full'>
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
      <div className='relative flex w-full flex-col'>
        <div className='mb-4 flex items-center border-b border-gray-200 p-4'>
          <img
            src='https://images.unsplash.com/photo-1494790108377-be9c29b29330'
            alt='User Avatar'
            className='h-8 w-8 rounded-full'
          />
          <h2 className='ml-4 font-bold'>John Doe</h2>
        </div>
        <div className='flex flex-1 flex-col space-y-4 overflow-y-auto px-4'>
          {messages.map((message, index) => (
            <>
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                } relative rounded-lg p-2`}
              >
                <p>{message}</p>
              </div>
              <div className='!mt-0 ml-auto text-xs text-gray-500'>
                <span className='mr-2'>Ravi</span>
                <span>
                  {formatDistanceToNow(new Date(), { addSuffix: true })}
                </span>
              </div>
            </>
          ))}
        </div>
        <div className='flex py-2'>
          <input
            type='text'
            className='flex-1 border border-gray-300 px-4 py-2'
            placeholder='Type your message...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className='bg-blue-500 px-4 py-2 text-white'
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

function LayoutWrapper(props: WithAuthProps) {
  return <DashboardLayout>{props.page}</DashboardLayout>;
}

const PageWrapper: React.FC<{ page: React.ReactElement }> = withAuth(
  LayoutWrapper,
  'all'
);
MessagesPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
