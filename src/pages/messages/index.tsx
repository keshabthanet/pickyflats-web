import { formatDistanceToNow } from 'date-fns';
import React from 'react';

import DashboardLayout from '@/components/layout/DashboardLayout';

import ChatSidebar from '@/features/chat/ChatSidebar';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

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
      <ChatSidebar />
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
        <div className='flex border border-gray-300 py-2'>
          <input
            type='text'
            className='flex-1 px-4 py-2'
            placeholder='Type your message...'
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          <button
            className='rounded bg-blue-500 px-4 py-2 text-white'
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
