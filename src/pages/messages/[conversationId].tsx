import { IconButton } from '@mui/material';
import { AppwriteException, ID, Query } from 'appwrite';
import { useRouter } from 'next/router';
import React from 'react';
import { BiImage } from 'react-icons/bi';

import {
  CONVERSATIONS_ID,
  DATABASE_ID,
  databases,
  MESSAGES_ID,
  PROFILES_ID,
} from '@/lib/client';

import DashboardLayout from '@/components/layout/DashboardLayout';
import Loader from '@/components/Loader';

import useAuthStore from '@/store/useAuthStore';

import ChatActiveHeader from '@/features/chat/ChatActiveHeader';
import ChatMessages from '@/features/chat/ChatMessages';
import ChatSidebar from '@/features/chat/ChatSidebar';
import withAuth, { WithAuthProps } from '@/hoc/withAuth';

export default function UserMessagePage() {
  const {
    query: { conversationId: rawConvId },
    push,
  } = useRouter();
  const conversationId = rawConvId!.toString();
  const { user } = useAuthStore();
  const [conversation, setConversation] = React.useState<any>();
  const [chatUserId, setChatUserId] = React.useState('');
  const [chatUser, setChatUser] = React.useState<any>();
  const [loading, setLoading] = React.useState(true);
  const [messageLoading, setMessageLoading] = React.useState(true);

  const [messages, setMessages] = React.useState<any[]>([]);
  const [inputText, setInputText] = React.useState('');

  const fetchConversation = async () => {
    const _conversation = await databases.getDocument(
      DATABASE_ID,
      CONVERSATIONS_ID,
      conversationId!.toString()
    );
    // push to messages if not exits
    if (!_conversation) {
      push('/messages');
      return;
    }
    const _chatUserId = _conversation.participants.find((i) => i !== user?.$id);
    const validConversation = _conversation.participants.includes(user?.$id);
    // invalidate the conversation if session user is not in the list
    if (!validConversation) {
      throw new AppwriteException('Invalid conversation attempt', 404);
    }
    setConversation(_conversation);
    setChatUserId(_chatUserId);

    // fetch chat user
    const _chatUser = await databases.getDocument(
      DATABASE_ID,
      PROFILES_ID,
      _chatUserId,
      [Query.select(['name', 'profile_img'])]
    );
    setChatUser(_chatUser);
    setLoading(false);

    // load messages only after fetching chat user
    const _messages = await databases.listDocuments(DATABASE_ID, MESSAGES_ID, [
      Query.equal('conversationID', conversationId),
    ]);
    setMessages(_messages.documents);
    setMessageLoading(false);
  };

  React.useEffect(() => {
    const loadConversation = async () => {
      try {
        await fetchConversation();
      } catch (error) {
        if (error instanceof AppwriteException) {
          if (error.code == 404) push('/messages');
        }
        console.log('Failed to load conversation ', error);
      }
    };
    loadConversation();
  }, [conversationId]);

  const handleSendMessage = async () => {
    const newMessage = await databases.createDocument(
      DATABASE_ID,
      MESSAGES_ID,
      ID.unique(),
      {
        conversationID: conversationId,
        senderID: user?.$id,
        message: inputText,
      }
    );
    // update timestamp in conversation id for conversation listeners
    await databases.updateDocument(
      DATABASE_ID,
      CONVERSATIONS_ID,
      conversationId,
      {
        lastMessageID: newMessage.$id,
        lastUpdated: new Date(),
      }
    );
    if (inputText.trim() !== '') {
      // setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
    <div className='flex h-full'>
      <ChatSidebar />
      <div className='relative flex w-full flex-col'>
        {chatUser && <ChatActiveHeader user={chatUser} />}
        <div className='flex flex-1 flex-col space-y-4 overflow-y-auto px-4 py-2'>
          {messageLoading && <Loader className='my-auto' />}
          {!messageLoading && (
            <ChatMessages
              conversationId={conversationId}
              chatUser={chatUser}
              messages={messages}
            />
          )}
        </div>
        <div className='flex flex-col border border-gray-300 py-2'>
          <div>
            <input
              type='text'
              className='flex-1 px-4 py-2'
              placeholder='Type a message...'
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
          </div>
          <div className='flex justify-between space-x-1 px-2'>
            <IconButton>
              <BiImage className='' />
            </IconButton>
            <button
              className='rounded bg-blue-500 px-4 py-2 text-white'
              onClick={handleSendMessage}
            >
              Send
            </button>
          </div>
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
UserMessagePage.getLayout = function getLayout(page: React.ReactElement) {
  return <PageWrapper page={page} />;
};
