import { IconButton } from '@mui/material';
import clsx from 'clsx';
import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { BsTrash } from 'react-icons/bs';

import {
  client,
  CONVERSATIONS_ID,
  DATABASE_ID,
  databases,
  MESSAGES_ID,
  PROFILES_BUCKET,
  storage,
} from '@/lib/client';

import { deleteMessageById } from '@/database/message';

import useAuthStore from '@/store/useAuthStore';
import useSnackbarStore from '@/store/useSnackbarStore';

interface Message {
  conversationID: string;
  senderID: string;
  message: string;

  // read/delivered !FEATURE UPDATE
  isRead: boolean;
  isDelivered: boolean;
  attachments: any[];
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}

export default function ChatMessages({
  conversationId,
  messages: chatMessage,
  chatUser,
  onNewMessage,
}: {
  conversationId;
  messages: Message[];
  chatUser?;
  onNewMessage?: () => void;
}) {
  const { user } = useAuthStore();

  const [messages, setMessages] = React.useState<any>([...chatMessage]);

  React.useEffect(() => {
    const unsubscribe = client.subscribe(
      // ['collections.messages.documents', conversationId],
      `databases.${DATABASE_ID}.collections.${CONVERSATIONS_ID}.documents.${conversationId}`,
      (chat) => {
        const chatPayload: any = chat.payload;
        const newMessageId = chatPayload?.lastMessageID;

        const loadNewMessage = async () => {
          const newMessage = await databases.getDocument(
            DATABASE_ID,
            MESSAGES_ID,
            newMessageId
          );
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        };
        loadNewMessage();
        // cb for on new message
        onNewMessage?.();
      }
    );

    return () => unsubscribe();
  }, [conversationId]);

  const { openSnackbar } = useSnackbarStore();

  const handleDeleteMessage = async (id) => {
    try {
      await deleteMessageById(id);
    } catch (error) {
      openSnackbar('Message failed to delete', 'error');
    }
  };

  return (
    <div className='flex flex-col space-y-4'>
      {messages.map((message, index) => {
        const messageUser = message.senderID === user?.$id ? user : chatUser;
        const isSenderMe = message.senderID === user?.$id;

        const chatUserAvatar = storage.getFilePreview(
          PROFILES_BUCKET,
          chatUser?.profile_img
        );
        return (
          <div
            key={index}
            className={isSenderMe ? 'ml-auto flex flex-col' : ''}
          >
            <div
              className={clsx(
                'group flex space-x-2 pt-3',
                isSenderMe ? 'ml-auto' : ''
              )}
            >
              {!isSenderMe && (
                <div>
                  <div className='bg-primary-light relative inline-flex h-8 w-8 items-center justify-center rounded-full'>
                    {chatUser?.profile_img ? (
                      <img
                        src={chatUserAvatar.href}
                        alt='Avatar'
                        className='inline-flex h-7 w-7 items-center justify-center rounded-full'
                      />
                    ) : (
                      <span className='text-md font-bold uppercase text-white'>
                        {chatUser?.name.substring(0, 2).toUpperCase()}
                      </span>
                    )}
                  </div>
                </div>
              )}
              {isSenderMe && (
                <div className='my-auto'>
                  <IconButton
                    className='hidden h-8 w-8 text-sm text-red-500 hover:text-red-700 focus:outline-none group-hover:block'
                    onClick={() => handleDeleteMessage(message.$id)}
                  >
                    <BsTrash />
                  </IconButton>
                </div>
              )}
              <div
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                } relative rounded-lg p-2`}
              >
                <p>{message.message}</p>
              </div>
            </div>
            <div
              className={clsx(
                '!mt-0 text-xs text-gray-500',
                isSenderMe ? 'ml-auto' : ''
              )}
            >
              <span className='mr-2'>
                {isSenderMe ? 'You' : messageUser?.name}
              </span>
              <span>
                {formatDistanceToNow(new Date(message.$createdAt), {
                  addSuffix: true,
                })}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
