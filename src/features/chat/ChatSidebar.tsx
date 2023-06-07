import { AppwriteException } from 'appwrite';
import Link from 'next/link';
import React from 'react';

import useAuthStore from '@/store/useAuthStore';

import ConversationItem from '@/features/chat/ConversationItem';
import { fetchConversationsForUser } from '@/features/chat/get';

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
  const { user } = useAuthStore();
  const [conversations, setConversations] = React.useState<any>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const loadConversations = async () => {
      try {
        const _conversations = await fetchConversationsForUser(user?.$id);
        // console.log('conversationsWithProfiles ?', _conversations);
        setConversations(_conversations);
      } catch (error) {
        if (error instanceof AppwriteException) {
          // if (error.code == 404) push('/messages');
        }
        console.log('Failed to load conversation ', error);
      } finally {
        setLoading(false);
      }
    };
    loadConversations();
  }, []);
  console.log('conversations ? ', conversations);
  return (
    <div className='h-full w-1/4 border-r border-solid p-1'>
      <div className='text-text-secondary-default px-2 text-xl font-medium'>
        Messages
      </div>

      <div className='pt-2'>
        <ul className='divide-y divide-gray-300'>
          {conversations.map((item, i) => (
            <li key={i} className='hover:bg-slate-100'>
              <Link href={`/messages/${item.$id}`}>
                <ConversationItem item={item} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
