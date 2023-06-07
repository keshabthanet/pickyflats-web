import Link from 'next/link';
import React from 'react';

import { isEmptyArray } from '@/lib/helper';

import { fetchConversationsForUser } from '@/database/conversation';

import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';
import useChatStore from '@/store/useChatStore';
import useSnackbarStore from '@/store/useSnackbarStore';

import ConversationItem from '@/features/chat/ConversationItem';

export default function ChatSidebar() {
  const { user } = useAuthStore();
  const [loading, setLoading] = React.useState(true);
  const { conversations, setConversations, firstLoad, setFirstLoad } =
    useChatStore();

  const { openSnackbar } = useSnackbarStore();

  React.useEffect(() => {
    const loadConversations = async () => {
      try {
        const _conversations = await fetchConversationsForUser(user?.$id);
        setConversations(_conversations);
        !firstLoad && setFirstLoad(true);
      } catch (error) {
        openSnackbar('Failed to load conversations', 'error');
      } finally {
        setLoading(false);
      }
    };
    loadConversations();
  }, []);

  return (
    <div className='h-full w-1/4 border-r border-solid p-1'>
      <div className='text-text-secondary-default px-2 text-xl font-medium'>
        Messages
      </div>

      <div className='pt-2'>
        {/* //TODO! empty message according to user type - user/seller */}
        {isEmptyArray(conversations.allIds) && (
          <div className='no-listings px-2'>
            <p className='font-medium'>
              Explore available listings to start a conversation.
            </p>
          </div>
        )}

        <ul className='divide-y divide-gray-300'>
          {loading && !firstLoad && <Loader />}
          {conversations.allIds.map((id, i) => {
            const conversation = conversations.byId[id];
            return (
              <li key={i} className='hover:bg-slate-100'>
                <Link href={`/messages/${id}`}>
                  <ConversationItem item={conversation} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
