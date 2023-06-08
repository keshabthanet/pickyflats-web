import { IconButton } from '@mui/material';
import { ID } from 'appwrite';
import React from 'react';
import { BiImage } from 'react-icons/bi';

import {
  CONVERSATIONS_ID,
  DATABASE_ID,
  databases,
  MESSAGES_ID,
} from '@/lib/client';

import { pushListenerUpdate } from '@/database/listener';

import useAuthStore from '@/store/useAuthStore';

interface IProps {
  conversationID: string;
  receiverID: string;
}

export default function ChatInputMessage({
  conversationID,
  receiverID,
}: IProps) {
  const { user } = useAuthStore();

  const [inputText, setInputText] = React.useState('');
  const handleSendMessage = async () => {
    if (inputText.trim() === '') return;

    const newMessage = await databases.createDocument(
      DATABASE_ID,
      MESSAGES_ID,
      ID.unique(),
      {
        conversationID,
        senderID: user?.$id,
        message: inputText,
      }
    );
    // update timestamp in conversation id for conversation listeners
    await databases.updateDocument(
      DATABASE_ID,
      CONVERSATIONS_ID,
      conversationID,
      {
        lastMessageID: newMessage.$id,
        lastUpdated: new Date(),
      }
    );

    // push for listeners update
    await pushListenerUpdate(receiverID, 'Message');
    //! TODO: update last message in sidebar items
    setInputText('');
  };

  //! TODO: upload attachment - image

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className='flex flex-col'>
      <div>
        <input
          type='text'
          className='flex-1 px-4 py-2'
          placeholder='Type a message...'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
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
  );
}
